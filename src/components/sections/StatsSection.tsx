import { Users, Award, Calendar, Heart } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Successful Surgeries',
      description: 'Complex Head & Neck procedures'
    },
    {
      icon: Award,
      number: '9+',
      label: 'Years Experience',
      description: 'Dedicated to surgical excellence'
    },
    {
      icon: Heart,
      number: '98%',
      label: 'Patient Satisfaction',
      description: 'Compassionate care approach'
    },
    {
      icon: Calendar,
      number: '24/7',
      label: 'Emergency Care',
      description: 'Available for urgent cases'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Excellence in Numbers
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Our commitment to providing world-class Head & Neck Oncology care 
            is reflected in our track record of success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-primary-100 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
