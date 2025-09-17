'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Star, Award, Users, X, CheckCircle, Phone, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    'Advanced Surgical Techniques',
    'Minimally Invasive Procedures',
    'Comprehensive Care Plans',
    'Patient-Centered Approach'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 lg:pt-8 overflow-hidden">

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-6rem)]">
          {/* Right Content - Modern Image Container (Mobile First) */}
          <div className={`relative transition-all duration-1000 delay-300 lg:order-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full max-w-lg lg:max-w-2xl mx-auto">
                {/* Background Glow */}
                <div className="absolute -inset-4 lg:-inset-6 bg-gradient-to-r from-blue-400/30 to-blue-500/20 rounded-3xl blur-2xl"></div>
                
                {/* Image Container */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-4 lg:p-6 shadow-2xl border border-white/50">
                  <div className="relative w-full h-[360px] lg:h-[700px] rounded-2xl overflow-hidden">
                    {/* Mobile Image */}
                    <Image
                      src="/images/dr_vivek_profile_pic.jpg"
                      alt="Dr. Vivek Shetty - Senior Consultant"
                      fill
                      className="object-cover object-top lg:hidden"
                      priority
                    />
                    
                    {/* Desktop Image */}
                    <Image
                      src="/images/dr_vivek_profile_pic.jpg"
                      alt="Dr. Vivek Shetty - Senior Consultant"
                      fill
                      className="object-cover object-top hidden lg:block"
                      priority
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Content (Mobile Second) */}
          <div className={`space-y-6 lg:space-y-8 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            {/* <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-full">
              <Award className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-700">Senior Consultant • SPARSH Hospital</span>
            </div> */}

            {/* Main Heading */}
            <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Expert Surgical <span className="lg:block"></span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Oncology Care</span>
              </h1>
              
              <p className="text-sm md:text-base lg:text-xl text-gray-600 leading-relaxed text-justify max-w-2xl">
                Dr. Vivek Shetty delivers exceptional head and neck surgical oncology care with over 9 years of specialized expertise, utilizing cutting-edge advanced techniques, state-of-the-art medical technology, and comprehensive personalized treatment approaches. His dedicated practice focuses on providing compassionate patient-centered care, innovative surgical solutions, and multidisciplinary collaboration at the renowned SPARSH Hospital, Bangalore, ensuring optimal outcomes for complex oncological cases.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto lg:max-w-none lg:mx-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 justify-center lg:justify-start">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                  </div>
                  <span className="text-sm lg:text-base text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
              <div className="text-center py-4 lg:py-5 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">11+</div>
                <div className="text-xs lg:text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center py-4 lg:py-5 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">1000+</div>
                <div className="text-xs lg:text-sm text-gray-600 font-medium">Surgeries</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-lg mx-auto lg:max-w-none lg:mx-0 lg:w-full">
              <Link
                href="#appointment"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 lg:flex-1"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold hover:bg-white hover:border-blue-300 hover:text-blue-600 transition-all duration-300 hover:scale-105 lg:flex-1"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Watch Introduction
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Modern Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-4xl w-full shadow-2xl border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Dr. Vivek Shetty - Introduction</h3>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Video placeholder - Would contain actual introduction video</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}