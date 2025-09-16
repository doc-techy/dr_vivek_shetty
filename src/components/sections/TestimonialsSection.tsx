'use client';

import { Star, Quote } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Patient',
      content: 'Dr. Shetty\'s expertise and compassionate care made my recovery smooth. His attention to detail and clear communication throughout the treatment process was exceptional.',
      rating: 5,
      treatment: 'Head & Neck Surgery'
    },
    {
      name: 'Priya Sharma',
      role: 'Patient',
      content: 'The entire team at SPARSH Hospital, led by Dr. Shetty, provided outstanding care. The surgical procedure was successful, and the follow-up care was thorough.',
      rating: 5,
      treatment: 'Reconstructive Surgery'
    },
    {
      name: 'Amit Patel',
      role: 'Patient',
      content: 'Dr. Shetty\'s professionalism and surgical skills are remarkable. He explained everything clearly and made sure I was comfortable throughout the process.',
      rating: 5,
      treatment: 'Tumor Surgery'
    },
    {
      name: 'Sunita Reddy',
      role: 'Patient',
      content: 'I am grateful for Dr. Shetty\'s expertise in handling my complex case. His dedication to patient care and surgical excellence is truly commendable.',
      rating: 5,
      treatment: 'Cancer Treatment'
    },
    {
      name: 'Vikram Singh',
      role: 'Patient',
      content: 'Dr. Shetty\'s advanced surgical techniques and personalized approach gave me confidence throughout my treatment. The results exceeded my expectations.',
      rating: 5,
      treatment: 'Thyroid Surgery'
    },
    {
      name: 'Meera Joshi',
      role: 'Patient',
      content: 'The care I received from Dr. Shetty was exceptional. His expertise in head and neck oncology and his compassionate bedside manner made all the difference.',
      rating: 5,
      treatment: 'Oral Cancer Surgery'
    },
    {
      name: 'Arjun Nair',
      role: 'Patient',
      content: 'Dr. Shetty\'s surgical precision and post-operative care were outstanding. I felt supported throughout my entire journey to recovery.',
      rating: 5,
      treatment: 'Laryngeal Surgery'
    },
    {
      name: 'Kavitha Rao',
      role: 'Patient',
      content: 'Dr. Shetty\'s multidisciplinary approach and attention to detail ensured the best possible outcome for my complex case. Highly recommended.',
      rating: 5,
      treatment: 'Skull Base Surgery'
    },
    {
      name: 'Ravi Gupta',
      role: 'Patient',
      content: 'The entire experience with Dr. Shetty was professional and reassuring. His expertise in minimally invasive techniques made my recovery faster.',
      rating: 5,
      treatment: 'Endoscopic Surgery'
    },
    {
      name: 'Deepa Iyer',
      role: 'Patient',
      content: 'Dr. Shetty\'s comprehensive approach to treatment and his team\'s coordination made my surgical journey smooth and successful.',
      rating: 5,
      treatment: 'Parotid Surgery'
    },
    {
      name: 'Suresh Menon',
      role: 'Patient',
      content: 'Dr. Shetty\'s innovative surgical techniques and his commitment to patient care are truly remarkable. I am grateful for his expertise.',
      rating: 5,
      treatment: 'Neck Dissection'
    },
    {
      name: 'Anita Desai',
      role: 'Patient',
      content: 'Dr. Shetty\'s compassionate care and surgical excellence helped me through a difficult time. His expertise gave me hope and confidence.',
      rating: 5,
      treatment: 'Reconstructive Surgery'
    }
  ];

  // Create duplicated testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number | null = null;
    let scrollPosition = 0;
    const scrollSpeed = 0.8;

    const animate = () => {
      if (!scrollContainer) return;
      
      scrollPosition += scrollSpeed;
      scrollContainer.scrollLeft = scrollPosition;

      // Reset scroll position when we've scrolled through one set of testimonials
      const singleSetWidth = scrollContainer.scrollWidth / 3;
      if (scrollPosition >= singleSetWidth) {
        scrollPosition = 0;
        scrollContainer.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a delay to ensure container is ready
    const startAnimation = () => {
      if (!scrollContainer) return;
      
      // Ensure container has proper dimensions
      if (scrollContainer.scrollWidth > 0) {
        animate();
      } else {
        // Retry if container isn't ready
        setTimeout(startAnimation, 100);
      }
    };

    const timeoutId = setTimeout(startAnimation, 1000);

    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="pt-16 pb-20">
      {/* Header with container */}
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Patient <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Testimonials and Reviews</span>
          </h2>
        </div>
      </div>

      {/* Edge-to-edge Infinite Scrolling Testimonials */}
      <div className="relative overflow-hidden w-full">
        <div 
          ref={scrollContainerRef}
          className="flex gap-7 scroll-animation pl-7"
          style={{
            width: 'max-content',
            scrollBehavior: 'auto',
            overflowX: 'hidden',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-5 hover:shadow-xl transition-all duration-300 border border-white/20 flex-shrink-0 w-80"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-7 h-7 text-primary-600 mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-5 italic text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                <p className="text-xs text-gray-600">{testimonial.role}</p>
                <p className="text-xs text-primary-600 font-medium mt-1">
                  {testimonial.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .scroll-animation {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
