'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Star, Award, Users, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center" style={{ minHeight: 'calc(100vh - 160px)' }}>
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Expert Surgical
                <br />
                <span className="text-blue-600">Oncology Care</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Dr. Vivek Shetty is a highly experienced Senior Consultant specializing in head and neck surgical oncology with over 9 years of dedicated practice. 
                He provides comprehensive advanced surgical care, complex reconstructive procedures, and personalized treatment plans at SPARSH Hospital, Bangalore. 
                His expertise encompasses the latest minimally invasive techniques and state-of-the-art surgical interventions for optimal patient outcomes.
              </p>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-8 py-6 border-t border-b border-gray-200">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">11+</div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">1000+</div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">Surgeries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">98%</div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#appointment"
                className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Introduction
              </button>
            </div>

          </div>

          {/* Right Content - Full Image Container */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col h-full space-y-6">
              <div className="relative w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl flex-1">
                <div className="w-full h-full max-h-96 lg:max-h-[500px] xl:max-h-[600px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/dr_vivek_profile_pic.jpg"
                    alt="Dr. Vivek Shetty"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              
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
