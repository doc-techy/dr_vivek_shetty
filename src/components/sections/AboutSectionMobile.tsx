'use client';

import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';

export function AboutSectionMobile() {
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
    <section id="about-mobile" className="pt-8 pb-8 md:hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Academic Excellence & <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Professional Mastery</span>
          </h2>
          
          <p className="text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            A dedicated specialist with comprehensive education and extensive clinical experience in head and neck oncology.
          </p>
        </div>

        {/* Mobile Toggle Switch */}
        <div className="mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-1 flex border border-gray-200/50">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out flex items-center justify-center ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50/50'
              }`}
            >
              <Calendar className={`w-4 h-4 mr-2 transition-all duration-300 ${activeTab === 'experience' ? 'rotate-12' : 'rotate-0'}`} />
              Professional
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out flex items-center justify-center ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
              }`}
            >
              <GraduationCap className={`w-4 h-4 mr-2 transition-all duration-300 ${activeTab === 'education' ? 'rotate-12' : 'rotate-0'}`} />
              Education
            </button>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-4">
          
          {/* Dynamic Section Header */}
          <div className="text-center mb-4">
            <div className={`inline-flex items-center px-3 py-2 text-white rounded-lg text-sm font-bold mb-3 transition-all duration-500 ease-in-out ${
              activeTab === 'education' ? 'bg-black' : 'bg-black'
            }`}>
              <div className="transition-all duration-500 ease-in-out">
                {activeTab === 'education' ? (
                  <GraduationCap className="w-4 h-4 mr-2 animate-pulse" />
                ) : (
                  <Calendar className="w-4 h-4 mr-2 animate-pulse" />
                )}
              </div>
              <span className="transition-all duration-500 ease-in-out">
                {activeTab === 'education' ? 'Educational Journey' : 'Professional Journey'}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 transition-all duration-500 ease-in-out">
              {activeTab === 'education' ? 'Academic Excellence' : 'Clinical Experience'}
            </h3>
          </div>

          {/* Dynamic Content Timeline */}
          <div className="space-y-3">
            {/* Education Content */}
            {activeTab === 'education' && (
              <div className="transition-all duration-500 ease-in-out opacity-100 translate-y-0">
                {education.map((edu, index) => (
                  <div 
                    key={`edu-${index}`} 
                    className="bg-white backdrop-blur-sm rounded-xl p-3 border border-blue-200/50 transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-lg mb-3"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-base font-bold text-gray-900 transition-all duration-300">{edu.degree}</h4>
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold mt-1 sm:mt-0 w-fit transition-all duration-300 hover:bg-blue-200">
                        {edu.year}
                      </div>
                    </div>
                    <h5 className="text-sm font-semibold text-blue-700 mb-1 transition-all duration-300">
                      {edu.institution}
                    </h5>
                    <p className="text-xs text-gray-600 flex items-center">
                      <MapPin className="w-3 h-3 mr-1 text-blue-500 flex-shrink-0 transition-all duration-300" />
                      {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            )}
            
            {/* Experience Content */}
            {activeTab === 'experience' && (
              <div className="transition-all duration-500 ease-in-out opacity-100 translate-y-0">
                {experience.slice().reverse().map((exp, index) => (
                  <div 
                    key={`exp-${index}`} 
                    className="bg-white backdrop-blur-sm rounded-xl p-3 border border-green-200/50 transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-lg mb-3"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-base font-bold text-gray-900 transition-all duration-300">{exp.position}</h4>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold mt-1 sm:mt-0 w-fit transition-all duration-300 hover:bg-green-200">
                        {exp.duration}
                      </div>
                    </div>
                    <h5 className="text-sm font-semibold text-green-700 mb-1 transition-all duration-300">
                      {exp.hospital}
                    </h5>
                    <p className="text-xs text-gray-600 flex items-center">
                      <MapPin className="w-3 h-3 mr-1 text-green-500 flex-shrink-0 transition-all duration-300" />
                      {exp.location}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
