'use client';

import { 
  Brain, 
  Microscope, 
  Shield, 
  Heart, 
  Zap, 
  Activity, 
  Users, 
  Plus,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  Scissors,
  Eye,
  Layers,
  Target,
  Sparkles,
  Wrench
} from 'lucide-react';
import { useState, useEffect } from 'react';

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPageMobile = 4; // 2x2 grid for mobile
  const itemsPerPageDesktop = 6; // 2x3 grid for desktop


  const services = [
    {
      id: 1,
      category: 'surgical',
      icon: Stethoscope,
      title: 'Thyroid & Parathyroid Surgery',
      subtitle: 'Expert Endocrine Surgery',
      description: 'Minimally invasive thyroidectomy and parathyroidectomy with nerve monitoring for optimal outcomes.',
      features: ['Scarless Surgery', 'Nerve Monitoring', 'Same-day Discharge'],
      gradient: 'from-sky-400 via-blue-300 to-indigo-200',
      pattern: 'radial',
    },
    {
      id: 2,
      category: 'surgical',
      icon: Scissors,
      title: 'Oral Cancer Surgery',
      subtitle: 'Comprehensive Care',
      description: 'Advanced surgical management of oral cavity cancers with immediate reconstruction options.',
      features: ['Tongue Preservation', 'Mandible Reconstruction', 'Speech Therapy'],
      gradient: 'from-purple-400 via-violet-300 to-fuchsia-200',
      pattern: 'dots',
    },
    {
      id: 3,
      category: 'treatment',
      icon: Target,
      title: 'Laryngeal Cancer Treatment',
      subtitle: 'Voice Preservation',
      description: 'Specialized treatments focusing on cancer cure while preserving voice and swallowing function.',
      features: ['Laser Surgery', 'Voice Rehabilitation', 'Organ Preservation'],
      gradient: 'from-rose-400 via-pink-300 to-red-200',
      pattern: 'grid',
    },
    {
      id: 4,
      category: 'surgical',
      icon: Eye,
      title: 'Salivary Gland Surgery',
      subtitle: 'Precision Surgery',
      description: 'Expert management of parotid and submandibular gland tumors with facial nerve preservation.',
      features: ['Nerve Monitoring', 'Cosmetic Approach', 'Minimal Scarring'],
      gradient: 'from-orange-400 via-amber-300 to-yellow-200',
      pattern: 'waves',
    },
    {
      id: 5,
      category: 'reconstructive',
      icon: Layers,
      title: 'Microvascular Reconstruction',
      subtitle: 'Advanced Restoration',
      description: 'Free flap reconstruction for complex head and neck defects after cancer surgery.',
      features: ['Free Tissue Transfer', 'Functional Restoration', 'Aesthetic Results'],
      gradient: 'from-emerald-400 via-green-300 to-teal-200',
      pattern: 'circles',
    },
    {
      id: 6,
      category: 'treatment',
      icon: Brain,
      title: 'Skull Base Surgery',
      subtitle: 'Complex Procedures',
      description: 'Multidisciplinary approach for tumors at the skull base with advanced navigation technology.',
      features: ['Endoscopic Approach', 'Navigation System', 'Team Approach'],
      gradient: 'from-cyan-400 via-sky-300 to-blue-200',
      pattern: 'hexagon',
    },
    {
      id: 7,
      category: 'treatment',
      icon: Sparkles,
      title: 'Oral Cancer Management',
      subtitle: 'Comprehensive Treatment',
      description: 'Complete management of oral cavity cancers with multidisciplinary approach and advanced surgical techniques.',
      features: ['Early Detection', 'Surgical Resection', 'Adjuvant Therapy'],
      gradient: 'from-red-400 via-orange-300 to-yellow-200',
      pattern: 'dots',
    },
    {
      id: 8,
      category: 'surgical',
      icon: Wrench,
      title: 'Thyroid Surgeries',
      subtitle: 'Endocrine Excellence',
      description: 'Advanced thyroid surgical procedures including total thyroidectomy with nerve monitoring and minimal scarring.',
      features: ['Nerve Preservation', 'Minimal Incision', 'Same Day Surgery'],
      gradient: 'from-teal-400 via-cyan-300 to-sky-200',
      pattern: 'grid',
    },
    {
      id: 9,
      category: 'surgical',
      icon: Shield,
      title: 'Salivary Gland Neoplasm Management',
      subtitle: 'Precision Care',
      description: 'Expert management of benign and malignant salivary gland tumors with facial nerve preservation.',
      features: ['Facial Nerve Monitoring', 'Tumor Resection', 'Functional Preservation'],
      gradient: 'from-violet-400 via-purple-300 to-indigo-200',
      pattern: 'waves',
    },
    {
      id: 10,
      category: 'treatment',
      icon: Zap,
      title: 'Laryngo-pharyngeal Cancer Management',
      subtitle: 'Voice & Swallowing Focus',
      description: 'Comprehensive treatment of laryngeal and pharyngeal cancers with emphasis on functional preservation.',
      features: ['Voice Preservation', 'Swallowing Function', 'Quality of Life'],
      gradient: 'from-lime-400 via-green-300 to-emerald-200',
      pattern: 'circles',
    },
    {
      id: 11,
      category: 'surgical',
      icon: Activity,
      title: 'Advanced Neck Surgeries',
      subtitle: 'Complex Procedures',
      description: 'Sophisticated neck dissections and complex cervical procedures with advanced surgical techniques.',
      features: ['Selective Dissection', 'Nerve Sparing', 'Minimal Morbidity'],
      gradient: 'from-slate-400 via-gray-300 to-zinc-200',
      pattern: 'hexagon',
    },
    {
      id: 12,
      category: 'reconstructive',
      icon: Heart,
      title: 'Reconstruction of Head and Neck Defects',
      subtitle: 'Aesthetic & Functional Restoration',
      description: 'Comprehensive reconstruction using local, regional, and free tissue transfer techniques.',
      features: ['Aesthetic Results', 'Functional Restoration', 'Minimal Donor Site Morbidity'],
      gradient: 'from-pink-400 via-rose-300 to-red-200',
      pattern: 'radial',
    },
    {
      id: 13,
      category: 'reconstructive',
      icon: Microscope,
      title: 'Microvascular Surgery',
      subtitle: 'Advanced Reconstruction',
      description: 'Free tissue transfer and microvascular reconstruction for complex head and neck defects.',
      features: ['Free Flap Surgery', 'Vascular Anastomosis', 'Tissue Engineering'],
      gradient: 'from-amber-400 via-yellow-300 to-orange-200',
      pattern: 'dots',
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const itemsPerPage = isMobile ? itemsPerPageMobile : itemsPerPageDesktop;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
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
    <section id="services" className="pb-6 md:pb-12">
      <div className="container-custom">
        {/* Modern Header */}
        <div className="text-center mb-4 pb-0 md:mb-16 md:pb-0">
          {/* Background Decoration */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            {/* Subtitle Badge */}
            {/* <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50 mb-6 shadow-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Expert Medical Services
              </span>
            </div> */}
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-3 md:mb-4">
              Specialized Services & <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            
            {/* Description */}
            <p className="hidden md:block text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive head and neck oncology services with cutting-edge surgical techniques and compassionate care
            </p>
            
            {/* Stats */}
            {/* <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                  13+
                </div>
                <p className="text-sm text-gray-500 font-medium">Specialized Services</p>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                  9+
                </div>
                <p className="text-sm text-gray-500 font-medium">Years Experience</p>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <p className="text-sm text-gray-500 font-medium">Successful Cases</p>
              </div>
            </div> */}
          </div>
        </div>


        {/* Services Carousel */}
        <div className="relative mb-8 bg-transparent shadow-none">
          {/* Services Container */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 px-4 md:px-12">
              {services.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((service, index) => {
                const Icon = service.icon;
                const isHovered = hoveredIndex === index;
                
                return (
                  <div
                    key={`${service.id}-${currentIndex}`}
                    className="group relative"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ 
                      animation: `flipIn 0.6s ease-in-out both`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {/* Card Container */}
                    <div className={`relative h-full bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-white/50 group-hover:border-white transform-gpu`}>
                      {/* Background Pattern */}
                      <div 
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: getPattern(service.pattern),
                          backgroundSize: '40px 40px'
                        }}
                      />
                      
                      {/* White Content Overlay */}
                      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm group-hover:bg-white/50 transition-all duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative p-3 md:p-5">
                        {/* Icon */}
                        <div className="mb-2 md:mb-3">
                          <div className={`
                            w-8 h-8 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${service.gradient}
                            flex items-center justify-center shadow-md
                            transform transition-all duration-500
                            ${isHovered ? 'scale-110 rotate-3' : ''}
                          `}>
                            <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                          </div>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="mb-1 md:mb-2">
                          <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-0.5">
                            {service.title}
                          </h3>
                          <p className={`text-xs font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                            {service.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2 leading-tight">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-0.5">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-700">
                              <div className={`
                                w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r ${service.gradient}
                                flex items-center justify-center mr-2 flex-shrink-0
                                transform transition-all duration-300
                                ${isHovered ? 'scale-110' : ''}
                              `}>
                                <Plus className="w-1.5 h-1.5 md:w-2 md:h-2 text-white" />
                              </div>
                              <span className="text-xs">{feature}</span>
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

          {/* Navigation Arrows and Dots - Same line */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={goToPrev}
              className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110"
              aria-label="Previous services"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300" />
            </button>

            {/* Page Indicators */}
            <div className="flex space-x-2">
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

            <button
              onClick={goToNext}
              className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110"
              aria-label="Next services"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300" />
            </button>
          </div>
        </div>

      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes flipIn {
          0% {
            transform: perspective(800px) rotateY(-120deg) scale(0.7);
            opacity: 0;
            filter: blur(6px);
          }
          20% {
            transform: perspective(800px) rotateY(-80deg) scale(0.8);
            opacity: 0.2;
            filter: blur(4px);
          }
          40% {
            transform: perspective(800px) rotateY(-40deg) scale(0.9);
            opacity: 0.5;
            filter: blur(2px);
          }
          60% {
            transform: perspective(800px) rotateY(0deg) scale(1.1);
            opacity: 0.8;
            filter: blur(0px);
          }
          80% {
            transform: perspective(800px) rotateY(10deg) scale(1.05);
            opacity: 0.95;
          }
          100% {
            transform: perspective(800px) rotateY(0deg) scale(1);
            opacity: 1;
            filter: blur(0px);
          }
        }
        
        @media (max-width: 768px) {
          @keyframes flipIn {
            0% {
              transform: perspective(1000px) rotateY(-180deg) scale(0.6);
              opacity: 0;
              filter: blur(8px);
            }
            25% {
              transform: perspective(1000px) rotateY(-90deg) scale(0.7);
              opacity: 0.3;
              filter: blur(4px);
            }
            50% {
              transform: perspective(1000px) rotateY(-45deg) scale(0.9);
              opacity: 0.6;
              filter: blur(2px);
            }
            75% {
              transform: perspective(1000px) rotateY(0deg) scale(1.1);
              opacity: 0.9;
              filter: blur(0px);
            }
            100% {
              transform: perspective(1000px) rotateY(0deg) scale(1);
              opacity: 1;
              filter: blur(0px);
            }
          }
        }
      `}</style>
    </section>
  );
}

