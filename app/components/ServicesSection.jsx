"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  FaBuilding,
  FaTools,
  FaProjectDiagram,
  FaDraftingCompass,
  FaRoad,
  FaTractor,
} from "react-icons/fa";

const OurServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      title: "Building Construction",
      description:
        "Complete residential and commercial building construction services from foundation to finishing, delivering quality structures that stand the test of time.",
      image: "/service1.webp",
      icon: FaBuilding,
    },
    {
      id: 2,
      title: "Renovations",
      description:
        "Transform your existing spaces with our expert renovation services. We breathe new life into homes and offices with modern designs and quality craftsmanship.",
      image: "/service2.jpg",
      icon: FaTools,
    },
    {
      id: 3,
      title: "Project Management",
      description:
        "Comprehensive project management ensuring timely delivery, budget control, and seamless coordination of all construction phases from planning to completion.",
      image: "/service3.webp",
      icon: FaProjectDiagram,
    },
    {
      id: 4,
      title: "Architectural Design",
      description:
        "Innovative architectural design services that blend functionality with aesthetic appeal, creating spaces that inspire and serve your unique vision.",
      image: "/service4.jpeg",
      icon: FaDraftingCompass,
    },
    {
      id: 5,
      title: "Road Construction",
      description:
        "Professional road construction and infrastructure development services including highways, rural roads, parking lots, and pavement solutions with modern equipment and techniques.",
      image: "/service5.jpeg",
      icon: FaRoad,
    },
    {
      id: 6,
      title: "Tractor & Machinery Hiring",
      description:
        "Comprehensive heavy machinery rental services including excavators, bulldozers, tractors, and specialized construction equipment with skilled operators available.",
      image: "/service6.webp",
      icon: FaTractor,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="bg-gray-50 dark:bg-gray-800 py-16 md:py-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Delivering excellence across all aspects of construction with
            innovative solutions, quality craftsmanship, and unwavering
            commitment to your vision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} service by Mburubu Construction`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                    <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="pt-2">
                    <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                      Learn More
                      <svg
                        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Ready to bring your construction project to life?
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out">
            <span>Get Started Today</span>
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
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
