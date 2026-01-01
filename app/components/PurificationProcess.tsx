'use client';

import { useEffect, useState } from 'react';

export default function PurificationProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleCard = (cardNumber: number) => {
    // Only toggle on mobile (touch devices)
    if (window.innerWidth < 768) {
      setFlippedCards(prev => 
        prev.includes(cardNumber) 
          ? prev.filter(n => n !== cardNumber)
          : [...prev, cardNumber]
      );
    }
  };

  const steps = [
    {
      number: 1,
      title: '05 Micron Pre Filter',
      description: 'Effectively eliminates common contaminants such as mud, sand, insects, and parasites.',
    },
    {
      number: 2,
      title: '01 Micron Sediment Filter',
      description: 'Removes invisible dirt particles and impurities for crystal-clear water.',
    },
    {
      number: 3,
      title: 'Inline Carbon Filter',
      description: 'Eliminates chlorine, alum, hydrated lime, color, dyes, unpleasant odors, and other dissolved impurities from your water.',
    },
    {
      number: 4,
      title: 'RO (Reverse Osmosis) Filter',
      description: 'Removes harmful heavy metals such as arsenic, cadmium, mercury, and lead, as well as calcium carbonate, magnesium carbonate, and harmful germs from your water supply.',
    },
    {
      number: 5,
      title: 'Post Carbon Filter',
      description: 'Enhances water quality, comfort, and taste for an enjoyable drinking experience.',
    },
    {
      number: 6,
      title: 'Mineral Cartridge',
      description: "The water filter's mineral cartridge adds essential minerals such as calcium, magnesium, potassium, and sodium, providing pure water with a natural alkaline taste and antioxidation benefits.",
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
            Six-Step Purification Process
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {steps.map((step, index) => {
            const isFlipped = flippedCards.includes(step.number);
            
            return (
              <div
                key={step.number}
                onClick={() => toggleCard(step.number)}
                className={`group relative transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Top Decorative Half Circles - Fully inside */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                  <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Outer half circle */}
                    <path 
                      d="M 20 0 A 30 30 0 0 0 80 0" 
                      stroke={step.number % 2 === 0 ? '#22c55e' : '#3b82f6'} 
                      strokeWidth="3" 
                      fill="none"
                    />
                    {/* Inner half circle */}
                    <path 
                      d="M 35 0 A 15 15 0 0 0 65 0" 
                      stroke={step.number % 2 === 0 ? '#22c55e' : '#3b82f6'} 
                      strokeWidth="3" 
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Bottom Decorative Half Circles - Fully inside */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                  <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Outer half circle */}
                    <path 
                      d="M 20 40 A 30 30 0 0 1 80 40" 
                      stroke={step.number % 2 === 0 ? '#22c55e' : '#3b82f6'} 
                      strokeWidth="3" 
                      fill="none"
                    />
                    {/* Inner half circle */}
                    <path 
                      d="M 35 40 A 15 15 0 0 1 65 40" 
                      stroke={step.number % 2 === 0 ? '#22c55e' : '#3b82f6'} 
                      strokeWidth="3" 
                      fill="none"
                    />
                  </svg>
                </div>

                <div 
                  className="relative h-64 rounded-2xl overflow-hidden md:overflow-visible cursor-pointer perspective-1000"
                  style={{
                    boxShadow: step.number % 2 === 0 
                      ? '0 10px 40px rgba(34, 197, 94, 0.3)' 
                      : '0 10px 40px rgba(59, 130, 246, 0.3)',
                  }}
                >
                  {/* Card Front (Default State) */}
                  <div 
                    className={`absolute inset-0 bg-white p-6 flex flex-col items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-x-full ${
                      isFlipped ? 'opacity-0 -translate-x-full' : ''
                    }`}
                    style={{
                      border: '3px solid',
                      borderColor: step.number % 2 === 0 ? '#22c55e' : '#3b82f6',
                      borderRadius: '1rem',
                    }}
                  >
                    {/* Corner Number with Glow */}
                    <div 
                      className="absolute top-4 left-4 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg"
                      style={{
                        background: step.number % 2 === 0 
                          ? 'linear-gradient(135deg, #22c55e, #16a34a)' 
                          : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                        boxShadow: step.number % 2 === 0 
                          ? '0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.4)' 
                          : '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)',
                        animation: 'pulse-glow 2s ease-in-out infinite',
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-2xl font-bold text-center mt-12 px-2"
                      style={{
                        color: step.number % 2 === 0 ? '#16a34a' : '#2563eb',
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Decorative corners */}
                    <div 
                      className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 rounded-tr-2xl"
                      style={{
                        borderColor: step.number % 2 === 0 ? '#22c55e' : '#3b82f6',
                      }}
                    ></div>
                    <div 
                      className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 rounded-bl-2xl"
                      style={{
                        borderColor: step.number % 2 === 0 ? '#22c55e' : '#3b82f6',
                      }}
                    ></div>
                  </div>

                  {/* Card Back (Hover State - Description) */}
                  <div 
                    className={`absolute inset-0 px-6 py-10 flex flex-col justify-center items-center transition-all duration-500 opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 ${
                      isFlipped ? '!opacity-100 !translate-x-0' : ''
                    }`}
                    style={{
                      background: step.number % 2 === 0 
                        ? 'linear-gradient(135deg, #22c55e, #16a34a)' 
                        : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                      borderRadius: '1rem',
                      boxShadow: step.number % 2 === 0 
                        ? '0 0 30px rgba(34, 197, 94, 0.8), inset 0 0 50px rgba(255, 255, 255, 0.1)' 
                        : '0 0 30px rgba(59, 130, 246, 0.8), inset 0 0 50px rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* White Semi-transparent Background for Better Text Visibility */}
                    <div className="absolute inset-4 bg-white/20 backdrop-blur-sm rounded-xl"></div>

                    {/* Step Number Badge */}
                    <div 
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg font-bold shadow-lg z-20"
                      style={{
                        color: step.number % 2 === 0 ? '#16a34a' : '#2563eb',
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Description */}
                    <div className="relative z-20 w-full">
                      <p 
                        className="text-white text-base md:text-base leading-relaxed text-center font-bold"
                        style={{ 
                          textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)',
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Outer Glow Effect */}
                  <div 
                    className={`absolute -inset-1 rounded-2xl transition-opacity duration-500 -z-10 blur-xl opacity-0 group-hover:opacity-100 ${
                      isFlipped ? 'opacity-100' : ''
                    }`}
                    style={{
                      background: step.number % 2 === 0 
                        ? 'linear-gradient(135deg, #22c55e, #16a34a)' 
                        : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
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

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.6);
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}