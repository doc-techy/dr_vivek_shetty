'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      const headerHeight = 80; // Height of fixed header (h-20)
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
        className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-blue-600 to-blue-700 backdrop-blur-xl shadow-xl"
      >
        <div className="container-custom">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('#home')}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-white/30">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div className="whitespace-nowrap">
                <h1 className="text-3xl font-display font-bold text-white">
                  Dr. Vivek Shetty
                </h1>
              </div>
            </button>

            {/* Desktop Navigation & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <nav className="flex items-center space-x-2">
                {navigation.map((item, index) => {
                  const isHomepage = pathname === '/';
                  const isExternalPage = item.href.startsWith('/');
                  const isAnchorLink = item.href.startsWith('#');
                  
                  if (isExternalPage || (isAnchorLink && !isHomepage)) {
                    // For external pages or anchor links when not on homepage, use Link
                    const linkHref = isAnchorLink && !isHomepage ? `/${item.href}` : item.href;
                    return (
                      <Link
                        key={item.name}
                        href={linkHref}
                        className="px-5 py-3 rounded-lg text-white hover:text-blue-200 font-semibold text-base transition-all duration-300"
                      >
                        {item.name}
                      </Link>
                    );
                  } else {
                    // For anchor links on homepage, use button with scroll
                    return (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="px-5 py-3 rounded-lg text-white hover:text-blue-200 font-semibold text-base transition-all duration-300"
                      >
                        {item.name}
                      </button>
                    );
                  }
                })}
              </nav>

              {/* CTA Button */}
              {pathname === '/' ? (
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="px-3 py-2 bg-white text-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-all duration-300 whitespace-nowrap"
                >
                  Book Appointment
                </button>
              ) : (
                <Link
                  href="/appointment"
                  className="px-3 py-2 bg-white text-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-all duration-300 whitespace-nowrap"
                >
                  Book Appointment
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-3 rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white transition-all duration-300" />
              ) : (
                <Menu className="h-6 w-6 text-white transition-all duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          'lg:hidden transition-all duration-700 ease-in-out overflow-hidden',
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}>
          <div className="bg-gradient-to-b from-blue-700/98 to-blue-800/95 backdrop-blur-2xl border-t border-blue-500/30">
            <div className="container-custom py-8">
              <nav className="space-y-3">
                {navigation.map((item) => {
                  const isHomepage = pathname === '/';
                  const isExternalPage = item.href.startsWith('/');
                  const isAnchorLink = item.href.startsWith('#');
                  
                  if (isExternalPage || (isAnchorLink && !isHomepage)) {
                    // For external pages or anchor links when not on homepage, use Link
                    const linkHref = isAnchorLink && !isHomepage ? `/${item.href}` : item.href;
                    return (
                      <Link
                        key={item.name}
                        href={linkHref}
                        className="block px-5 py-4 rounded-lg text-white hover:text-blue-200 font-semibold text-lg transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  } else {
                    // For anchor links on homepage, use button with scroll
                    return (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="block px-5 py-4 rounded-lg text-white hover:text-blue-200 font-semibold text-lg transition-all duration-300 w-full text-left"
                      >
                        {item.name}
                      </button>
                    );
                  }
                })}
                <div className="pt-6 border-t border-blue-400/30">
                  {pathname === '/' ? (
                    <button
                      onClick={() => scrollToSection('#contact')}
                      className="flex items-center justify-center w-full px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold text-base hover:bg-blue-50 transition-all duration-300"
                    >
                      Book Appointment
                    </button>
                  ) : (
                    <Link
                      href="/appointment"
                      className="flex items-center justify-center w-full px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold text-base hover:bg-blue-50 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Book Appointment
                    </Link>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
