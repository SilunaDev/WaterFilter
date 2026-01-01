'use client';

import { useState } from 'react';
import Image from 'next/image';

// You can easily add more images to this array
const customerImages = [
  '/1.jpeg',
  '/2.jpeg',
  '/3.jpeg',
  '/4.jpeg',
  '/5.jpeg',
];

export default function RecentCustomers() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle image

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? customerImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === customerImages.length - 1 ? 0 : prev + 1));
  };

  const getImageIndex = (offset: number) => {
    const index = currentIndex + offset;
    if (index < 0) return customerImages.length + index;
    if (index >= customerImages.length) return index - customerImages.length;
    return index;
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{
              background: 'linear-gradient(90deg, #2563eb, #22c55e, #2563eb)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 4s ease infinite',
            }}
          >
            Our Recent Customers
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          
          {/* Top Decorative Circles (Mobile) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none md:hidden">
            <svg width="300" height="300" viewBox="0 0 300 300" className="opacity-20">
              <circle cx="150" cy="150" r="120" fill="none" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="150" cy="150" r="90" fill="none" stroke="#22c55e" strokeWidth="2" />
              <circle cx="150" cy="150" r="60" fill="none" stroke="#eab308" strokeWidth="2" />
            </svg>
          </div>

          {/* Bottom Decorative Circles (Mobile) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none md:hidden">
            <svg width="300" height="300" viewBox="0 0 300 300" className="opacity-20">
              <circle cx="150" cy="150" r="120" fill="none" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="150" cy="150" r="90" fill="none" stroke="#22c55e" strokeWidth="2" />
              <circle cx="150" cy="150" r="60" fill="none" stroke="#eab308" strokeWidth="2" />
            </svg>
          </div>

          {/* Left Decorative Circles (Desktop) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none hidden md:block">
            <svg width="400" height="400" viewBox="0 0 400 400" className="opacity-20">
              <circle cx="200" cy="200" r="150" fill="none" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="#22c55e" strokeWidth="2" />
              <circle cx="200" cy="200" r="90" fill="none" stroke="#eab308" strokeWidth="2" />
            </svg>
          </div>

          {/* Right Decorative Circles (Desktop) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 pointer-events-none hidden md:block">
            <svg width="400" height="400" viewBox="0 0 400 400" className="opacity-20">
              <circle cx="200" cy="200" r="150" fill="none" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="#22c55e" strokeWidth="2" />
              <circle cx="200" cy="200" r="90" fill="none" stroke="#eab308" strokeWidth="2" />
            </svg>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 md:left-4 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-green-500 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Images Container */}
          <div className="relative w-full max-w-5xl h-80 md:h-[500px] flex items-center justify-center">
            
            {/* Left Image (75% visible) */}
            <div className="absolute left-0 md:left-8 w-48 h-48 md:w-72 md:h-72 z-10 transition-all duration-500 opacity-75">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={customerImages[getImageIndex(-1)]}
                  alt="Customer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>
              </div>
            </div>

            {/* Center Image (fully visible, larger with more height) */}
            <div className="relative w-64 h-72 md:w-96 md:h-[450px] z-30 transition-all duration-500">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl ring-4 ring-blue-500">
                <Image
                  src={customerImages[currentIndex]}
                  alt="Customer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Image (75% visible) */}
            <div className="absolute right-0 md:right-8 w-48 h-48 md:w-72 md:h-72 z-10 transition-all duration-500 opacity-75">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={customerImages[getImageIndex(1)]}
                  alt="Customer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>
              </div>
            </div>

          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-4 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-green-500 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

        </div>

      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}