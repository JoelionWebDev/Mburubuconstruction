"use client";
// pages/projects.js
import { useState, useEffect } from "react";
import Head from "next/head";

import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  Star,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Sample project data - easily updatable
const projectsData = [
  {
    id: 1,
    name: "Lagos Executive Tower",
    category: "Commercial",
    location: "Victoria Island, Lagos",
    completionDate: "2023-12-15",
    shortDescription:
      "A 25-story luxury office complex with modern amenities and sustainable design features.",
    fullDescription:
      "The Lagos Executive Tower stands as a testament to modern Nigerian architecture, combining cutting-edge design with sustainable building practices. This 25-story commercial complex features state-of-the-art office spaces, retail outlets, and premium amenities including a rooftop garden and smart building management systems.",
    mainImage: "/api/placeholder/800/600",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    timeline: "18 months",
    client: "Metropolitan Holdings Ltd.",
    testimonial:
      "Outstanding work! The team delivered beyond our expectations with exceptional attention to detail.",
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    name: "Abuja Residential Estate",
    category: "Residential",
    location: "Gwarinpa, Abuja",
    completionDate: "2023-08-20",
    shortDescription:
      "Modern residential estate with 150 luxury homes featuring contemporary Nigerian architecture.",
    fullDescription:
      "This exclusive residential estate represents the pinnacle of modern Nigerian living. Each of the 150 homes is designed with contemporary aesthetics while respecting traditional Nigerian architectural elements. The estate includes parks, a clubhouse, and 24/7 security.",
    mainImage: "/api/placeholder/800/600",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    timeline: "24 months",
    client: "Abuja Development Authority",
    testimonial:
      "A masterpiece of residential development. Quality and craftsmanship at its finest.",
    rating: 5,
    featured: true,
  },
  {
    id: 3,
    name: "Port Harcourt Shopping Mall",
    category: "Commercial",
    location: "GRA, Port Harcourt",
    completionDate: "2023-06-10",
    shortDescription:
      "State-of-the-art shopping complex with entertainment facilities and modern retail spaces.",
    fullDescription:
      "This ultra-modern shopping mall brings world-class retail experience to Port Harcourt. The complex features over 200 retail outlets, a cinema complex, food court, and entertainment facilities spread across four levels with premium finishes throughout.",
    mainImage: "/api/placeholder/800/600",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    timeline: "20 months",
    client: "Rivers State Commerce Board",
    testimonial:
      "Exceptional project delivery. The mall has exceeded all expectations and visitor targets.",
    rating: 5,
    featured: false,
  },
  {
    id: 4,
    name: "Kano Industrial Complex",
    category: "Industrial",
    location: "Sharada, Kano",
    completionDate: "2023-03-15",
    shortDescription:
      "Modern manufacturing facility with sustainable energy solutions and efficient layouts.",
    fullDescription:
      "This industrial complex showcases modern manufacturing infrastructure with integrated solar power systems and efficient layouts. The facility includes multiple production halls, administrative offices, and worker amenities designed for maximum productivity.",
    mainImage: "/api/placeholder/800/600",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    timeline: "15 months",
    client: "Northern Industries Ltd.",
    testimonial:
      "Professional execution and timely delivery. Highly recommended for industrial projects.",
    rating: 4,
    featured: false,
  },
];

// Categories for filtering
const categories = [
  "All",
  "Commercial",
  "Residential",
  "Industrial",
  "Infrastructure",
];

// Hero Section Component
const HeroSection = ({ darkMode }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative h-[70vh] md:h-[80vh] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 overflow-hidden"
  >
    {/* Background overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Hero content */}
    <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
      <div className="max-w-4xl">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Building Nigeria's
          <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
            Future Today
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl"
        >
          Discover our portfolio of exceptional construction projects across
          Nigeria. From commercial towers to residential estates, we build with
          excellence.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Explore Projects
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
            Get Quote
          </button>
        </motion.div>
      </div>
    </div>

    {/* Animated background elements */}
    <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-500/20 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
  </motion.section>
);

