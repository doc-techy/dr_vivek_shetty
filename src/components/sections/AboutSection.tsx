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
    <section id="about" className="pb-8" style={{ minHeight: 'calc(100vh - 80px)' }}>
      <div className="container-custom h-full">
        {/* Header */}
        <div className="text-center mb-4">
          {/* <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl text-lg font-semibold mb-8 shadow-lg">
            <Award className="w-6 h-6 mr-3" />
            About Dr. Vivek Shetty
          </div> */}
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Academic Excellence & <span className="text-green-600">Professional Mastery</span>
          </h2>
          
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A dedicated specialist with comprehensive education and extensive clinical experience in head and neck oncology.
          </p>
        </div>

        {/* Main Content Container */}
        <div className="rounded-3xl shadow-2xl border border-gray-100 p-6" style={{ backgroundColor: '#eff6ff' }}>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Education */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-bold mb-3 shadow-lg">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Educational Journey
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Academic Excellence</h3>
                <p className="text-sm lg:text-base text-gray-600">Comprehensive medical education from prestigious institutions</p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 rounded-full"></div>
                
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute left-4 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>
                    
                    {/* Content */}
                    <div className="ml-12">
                      <div className="flex items-center mb-2">
                        <h4 className="text-base lg:text-lg font-bold text-gray-900">{edu.degree}</h4>
                        <div className="ml-3 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                          {edu.year}
                        </div>
                      </div>
                      <h5 className="text-sm lg:text-base font-bold text-blue-700 mb-1 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {edu.institution}
                      </h5>
                      <p className="text-gray-600 text-xs lg:text-sm font-medium flex items-center">
                        <MapPin className="w-3 h-3 mr-1 text-blue-500" />
                        {edu.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>

            {/* Right Side - Experience */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl text-sm font-bold mb-3 shadow-lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Professional Journey
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Clinical Experience</h3>
                <p className="text-sm lg:text-base text-gray-600">Extensive practice in leading healthcare institutions</p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-green-200 via-green-400 to-green-600 rounded-full"></div>
                
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute left-4 w-3 h-3 bg-green-600 rounded-full border-2 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>
                    
                    {/* Content */}
                    <div className="ml-12">
                      <div className="flex items-center mb-2">
                        <h4 className="text-base lg:text-lg font-bold text-gray-900">{exp.position}</h4>
                        <div className="ml-3 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                          {exp.duration}
                        </div>
                      </div>
                      <h5 className="text-sm lg:text-base font-bold text-green-700 mb-1 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {exp.hospital}
                      </h5>
                      <p className="text-gray-600 text-xs lg:text-sm font-medium flex items-center">
                        <MapPin className="w-3 h-3 mr-1 text-green-500" />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
