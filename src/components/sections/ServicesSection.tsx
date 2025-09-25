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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerPageMobile = 2; // 2x1 grid for mobile (top and bottom)
  const itemsPerPageDesktop = 6; // 2x3 grid for desktop


  const services = [
    {
      id: 1,
      category: 'oncology',
      icon: Stethoscope,
      title: 'Oral Cancer',
      subtitle: '',
      description: '',
      features: [
        'Cancers of the tongue, buccal mucosa (cheek), gingiva, floor of the mouth, and palate',
        'Large cancers can also be removed completely',
        'Advanced reconstructive techniques to improve outcomes of speech, eating and facial symmetry',
        'Sensitive approach prioritising cure with rehabilitation and re-integration into society'
      ],
    },
    {
      id: 2,
      category: 'endocrine',
      icon: Scissors,
      title: 'Thyroid Nodules',
      subtitle: '',
      description: '',
      features: [
        'May be cancers, but more likely just goitre',
        'Not all nodules need surgery',
        'Holistic approach with the goal of balancing benefits of intervention and chances of complications',
        'Observation, remote-access (robotic, scar-hiding) surgery whenever beneficial'
      ],
    },
    {
      id: 3,
      category: 'endocrine',
      icon: Target,
      title: 'Parathyroid Problems',
      subtitle: '',
      description: '',
      features: [
        'Adenoma increases PTH hormone level, which increases calcium in blood',
        'Causes weakening of bones, fatigue, depression, and kidney stones',
        'Treatment is surgical removal of the affected glands',
        'Minimal complications in experienced hands'
      ],
    },
    {
      id: 4,
      category: 'surgical',
      icon: Eye,
      title: 'Parotid and Submandibular Gland Tumours',
      subtitle: '',
      description: '',
      features: [
        'Salivary gland tumours may be benign or cancerous',
        'Most often treatment is surgical removal',
        'Main complication of parotid surgery is facial nerve paralysis',
        'Experienced hands, intra operative nerve monitoring lead to low incidence of permanent facial nerve paralysis'
      ],
    },
    {
      id: 5,
      category: 'oncology',
      icon: Layers,
      title: 'Throat Cancer',
      subtitle: '',
      description: '',
      features: [
        'Cancers of the Larynx (voice box), Oropharynx, Hypopharynx',
        'The goal is organ preservation whenever possible',
        'Early stages treated with radiotherapy or minimally invasive surgery such as laser or robotic surgery',
        'Multidisciplinary approach'
      ],
    },
    {
      id: 6,
      category: 'surgical',
      icon: Brain,
      title: 'Jaw Tumours (Ameloblastoma/Sarcoma)',
      subtitle: '',
      description: '',
      features: [
        'Could be benign or cancerous',
        'Require surgical removal of a part or whole of the jaw',
        'Excellent outcome with advanced reconstruction using Digital planning, 3-D printing, and Virtual Reality',
        'Dental rehabilitation to restore form and function completely'
      ],
    },
    {
      id: 7,
      category: 'surgical',
      icon: Sparkles,
      title: 'Neck Tumours',
      subtitle: '',
      description: '',
      features: [
        'Schwannoma, Carotid body tumour, Paraganglioma, Neurofibroma etc',
        'Involve several critical structures such as carotid artery, jugular vein as well as vagus and other cranial nerves',
        'Treatment is surgical removal',
        'Requires extensive knowledge of the anatomy of the neck, and approaches to the base of the skull'
      ],
    },
    {
      id: 8,
      category: 'reconstructive',
      icon: Wrench,
      title: 'Microvascular Surgery',
      subtitle: '',
      description: '',
      features: [
        'Head and neck cancers affect speech, swallowing, dentition, shape and symmetry of face',
        'Tissues from the upper/lower limbs, back and chest are utilised for advanced reconstruction',
        'Requires skill in anastomosis of small vessels',
        'Near-normal form and function possible with good surgical techniques and proper rehabilitation'
      ],
    },
    {
      id: 9,
      category: 'oncology',
      icon: Shield,
      title: 'Skin and Scalp Tumours',
      subtitle: '',
      description: '',
      features: [
        'Could be cancerous, such as Basal Cell Carcinoma (BCC) or Melanoma',
        'Treatment is surgical removal',
        'Complete removal with good reconstruction to restore the form is critical',
        'Advanced techniques for optimal cosmetic and functional outcomes'
      ],
    },
    {
      id: 10,
      category: 'advanced',
      icon: Zap,
      title: 'Robotic Surgery in Head and Neck',
      subtitle: '',
      description: '',
      features: [
        'Main application is in early stage throat (Oropharynx) cancer',
        'Can also be used for parapharyngeal tumour excision',
        'Remote access surgery for small thyroid nodule where the scar is in the chest rather than the neck',
        'Minimally invasive approach with enhanced precision and reduced scarring'
      ],
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
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToPage = (pageIndex: number) => {
    if (isTransitioning || pageIndex === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(pageIndex);
    setTimeout(() => setIsTransitioning(false), 700);
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-3 md:mb-4">
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
                  11+
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
          {/* Services Container with Side Arrows */}
          <div className="relative flex items-center">
            {/* Left Arrow */}
            <button
              onClick={goToPrev}
              disabled={isTransitioning}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform"
              aria-label="Previous services"
            >
              <ChevronLeft className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ${isTransitioning ? 'animate-pulse' : ''}`} />
            </button>

            {/* Services Grid */}
            <div className="flex-1 mx-12 md:mx-16">
              <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
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
                        animation: `fastFlipIn 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) both`,
                        animationDelay: `${index * 0.08}s`
                      }}
                    >
                      {/* Card Container */}
                      <div className="relative h-full bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-102 border border-gray-100 group-hover:border-blue-200 transform-gpu will-change-transform">
                        {/* Subtle Top Border Accent */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        
                        {/* Content */}
                        <div className="relative p-4 md:p-6">
                          {/* Icon - Hidden on mobile */}
                          {/* <div className="mb-2 md:mb-3 hidden md:block">
                            <div className={`
                              w-8 h-8 md:w-12 md:h-12 rounded-lg bg-gray-100 group-hover:bg-blue-50
                              flex items-center justify-center shadow-sm
                              transform transition-all duration-200 ease-out will-change-transform
                              ${isHovered ? 'scale-105' : ''}
                            `}>
                              <Icon className="w-4 h-4 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-600" />
                            </div>
                          </div> */}

                          {/* Title */}
                          <div className="mb-3 md:mb-4">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                              {service.title}
                            </h3>
                            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 group-hover:w-12 transition-all duration-300"></div>
                          </div>

                          {/* Features */}
                          <div className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className={`
                                  w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-500 group-hover:bg-blue-600
                                  mt-1.5 mr-3 flex-shrink-0
                                  transform transition-all duration-150 ease-out
                                  ${isHovered ? 'scale-105' : ''}
                                `}>
                                </div>
                                <span className="text-xs md:text-sm leading-relaxed text-gray-600 group-hover:text-gray-700">{feature}</span>
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

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              disabled={isTransitioning}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform"
              aria-label="Next services"
            >
              <ChevronRight className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ${isTransitioning ? 'animate-pulse' : ''}`} />
            </button>
          </div>

          {/* Page Indicators - Centered below */}
          <div className="flex justify-center items-center mt-6">
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 active:scale-90 disabled:cursor-not-allowed ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fastFlipIn {
          0% {
            transform: perspective(800px) rotateY(-60deg) scale(0.9);
            opacity: 0;
          }
          50% {
            transform: perspective(800px) rotateY(-15deg) scale(0.95);
            opacity: 0.7;
          }
          80% {
            transform: perspective(800px) rotateY(2deg) scale(1.01);
            opacity: 0.95;
          }
          100% {
            transform: perspective(800px) rotateY(0deg) scale(1);
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          @keyframes fastFlipIn {
            0% {
              transform: perspective(600px) rotateY(-45deg) scale(0.92);
              opacity: 0;
            }
            60% {
              transform: perspective(600px) rotateY(-8deg) scale(0.98);
              opacity: 0.8;
            }
            100% {
              transform: perspective(600px) rotateY(0deg) scale(1);
              opacity: 1;
            }
          }
        }

        .group:hover .group-hover\\:animate-bounce {
          animation: bounce 1s infinite;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Smooth entrance for the entire grid */
        .services-grid {
          animation: fadeInGrid 0.6s ease-out;
        }

        @keyframes fadeInGrid {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

