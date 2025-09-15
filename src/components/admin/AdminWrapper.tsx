'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ApiClient } from '@/lib/api';

interface AdminWrapperProps {
  children: React.ReactNode;
}

export default function AdminWrapper({ children }: AdminWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const apiClient = new ApiClient();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const user = localStorage.getItem('user');
        
        if (!accessToken || !user) {
          router.push('/admin-login');
          return;
        }

        // Verify token is still valid
        const verifyResponse = await apiClient.verifyToken(accessToken);
        
        if (verifyResponse.success && verifyResponse.data?.valid) {
          // Check if user is admin
          const adminCheck = await apiClient.checkAdmin(accessToken);
          
          if (adminCheck.success && adminCheck.data?.is_admin) {
            setIsAuthenticated(true);
          } else {
            // Not admin, redirect to login
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
            router.push('/admin-login');
          }
        } else {
          // Token invalid, try to refresh
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            const refreshResponse = await apiClient.refreshToken(refreshToken);
            if (refreshResponse.success && refreshResponse.data) {
              localStorage.setItem('accessToken', refreshResponse.data.access);
              // Retry admin check with new token
              const adminCheck = await apiClient.checkAdmin(refreshResponse.data.access);
              if (adminCheck.success && adminCheck.data?.is_admin) {
                setIsAuthenticated(true);
              } else {
                router.push('/admin-login');
              }
            } else {
              router.push('/admin-login');
            }
          } else {
            router.push('/admin-login');
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/admin-login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
