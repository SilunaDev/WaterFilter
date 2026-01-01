'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ImageShowcase() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2
                        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
                        Our Installations
                    </h2>
                </div>

                {/* Images Container */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-16 items-center py-16 md:py-0">

                    {/* Left Decorative Lines - Desktop Only */}
                    <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full" style={{ marginLeft: '-80px' }}>
                        <svg width="120" height="400" viewBox="0 0 120 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="10" y1="50" x2="10" y2="350" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
                            <line x1="40" y1="80" x2="40" y2="320" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
                            <line x1="70" y1="110" x2="70" y2="290" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                            <path d="M 10 100 Q 40 100 40 130" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6" />
                            <path d="M 40 150 Q 70 150 70 180" stroke="#22c55e" strokeWidth="3" fill="none" opacity="0.6" />
                            <path d="M 10 250 Q 40 250 40 220" stroke="#22c55e" strokeWidth="3" fill="none" opacity="0.6" />
                            <path d="M 40 270 Q 70 270 70 240" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6" />
                        </svg>
                    </div>

                    {/* Right Decorative Lines - Desktop Only */}
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full" style={{ marginRight: '-80px' }}>
                        <svg width="120" height="400" viewBox="0 0 120 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="110" y1="50" x2="110" y2="350" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
                            <line x1="80" y1="80" x2="80" y2="320" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
                            <line x1="50" y1="110" x2="50" y2="290" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                            <path d="M 110 100 Q 80 100 80 130" stroke="#22c55e" strokeWidth="3" fill="none" opacity="0.6" />
                            <path d="M 80 150 Q 50 150 50 180" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6" />
                            <path d="M 110 250 Q 80 250 80 220" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6" />
                            <path d="M 80 270 Q 50 270 50 240" stroke="#22c55e" strokeWidth="3" fill="none" opacity="0.6" />
                        </svg>
                    </div>

                    {/* Left Image */}
                    <div
                        className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                            }`}
                    >
                        <div className="relative">
                            {/* Lines coming from TOP */}
                            <div className="absolute left-1/2 -translate-x-1/2 -top-24 md:-top-32 w-20 h-24 md:h-32 z-0 flex justify-center gap-4">
                                <div className="w-1.5 h-full bg-gradient-to-b from-transparent via-[#22c55e] to-[#22c55e] rounded-full"></div>
                                <div className="w-1.5 h-full bg-gradient-to-b from-transparent via-[#3b82f6] to-[#3b82f6] rounded-full"></div>
                                <div className="w-1.5 h-full bg-gradient-to-b from-transparent via-[#eab308] to-[#eab308] rounded-full"></div>
                            </div>

                            {/* Image */}
                            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] z-10 overflow-hidden rounded-lg shadow-2xl">
                                <Image
                                    src="/installation-left.jpeg"
                                    alt="Water Filter Installation"
                                    fill
                                    className="object-contain bg-white"
                                />
                                
                                {/* Text Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-20 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                                    <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Home Installation</h3>
                                    <p className="text-xs md:text-sm">Professional setup for residential spaces</p>
                                </div>
                            </div>

                            {/* Lines going to BOTTOM */}
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-24 md:-bottom-32 w-20 h-24 md:h-32 z-0 flex justify-center gap-4">
                                <div className="w-1.5 h-full bg-gradient-to-t from-transparent via-[#22c55e] to-[#22c55e] rounded-full"></div>
                                <div className="w-1.5 h-full bg-gradient-to-t from-transparent via-[#3b82f6] to-[#3b82f6] rounded-full"></div>
                                <div className="w-1.5 h-full bg-gradient-to-t from-transparent via-[#eab308] to-[#eab308] rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div
                        className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                            }`}
                    >
                        <div className="relative">
                            {/* Lines coming from TOP */}
                            <div className="absolute left-1/2 -translate-x-1/2 -top-24 md:-top-32 w-20 h-24 md:h-32 z-0 flex justify-center gap-4">
                                <div className="w-1.5 h-full bg-gradient-to-b from-transparent via-[#22c55e] to-[#22c55e] rounded-full"></div>
                                <div className="w-1.5 h-full bg-gradient-to-b from-transparent via-[#3b82f6] to-[#3b82f6] rounded-full"></div>
                                <div className="w-1.5 h-full bg-gradient-to-b from-transparent via-[#eab308] to-[#eab308] rounded-full"></div>
                            </div>

                            {/* Image */}
                            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] z-10 overflow-hidden rounded-lg shadow-2xl">
                                <Image
                                    src="/installation-right.png"
                                    alt="Commercial Water Filter"
                                    fill
                                    className="object-contain bg-white"
                                />
                                
                                {/* Text Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-20 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                                    <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Commercial Setup</h3>
                                    <p className="text-xs md:text-sm">Scalable solutions for businesses</p>
                                </div>
                            </div>

                            {/* Lines going to BOTTOM */}
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-24 md:-bottom-32 w-20 h-24 md:h-32 z-0 flex justify-center gap-4">
                                <div className="w-1.5 h-full bg-gradient-to-t from-transparent via-[#22c55e] to-[#22c55e] rounded-full"></div>
                                <div className="w-1.5 h-full bg-gradient-to-t from-transparent via-[#3b82f6] to-[#3b82f6] rounded-full"></div>
                                <div className="w-1.5 h-full bg-gradient-to-t from-transparent via-[#eab308] to-[#eab308] rounded-full"></div>
                            </div>
                        </div>
                    </div>

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