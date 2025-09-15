'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiClient } from '@/lib/api';

interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_superuser: boolean;
}

interface AuthContextType {
  user: User | null;
  tokens: { access: string; refresh: string } | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [tokens, setTokens] = useState<{ access: string; refresh: string } | null>(null);
  const [loading, setLoading] = useState(true);

  const isAdmin = user?.is_staff || user?.is_superuser || false;

  // Check for existing tokens on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedTokens = localStorage.getItem('admin_tokens');
        if (storedTokens) {
          const parsedTokens = JSON.parse(storedTokens);
          setTokens(parsedTokens);
          
          // Verify token is still valid
          const response = await apiClient.verifyToken(parsedTokens.access);
          if (response.success && response.data?.valid) {
            setUser(response.data.user);
          } else {
            // Token invalid, try to refresh
            try {
              const refreshResponse = await apiClient.refreshToken(parsedTokens.refresh);
              if (refreshResponse.success && refreshResponse.data) {
                const newTokens = {
                  access: refreshResponse.data.access,
                  refresh: parsedTokens.refresh
                };
                setTokens(newTokens);
                localStorage.setItem('admin_tokens', JSON.stringify(newTokens));
                
                // Get user profile with new token
                const userResponse = await apiClient.getUserProfile(refreshResponse.data.access);
                if (userResponse.success && userResponse.data) {
                  setUser(userResponse.data.user);
                }
              } else {
                // Refresh failed, clear tokens
                localStorage.removeItem('admin_tokens');
                setTokens(null);
                setUser(null);
              }
            } catch (refreshError) {
              localStorage.removeItem('admin_tokens');
              setTokens(null);
              setUser(null);
            }
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('admin_tokens');
        setTokens(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      setLoading(true);
      const response = await apiClient.login(username, password);
      
      if (response.success && response.data) {
        const { tokens: newTokens, user: userData } = response.data;
        setTokens(newTokens);
        setUser(userData);
        localStorage.setItem('admin_tokens', JSON.stringify(newTokens));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      if (tokens?.refresh) {
        await apiClient.logout(tokens.refresh);
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setTokens(null);
      setUser(null);
      localStorage.removeItem('admin_tokens');
    }
  };

  const value: AuthContextType = {
    user,
    tokens,
    login,
    logout,
    loading,
    isAdmin,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
