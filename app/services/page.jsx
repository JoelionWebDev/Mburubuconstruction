"use client";
import React, { useState, useEffect } from "react";
import {
  Home,
  Building,
  Hammer,
  Wrench,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Menu,
  X,
  Sun,
  Moon,
  ArrowUp,
  CheckCircle,
  Users,
  Award,
} from "lucide-react";

const MburubuServicesPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Services data - easily maintainable and scalable
  const services = [
    {
      id: "residential",
      title: "Residential Construction",
      description:
        "Custom homes, apartments, and housing developments built to the highest standards with modern Nigerian architectural designs.",
      icon: Home,
      image: "/resident.jpeg",
      features: [
        "Custom Home Design",
        "Luxury Apartments",
        "Housing Estates",
        "Home Renovations",
      ],
      fullDescription:
        "We specialize in creating beautiful, functional residential spaces that reflect Nigerian culture while incorporating modern amenities and sustainable building practices.",
    },
    {
      id: "commercial",
      title: "Commercial Buildings",
      description:
        "Office complexes, retail spaces, and industrial facilities designed for durability and functionality in Nigeria's business environment.",
      icon: Building,
      image: "/comancial.jpg",
      features: [
        "Office Complexes",
        "Shopping Centers",
        "Warehouses",
        "Industrial Facilities",
      ],
      fullDescription:
        "Our commercial construction services deliver modern, efficient business spaces that meet international standards while being perfectly suited for the Nigerian market.",
    },
    {
      id: "infrastructure",
      title: "Infrastructure Development",
      description:
        "Roads, bridges, and public facilities that strengthen communities and support Nigeria's growing economy.",
      icon: MapPin,
      image: "/infra.jpg",
      features: [
        "Road Construction",
        "Bridge Building",
        "Public Facilities",
        "Urban Planning",
      ],
      fullDescription:
        "We build the backbone of Nigeria's infrastructure, creating lasting solutions that connect communities and drive economic growth.",
    },
    {
      id: "renovation",
      title: "Renovation & Remodeling",
      description:
        "Transform existing spaces with modern upgrades, structural improvements, and aesthetic enhancements.",
      icon: Hammer,
      image: "/renovation.webp",
      features: [
        "Building Upgrades",
        "Interior Remodeling",
        "Structural Repairs",
        "Modernization",
      ],
      fullDescription:
        "Breathe new life into existing structures with our comprehensive renovation services, combining modern techniques with respect for original architecture.",
    },
    {
      id: "maintenance",
      title: "Maintenance Services",
      description:
        "Ongoing building maintenance, repairs, and facility management to protect your investment for years to come.",
      icon: Wrench,
      image: "/maintain.jpeg",
      features: [
        "Preventive Maintenance",
        "Emergency Repairs",
        "Facility Management",
        "Property Inspections",
      ],
      fullDescription:
        "Keep your properties in peak condition with our comprehensive maintenance services, ensuring longevity and optimal performance of your investments.",
    },
    {
      id: "consulting",
      title: "Construction Consulting",
      description:
        "Expert advice on construction projects, feasibility studies, and project management from our experienced team.",
      icon: Users,
      image: "/consulting.jpg",
      features: [
        "Project Planning",
        "Cost Estimation",
        "Feasibility Studies",
        "Quality Assurance",
      ],
      fullDescription:
        "Leverage our decades of experience with professional consulting services that guide your construction projects from conception to completion.",
    },
  ];

  // Service categories for navigation
  const serviceCategories = [
    { id: "all", name: "All Services", href: "#services" },
    { id: "residential", name: "Residential", href: "#residential" },
    { id: "commercial", name: "Commercial", href: "#commercial" },
    { id: "infrastructure", name: "Infrastructure", href: "#infrastructure" },
    { id: "maintenance", name: "Maintenance", href: "#maintenance" },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Service Card Component - Reusable and maintainable
  const ServiceCard = ({ service, index }) => (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={`${service.title} service by Mburubu Construction`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <service.icon className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
          {service.title}
        </h3>
        <p
          className={`mb-4 leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-1 mb-6">
          {service.features.slice(0, 2).map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
              <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Learn More Button */}
        <button
          onClick={() => setActiveModal(service)}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center group"
        >
          Learn More
          <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  // Modal Component for Service Details
  const ServiceModal = ({ service, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className={`relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
        >
          <X className="h-5 w-5 text-white" />
        </button>

        {/* Modal Header */}
        <div className="relative h-64">
          <img
            src={service.image}
            alt={`${service.title} detailed view`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <service.icon className="h-10 w-10 text-white mb-2" />
            <h2 className="text-2xl font-bold text-white">{service.title}</h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <p
            className={`text-lg mb-6 leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {service.fullDescription}
          </p>

          <h3 className="text-xl font-semibold mb-4">Our Services Include:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navigation Header - Sticky */}
      <nav
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-all duration-300 ${
          darkMode
            ? "bg-gray-900/90 border-gray-700"
            : "bg-white/90 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Award className="h-8 w-8 text-orange-500 mr-2" />
              <span className="text-xl font-bold">Mburubu Construction</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {serviceCategories.map((category) => (
                <a
                  key={category.id}
                  href={category.href}
                  className="hover:text-orange-500 transition-colors font-medium"
                >
                  {category.name}
                </a>
              ))}

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden border-t ${
              darkMode
                ? "border-gray-700 bg-gray-900"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="px-4 py-4 space-y-3">
              {serviceCategories.map((category) => (
                <a
                  key={category.id}
                  href={category.href}
                  className="block hover:text-orange-500 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </a>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center space-x-2 hover:text-orange-500 transition-colors"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/1080"
            alt="Mburubu Construction projects showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Building Nigeria's Future
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Premier construction services across Nigeria with over two decades
            of excellence, innovation, and commitment to quality craftsmanship.
          </p>
          <button
            onClick={() => window.open("https://wa.link/05k24d", "_blank")}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact us Today
          </button>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Construction Services
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              From residential homes to large-scale infrastructure, we deliver
              exceptional construction solutions tailored to Nigeria's unique
              needs and standards.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Dream Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with Nigeria's trusted construction experts. Let's bring
            your vision to life with our proven expertise, quality materials,
            and dedicated craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Call Us Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300 flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 ${
          darkMode ? "bg-gray-800" : "bg-gray-900"
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-8 w-8 text-orange-500 mr-2" />
            <span className="text-xl font-bold">Mburubu Construction</span>
          </div>
          <p className="text-gray-400 mb-4">
            Building excellence across Nigeria since 2000
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Mburubu Construction. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Service Detail Modal */}
      {activeModal && (
        <ServiceModal
          service={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full shadow-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Custom CSS for animations */}
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
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MburubuServicesPage;
