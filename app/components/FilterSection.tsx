'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function FilterSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="products" className="relative py-20 bg-white overflow-hidden">
      {/* Animated Gradient Title */}
      <div className="text-center mb-16 px-4">
        <h2 
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            background: 'linear-gradient(90deg, #2563eb, #22c55e, #ffffff, #2563eb)',
            backgroundSize: '300% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient-shift 4s ease infinite',
          }}
        >
          THE TRUSTED RO WATER FILTER
          <br />
          PROVIDER IN SRI LANKA
        </h2>
      </div>

      {/* Filter Image with Water Splashes */}
      <div className="relative max-w-7xl mx-auto px-4 mb-16">
        <div className="relative flex items-center justify-center min-h-[600px]">
          
          {/* Left Water Splash Image - Larger size */}
          <div 
            className={`absolute left-0 md:left-5 lg:left-0 top-1/2 -translate-y-1/2 w-64 md:w-80 lg:w-[400px] h-64 md:h-80 lg:h-[400px] transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-45'
            }`}
            style={{
              animation: 'float-left 3s ease-in-out infinite',
            }}
          >
            <Image
              src="/splash-right.png"
              alt="Water Splash"
              fill
              className="object-contain drop-shadow-2xl"
              style={{ transform: 'scaleX(-1)' }}
            />
          </div>

          {/* Center Filter Image */}
          <div 
            className={`relative z-10 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            <div className="relative w-64 h-96 md:w-80 md:h-[500px] lg:w-96 lg:h-[600px]">
              <Image
                src="/filter-image.png"
                alt="RO Water Filter"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
              {/* Glow effect around filter */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-green-500/20 to-transparent rounded-lg blur-3xl -z-10"></div>
            </div>
          </div>

          {/* Right Water Splash Image - Larger size */}
          <div 
            className={`absolute right-0 md:right-5 lg:right-0 top-1/2 -translate-y-1/2 w-64 md:w-80 lg:w-[400px] h-64 md:h-80 lg:h-[400px] transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-45'
            }`}
            style={{
              animation: 'float-right 3s ease-in-out infinite 0.5s',
            }}
          >
            <Image
              src="/splash-right.png"
              alt="Water Splash"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Top Water Splash Image - Now in front */}
          <div 
            className={`absolute top-0 md:top-10 left-1/2 -translate-x-1/2 w-56 md:w-72 lg:w-96 h-56 md:h-72 lg:h-96 z-20 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{
              animation: 'float-top 3.5s ease-in-out infinite 0.3s',
            }}
          >
            <Image
              src="/splash-top1.png"
              alt="Water Splash"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Description Box with Decorative Half Circles */}
      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Top Decorative Half Circles - Mobile Only */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full lg:hidden" style={{ marginTop: '-30px' }}>
          <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer half circle */}
            <path d="M 30 100 A 70 70 0 0 1 170 100" stroke="#60a5fa" strokeWidth="3" fill="none"/>
            {/* Middle half circle */}
            <path d="M 60 100 A 40 40 0 0 1 140 100" stroke="#60a5fa" strokeWidth="3" fill="none"/>
          </svg>
        </div>

        {/* Bottom Decorative Half Circles - Mobile Only */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full lg:hidden" style={{ marginBottom: '-30px' }}>
          <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer half circle */}
            <path d="M 30 0 A 70 70 0 0 0 170 0" stroke="#22c55e" strokeWidth="3" fill="none"/>
            {/* Middle half circle */}
            <path d="M 60 0 A 40 40 0 0 0 140 0" stroke="#22c55e" strokeWidth="3" fill="none"/>
          </svg>
        </div>

        {/* Left Decorative Half Circles - Desktop Only */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full hidden lg:block" style={{ marginLeft: '-60px' }}>
          <svg width="150" height="200" viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer half circle */}
            <path d="M 0 20 A 70 70 0 0 1 0 180" stroke="#60a5fa" strokeWidth="4" fill="none"/>
            {/* Middle half circle */}
            <path d="M 0 50 A 50 50 0 0 1 0 150" stroke="#60a5fa" strokeWidth="4" fill="none"/>
          </svg>
        </div>

        {/* Right Decorative Half Circles - Desktop Only */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full hidden lg:block" style={{ marginRight: '-60px' }}>
          <svg width="150" height="200" viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer half circle */}
            <path d="M 150 20 A 70 70 0 0 0 150 180" stroke="#22c55e" strokeWidth="4" fill="none"/>
            {/* Middle half circle */}
            <path d="M 150 50 A 50 50 0 0 0 150 150" stroke="#22c55e" strokeWidth="4" fill="none"/>
          </svg>
        </div>

        <div 
          className={`relative bg-black text-white p-8 md:p-12 rounded-2xl border-2 border-gray-800 shadow-2xl transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-blue-500 rounded-tl-2xl"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-green-500 rounded-tr-2xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-green-500 rounded-bl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-500 rounded-br-2xl"></div>
          
          <div className="relative z-10">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              RO water filters from Aqua Green Waters use advanced purification technology to remove harmful impurities, ensuring every drop is safe and refreshing.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Tested in real homes and businesses, our filters deliver clean water in six powerful stages— bringing you quality, convenience, and peace of mind.
            </p>
          </div>

          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-green-900/10 rounded-2xl pointer-events-none"></div>
        </div>
      </div>

      {/* 3D Float Animations for Water Splashes */}
      <style jsx global>{`
        @keyframes float-left {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) translateX(-10px) rotate(-5deg);
          }
        }

        @keyframes float-right {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
        }

        @keyframes float-top {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}