"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Wrench,
  Shield,
  Clock,
  Award,
  Building2,
  Users,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

const FeaturedSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const features = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Quality Construction",
      description:
        "We deliver exceptional craftsmanship using premium materials and proven construction methods that stand the test of time.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description:
        "Our efficient project management ensures your construction project is completed on schedule without compromising quality.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description:
        "We maintain the highest safety standards on every job site, protecting our workers and your property throughout the project.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovative Solutions",
      description:
        "We leverage cutting-edge technology and modern construction techniques to bring your vision to life efficiently.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description:
        "Our skilled professionals bring decades of combined experience to ensure excellence in every aspect of your project.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Excellence",
      description:
        "With numerous successful projects and satisfied clients, we've built a reputation for delivering outstanding results.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Full-Service Solutions",
      description:
        "From design to completion, we offer comprehensive construction services tailored to your specific needs and budget.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assurance",
      description:
        "Our rigorous quality control processes ensure every detail meets our high standards and your expectations.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Mburubu Construction
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver
            construction projects that exceed expectations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl 
                         transform transition-all duration-500 hover:scale-105 hover:border-blue-500 
                         border border-transparent cursor-pointer ${
                           isVisible
                             ? "translate-y-0 opacity-100"
                             : "translate-y-8 opacity-0"
                         }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 
                             rounded-lg mb-6 group-hover:bg-blue-500 transition-colors duration-300"
              >
                <div className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3
                  className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 
                              dark:group-hover:text-blue-400 transition-colors duration-300"
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div
                className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/20 
                             transition-colors duration-300"
              ></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg 
                           transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
