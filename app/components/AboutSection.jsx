"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white dark:bg-gray-900 py-16 md:py-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column - Appears first on mobile */}
          <div
            className={`order-1 lg:order-2 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-orange-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500 ease-out"></div>
              <Image
                src="/towa.png"
                alt="Mburubu Construction team at work on a construction site"
                width={600}
                height={400}
                className="relative w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-all duration-500 ease-out"
                priority
              />
            </div>
          </div>

          {/* Content Column - Appears second on mobile */}
          <div
            className={`order-2 lg:order-1 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="space-y-8">
              {/* Section Heading */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  About Us
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  Welcome to{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    Mburubu Construction
                  </span>
                  , your trusted partner in building excellence. Located at 1B
                  Azubuike Street, Liberty Estate, Enugu, we bring years of
                  expertise and dedication to every project we undertake.
                </p>

                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  At Mburubu Construction, we are unwavering in our commitment
                  to four core principles that define everything we do:
                  uncompromising{" "}
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    quality
                  </span>{" "}
                  in craftsmanship, rigorous{" "}
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    safety
                  </span>{" "}
                  standards that protect our team and clients, cutting-edge{" "}
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    innovation
                  </span>{" "}
                  in construction techniques, and reliable{" "}
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    timely delivery
                  </span>{" "}
                  that respects your schedule and budget.
                </p>

                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  From residential homes to commercial developments, we
                  transform your vision into reality with precision,
                  professionalism, and passion for excellence.
                </p>
              </div>

              {/* Call to Action */}
              <div className="pt-6">
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out">
                  <span>Learn More</span>
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
