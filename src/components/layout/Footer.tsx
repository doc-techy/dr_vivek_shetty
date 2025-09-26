import Image from 'next/image';

export function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vivek-shetty-9ab883268/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:bg-blue-600',
      bgColor: 'bg-blue-700'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/dr.vivekshetty',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.016 6.756.072 5.526.127 4.74.323 4.077.609a5.906 5.906 0 00-2.156 1.4A5.901 5.901 0 00.525 4.165C.239 4.828.043 5.614-.012 6.844-.068 8.077-.084 8.484-.084 12.105c0 3.621.016 4.028.072 5.261.056 1.23.252 2.016.538 2.679a5.901 5.901 0 001.4 2.156c.663.433 1.449.629 2.679.685 1.233.056 1.64.072 5.261.072 3.621 0 4.028-.016 5.261-.072 1.23-.056 2.016-.252 2.679-.538a5.906 5.906 0 002.156-1.4c.433-.663.629-1.449.685-2.679.056-1.233.072-1.64.072-5.261 0-3.621-.016-4.028-.072-5.261-.056-1.23-.252-2.016-.538-2.679a5.901 5.901 0 00-1.4-2.156A5.906 5.906 0 0019.835.525C19.172.239 18.386.043 17.156-.012 15.923-.068 15.516-.084 11.895-.084L12.017 0zm-.105 2.183c3.549 0 3.97.016 5.378.072 1.298.059 2.003.274 2.472.456.621.242 1.065.531 1.532.998.467.467.756.911.998 1.532.182.469.397 1.174.456 2.472.056 1.408.072 1.829.072 5.378 0 3.549-.016 3.97-.072 5.378-.059 1.298-.274 2.003-.456 2.472a4.13 4.13 0 01-.998 1.532 4.134 4.134 0 01-1.532.998c-.469.182-1.174.397-2.472.456-1.408.056-1.829.072-5.378.072-3.549 0-3.97-.016-5.378-.072-1.298-.059-2.003-.274-2.472-.456a4.134 4.134 0 01-1.532-.998 4.13 4.13 0 01-.998-1.532c-.182-.469-.397-1.174-.456-2.472-.056-1.408-.072-1.829-.072-5.378 0-3.549.016-3.97.072-5.378.059-1.298.274-2.003.456-2.472.242-.621.531-1.065.998-1.532a4.134 4.134 0 011.532-.998c.469-.182 1.174-.397 2.472-.456 1.408-.056 1.829-.072 5.378-.072l-.105 2.183z"/>
          <path d="M12.017 15.33a3.33 3.33 0 110-6.66 3.33 3.33 0 010 6.66zM12.017 7.487a4.843 4.843 0 100 9.686 4.843 4.843 0 000-9.686zM18.685 6.051a1.134 1.134 0 11-2.268 0 1.134 1.134 0 012.268 0z"/>
        </svg>
      ),
      color: 'hover:bg-pink-600',
      bgColor: 'bg-pink-700'
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@drvivekshetty',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'hover:bg-red-600',
      bgColor: 'bg-red-700'
    },
  ];

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Consistent Fading Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-200/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-orange-200/10 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      {/* Top accent line */}
      <div className="relative z-10 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-8 mb-8">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-3 shadow-lg overflow-hidden">
                <Image
                  src="/images/dr_vivek_profile_pic.jpg"
                  alt="Dr. Vivek Shetty"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Vivek Shetty</h3>
                <p className="text-primary-300 text-sm font-medium">Senior Consultant - Head & Neck Oncology</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Senior Consultant in Head & Neck Oncology at SPARSH Hospital, Bangalore. 
              MBBS, MS General Surgery, Fellowship in Head and Neck Surgical Oncology with 11 years of experience.
            </p>
            
            {/* Social Media Links */}
            <div>
              <h5 className="text-white font-semibold mb-3 text-sm">Connect with Dr. Shetty</h5>
              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bgColor} ${social.color} p-2.5 rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-lg group`}
                    title={`Follow on ${social.name}`}
                    aria-label={`Follow Dr. Vivek Shetty on ${social.name}`}
                  >
                    <span className="group-hover:scale-110 transition-transform block">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <svg className="w-4 h-4 mr-3 text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <a href="tel:+91‪9886432371‬" className="hover:text-primary-300 transition-colors text-sm">+91 ‪9886432371‬</a>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-4 h-4 mr-3 text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:vivekshetty.headneck@gmail.com" className="hover:text-primary-300 transition-colors text-sm break-all">vivekshetty.headneck@gmail.com</a>
              </div>
              <div className="flex items-start text-gray-300">
                <svg className="w-4 h-4 mr-3 text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-sm">SPARSH Hospital, Hennur Road, Bangalore</span>
              </div>
              <div className="flex items-start text-gray-300">
                <svg className="w-4 h-4 mr-3 text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-sm">Docube Clinic, Bangalore</span>
              </div>

            </div>
          </div>
          
          {/* Mobile Side-by-Side Layout for Quick Links and Services */}
          <div className="grid grid-cols-2 gap-4 md:contents">
            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-primary-300 transition-colors duration-200 text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-primary-300 transition-colors duration-200 text-sm">
                  About Dr. Vivek Shetty
                  </a>
                </li>
                <li>
                  <a href="#Services" className="text-gray-300 hover:text-primary-300 transition-colors duration-200 text-sm">
                    Services
                  </a>
                </li>

                <li>
                  <a href="#videos" className="text-gray-300 hover:text-primary-300 transition-colors duration-200 text-sm">
                    Educational Videos
                  </a>
                </li>
                <li>
                  <a href="/appointment" className="text-gray-300 hover:text-primary-300 transition-colors duration-200 text-sm">
                    Book Appointment
                  </a>
                </li>

              </ul>
            </div>
            
            {/* Services & Credentials */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-300 text-sm">Oral cancer management</li>
                <li className="text-gray-300 text-sm">Thyroid, parathyroid problems</li>
                <li className="text-gray-300 text-sm">Throat cancer management</li>
                <li className="text-gray-300 text-sm">Parotid, salivary gland tumours</li>
                <li className="text-gray-300 text-sm">Skin and Scalp Tumours</li>
                <li className="text-gray-300 text-sm">Neck and jaw Tumours</li>
                <li className="text-gray-300 text-sm">Microvascular Surgery</li>
              </ul>

            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
          
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs leading-relaxed max-w-4xl mx-auto">
            © 2025 Dr. Vivek Shetty. All rights reserved.
            </p>
          </div>
      </div>
    </footer>
  );
} 