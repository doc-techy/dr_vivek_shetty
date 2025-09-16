'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Calendar, MessageCircle, Mail, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function CtaSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="pb-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-12">
            Ready to Schedule Your <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Consultation?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Online</h3>
              <p className="text-gray-600 text-sm mb-4">
                Schedule your appointment conveniently online
              </p>
              <Link
                href="/appointment"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                Book Now <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-4">
                Speak directly with our team
              </p>
              <a
                href="tel:+918022222222"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                +91 80 2222 2222
              </a>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Consultation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Ask questions about your condition
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                Contact Us <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Book Appointment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Learn More About Dr. Shetty
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm">
              <strong>Emergency Cases:</strong> Available 24/7 for urgent Head & Neck conditions
            </p>
            <p className="text-gray-500 text-xs mt-2">
              SPARSH Hospital, Hennur Road, Bangalore | Languages: English, Hindi, Kannada
            </p>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-8 text-white shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white">
                      Stay Updated with Health Insights
                    </h3>
                  </div>
                  <p className="text-blue-100 text-sm max-w-md mx-auto lg:mx-0">
                    Subscribe to Dr. Shetty&apos;s newsletter for the latest updates on Head & Neck Oncology, 
                    health tips, and educational content.
                  </p>
                </div>

                {/* Right Content - Form */}
                <div className="flex-1 max-w-md w-full">
                  {isSubscribed ? (
                    <div className="text-center py-4">
                      <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-2" />
                      <p className="text-green-300 font-semibold text-sm">
                        Thank you for subscribing!
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                      <div className="flex gap-3">
                        <div className="flex-1">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                            className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-sm placeholder-blue-200 text-white"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center min-w-[140px]"
                        >
                          {isLoading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                              <span className="text-xs">Subscribing...</span>
                            </>
                          ) : (
                            <>
                              <span className="text-sm">Subscribe</span>
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-blue-200 text-center">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Feature Icons */}
              <div className="mt-6 flex justify-center lg:justify-start">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">📚</span>
                    </div>
                    <span className="text-xs text-blue-100 font-medium">Educational Content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">💡</span>
                    </div>
                    <span className="text-xs text-blue-100 font-medium">Health Tips</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🔬</span>
                    </div>
                    <span className="text-xs text-blue-100 font-medium">Latest Research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
