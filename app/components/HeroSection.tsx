'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [currentLine, setCurrentLine] = useState(0);

  const lines = ['Pure Water, Pure Life', 'Clean Water You Can Trust'];

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(lineInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-label="Background water flowing video"
        >
          <source src="/water-video.mp4" type="video/mp4" />
          <track kind="captions" src="/captions.vtt" srcLang="en" label="English" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Animated Headlines */}
        <div className="h-24 md:h-32 mb-8 flex items-center justify-center">
          {lines.map((line, index) => (
            <h1
              key={index}
              className={`absolute text-4xl md:text-6xl lg:text-7xl font-bold text-white transition-all duration-1000 transform ${
                currentLine === index
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                textShadow: '0 0 20px rgba(37, 99, 235, 0.5), 0 0 40px rgba(34, 197, 94, 0.3)',
              }}
            >
              {line}
            </h1>
          ))}
        </div>

        {/* Description - Always Visible */}
        <div>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12 px-4">
            At Aqua Green Waters, we bring you advanced RO water purification systems designed to keep your family healthy and hydrated. Trusted by homes and businesses across Sri Lanka, our solutions ensure safe, clean, and great-tasting water—every single day.
          </p>
        </div>

        {/* CTA Buttons - Always Visible with Hover Effects */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="#buy"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] w-full sm:w-auto"
          >
            <span className="relative z-10">BUY NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 animate-pulse-glow"></div>
          </Link>

          <Link
            href="#products"
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] w-full sm:w-auto"
          >
            <span className="relative z-10">EXPLORE PRODUCTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 animate-pulse-glow"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}