'use client';

import React, { useState, useEffect } from 'react';
import { apiClient, BookedAppointment } from '@/lib/api';
import { 
  Calendar, 
  Users, 
  CheckCircle, 
  XCircle, 
  Clock,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

interface AppointmentStats {
  total: number;
  pending: number;
  confirmed: number;
  completed: number;
  cancelled: number;
}

interface RecentAppointment {
  appointment_id: string;
  patient_name: string;
  patient_email: string;
  appointment_date: string;
  appointment_time: string;
  status: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<AppointmentStats | null>(null);
  const [recentAppointments, setRecentAppointments] = useState<RecentAppointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) return;

      try {
        setLoading(true);
        
        // Load user data
        const userData = localStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }

        // Fetch statistics
        const statsResponse = await apiClient.getAppointmentStats(accessToken);
        if (statsResponse.success && statsResponse.data) {
          setStats(statsResponse.data.stats);
        }

        // Fetch recent appointments
        const appointmentsResponse = await apiClient.getAppointments(1, 5);
        if (appointmentsResponse.success && appointmentsResponse.data) {
          setRecentAppointments(appointmentsResponse.data.appointments);
        }
      } catch (err) {
        setError('Failed to load dashboard data');
        console.error('Dashboard error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'confirmed': return 'text-green-600 bg-green-100';
      case 'completed': return 'text-blue-600 bg-blue-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return Clock;
      case 'confirmed': return CheckCircle;
      case 'completed': return CheckCircle;
      case 'cancelled': return XCircle;
      default: return AlertCircle;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Overview of appointment management system</p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <span className="text-red-800">{error}</span>
        </div>
      )}

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Appointments</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Confirmed</p>
                <p className="text-2xl font-bold text-green-600">{stats.confirmed}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-blue-600">{stats.completed}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Cancelled</p>
                <p className="text-2xl font-bold text-red-600">{stats.cancelled}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recent Appointments */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Appointments</h2>
        </div>
        <div className="p-6">
          {recentAppointments.length > 0 ? (
            <div className="space-y-4">
              {recentAppointments.map((appointment) => {
                const StatusIcon = getStatusIcon(appointment.status);
                return (
                  <div key={appointment.appointment_id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Users className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{appointment.patient_name}</p>
                        <p className="text-sm text-gray-600">{appointment.patient_email}</p>
                        <p className="text-sm text-gray-500">
                          {appointment.appointment_date} at {appointment.appointment_time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <StatusIcon className="h-4 w-4" />
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No recent appointments found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
