'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Clock, MapPin, CheckCircle, Navigation } from 'lucide-react';
import { useAppointments } from '@/hooks/useAppointments';
import { apiUtils, handleApiError } from '@/lib/api';

interface AppointmentBookingProps {
  className?: string;
}

export function AppointmentBooking({ className = '' }: AppointmentBookingProps) {
  const hospitals = [
    {
      name: 'Doc Cube Koramangala',
      address: 'Koramangala, Bangalore',
      availableAt: 'Mon-Sat: 6:00 PM - 8:00 PM',
      website: 'https://www.docube.in/our-doctor',
      mapLink: 'https://share.google/7jT8kmK6ZFohFyoz8',
      description: 'Premium healthcare facility with state-of-the-art diagnostic services'
    },
    {
      name: 'SPARSH Hospital',
      address: 'Hennur Road, Bangalore',
      availableAt: 'Mon, Wed, Fri: 9:30 AM - 4:00 PM',
      website: 'https://www.sparshhospital.com/doctors/dr-vivek-shetty/',
      mapLink: 'https://share.google/6J5ozKbmEHix5mxRR',
      description: 'Multi-specialty hospital with comprehensive oncology care'
    }
  ];

  return (
    <div className={`bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 ${className}`}>
      {/* Header */}
      <div className="text-center mb-12">
        {/* <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl text-lg font-bold mb-6 shadow-lg">
          <Calendar className="w-6 h-6 mr-3" />
          Book Your Appointment
        </div> */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Choose Your Preferred Location
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Dr. Vivek Shetty is available at two premium healthcare facilities in Bangalore
        </p>
      </div>

      {/* Hospital Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {hospitals.map((hospital, index) => (
          <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full">
            {/* Hospital Header */}
            <div className="text-center mb-4 flex-shrink-0">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{hospital.name}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{hospital.description}</p>
            </div>

            {/* Hospital Details */}
            <div className="space-y-3 mb-6 flex-grow">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Address</h4>
                  <p className="text-gray-600 text-sm">{hospital.address}</p>
                  <a
                    href={hospital.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 text-xs font-medium hover:text-blue-700 transition-colors duration-200 mt-1"
                  >
                    <Navigation className="w-3 h-3 mr-1" />
                    Get Directions
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Available At</h4>
                  <p className="text-gray-600 text-sm">{hospital.availableAt}</p>
                </div>
              </div>
            </div>

            {/* Book Appointment Button */}
            <div className="text-center mt-auto flex-shrink-0">
              <a
                href={hospital.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 transition-all duration-300 shadow-lg group-hover:shadow-xl text-sm"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </a>
            </div>

            {/* Hover Effect Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
        <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">Important Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
              Please arrive 15 minutes before your scheduled appointment time
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
              Bring a valid ID and any relevant medical reports
            </li>
          </ul>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
              Cancellations must be made at least 24 hours in advance
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
              Emergency cases will be given priority
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
