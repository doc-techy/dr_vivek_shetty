'use client';

import { AppointmentBooking } from '@/components/sections/AppointmentBooking';
import { Phone, Mail, MapPin, Clock, User, Award } from 'lucide-react';

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <AppointmentBooking className="mt-8 mb-8" />
            </div>

            {/* Sidebar */}
            <div className="space-y-6 mt-8 mb-8">
              {/* Doctor Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Dr. Vivek Shetty
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    Senior Consultant - Head & Neck Oncology
                  </p>
                </div>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-3 text-blue-500" />
                    <span><strong>Experience:</strong> 11+ Years</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-3 text-blue-500" />
                    <span><strong>Location:</strong> SPARSH Hospital</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-3 text-blue-500" />
                    <span><strong>Languages:</strong> English, Hindi, Kannada</span>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              {/* <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-500" />
                  Office Hours
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-blue-600 font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saturday</span>
                    <span className="text-blue-600 font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span className="text-red-600 font-semibold">Emergency Only</span>
                  </div>
                </div>
              </div> */}

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Need Immediate Help?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Emergency Line</p>
                      <p className="text-sm text-gray-600">+91 9886432371</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email Support</p>
                      <p className="text-sm text-gray-600">vivekshetty.headneck@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Comprehensive consultation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Detailed medical history review
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Personalized treatment plan
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Follow-up care guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
