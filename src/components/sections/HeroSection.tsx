'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Star, Award, Users, Calendar, X } from 'lucide-react';
import { useState } from 'react';

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Senior Consultant - Head & Neck Oncology
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Expert Care in{' '}
                <span className="gradient-text">Head & Neck</span>{' '}
                Oncology
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Dr. Vivek Shetty brings 9 years of specialized experience in surgical oncology 
                and reconstructive surgery. Providing compassionate, world-class care at SPARSH Hospital, Bangalore.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">9+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Successful Surgeries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-gray-600">Patient Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 transform hover:scale-105"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Introduction
              </button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-primary-600" />
                <span>MBBS, MS, Fellowship</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                <span>Mon-Sat: 9AM-6PM</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-primary-600" />
                <span>English, Hindi, Kannada</span>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Doctor Image */}
              <div className="w-full h-[500px] lg:h-[600px] bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-primary-700">
                  <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg overflow-hidden">
                    <Image
                      src="/images/dr_vivek_profile_pic.jpg"
                      alt="Dr. Vivek Shetty - Senior Consultant Head & Neck Oncology"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </div>
                  <h3 className="text-3xl font-bold">Dr. Vivek Shetty</h3>
                  <p className="text-xl">Senior Consultant</p>
                  <p className="text-lg">Head & Neck Oncology</p>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg float-animation">
                  <Award className="w-8 h-8 text-primary-600" />
                </div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg float-animation" style={{ animationDelay: '1s' }}>
                  <Star className="w-6 h-6 text-primary-600" />
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary-300 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Dr. Vivek Shetty - Introduction</h3>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Video placeholder - Would contain actual introduction video</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
