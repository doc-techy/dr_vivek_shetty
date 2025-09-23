'use client';

import { GraduationCap, Calendar, CheckCircle, Award, Users, MapPin, Languages } from 'lucide-react';
import { useState } from 'react';

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('experience');
  const education = [
    {
      degree: 'Fellowship in head and surgical oncology',
      institution: 'Rajiv Gandhi University of Health Sciences',
      location: 'Bangalore, Karnataka',
      year: '2014-2016',
      description: 'Head and Neck Surgical Oncology and Reconstructive Surgery Fellowship'
    },
    
    {
      degree: 'MS General Surgery',
      institution: 'Father Muller Medical College Hospital',
      location: 'Mangalore, Karnataka',
      year: '2011-2014',
      description: 'Master of Surgery with specialization in general and oncological surgery'
    },
    {
      degree: 'MBBS',
      institution: 'Kasturba Medical College, Mangalore',
      location: 'Mangalore, Karnataka',
      year: '2005-2011',
      description: 'Bachelor of Medicine and Bachelor of Surgery with distinction in surgical subjects'
    },
   
  ];

  const experience = [
    
  
    {
      position: 'Senior Consultant',
      hospital: 'Docube Koramangala',
      location: 'Koramangala, Bangalore',
      duration: '2025 - Present',
      description: 'Providing specialized head and neck oncology consultations and surgical care'
    },
    {
      position: 'Head and Neck Oncology and Reconstructive Surgeon',
      hospital: 'SPARSH Hospital',
      location: 'Hennur Road, Bangalore',
      duration: '2025 - Present',
      description: 'Specialized in surgical oncology with focus on reconstructive procedures and microvascular surgery'
    },
    {
      position: 'Consultant Head and Neck Oncology and Reconstructive Surgeon',
      hospital: 'Mazumdar Shaw Medical Center',
      location: 'Narayana Health City, Bangalore',
      duration: '2016 - 2025',
      description: 'Leading complex head and neck oncology cases with advanced surgical techniques and robotic surgery'
    }

  ];

  return (
    <section id="about" className="pt-4 pb-4 md:pt-8 md:pb-6 lg:pt-16 lg:pb-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-3 md:mb-4 lg:mb-8">
          <h2 className="text-2xl md:text-xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-1 md:mb-2 lg:mb-4">
            Academic Excellence & <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Professional Mastery</span>
          </h2>
          
          {/* <p className="hidden md:block text-sm md:text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-4">
            A dedicated specialist with comprehensive education and extensive clinical experience in head and neck oncology.
          </p> */}
        </div>

        {/* Mobile Toggle Switch - Only visible on mobile */}
        <div className="md:hidden mb-3">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-1 flex border border-gray-200/50 relative z-10">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out flex items-center justify-center relative z-10 cursor-pointer touch-manipulation ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
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
        <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-gray-100 p-3 md:p-4 lg:p-8">
          
          {/* Mobile: Single Column (toggled), Desktop: Two Columns */}
          <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 lg:gap-8 md:space-y-0">
            
            {/* Mobile: Dynamic Single Section, Desktop: Education Section */}
            <div className="space-y-2 md:space-y-3 lg:space-y-6 flex flex-col">
              <div className="text-center">
                <div className={`inline-flex items-center px-2 py-1 md:px-2 md:py-1 lg:px-4 lg:py-2 text-white rounded-lg md:rounded-xl text-xs md:text-sm lg:text-base xl:text-lg font-bold mb-1 md:mb-2 lg:mb-4 transition-all duration-500 ease-in-out transform ${
                  activeTab === 'education' 
                    ? 'bg-black scale-105' 
                    : 'bg-black scale-105'
                }`}>
                  <div className="transition-all duration-500 ease-in-out">
                    {activeTab === 'education' ? (
                      <GraduationCap className="w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 mr-1 md:mr-1 lg:mr-2 animate-pulse" />
                    ) : (
                      <>
                        <Calendar className="w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 mr-1 md:mr-1 lg:mr-2 md:hidden animate-pulse" />
                        <GraduationCap className="hidden md:block w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 mr-1 lg:mr-2 animate-pulse" />
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
                <h3 className="text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-gray-900 mb-1 md:mb-2 lg:mb-3 transition-all duration-500 ease-in-out">
                  {activeTab === 'education' ? 'Academic Excellence' : (
                    <>
                      <span className="md:hidden">Clinical Experience</span>
                      <span className="hidden md:block">Academic Excellence</span>
                    </>
                  )}
                </h3>
              </div>

              {/* Dynamic Content Timeline */}
              <div className="space-y-2 md:space-y-2 lg:space-y-4 flex-1">
                {/* Education Content - Mobile: Conditional, Desktop: Always show */}
                <div className={`transition-all duration-500 ease-in-out opacity-100 translate-y-0 md:block ${activeTab === 'education' ? 'block' : 'hidden md:block'}`}>
                    {education.map((edu, index) => (
                      <div 
                        key={`edu-${index}`} 
                        className="bg-white backdrop-blur-sm rounded-xl p-2 md:p-2 lg:p-4 border border-blue-200/50 transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-lg mb-1 md:mb-2 lg:mb-4"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                          <h4 className="text-xs md:text-xs lg:text-sm xl:text-base font-bold text-gray-900 transition-all duration-300">{edu.degree}</h4>
                          <div className="bg-blue-100 text-blue-800 px-2 py-0.5 md:px-2 md:py-0.5 lg:px-3 lg:py-1.5 rounded-full text-xs md:text-xs lg:text-sm font-semibold mt-1 sm:mt-0 w-fit transition-all duration-300 hover:bg-blue-200">
                            {edu.year}
                          </div>
                        </div>
                        <h5 className="text-xs md:text-xs lg:text-sm xl:text-base font-semibold text-blue-700 mb-0.5 md:mb-1 transition-all duration-300">
                          {edu.institution}
                        </h5>
                        <p className="text-xs md:text-xs lg:text-sm xl:text-sm text-gray-600 flex items-center">
                          <MapPin className="w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 mr-1 text-blue-500 flex-shrink-0 transition-all duration-300" />
                          {edu.location}
                        </p>
                      </div>
                    ))}
                  </div>
                
                {/* Experience Content - Mobile: Conditional, Desktop: Hidden */}
                {activeTab === 'experience' && (
                  <div className="transition-all duration-500 ease-in-out opacity-100 translate-y-0 md:hidden">
                    {experience.map((exp, index) => (
                      <div 
                        key={`exp-${index}`} 
                        className="bg-white backdrop-blur-sm rounded-xl p-2 md:p-2 lg:p-4 border border-blue-200/50 transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-lg mb-1 md:mb-2 lg:mb-4"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                          <h4 className="text-xs md:text-xs lg:text-sm xl:text-base font-bold text-gray-900 transition-all duration-300">{exp.position}</h4>
                          <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-2 py-0.5 md:px-2 md:py-0.5 lg:px-3 lg:py-1.5 rounded-full text-xs md:text-xs lg:text-sm font-semibold mt-1 sm:mt-0 w-fit transition-all duration-300 hover:from-blue-200 hover:to-purple-200">
                            {exp.duration}
                          </div>
                        </div>
                        <h5 className="text-xs md:text-xs lg:text-sm xl:text-base font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-0.5 md:mb-1 transition-all duration-300">
                          {exp.hospital}
                        </h5>
                        <p className="text-xs md:text-xs lg:text-sm xl:text-sm text-gray-600 flex items-center">
                          <MapPin className="w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 mr-1 text-blue-500 flex-shrink-0 transition-all duration-300" />
                          {exp.location}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Only: Experience Section */}
            <div className="hidden md:block space-y-2 md:space-y-3 lg:space-y-6 flex flex-col">
              <div className="text-center">
                <div className="inline-flex items-center px-2 py-1 md:px-2 md:py-1 lg:px-4 lg:py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg md:rounded-xl text-xs md:text-sm lg:text-base xl:text-lg font-bold mb-1 md:mb-2 lg:mb-4">
                  <Calendar className="w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 mr-1 md:mr-1 lg:mr-2" />
                  Professional Journey
                </div>
                <h3 className="text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-gray-900 mb-1 md:mb-2 lg:mb-3">Clinical Experience</h3>
              </div>

              {/* Experience Timeline for Desktop */}
              <div className="space-y-2 md:space-y-2 lg:space-y-4 flex-1">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-white backdrop-blur-sm rounded-xl p-2 md:p-2 lg:p-4 border border-blue-200/50 transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-lg mb-1 md:mb-2 lg:mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h4 className="text-xs md:text-xs lg:text-sm xl:text-base font-bold text-gray-900 transition-all duration-300">{exp.position}</h4>
                      <div className="bg-blue-100 text-blue-800 px-2 py-0.5 md:px-2 md:py-0.5 lg:px-3 lg:py-1.5 rounded-full text-xs md:text-xs lg:text-sm font-semibold mt-1 sm:mt-0 w-fit transition-all duration-300 hover:bg-blue-200">
                        {exp.duration}
                      </div>
                    </div>
                    <h5 className="text-xs md:text-xs lg:text-sm xl:text-base font-semibold text-blue-700 mb-0.5 md:mb-1 transition-all duration-300">
                      {exp.hospital}
                    </h5>
                    <p className="text-xs md:text-xs lg:text-sm xl:text-sm text-gray-600 flex items-center">
                      <MapPin className="w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 mr-1 text-blue-500 flex-shrink-0 transition-all duration-300" />
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
