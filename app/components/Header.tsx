'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero section (approximately viewport height)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'CUSTOMERS', href: '#customers' },
    { name: 'SERVICES', href: '#services' },
    { name: 'OUR PRODUCTS', href: '#products' },
  ];

  return (
    <header 
      role="banner"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-2 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Aqua Green Waters Logo"
            width={100}
            height={100}
            priority
          />
          <div className="text-2xl font-bold">
            <span className="text-blue-600">Aqua</span>
            <span className="text-green-600"> Green</span>
            <span className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}> Waters</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`relative font-medium text-sm tracking-wide transition-all duration-300 group ${
                  isScrolled 
                    ? 'text-black hover:text-blue-600' 
                    : 'text-white hover:text-blue-400'
                }`}
              >
                {item.name}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{
                    background: 'linear-gradient(90deg, #3b82f6, #22c55e, #eab308)',
                    backgroundSize: '200% 100%',
                    animation: 'gradient-flow 2s linear infinite',
                    boxShadow: '0 0 8px rgba(37,99,235,0.8)',
                  }}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 transition-all duration-300 ${
            isScrolled ? 'bg-black' : 'bg-white'
          } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 ${
            isScrolled ? 'bg-black' : 'bg-white'
          } ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 ${
            isScrolled ? 'bg-black' : 'bg-white'
          } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className={`backdrop-blur-sm border-t py-4 px-4 space-y-4 ${
          isScrolled 
            ? 'bg-white border-gray-200' 
            : 'bg-black/90 border-white/20'
        }`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`block font-medium text-sm transition-colors ${
                  isScrolled
                    ? 'text-black hover:text-blue-600'
                    : 'text-white hover:text-blue-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

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
    </header>
  );
}