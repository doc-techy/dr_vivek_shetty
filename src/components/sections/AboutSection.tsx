import { GraduationCap, Award, Users, MapPin, Languages, Calendar } from 'lucide-react';

export function AboutSection() {
  const qualifications = [
    'MBBS - Bachelor of Medicine and Bachelor of Surgery',
    'MS General Surgery - Master of Surgery',
    'Fellowship in Head and Neck Surgical Oncology and Reconstructive Surgery (RGUHS)'
  ];

  const specialties = [
    'Head & Neck Oncology',
    'Surgical Oncology',
    'Reconstructive Surgery',
    'Cancer Treatment',
    'Tumor Surgery',
    'Microvascular Surgery'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Dr. Vivek Shetty
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated specialist with extensive experience in Head & Neck Oncology, 
              providing comprehensive care with the latest surgical techniques and compassionate approach.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualifications</h3>
                    <ul className="space-y-2">
                      {qualifications.map((qual, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Experience</h3>
                    <p className="text-gray-600">
                      <span className="text-2xl font-bold text-primary-600">9+ Years</span> of dedicated practice 
                      in Head & Neck Oncology with focus on surgical excellence and patient care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Profile</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">SPARSH Hospital, Hennur Road, Bangalore</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Languages className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Languages Spoken</p>
                      <p className="text-gray-600">English, Hindi, Kannada</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Patient Care</p>
                      <p className="text-gray-600">Comprehensive treatment with personalized approach</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Dr. Shetty?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Extensive experience in complex Head & Neck surgeries</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Latest surgical techniques and technology</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Multidisciplinary approach to cancer care</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Compassionate patient-centered care</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
