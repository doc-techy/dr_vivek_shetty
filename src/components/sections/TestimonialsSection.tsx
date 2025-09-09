import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
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
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Patient Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our patients about their experience with Dr. Shetty and our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-primary-600 mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-xs text-primary-600 font-medium mt-1">
                  {testimonial.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Overall Patient Satisfaction
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                <p className="text-gray-600">Patient Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">4.9/5</div>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <p className="text-gray-600">Happy Patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
