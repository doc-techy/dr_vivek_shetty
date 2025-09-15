'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Videos', href: '#videos' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 80; // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // Close mobile menu
  };

  return (
    <>
      {/* Main Navigation */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 ease-in-out',
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50'
            : 'bg-gradient-to-r from-white/95 via-blue-50/80 to-white/95 backdrop-blur-md shadow-lg'
        )}
      >
        <div className="container-custom">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('#home')}
              className="flex items-center space-x-4 group"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 ease-in-out group-hover:scale-105">
                <Stethoscope className="w-7 h-7 text-white" />
              </div>
              <div className="whitespace-nowrap">
                <h1 className="text-3xl font-display font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-500 ease-in-out">
                  Dr. Vivek Shetty
                </h1>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="group relative px-4 py-2.5 rounded-xl text-gray-700 hover:text-white font-medium transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 hover:shadow-lg hover:scale-105"
                >
                  <span className="relative z-10 transition-all duration-500 ease-in-out">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <button
                onClick={() => scrollToSection('#contact')}
                className="group relative px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-400 hover:to-blue-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-glow whitespace-nowrap"
              >
                <span className="text-sm">Book Appointment</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-500 ease-in-out hover:scale-105"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          'lg:hidden transition-all duration-700 ease-in-out overflow-hidden',
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}>
          <div className="bg-gradient-to-b from-white/95 to-blue-50/90 backdrop-blur-xl border-t border-gray-200/50">
            <div className="container-custom py-6">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="group flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 font-medium transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 w-full text-left"
                  >
                    <span className="relative z-10 transition-all duration-500 ease-in-out">{item.name}</span>
                    <div className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
                  </button>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="flex items-center justify-center w-full px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-400 hover:to-blue-500 transition-all duration-500 ease-in-out transform hover:scale-105"
                  >
                    <span className="text-sm">Book Appointment</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
