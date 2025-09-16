'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useAppointments } from '@/hooks/useAppointments';
import { apiUtils, handleApiError } from '@/lib/api';

interface AppointmentBookingProps {
  className?: string;
}

export function AppointmentBooking({ className = '' }: AppointmentBookingProps) {
  const {
    availableSlots,
    loading,
    error,
    bookingLoading,
    bookingError,
    bookingSuccess,
    fetchAvailableSlots,
    bookAppointment,
    clearBookingState,
    clearError,
  } = useAppointments();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: '',
    message: '',
  });

  // Form validation
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Get tomorrow's date for default appointment date
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setFormData(prev => ({
      ...prev,
      date: tomorrow.toISOString().split('T')[0],
    }));
  }, []);

  // Clear success message after 5 seconds
  useEffect(() => {
    if (bookingSuccess) {
      const timer = setTimeout(() => {
        clearBookingState();
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          reason: '',
          message: '',
        });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [bookingSuccess, clearBookingState]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!apiUtils.isValidEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!apiUtils.isValidPhone(formData.phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.date) {
      errors.date = 'Appointment date is required';
    }

    if (!formData.time) {
      errors.time = 'Appointment time is required';
    }

    if (!formData.reason.trim()) {
      errors.reason = 'Reason for visit is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    if (!validateForm()) {
      return;
    }

    const success = await bookAppointment(formData);
    if (success) {
      // Form will be reset by useEffect
    }
  };

  // Refresh available slots when date changes
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, date: e.target.value, time: '' }));
    fetchAvailableSlots();
  };

  return (
    <div className={`bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl text-lg font-bold mb-6 shadow-lg">
          <Calendar className="w-6 h-6 mr-3" />
          Book Your Appointment
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Schedule Your Consultation
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Book an appointment with Dr. Vivek Shetty for expert consultation in Head & Neck Oncology
        </p>
      </div>

      {/* Success Message */}
      {bookingSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <div className="flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-green-800">Appointment Booked Successfully!</h3>
              <p className="text-green-700">
                Your appointment has been confirmed. We'll send you a confirmation email shortly.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Messages */}
      {(error || bookingError) && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-center">
            <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-red-800">Error</h3>
              <p className="text-red-700">{error || bookingError}</p>
            </div>
          </div>
        </div>
      )}

      {/* Appointment Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                formErrors.name ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
            {formErrors.name && (
              <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                formErrors.phone ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Enter your phone number"
            />
            {formErrors.phone && (
              <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              formErrors.email ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Enter your email address"
          />
          {formErrors.email && (
            <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
          )}
        </div>

        {/* Appointment Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Appointment Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleDateChange}
              min={new Date().toISOString().split('T')[0]}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                formErrors.date ? 'border-red-300' : 'border-gray-300'
              }`}
            />
            {formErrors.date && (
              <p className="mt-1 text-sm text-red-600">{formErrors.date}</p>
            )}
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
              <Clock className="w-4 h-4 inline mr-2" />
              Available Time Slots *
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              disabled={loading}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                formErrors.time ? 'border-red-300' : 'border-gray-300'
              } ${loading ? 'bg-gray-100' : ''}`}
            >
              <option value="">Select a time slot</option>
              {availableSlots.map((time) => (
                <option key={time} value={time}>
                  {apiUtils.formatTime(time)}
                </option>
              ))}
            </select>
            {loading && (
              <p className="mt-1 text-sm text-gray-500 flex items-center">
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Loading available slots...
              </p>
            )}
            {formErrors.time && (
              <p className="mt-1 text-sm text-red-600">{formErrors.time}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Reason for Visit *
          </label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              formErrors.reason ? 'border-red-300' : 'border-gray-300'
            }`}
          >
            <option value="">Select reason for visit</option>
            <option value="Initial Consultation">Initial Consultation</option>
            <option value="Follow-up Visit">Follow-up Visit</option>
            <option value="Second Opinion">Second Opinion</option>
            <option value="Treatment Planning">Treatment Planning</option>
            <option value="Post-surgery Checkup">Post-surgery Checkup</option>
            <option value="Emergency Consultation">Emergency Consultation</option>
            <option value="Other">Other</option>
          </select>
          {formErrors.reason && (
            <p className="mt-1 text-sm text-red-600">{formErrors.reason}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Additional Notes
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Any additional information you'd like to share..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={bookingLoading || loading}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {bookingLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Booking Appointment...
              </>
            ) : (
              <>
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </>
            )}
          </button>
        </div>
      </form>

      {/* Additional Information */}
      <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Important Information</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li className="flex items-start">
            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
            Please arrive 15 minutes before your scheduled appointment time
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
            Bring a valid ID and any relevant medical reports
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
            Cancellations must be made at least 24 hours in advance
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
            Emergency cases will be given priority
          </li>
        </ul>
      </div>
    </div>
  );
}
