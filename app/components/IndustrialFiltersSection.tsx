'use client';

import { useEffect, useState } from 'react';

export default function IndustrialFiltersSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Line 1 - Blue to Yellow */}
        <div 
          className={`relative w-full h-1 md:h-1.5 rounded-full transition-all duration-1000 delay-300 mb-12 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            background: 'linear-gradient(90deg, #3b82f6 0%, #eab308 50%, #3b82f6 100%)',
            backgroundSize: '200% 100%',
            animation: 'gradient-flow 3s ease-in-out infinite, glow-pulse 2s ease-in-out infinite',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(234, 179, 8, 0.4)',
          }}
        >
          {/* Dots for Line 1 */}
          <div 
            className={`absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-500 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }}
          ></div>
          <div 
            className={`absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-yellow-500 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{
              boxShadow: '0 0 20px rgba(234, 179, 8, 0.8)',
              animation: 'pulse-dot 2s ease-in-out infinite 0.5s',
            }}
          ></div>
        </div>

        {/* Middle Text - Between Lines */}
        <div className="text-center my-12 space-y-6">
          <h2 
            className={`text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
            style={{
              background: 'linear-gradient(90deg, #2563eb, #22c55e, #2563eb)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 4s ease infinite',
            }}
          >
            Sri Lanka Number 1 Industrial Water Filters
          </h2>
          <h3 
            className={`text-2xl md:text-3xl lg:text-4xl font-bold transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{
              background: 'linear-gradient(90deg, #22c55e, #3b82f6, #22c55e)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 4s ease infinite',
            }}
          >
            500 - 5000 liters of water per day
          </h3>
        </div>

        {/* Line 2 - White to Blue */}
        <div 
          className={`relative w-full h-1 md:h-1.5 rounded-full transition-all duration-1000 delay-500 mt-12 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            background: 'linear-gradient(90deg, #ffffff 0%, #3b82f6 50%, #ffffff 100%)',
            backgroundSize: '200% 100%',
            animation: 'gradient-flow-reverse 3s ease-in-out infinite, glow-pulse-2 2s ease-in-out infinite 0.5s',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(59, 130, 246, 0.5)',
          }}
        >
          {/* Dots for Line 2 */}
          <div 
            className={`absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-white transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
              animation: 'pulse-dot 2s ease-in-out infinite 1s',
            }}
          ></div>
          <div 
            className={`absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-400 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{
              boxShadow: '0 0 20px rgba(96, 165, 250, 0.8)',
              animation: 'pulse-dot 2s ease-in-out infinite 1.5s',
            }}
          ></div>
        </div>

      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes gradient-flow {
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

        @keyframes gradient-flow-reverse {
          0% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(234, 179, 8, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.9), 0 0 60px rgba(234, 179, 8, 0.6);
          }
        }

        @keyframes glow-pulse-2 {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(59, 130, 246, 0.8);
          }
        }

        @keyframes pulse-dot {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.8;
          }
        }

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