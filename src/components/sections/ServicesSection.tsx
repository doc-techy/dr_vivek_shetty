'use client';

import { 
  Brain, 
  Microscope, 
  Shield, 
  Heart, 
  Zap, 
  Activity, 
  Users, 
  Award,
  ArrowRight,
  Sparkles,
  Plus,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const categories = [
    { id: 'all', label: 'All Services', icon: Sparkles },
    { id: 'surgical', label: 'Surgical Procedures', icon: Microscope },
    { id: 'treatment', label: 'Cancer Treatment', icon: Zap },
    { id: 'reconstructive', label: 'Reconstruction', icon: Heart },
  ];

  const services = [
    {
      id: 1,
      category: 'surgical',
      icon: Brain,
      title: 'Thyroid & Parathyroid Surgery',
      subtitle: 'Expert Endocrine Surgery',
      description: 'Minimally invasive thyroidectomy and parathyroidectomy with nerve monitoring for optimal outcomes.',
      features: ['Scarless Surgery', 'Nerve Monitoring', 'Same-day Discharge'],
      gradient: 'from-blue-600 via-cyan-500 to-teal-400',
      pattern: 'radial',
    },
    {
      id: 2,
      category: 'surgical',
      icon: Microscope,
      title: 'Oral Cancer Surgery',
      subtitle: 'Comprehensive Care',
      description: 'Advanced surgical management of oral cavity cancers with immediate reconstruction options.',
      features: ['Tongue Preservation', 'Mandible Reconstruction', 'Speech Therapy'],
      gradient: 'from-purple-600 via-pink-500 to-rose-400',
      pattern: 'dots',
    },
    {
      id: 3,
      category: 'treatment',
      icon: Zap,
      title: 'Laryngeal Cancer Treatment',
      subtitle: 'Voice Preservation',
      description: 'Specialized treatments focusing on cancer cure while preserving voice and swallowing function.',
      features: ['Laser Surgery', 'Voice Rehabilitation', 'Organ Preservation'],
      gradient: 'from-emerald-600 via-green-500 to-lime-400',
      pattern: 'grid',
    },
    {
      id: 4,
      category: 'surgical',
      icon: Shield,
      title: 'Salivary Gland Surgery',
      subtitle: 'Precision Surgery',
      description: 'Expert management of parotid and submandibular gland tumors with facial nerve preservation.',
      features: ['Nerve Monitoring', 'Cosmetic Approach', 'Minimal Scarring'],
      gradient: 'from-orange-600 via-amber-500 to-yellow-400',
      pattern: 'waves',
    },
    {
      id: 5,
      category: 'reconstructive',
      icon: Heart,
      title: 'Microvascular Reconstruction',
      subtitle: 'Advanced Restoration',
      description: 'Free flap reconstruction for complex head and neck defects after cancer surgery.',
      features: ['Free Tissue Transfer', 'Functional Restoration', 'Aesthetic Results'],
      gradient: 'from-rose-600 via-pink-500 to-fuchsia-400',
      pattern: 'circles',
    },
    {
      id: 6,
      category: 'treatment',
      icon: Users,
      title: 'Skull Base Surgery',
      subtitle: 'Complex Procedures',
      description: 'Multidisciplinary approach for tumors at the skull base with advanced navigation technology.',
      features: ['Endoscopic Approach', 'Navigation System', 'Team Approach'],
      gradient: 'from-indigo-600 via-blue-500 to-sky-400',
      pattern: 'hexagon',
    },
  ];

  const totalPages = Math.ceil(services.length / itemsPerPage);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentServices = () => {
    const startIndex = currentIndex * itemsPerPage;
    return services.slice(startIndex, startIndex + itemsPerPage);
  };

  const getPattern = (pattern: string) => {
    switch (pattern) {
      case 'dots':
        return "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")";
      case 'grid':
        return "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z'/%3E%3C/g%3E%3C/svg%3E\")";
      default:
        return 'none';
    }
  };

  return (
    <section id="services" className="pb-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          {/* <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Head & Neck Surgical Excellence</span>
          </div> */}
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Specialized </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Oncology Services
            </span>
          </h2>
          
        </div>

        {/* Category Filter
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-6 py-3 rounded-full font-medium text-sm transition-all duration-300
                  flex items-center gap-2 group
                  ${selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                  }
                `}
              >
                <Icon className={`w-4 h-4 transition-transform duration-300 ${
                  selectedCategory === category.id ? 'animate-pulse' : 'group-hover:rotate-12'
                }`} />
                {category.label}
              </button>
            );
          })}
        </div> */}

        {/* Services Carousel */}
        <div className="relative mb-8 bg-transparent shadow-none">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-500 hover:scale-110 hover:-translate-x-1"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-7 h-7 transition-transform duration-300" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-500 hover:scale-110 hover:translate-x-1"
            aria-label="Next services"
          >
            <ChevronRight className="w-7 h-7 transition-transform duration-300" />
          </button>

          {/* Services Container */}
          <div className="overflow-hidden">
            <div className="flex transition-all duration-700 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {Array.from({ length: totalPages }, (_, pageIndex) => {
                const startIndex = pageIndex * itemsPerPage;
                const pageServices = services.slice(startIndex, startIndex + itemsPerPage);
                
                return (
                  <div key={pageIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-12">
                      {pageServices.map((service, index) => {
                        const Icon = service.icon;
                        const isHovered = hoveredIndex === index;
                        
                        return (
                          <div
                            key={service.id}
                            className="group relative animate-slide-in-right"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                {/* Card Container */}
                <div className="relative h-full bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 group-hover:border-transparent">
                  {/* Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage: getPattern(service.pattern),
                      backgroundSize: '40px 40px'
                    }}
                  />
                  
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative p-7">
                    {/* Icon */}
                    <div className="mb-5">
                      <div className={`
                        w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient}
                        flex items-center justify-center shadow-lg
                        transform transition-all duration-500
                        ${isHovered ? 'scale-110 rotate-3' : ''}
                      `}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-3">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm lg:text-base text-gray-600 mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className={`
                            w-4 h-4 rounded-full bg-gradient-to-r ${service.gradient}
                            flex items-center justify-center mr-2 flex-shrink-0
                            transform transition-all duration-300
                            ${isHovered ? 'scale-110' : ''}
                          `}>
                            <Plus className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Why Choose Dr. Vivek Shetty - Professional Design */}
        <div className="mt-4">
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 rounded-2xl p-4 text-white shadow-xl relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 animate-pulse" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-3">
                <div className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-2">
                  <span className="text-sm lg:text-base font-semibold text-blue-200"> Why Choose Dr. Vivek Shetty  ?</span>
                </div>
                <p className="text-xs lg:text-sm text-blue-100 max-w-lg mx-auto">
                  Leading expertise with exceptional patient outcomes and compassionate care
                </p>
              </div>

              {/* Key Points Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                <div className="text-center group hover:scale-105 transition-all duration-500">
                  <div className="relative mb-1">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xs lg:text-sm font-bold text-white mb-0.5 group-hover:text-yellow-300 transition-colors duration-300">
                    9+ Years Experience
                  </h4>
                  <p className="text-blue-100 group-hover:text-white transition-colors duration-300 text-xs leading-tight">
                    Extensive expertise in head & neck surgical oncology
                  </p>
                </div>
                
                <div className="text-center group hover:scale-105 transition-all duration-500">
                  <div className="relative mb-1">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <Microscope className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xs lg:text-sm font-bold text-white mb-0.5 group-hover:text-yellow-300 transition-colors duration-300">
                    Advanced Fellowship
                  </h4>
                  <p className="text-blue-100 group-hover:text-white transition-colors duration-300 text-xs leading-tight">
                    RGUHS specialized training in surgical oncology
                  </p>
                </div>
                
                <div className="text-center group hover:scale-105 transition-all duration-500">
                  <div className="relative mb-1">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xs lg:text-sm font-bold text-white mb-0.5 group-hover:text-yellow-300 transition-colors duration-300">
                    Patient-Centered Care
                  </h4>
                  <p className="text-blue-100 group-hover:text-white transition-colors duration-300 text-xs leading-tight">
                    Compassionate approach with quality of life focus
                  </p>
                </div>
                
                <div className="text-center group hover:scale-105 transition-all duration-500">
                  <div className="relative mb-1">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xs lg:text-sm font-bold text-white mb-0.5 group-hover:text-yellow-300 transition-colors duration-300">
                    Multilingual Support
                  </h4>
                  <p className="text-blue-100 group-hover:text-white transition-colors duration-300 text-xs leading-tight">
                    English, Hindi, and Kannada communication
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              {/* <div className="mt-12 text-center">
                <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Ready for Expert Consultation?</h4>
                    <p className="text-gray-600">Schedule your appointment with Dr. Vivek Shetty today</p>
                  </div>
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                    <span>Book Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

