import { Scissors, Shield, Zap, Heart, Brain, Activity } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Scissors,
      title: 'Head & Neck Surgery',
      description: 'Comprehensive surgical treatment for head and neck cancers with advanced techniques.',
      features: [
        'Tumor resection',
        'Lymph node dissection',
        'Reconstructive procedures',
        'Minimally invasive techniques'
      ]
    },
    {
      icon: Shield,
      title: 'Surgical Oncology',
      description: 'Specialized cancer surgery with focus on complete tumor removal and preservation of function.',
      features: [
        'Cancer staging',
        'Surgical planning',
        'Intraoperative monitoring',
        'Post-operative care'
      ]
    },
    {
      icon: Zap,
      title: 'Reconstructive Surgery',
      description: 'Advanced reconstructive procedures to restore form and function after cancer surgery.',
      features: [
        'Microvascular reconstruction',
        'Flap surgery',
        'Cosmetic restoration',
        'Functional rehabilitation'
      ]
    },
    {
      icon: Heart,
      title: 'Cancer Treatment',
      description: 'Comprehensive cancer care with multidisciplinary approach for optimal outcomes.',
      features: [
        'Treatment planning',
        'Chemotherapy coordination',
        'Radiation therapy planning',
        'Follow-up care'
      ]
    },
    {
      icon: Brain,
      title: 'Tumor Surgery',
      description: 'Precise removal of benign and malignant tumors with preservation of critical structures.',
      features: [
        'Precise tumor mapping',
        'Nerve preservation',
        'Minimal tissue damage',
        'Rapid recovery'
      ]
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: '24/7 emergency surgical services for urgent head and neck conditions.',
      features: [
        'Trauma surgery',
        'Emergency procedures',
        'Critical care',
        'Immediate response'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Specialized Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Head & Neck Oncology services with cutting-edge technology 
            and compassionate care for the best patient outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Expert Care</h4>
                <p className="text-sm text-gray-600">Board-certified specialists with extensive experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Advanced Technology</h4>
                <p className="text-sm text-gray-600">Latest surgical techniques and equipment</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Patient-Centered</h4>
                <p className="text-sm text-gray-600">Compassionate care with personalized treatment plans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
