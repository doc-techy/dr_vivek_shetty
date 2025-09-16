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
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Videos', href: '#videos' },
    { name: 'Blogs', href: '/blogs' },
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
            ? 'bg-white/98 backdrop-blur-2xl shadow-2xl border-b border-gray-200/30'
            : 'bg-gradient-to-r from-white/98 via-blue-50/90 to-white/98 backdrop-blur-xl shadow-xl'
        )}
      >
        <div className="container-custom">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('#home')}
              className="flex items-center space-x-4 group relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                <Stethoscope className="w-8 h-8 text-white group-hover:text-blue-100 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
              </div>
              <div className="whitespace-nowrap relative">
                <h1 className="text-4xl font-display font-bold text-gray-900 group-hover:text-blue-600 transition-all duration-500 ease-in-out group-hover:scale-105">
                  Dr. Vivek Shetty
                </h1>
                <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-blue-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out -z-10"></div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigation.map((item, index) => {
                if (item.href.startsWith('/')) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group relative px-6 py-3 rounded-2xl text-gray-700 hover:text-white font-semibold text-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:shadow-xl hover:scale-105 hover:-translate-y-1 overflow-hidden"
                    >
                      <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:scale-110">{item.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-700 ease-in-out"></div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 ease-in-out"></div>
                    </Link>
                  );
                } else {
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="group relative px-6 py-3 rounded-2xl text-gray-700 hover:text-white font-semibold text-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:shadow-xl hover:scale-105 hover:-translate-y-1 overflow-hidden"
                    >
                      <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:scale-110">{item.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-700 ease-in-out"></div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 ease-in-out"></div>
                    </button>
                  );
                }
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => scrollToSection('#contact')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1 whitespace-nowrap overflow-hidden"
              >
                <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:scale-105">Book Appointment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"></div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 ease-in-out"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 ease-in-out delay-100"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-4 rounded-2xl bg-gray-100 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:-translate-y-0.5 group relative overflow-hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7 text-gray-700 group-hover:text-blue-600 transition-all duration-300 group-hover:rotate-90" />
              ) : (
                <Menu className="h-7 w-7 text-gray-700 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110" />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          'lg:hidden transition-all duration-700 ease-in-out overflow-hidden',
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}>
          <div className="bg-gradient-to-b from-white/98 to-blue-50/95 backdrop-blur-2xl border-t border-gray-200/30">
            <div className="container-custom py-8">
              <nav className="space-y-3">
                {navigation.map((item) => {
                  if (item.href.startsWith('/')) {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group flex items-center justify-between px-6 py-4 rounded-2xl text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 font-semibold text-lg transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 w-full text-left relative overflow-hidden"
                      >
                        <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:scale-105">{item.name}</span>
                        <div className="w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 ease-in-out relative z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"></div>
                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500 ease-in-out"></div>
                      </Link>
                    );
                  } else {
                    return (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="group flex items-center justify-between px-6 py-4 rounded-2xl text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 font-semibold text-lg transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 w-full text-left relative overflow-hidden"
                      >
                        <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:scale-105">{item.name}</span>
                        <div className="w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 ease-in-out relative z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"></div>
                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500 ease-in-out"></div>
                      </button>
                    );
                  }
                })}
                <div className="pt-6 border-t border-gray-200">
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:-translate-y-0.5 group relative overflow-hidden"
                  >
                    <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:scale-105">Book Appointment</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"></div>
                    <div className="absolute top-2 left-2 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 ease-in-out"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 ease-in-out delay-100"></div>
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