// Breadcrumb Component
const Breadcrumb = ({ darkMode }) => (
  <nav className={`py-4 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
    <div className="container mx-auto px-4">
      <div className="flex items-center space-x-2 text-sm">
        <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
          Home
        </span>
        <ChevronRight className="w-4 h-4" />
        <span className="font-semibold text-blue-600">Projects</span>
      </div>
    </div>
  </nav>
);

// Search and Filter Component
const SearchFilter = ({
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
  darkMode,
}) => (
  <div
    className={`py-8 ${darkMode ? "bg-gray-900" : "bg-white"} border-b ${
      darkMode ? "border-gray-700" : "border-gray-200"
    }`}
  >
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
              darkMode
                ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900"
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
          />
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="text-gray-400 w-5 h-5" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Project Card Component
const ProjectCard = ({ project, onClick, darkMode }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -10, scale: 1.02 }}
    className={`group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
      darkMode ? "bg-gray-800 border border-gray-700" : "bg-white"
    }`}
    onClick={() => onClick(project)}
  >
    {/* Project Image */}
    <div className="relative h-64 overflow-hidden">
      <img
        src={project.mainImage}
        alt={project.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          Featured
        </div>
      )}

      {/* Category tag */}
      <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
        {project.category}
      </div>
    </div>

    {/* Project Info */}
    <div className="p-6">
      <h3
        className={`text-xl font-bold mb-2 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {project.name}
      </h3>

      <p
        className={`text-sm mb-4 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {project.shortDescription}
      </p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          {project.location}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-1" />
          {new Date(project.completionDate).toLocaleDateString()}
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium">
        View Details
      </button>
    </div>
  </motion.div>
);

// Project Detail Modal Component
const ProjectModal = ({ project, isOpen, onClose, darkMode }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          ></div>

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Gallery */}
            <div className="relative h-96 md:h-[500px]">
              <img
                src={project.images[currentImageIndex]}
                alt={project.name}
                className="w-full h-full object-cover"
              />

              {/* Image navigation */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === 0 ? project.images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === project.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Project Details */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left column */}
                <div>
                  <h2
                    className={`text-3xl font-bold mb-4 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.name}
                  </h2>

                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p
                    className={`text-lg leading-relaxed mb-6 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {project.fullDescription}
                  </p>

                  {/* Client testimonial */}
                  <div
                    className={`p-4 rounded-lg ${
                      darkMode ? "bg-gray-800" : "bg-gray-50"
                    } mb-6`}
                  >
                    <p
                      className={`italic ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      "{project.testimonial}"
                    </p>
                    <p className="text-blue-600 font-medium mt-2">
                      - {project.client}
                    </p>
                  </div>
                </div>

                {/* Right column - Project specs */}
                <div>
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Project Details
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span
                        className={darkMode ? "text-gray-400" : "text-gray-600"}
                      >
                        Location:
                      </span>
                      <span
                        className={`font-medium ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {project.location}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span
                        className={darkMode ? "text-gray-400" : "text-gray-600"}
                      >
                        Completed:
                      </span>
                      <span
                        className={`font-medium ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {new Date(project.completionDate).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span
                        className={darkMode ? "text-gray-400" : "text-gray-600"}
                      >
                        Timeline:
                      </span>
                      <span
                        className={`font-medium ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {project.timeline}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span
                        className={darkMode ? "text-gray-400" : "text-gray-600"}
                      >
                        Client:
                      </span>
                      <span
                        className={`font-medium ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {project.client}
                      </span>
                    </div>
                  </div>

                  {/* CTA buttons */}
                  <div className="mt-8 space-y-3">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium">
                      Start Similar Project
                    </button>
                    <button
                      className={`w-full border-2 ${
                        darkMode
                          ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      } py-3 rounded-lg transition-all duration-200 font-medium`}
                    >
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Projects Page Component
export default function ProjectsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter projects based on search and category
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Handle project selection
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>Our Projects | Premier Construction Company Nigeria</title>
        <meta
          name="description"
          content="Explore our portfolio of exceptional construction projects across Nigeria. From commercial towers to residential estates, we build with excellence and quality."
        />
        <meta
          name="keywords"
          content="construction projects Nigeria, commercial buildings, residential estates, Lagos construction, Abuja development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Construction Projects Portfolio | Nigeria's Leading Builder"
        />
        <meta
          property="og:description"
          content="Discover our stunning portfolio of construction projects across Nigeria. Quality craftsmanship and innovative design."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yoursite.com/projects" />
      </Head>

      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        {/* Dark mode toggle */}
        <div className="fixed top-4 right-4 z-40">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
              darkMode
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Hero Section */}
        <HeroSection darkMode={darkMode} />

        {/* Breadcrumb Navigation */}
        <Breadcrumb darkMode={darkMode} />

        {/* Search and Filter */}
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          darkMode={darkMode}
        />

        {/* Projects Grid */}
        <main className={`py-12 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4">
            {/* Results header */}
            <div className="mb-8">
              <h2
                className={`text-3xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Our Projects
              </h2>
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Showing {filteredProjects.length} project
                {filteredProjects.length !== 1 ? "s" : ""}
                {searchTerm && ` for "${searchTerm}"`}
                {activeCategory !== "All" && ` in ${activeCategory}`}
              </p>
            </div>

            {/* Projects grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={handleProjectClick}
                    darkMode={darkMode}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No results state */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  No projects found
                </h3>
                <p
                  className={`text-lg ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } mb-8`}
                >
                  Try adjusting your search terms or filters to find what you're
                  looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </main>

        {/* Call-to-Action Section */}
        <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="container mx-auto px-4 text-center">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to Start Your Project?
            </h2>
            <p
              className={`text-xl mb-8 max-w-2xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Let's bring your vision to life with our expertise and commitment
              to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Get Free Quote
              </button>
              <button
                className={`px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                View All Services
              </button>
            </div>
          </div>
        </section>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
          darkMode={darkMode}
        />
      </div>
    </>
  );
}
