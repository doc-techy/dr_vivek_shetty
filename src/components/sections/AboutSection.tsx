'use client';

import { GraduationCap, Calendar, CheckCircle, Award, Users, MapPin, Languages } from 'lucide-react';
import { useState } from 'react';

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('experience');
  const education = [
    {
      degree: 'MBBS',
      institution: 'Kasturba Medical College, Mangalore',
      location: 'Mangalore, Karnataka',
      year: '2005-2011',
      description: 'Bachelor of Medicine and Bachelor of Surgery with distinction in surgical subjects'
    },
    {
      degree: 'MS General Surgery',
      institution: 'Father Muller Medical College Hospital',
      location: 'Mangalore, Karnataka',
      year: '2011-2014',
      description: 'Master of Surgery with specialization in general and oncological surgery'
    },
    {
      degree: 'Fellowship',
      institution: 'Rajiv Gandhi University of Health Sciences',
      location: 'Bangalore, Karnataka',
      year: '2014-2016',
      description: 'Head and Neck Surgical Oncology and Reconstructive Surgery Fellowship'
    }
  ];

  const experience = [
    {
      position: 'Senior Consultant',
      hospital: 'SPARSH Hospital',
      location: 'Hennur Road, Bangalore',
      duration: '2020 - Present',
      description: 'Leading complex head and neck oncology cases with advanced surgical techniques and robotic surgery'
    },
    {
      position: 'Consultant',
      hospital: 'SPARSH Hospital',
      location: 'Hennur Road, Bangalore',
      duration: '2018 - 2020',
      description: 'Specialized in surgical oncology with focus on reconstructive procedures and microvascular surgery'
    },
    {
      position: 'Resident Doctor',
      hospital: 'Victoria Hospital',
      location: 'Bangalore Medical College, Bangalore',
      duration: '2015 - 2018',
      description: 'Comprehensive training in general surgery, emergency medicine, and patient care management'
    }
  ];

  return (
    <section id="about" className="pt-8 pb-8 md:pt-16 md:pb-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-3 md:mb-4">
            Academic Excellence & <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Professional Mastery</span>
          </h2>
          
          <p className="hidden md:block text-sm md:text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-4">
            A dedicated specialist with comprehensive education and extensive clinical experience in head and neck oncology.
          </p>
        </div>

        {/* Mobile Toggle Switch - Only visible on mobile */}
        <div className="md:hidden mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-1 flex border border-gray-200/50 relative z-10">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out flex items-center justify-center relative z-10 cursor-pointer touch-manipulation ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50/50'
              }`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Calendar className={`w-4 h-4 mr-2 transition-all duration-300 ${activeTab === 'experience' ? 'rotate-12' : 'rotate-0'}`} />
              Professional
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out flex items-center justify-center relative z-10 cursor-pointer touch-manipulation ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
              }`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <GraduationCap className={`w-4 h-4 mr-2 transition-all duration-300 ${activeTab === 'education' ? 'rotate-12' : 'rotate-0'}`} />
              Education
            </button>
          </div>
        </div>

        {/* Mobile-Optimized Content */}
        <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-gray-100 p-4 md:p-8">
          
          {/* Mobile: Single Column (toggled), Desktop: Two Columns */}
          <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            
            {/* Mobile: Dynamic Single Section, Desktop: Education Section */}
            <div className="space-y-4 md:space-y-6">
              <div className="text-center">
                <div className={`inline-flex items-center px-3 py-2 md:px-6 md:py-4 text-white rounded-lg md:rounded-xl text-sm md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 transition-all duration-500 ease-in-out transform ${
                  activeTab === 'education' 
                    ? 'bg-black scale-105' 
                    : 'bg-black scale-105'
                }`}>
                  <div className="transition-all duration-500 ease-in-out">
                    {activeTab === 'education' ? (
                      <GraduationCap className="w-4 h-4 md:w-7 md:h-7 mr-2 md:mr-3 animate-pulse" />
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 md:hidden animate-pulse" />
                        <GraduationCap className="hidden md:block w-7 h-7 mr-3 animate-pulse" />
                      </>
                    )}
                  </div>
                  <span className="transition-all duration-500 ease-in-out">
                    {activeTab === 'education' ? 'Educational Journey' : (
                      <>
                        <span className="md:hidden">Professional Journey</span>
                        <span className="hidden md:block">Educational Journey</span>
                      </>
                    )}
                  </span>
                </div>
                <h3 className="text-lg md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3 transition-all duration-500 ease-in-out">
                  {activeTab === 'education' ? 'Academic Excellence' : (
                    <>
                      <span className="md:hidden">Clinical Experience</span>
                      <span className="hidden md:block">Academic Excellence</span>
                    </>
                  )}
                </h3>
              </div>

              {/* Dynamic Content Timeline */}
              <div className="space-y-3 md:space-y-4">
                {/* Education Content - Mobile: Conditional, Desktop: Always show */}
                <div className={`transition-all duration-500 ease-in-out opacity-100 translate-y-0 md:block ${activeTab === 'education' ? 'block' : 'hidden md:block'}`}>
                    {education.map((edu, index) => (
                      <div 
                        key={`edu-${index}`} 
                        className="bg-white backdrop-blur-sm rounded-xl p-3 md:p-4 border border-blue-200/50 transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-lg mb-3 md:mb-4"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 transition-all duration-300">{edu.degree}</h4>
                          <div className="bg-blue-100 text-blue-800 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-semibold mt-1 sm:mt-0 w-fit transition-all duration-300 hover:bg-blue-200">
                            {edu.year}
                          </div>
                        </div>
                        <h5 className="text-sm md:text-base lg:text-lg font-semibold text-blue-700 mb-1 transition-all duration-300">
                          {edu.institution}
                        </h5>
                        <p className="text-xs md:text-sm lg:text-base text-gray-600 flex items-center">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 text-blue-500 flex-shrink-0 transition-all duration-300" />
                          {edu.location}
                        </p>
                      </div>
                    ))}
                  </div>
                
                {/* Experience Content - Mobile: Conditional, Desktop: Hidden */}
                {activeTab === 'experience' && (
                  <div className="transition-all duration-500 ease-in-out opacity-100 translate-y-0 md:hidden">
                    {experience.slice().reverse().map((exp, index) => (
                      <div 
                        key={`exp-${index}`} 
                        className="bg-white backdrop-blur-sm rounded-xl p-3 md:p-4 border border-green-200/50 transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-lg mb-3 md:mb-4"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 transition-all duration-300">{exp.position}</h4>
                          <div className="bg-green-100 text-green-800 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-semibold mt-1 sm:mt-0 w-fit transition-all duration-300 hover:bg-green-200">
                            {exp.duration}
                          </div>
                        </div>
                        <h5 className="text-sm md:text-base lg:text-lg font-semibold text-green-700 mb-1 transition-all duration-300">
                          {exp.hospital}
                        </h5>
                        <p className="text-xs md:text-sm lg:text-base text-gray-600 flex items-center">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 text-green-500 flex-shrink-0 transition-all duration-300" />
                          {exp.location}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Only: Experience Section */}
            <div className="hidden md:block space-y-4 md:space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl text-xl lg:text-2xl font-bold mb-3 md:mb-4">
                  <Calendar className="w-6 h-6 mr-3" />
                  Professional Journey
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-3">Clinical Experience</h3>
              </div>

              {/* Experience Timeline for Desktop */}
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-purple-200/50 transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg lg:text-xl font-bold text-gray-900 transition-all duration-300">{exp.position}</h4>
                      <div className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full text-sm font-semibold mt-1 sm:mt-0 w-fit transition-all duration-300 hover:bg-purple-200">
                        {exp.duration}
                      </div>
                    </div>
                    <h5 className="text-base lg:text-lg font-semibold text-purple-700 mb-1 transition-all duration-300">
                      {exp.hospital}
                    </h5>
                    <p className="text-sm lg:text-base text-gray-600 flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-purple-500 flex-shrink-0 transition-all duration-300" />
                      {exp.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
