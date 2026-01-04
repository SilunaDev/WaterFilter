'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [clickedIcon, setClickedIcon] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleIconClick = (icon: string) => {
    setClickedIcon(icon);
    setTimeout(() => setClickedIcon(null), 1000);
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-48 h-24 mb-4">
              <Image
                src="/logo.png"
                alt="Aqua Green Waters"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              <li>
                <a 
                  href="#" 
                  className="relative inline-block text-gray-700 transition-colors duration-300 group"
                  onMouseEnter={() => setHoveredLink('quick-1')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-green-500 group-hover:to-yellow-500">
                    Home
                  </span>
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 transition-all duration-300 ${
                      hoveredLink === 'quick-1' ? 'w-full' : 'w-0'
                    }`}
                  ></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="relative inline-block text-gray-700 transition-colors duration-300 group"
                  onMouseEnter={() => setHoveredLink('quick-2')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-green-500 group-hover:to-yellow-500">
                    About Us
                  </span>
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 transition-all duration-300 ${
                      hoveredLink === 'quick-2' ? 'w-full' : 'w-0'
                    }`}
                  ></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="relative inline-block text-gray-700 transition-colors duration-300 group"
                  onMouseEnter={() => setHoveredLink('quick-3')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-green-500 group-hover:to-yellow-500">
                    Customers
                  </span>
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 transition-all duration-300 ${
                      hoveredLink === 'quick-3' ? 'w-full' : 'w-0'
                    }`}
                  ></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="relative inline-block text-gray-700 transition-colors duration-300 group"
                  onMouseEnter={() => setHoveredLink('quick-4')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-green-500 group-hover:to-yellow-500">
                    Our Products
                  </span>
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 transition-all duration-300 ${
                      hoveredLink === 'quick-4' ? 'w-full' : 'w-0'
                    }`}
                  ></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Legal
            </h3>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              <li>
                <a 
                  href="#" 
                  className="relative inline-block text-gray-700 transition-colors duration-300 group"
                  onMouseEnter={() => setHoveredLink('legal-1')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-green-500 group-hover:to-yellow-500">
                    Home
                  </span>
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 transition-all duration-300 ${
                      hoveredLink === 'legal-1' ? 'w-full' : 'w-0'
                    }`}
                  ></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="relative inline-block text-gray-700 transition-colors duration-300 group"
                  onMouseEnter={() => setHoveredLink('legal-2')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-green-500 group-hover:to-yellow-500">
                    About Us
                  </span>
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 transition-all duration-300 ${
                      hoveredLink === 'legal-2' ? 'w-full' : 'w-0'
                    }`}
                  ></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="relative inline-block text-gray-700 transition-colors duration-300 group"
                  onMouseEnter={() => setHoveredLink('legal-3')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-green-500 groupHover:to-yellow-500">
                    Customers
                  </span>
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 transition-all duration-300 ${
                      hoveredLink === 'legal-3' ? 'w-full' : 'w-0'
                    }`}
                  ></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="relative inline-block text-gray-700 transition-colors duration-300 group"
                  onMouseEnter={() => setHoveredLink('legal-4')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="group-hover:text-transparent group-hover:bg-clip-text groupHover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-green-500 group-hover:to-yellow-500">
                    Our Products
                  </span>
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 transition-all duration-300 ${
                      hoveredLink === 'legal-4' ? 'w-full' : 'w-0'
                    }`}
                  ></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info with Social Icons */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Contact Info
            </h3>
            
            {/* Contact Details */}
            <div className="mb-4 space-y-2">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Phone:</span> +94 78 105 4154
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Phone:</span> +94 76 743 0369
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Email:</span> aquagreenwaters@gmail.com
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 mb-4 justify-center md:justify-start">
              
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="relative group"
                onMouseEnter={() => setHoveredIcon('facebook')}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={() => handleIconClick('facebook')}
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                {/* Line Animation */}
                <div 
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 rounded-full transition-all duration-300 ${
                    hoveredIcon === 'facebook' || clickedIcon === 'facebook' ? 'w-full' : 'w-0'
                  }`}
                  style={{
                    background: 'linear-gradient(90deg, #3b82f6, #22c55e, #eab308)',
                    backgroundSize: '200% 100%',
                    animation: hoveredIcon === 'facebook' || clickedIcon === 'facebook' ? 'gradient-flow 2s linear infinite' : 'none',
                  }}
                ></div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="relative group"
                onMouseEnter={() => setHoveredIcon('instagram')}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={() => handleIconClick('instagram')}
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group_hover:shadow-xl">
                  <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                {/* Line Animation */}
                <div 
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 rounded-full transition-all duration-300 ${
                    hoveredIcon === 'instagram' || clickedIcon === 'instagram' ? 'w-full' : 'w-0'
                  }`}
                  style={{
                    background: 'linear-gradient(90deg, #3b82f6, #22c55e, #eab308)',
                    backgroundSize: '200% 100%',
                    animation: hoveredIcon === 'instagram' || clickedIcon === 'instagram' ? 'gradient-flow 2s linear infinite' : 'none',
                  }}
                ></div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/94781054154"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="relative group"
                onMouseEnter={() => setHoveredIcon('whatsapp')}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={() => handleIconClick('whatsapp')}
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 group_hover:scale-110 group-hover:shadow-xl">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                {/* Line Animation */}
                <div 
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 rounded-full transition-all duration-300 ${
                    hoveredIcon === 'whatsapp' || clickedIcon === 'whatsapp' ? 'w-full' : 'w-0'
                  }`}
                  style={{
                    background: 'linear-gradient(90deg, #3b82f6, #22c55e, #eab308)',
                    backgroundSize: '200% 100%',
                    animation: hoveredIcon === 'whatsapp' || clickedIcon === 'whatsapp' ? 'gradient-flow 2s linear infinite' : 'none',
                  }}
                ></div>
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-gray-600 text-sm">
            Copyright © 2025 Aqua Green Waters | Powered by{' '}
            <a 
              href="https://webwise.media" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-block text-blue-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:via-green-500 hover:to-yellow-500 transition-all duration-300 group"
            >
              WebWise Media
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Animations */}
      <style jsx global>{`
        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </footer>
  );
}