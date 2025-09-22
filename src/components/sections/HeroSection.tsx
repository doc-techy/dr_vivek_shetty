'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Star, Award, Users, X, CheckCircle, Phone, Calendar, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [dimensionOption, setDimensionOption] = useState(1);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    'Advanced Surgical Techniques',
    'Minimally Invasive Procedures',
    'Comprehensive Care Plans',
    'Patient-Centered Approach'
  ];

  const availability = [
    { name: 'Doc Cube Koramangala', timing: 'Mon-Sat: 6:00 PM - 8:00 PM' },
    { name: 'SPARSH Hospital', timing: 'Mon, Wed, Fri: 9:30 AM - 4:00 PM' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 md:pt-24 lg:pt-20 overflow-hidden">

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-4 lg:gap-6 xl:gap-12 items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-7.5rem)] md:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-6.5rem)] xl:min-h-[calc(100vh-6rem)]">
          {/* Right Content - Modern Image Container (Mobile First) */}
          <div className={`relative transition-all duration-1000 delay-300 lg:order-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full max-w-lg md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto">
                {/* Background Glow */}
                <div className="absolute -inset-4 md:-inset-3 lg:-inset-4 xl:-inset-6 bg-gradient-to-r from-blue-400/30 to-blue-500/20 rounded-3xl blur-2xl"></div>
                
                {/* Image Container */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-4 md:p-3 lg:p-4 xl:p-6 shadow-2xl border border-white/50">
                    <div className="relative w-full h-[350px] md:h-[300px] lg:h-[340px] xl:h-[500px] 2xl:h-[580px] rounded-2xl overflow-hidden">
                    {/* Mobile Image */}
                    <Image
                      src="/images/dr_vivek_profile_pic.jpg"
                      alt="Dr. Vivek Shetty - Senior Consultant"
                      fill
                      className="object-cover object-top md:hidden"
                      priority
                    />
                    
                    {/* Desktop Image */}
                    <Image
                      src="/images/dr_vivek_profile_pic.jpg"
                      alt="Dr. Vivek Shetty - Senior Consultant"
                      fill
                      className="object-cover object-top hidden md:block"
                      priority
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                {/* Title Box - Below Image */}
                <div className="mt-2 md:mt-2 lg:mt-3">
                  <div className="bg-white rounded-lg px-4 md:px-4 lg:px-5 xl:px-6 py-3 md:py-2 lg:py-3 xl:py-4 shadow-md border border-gray-200">
                    <h3 className="text-xl md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 text-center">
                      Head and Neck Oncology
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Content (Mobile Second) */}
          <div className={`space-y-3 md:space-y-3 lg:space-y-4 xl:space-y-6 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            {/* <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-full">
              <Award className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-700">Senior Consultant • SPARSH Hospital</span>
            </div> */}

            {/* Main Heading */}
            <div className="space-y-2 md:space-y-3 lg:space-y-4 text-center lg:text-left">
              <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold text-gray-900 leading-tight">
                Expert Surgical <span className="xl:block"></span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Oncology Care</span>
              </h1>
              
              <p className="text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-xl text-gray-600 leading-relaxed text-justify max-w-2xl">
              Dr Vivek Shetty is a Head and Neck Onco Surgeon with over 11 years experience in the field. With a patient-centric, ethical and evidence-based approach to patient care, he has managed over 1000 patients with conditions such as oral cancer, tongue cancer, thyroid nodules, salivary gland tumours, throat cancer and many more head and neck neoplasms.              </p>
            </div>

            {/* Features List */}
            {/* <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto lg:max-w-none lg:mx-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 justify-center lg:justify-start">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                  </div>
                  <span className="text-sm lg:text-base text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div> */}

            {/* Doctor Availability */}
            <div className="space-y-2 md:space-y-2 lg:space-y-3 max-w-lg mx-auto lg:max-w-none lg:mx-0">
              <h4 className="text-base md:text-sm lg:text-base xl:text-xl font-bold text-gray-800 text-center lg:text-left">Available At:</h4>
              <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-3 space-y-3 lg:space-y-0 md:gap-2 ml-24 mr-0 md:ml-32 md:mr-0 lg:mx-0">
                {availability.map((location, index) => (
                  <div key={index} className="flex items-center space-x-2 md:space-x-2 lg:space-x-3 justify-center lg:justify-start w-full max-w-xs lg:max-w-none">
                    <div className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-3 h-3 md:w-2 md:h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 text-white" />
                    </div>
                    <div className="text-left min-w-0 flex-1">
                      <div className="text-sm md:text-xs lg:text-sm xl:text-base text-gray-700 font-medium truncate">{location.name}</div>
                      <div className="text-xs md:text-xs lg:text-xs xl:text-sm text-gray-500 truncate">{location.timing}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-2 gap-3 md:gap-2 lg:gap-3 max-w-md mx-auto lg:max-w-none lg:mx-0">
              <div className="text-center py-3 md:py-2 lg:py-3 xl:py-5 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg">
                <div className="text-xl md:text-lg lg:text-xl xl:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">11+</div>
                <div className="text-xs md:text-xs lg:text-xs xl:text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center py-3 md:py-2 lg:py-3 xl:py-5 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg">
                <div className="text-xl md:text-lg lg:text-xl xl:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">1000+</div>
                <div className="text-xs md:text-xs lg:text-xs xl:text-sm text-gray-600 font-medium">Surgeries</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-2 lg:gap-3 justify-center lg:justify-start max-w-lg mx-auto lg:max-w-none lg:mx-0 lg:w-full">
              <Link
                href="/appointment"
                className="group inline-flex items-center justify-center px-6 md:px-5 lg:px-6 xl:px-8 py-3 md:py-2 lg:py-3 xl:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 lg:flex-1 text-sm md:text-xs lg:text-sm xl:text-base"
              >
                <Calendar className="w-4 h-4 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 mr-2" />
                Book Consultation
                <ArrowRight className="w-4 h-4 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group inline-flex items-center justify-center px-6 md:px-5 lg:px-6 xl:px-8 py-3 md:py-2 lg:py-3 xl:py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold hover:bg-white hover:border-blue-300 hover:text-blue-600 transition-all duration-300 hover:scale-105 lg:flex-1 text-sm md:text-xs lg:text-sm xl:text-base"
              >
                <Play className="w-4 h-4 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Watch Introduction
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Modern Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-4 md:p-6 lg:p-8 max-w-4xl w-full shadow-2xl border border-gray-200">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">Dr. Vivek Shetty - Introduction</h3>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              </button>
            </div>
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <Play className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-sm md:text-base text-gray-600 font-medium">Video placeholder - Would contain actual introduction video</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}