'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function WhyUsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: '/icons/purification.png',
      title: '100% RO Purification Technology',
    },
    {
      icon: '/icons/trust.png',
      title: 'Free Installation & After-Sales Support',
    },
    {
      icon: '/icons/trust.png',
      title: 'Trusted by Homes & Businesses Across Sri Lanka',
    },
    {
      icon: '/icons/eco.png',
      title: 'Eco-Friendly & Cost-Effective Solutions',
    },
  ];

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-sm md:text-base text-gray-600 mb-2 font-medium">
            What Makes Us Different
          </p>
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              color: '#0284c7',
            }}
          >
            Why Aqua Green Waters?
          </h2>
        </div>

        {/* Features Grid with Connected Lines */}
        <div className="relative">
          {/* Glowing Gradient Line - Desktop - Centered through circles */}
          <div className="hidden md:block absolute top-[80px] left-[10%] right-[10%] h-2 z-0">
            <div 
              className="h-full w-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #3b82f6 0%, #22c55e 50%, #3b82f6 100%)',
                boxShadow: '0 0 25px rgba(59, 130, 246, 0.8), 0 0 50px rgba(34, 197, 94, 0.6), 0 0 75px rgba(59, 130, 246, 0.4)',
                animation: 'line-glow 3s ease-in-out infinite',
              }}
            ></div>
          </div>

          {/* Features */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center text-center transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Icon Circle with Colorful Glow */}
                <div 
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white flex items-center justify-center mb-6 shadow-2xl z-10 transition-all duration-500 hover:scale-110"
                  style={{
                    boxShadow: index % 2 === 0 
                      ? '0 0 40px rgba(59, 130, 246, 0.7), 0 0 80px rgba(37, 99, 235, 0.5), 0 10px 30px rgba(59, 130, 246, 0.3)' 
                      : '0 0 40px rgba(34, 197, 94, 0.7), 0 0 80px rgba(22, 163, 74, 0.5), 0 10px 30px rgba(34, 197, 94, 0.3)',
                  }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 relative">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Animated Pulse Rings - Multiple layers */}
                  <div 
                    className="absolute inset-0 rounded-full animate-ping opacity-30"
                    style={{
                      background: index % 2 === 0 
                        ? 'radial-gradient(circle, rgba(59, 130, 246, 0.6), rgba(37, 99, 235, 0.3), transparent)' 
                        : 'radial-gradient(circle, rgba(34, 197, 94, 0.6), rgba(22, 163, 74, 0.3), transparent)',
                      animationDuration: '2s',
                    }}
                  ></div>
                  
                  {/* Second Pulse Ring */}
                  <div 
                    className="absolute inset-0 rounded-full animate-ping opacity-20"
                    style={{
                      background: index % 2 === 0 
                        ? 'radial-gradient(circle, rgba(59, 130, 246, 0.8), rgba(96, 165, 250, 0.4), transparent)' 
                        : 'radial-gradient(circle, rgba(34, 197, 94, 0.8), rgba(74, 222, 128, 0.4), transparent)',
                      animationDuration: '2.5s',
                      animationDelay: '0.5s',
                    }}
                  ></div>

                  {/* Static Outer Glow */}
                  <div 
                    className="absolute -inset-4 rounded-full blur-xl opacity-40 animate-pulse"
                    style={{
                      background: index % 2 === 0 
                        ? 'radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent)' 
                        : 'radial-gradient(circle, rgba(34, 197, 94, 0.6), transparent)',
                      animationDuration: '3s',
                    }}
                  ></div>
                </div>

                {/* Title */}
                <h3 
                  className="text-lg md:text-xl font-semibold max-w-xs"
                  style={{
                    color: index % 2 === 0 ? '#0284c7' : '#16a34a',
                  }}
                >
                  {feature.title}
                </h3>

                {/* Vertical connecting line for mobile */}
                {index < features.length - 1 && (
                  <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-2 h-8">
                    <div 
                      className="w-full h-full rounded-full"
                      style={{
                        background: 'linear-gradient(180deg, #3b82f6, #22c55e)',
                        boxShadow: '0 0 15px rgba(59, 130, 246, 0.7), 0 0 30px rgba(34, 197, 94, 0.5)',
                      }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes line-glow {
          0%, 100% {
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.8), 0 0 50px rgba(34, 197, 94, 0.6), 0 0 75px rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 35px rgba(59, 130, 246, 1), 0 0 70px rgba(34, 197, 94, 0.8), 0 0 100px rgba(59, 130, 246, 0.6);
          }
        }
      `}</style>
    </section>
  );
}