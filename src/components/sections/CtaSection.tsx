import Link from 'next/link';
import { ArrowRight, Phone, Calendar, MessageCircle } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Schedule Your Consultation?
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            Take the first step towards expert Head & Neck Oncology care. 
            Book your appointment with Dr. Shetty today.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Calendar className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Book Online</h3>
              <p className="text-primary-100 text-sm mb-4">
                Schedule your appointment conveniently online
              </p>
              <Link
                href="/appointment"
                className="inline-flex items-center text-white hover:text-primary-200 transition-colors"
              >
                Book Now <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Phone className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-primary-100 text-sm mb-4">
                Speak directly with our team
              </p>
              <a
                href="tel:+918022222222"
                className="inline-flex items-center text-white hover:text-primary-200 transition-colors"
              >
                +91 80 2222 2222
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Get Consultation</h3>
              <p className="text-primary-100 text-sm mb-4">
                Ask questions about your condition
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-white hover:text-primary-200 transition-colors"
              >
                Contact Us <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200 transform hover:scale-105"
            >
              Book Appointment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200"
            >
              Learn More About Dr. Shetty
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-primary-100 text-sm">
              <strong>Emergency Cases:</strong> Available 24/7 for urgent Head & Neck conditions
            </p>
            <p className="text-primary-200 text-xs mt-2">
              SPARSH Hospital, Hennur Road, Bangalore | Languages: English, Hindi, Kannada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
