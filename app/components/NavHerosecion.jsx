"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Navbar Component (Reusable)
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-lg shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            className="flex-shrink-0 group"
            aria-label="Mburubu Construction home page"
          >
            <div className="transition-transform duration-300 group-hover:scale-105">
              <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                MBURUBU
              </div>
              <div className="text-xs text-gray-300 -mt-1 tracking-widest font-medium">
                CONSTRUCTION
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/projects", label: "Projects" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-white hover:text-amber-400 font-medium transition-all duration-300 group"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </a>
            ))}
          </div>

          {/* Quote Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="/quote"
              className="hidden md:inline-flex bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-900 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-400/25 transform active:scale-95"
              aria-label="Get a construction quote"
            >
              Get a Quote
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="bg-slate-800/95 backdrop-blur-lg rounded-2xl border border-slate-700/50 px-6 py-6 space-y-4 shadow-2xl">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/projects", label: "Projects" },
              { href: "/contact", label: "Contact" },
            ].map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`block text-white hover:text-amber-400 font-medium py-2 px-4 rounded-lg hover:bg-slate-700/50 transition-all duration-300 transform hover:translate-x-2 ${
                  isMenuOpen ? `animate-slideIn delay-${index * 50}` : ""
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/quote"
              onClick={closeMenu}
              className={`w-full bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-slate-900 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 text-center block mt-4 ${
                isMenuOpen ? "animate-slideIn delay-300" : ""
              }`}
              aria-label="Get a construction quote"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13, 27, 42, 0.85) 0%, rgba(30, 41, 59, 0.75) 50%, rgba(51, 65, 85, 0.65) 100%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%230D1B2A' width='1200' height='800'/%3E%3Cg fill='%231E293B' opacity='0.4'%3E%3Crect x='100' y='200' width='180' height='280'/%3E%3Crect x='320' y='150' width='140' height='320'/%3E%3Crect x='500' y='180' width='160' height='250'/%3E%3Crect x='700' y='120' width='150' height='300'/%3E%3Crect x='900' y='160' width='170' height='270'/%3E%3C/g%3E%3Cg fill='%23F4A261' opacity='0.3'%3E%3Cpath d='M150,100 L180,50 L210,100 Z'/%3E%3Cpath d='M950,80 L980,30 L1010,80 Z'/%3E%3Ccircle cx='400' cy='120' r='8'/%3E%3Ccircle cx='800' cy='100' r='6'/%3E%3C/g%3E%3Cg stroke='%23F4A261' stroke-width='2' fill='none' opacity='0.2'%3E%3Cline x1='50' y1='600' x2='1150' y2='620'/%3E%3Cline x1='0' y1='650' x2='1200' y2='670'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Company Logo */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center group hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  {/* <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                    LOGO
                  </div>
                  <div className="text-xs text-gray-300 font-medium">
                    Upload your logo here
                  </div> */}
                  <Image
                    src="/logo.JPEG" // Replace with your logo path
                    alt="Company Logo"
                    width={128}
                    height={128}
                    className="mx-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Main Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6 transition-all duration-1000 delay-100 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <span className="block text-white drop-shadow-2xl">
              Building the
            </span>
            <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
              Future
            </span>
            <span className="block text-white drop-shadow-2xl">
              with Strength &
            </span>
            <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
              Precision
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 leading-relaxed font-light transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            Quality construction services with unmatched expertise.
            <br />
            <span className="text-amber-400 font-medium">
              Transforming visions into lasting structures.
            </span>
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <a
              href="/services"
              className="group bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-900 font-bold py-4 px-8 lg:py-5 lg:px-10 rounded-full text-lg lg:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/30 transform active:scale-95 w-full sm:w-auto"
              aria-label="View our construction services"
            >
              Our Services
              <svg
                className="inline ml-3 w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="/projects"
              className="group border-2 border-white/30 hover:border-amber-400/50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 lg:py-5 lg:px-10 rounded-full text-lg lg:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 transform active:scale-95 w-full sm:w-auto"
              aria-label="View our construction projects"
            >
              View Projects
              <svg
                className="inline ml-3 w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </a>
          </div>

          {/* Stats Section */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16 lg:mt-24 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            {[
              { number: "500+", label: "Projects Completed", icon: "🏗️" },
              { number: "15+", label: "Years Experience", icon: "⭐" },
              { number: "100%", label: "Client Satisfaction", icon: "🎯" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-3xl mb-2" aria-hidden="true">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium lg:text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-800 ${
          isVisible ? "opacity-100 animate-bounce" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <svg
          className="w-6 h-6 lg:w-8 lg:h-8 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

// Main Landing Page Component
const MburubuLanding = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <HeroSection />

      {/* Custom Styles for Animations */}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.8;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-50 {
          animation-delay: 50ms;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-150 {
          animation-delay: 150ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-250 {
          animation-delay: 250ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default MburubuLanding;
