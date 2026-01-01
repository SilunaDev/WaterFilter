'use client';

import { useState } from 'react';
import Image from 'next/image';

const faqData = [
  {
    id: 1,
    question: "What sets your water filters apart from others on the market?",
    answer: "Our water filters stand out thanks to their advanced filtration technology, eco-conscious design, and strict quality control. They effectively remove a wide range of contaminants, ensuring safer and healthier drinking water for both home and business use."
  },
  {
    id: 2,
    question: "Are your water filters suitable for residential and commercial use?",
    answer: "Yes! Our filters are designed to serve both households and commercial establishments. Whether you're purifying water for your family or a large facility, we offer models that suit every scale."
  },
  {
    id: 3,
    question: "How often do your water filters need maintenance, and is it easy to do?",
    answer: "Most of our filters require maintenance every 6 to 12 months, depending on usage. We've designed them with user-friendliness in mind—maintenance is quick, hassle-free, and can be done with minimal tools."
  },
  {
    id: 4,
    question: "Can your filters improve the taste and odor of tap water?",
    answer: "Absolutely. Our multi-stage filtration process not only removes harmful contaminants but also enhances taste and smell, providing fresher and cleaner water."
  },
  {
    id: 5,
    question: "Do you offer installation support and guidance?",
    answer: "Yes - and even better, we offer FREE installation and water testing with every purchase. We ensure everything is set up correctly and your water is tested for quality before we leave."
  }
];

export default function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState(1);

  const selectedFAQ = faqData.find(faq => faq.id === selectedQuestion);

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h3 className="text-xl md:text-2xl text-gray-600 mb-2">Have Questions?</h3>
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
            Frequently Asked Questions
          </h2>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Image */}
          <div className="relative w-full h-64 md:h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/faq-image.png"
              alt="FAQ"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side - Selector and Answer Box */}
          <div className="space-y-6">
            
            {/* Question Selector */}
            <div className="space-y-3">
              {faqData.map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => setSelectedQuestion(faq.id)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                    selectedQuestion === faq.id
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm md:text-base pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                        selectedQuestion === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Answer Box */}
            <div 
              className="relative p-8 rounded-lg shadow-2xl bg-gray-900 text-white transition-all duration-500"
              style={{
                borderImage: 'linear-gradient(135deg, #ffffff, #3b82f6, #22c55e, #ffffff) 1',
                borderWidth: '3px',
                borderStyle: 'solid',
              }}
            >
              <div className="absolute -top-1 -left-1 w-20 h-20 bg-gradient-to-br from-white to-blue-500 opacity-20 rounded-tl-lg"></div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-bl from-white to-green-500 opacity-20 rounded-tr-lg"></div>
              <div className="absolute -bottom-1 -left-1 w-20 h-20 bg-gradient-to-tr from-white to-green-500 opacity-20 rounded-bl-lg"></div>
              <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-tl from-white to-blue-500 opacity-20 rounded-br-lg"></div>
              
              <div className="relative z-10">
                <h4 className="text-lg md:text-xl font-bold mb-4 bg-gradient-to-r from-white via-blue-300 to-green-300 bg-clip-text text-transparent">
                  Answer:
                </h4>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                  {selectedFAQ?.answer}
                </p>
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