import { GraduationCap, Calendar, CheckCircle, Award, Users, MapPin, Languages } from 'lucide-react';

export function AboutSection() {
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
            Academic Excellence & <span className="text-green-600">Professional Mastery</span>
          </h2>
          
          <p className="text-sm md:text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-4">
            A dedicated specialist with comprehensive education and extensive clinical experience in head and neck oncology.
          </p>
        </div>

        {/* Mobile-Optimized Content */}
        <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-gray-100 p-4 md:p-8">
          
          {/* Mobile: Single Column, Desktop: Two Columns */}
          <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">

          <div className="space-y-4 md:space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center px-3 py-2 md:px-6 md:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg md:rounded-xl text-sm md:text-lg lg:text-xl font-bold mb-3 md:mb-4">
                  <Calendar className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3" />
                  Professional Journey
                </div>
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-3">Clinical Experience</h3>
              </div>

              {/* Compact Experience Timeline for Mobile */}
              <div className="space-y-3 md:space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-green-200/50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-base md:text-lg lg:text-xl font-bold text-gray-900">{exp.position}</h4>
                      <div className="bg-green-100 text-green-800 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-semibold mt-1 sm:mt-0 w-fit">
                        {exp.duration}
                      </div>
                    </div>
                    <h5 className="text-sm md:text-base lg:text-lg font-semibold text-green-700 mb-1">
                      {exp.hospital}
                    </h5>
                    <p className="text-xs md:text-sm lg:text-base text-gray-600 flex items-center">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 text-green-500 flex-shrink-0" />
                      {exp.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education Section */}
            <div className="space-y-4 md:space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center px-3 py-2 md:px-6 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg md:rounded-xl text-sm md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">
                  <GraduationCap className="w-4 h-4 md:w-7 md:h-7 mr-2 md:mr-3" />
                  Educational Journey
                </div>
                <h3 className="text-lg md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3">Academic Excellence</h3>
              </div>

              {/* Compact Education Timeline for Mobile */}
              <div className="space-y-3 md:space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-blue-200/50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-base md:text-lg lg:text-xl font-bold text-gray-900">{edu.degree}</h4>
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-semibold mt-1 sm:mt-0 w-fit">
                        {edu.year}
                      </div>
                    </div>
                    <h5 className="text-sm md:text-base lg:text-lg font-semibold text-blue-700 mb-1">
                      {edu.institution}
                    </h5>
                    <p className="text-xs md:text-sm lg:text-base text-gray-600 flex items-center">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 text-blue-500 flex-shrink-0" />
                      {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
           
          </div>

        </div>
      </div>
    </section>
  );
}
