"use client";
import React from "react";

const MburubuHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105 transition-transform duration-700 hover:scale-110"
        style={{
          backgroundImage: `url('/bghero.png')`, // Replace with your background image path
          filter: "brightness(1.5)",
        }}
      />

      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-40" />
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-70" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Company Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium tracking-wide">
            MBURUBU CONSTRUCTION
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
          <span className="block mb-2">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Best in
            </span>{" "}
            <span className="text-white">the East</span>
          </span>
          {/* <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white/90 mt-4">
            Building the Future, One Structure at a Time
          </span> */}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up-delayed font-light">
          Your trusted partner in innovative construction solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 border-2 border-orange-400/30 hover:border-orange-300/50 min-w-48">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get a Quote
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:border-white/50 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-w-48">
            <span className="flex items-center justify-center gap-2">
              View Our Work
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 animate-fade-in-delayed-2">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">
              Projects Completed
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">
              Years Experience
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delayed {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
        .animate-fade-in-delayed-2 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        .animate-slide-up-delayed {
          animation: slide-up 1s ease-out 0.2s both;
        }
      `}</style>
    </section>
  );
};

export default MburubuHero;
