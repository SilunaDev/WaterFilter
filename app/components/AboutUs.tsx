'use client';

import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Top Decorative Circles (Mobile) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none lg:hidden">
          <svg width="300" height="300" viewBox="0 0 300 300" className="opacity-20">
            <circle cx="150" cy="150" r="120" fill="none" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="150" cy="150" r="90" fill="none" stroke="#22c55e" strokeWidth="2" />
            <circle cx="150" cy="150" r="60" fill="none" stroke="#eab308" strokeWidth="2" />
          </svg>
        </div>

        {/* Bottom Decorative Circles (Mobile) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none lg:hidden">
          <svg width="300" height="300" viewBox="0 0 300 300" className="opacity-20">
            <circle cx="150" cy="150" r="120" fill="none" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="150" cy="150" r="90" fill="none" stroke="#22c55e" strokeWidth="2" />
            <circle cx="150" cy="150" r="60" fill="none" stroke="#eab308" strokeWidth="2" />
          </svg>
        </div>

        {/* Decorative Circles - Left (Desktop) */}
        <div className="absolute left-0 top-1/3 -translate-x-1/2 pointer-events-none hidden lg:block">
          <svg width="400" height="400" viewBox="0 0 400 400" className="opacity-20">
            <circle cx="200" cy="200" r="150" fill="none" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="#22c55e" strokeWidth="2" />
            <circle cx="200" cy="200" r="90" fill="none" stroke="#eab308" strokeWidth="2" />
          </svg>
        </div>

        {/* Decorative Circles - Right (Desktop) */}
        <div className="absolute right-0 top-1/3 translate-x-1/2 pointer-events-none hidden lg:block">
          <svg width="400" height="400" viewBox="0 0 400 400" className="opacity-20">
            <circle cx="200" cy="200" r="150" fill="none" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="#22c55e" strokeWidth="2" />
            <circle cx="200" cy="200" r="90" fill="none" stroke="#eab308" strokeWidth="2" />
          </svg>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 mb-2">Get know Aqua Green</p>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            style={{
              background: 'linear-gradient(90deg, #2563eb, #22c55e, #eab308)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 4s ease infinite',
            }}
          >
            Welcome Aqua Green Waters PVT LTD
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            At Aqua Green Waters, we are passionate about delivering the highest quality water filtration solutions to homes and businesses across Sri Lanka. Founded on the belief that everyone deserves access to clean, safe, and healthy drinking water, we combine cutting-edge technology with expert craftsmanship to create products you can trust.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            With years of experience in the industry, our team specializes in providing advanced water filtration systems that remove a wide range of contaminants. From residential households to commercial facilities, our solutions are designed to meet the diverse needs of our valued customers.
          </p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Our Vision Card */}
          <div className="relative bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
            {/* Colored Corner Lines - Always visible on mobile, hover on desktop */}
            <div className="absolute top-0 left-0 w-16 h-16 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 via-green-500 to-yellow-500"></div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-blue-600 via-green-500 to-yellow-500"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-600 via-green-500 to-yellow-500"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500"></div>
              <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-blue-600 via-green-500 to-yellow-500"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-blue-600 via-green-500 to-yellow-500"></div>
              <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-blue-600 via-green-500 to-yellow-500"></div>
            </div>

            <div className="relative flex flex-col items-center text-center">
              {/* Vision Icon/Image */}
              <div className="relative w-24 h-24 mb-6">
                <Image
                  src="/our-vision.png"
                  alt="Our Vision"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{
                  background: 'linear-gradient(90deg, #2563eb, #22c55e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Our Vision
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                To be Sri Lanka's most trusted name in water filtration, leading the way toward a healthier and greener future.
              </p>
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="relative bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
            {/* Colored Corner Lines - Always visible on mobile, hover on desktop */}
            <div className="absolute top-0 left-0 w-16 h-16 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 via-green-500 to-yellow-500"></div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-blue-600 via-green-500 to-yellow-500"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-600 via-green-500 to-yellow-500"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500"></div>
              <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-blue-600 via-green-500 to-yellow-500"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-blue-600 via-green-500 to-yellow-500"></div>
              <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-blue-600 via-green-500 to-yellow-500"></div>
            </div>

            <div className="relative flex flex-col items-center text-center">
              {/* Mission Icon/Image */}
              <div className="relative w-24 h-24 mb-6">
                <Image
                  src="/our-mission.png"
                  alt="Our Mission"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{
                  background: 'linear-gradient(90deg, #2563eb, #22c55e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Our Mission
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                To provide clean, healthy, and great-tasting water for every home and business, enhancing lives through quality, innovation, and service excellence.
              </p>
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