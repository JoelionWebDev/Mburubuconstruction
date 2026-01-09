"use client";
import { useState, useEffect } from "react";
import {
  ChevronRight,
  Award,
  Clock,
  Users,
  CheckCircle,
  Star,
  Phone,
  Mail,
} from "lucide-react";

const AboutUsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Animation class helper
  const getAnimationClass = (id, baseClass = "") => {
    return `${baseClass} transition-all duration-1000 ${
      isVisible[id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 z-50 p-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg transition-all duration-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-50 dark:bg-gray-800 py-4 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <a
                href="/"
                className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                Home
              </a>
              <ChevronRight size={16} />
              <span className="text-orange-600 dark:text-orange-400 font-medium">
                About Us
              </span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            {/* Replace with actual background image: */}
            {/* <img src="/hero-construction.jpg" alt="Construction site" className="w-full h-full object-cover" loading="lazy" /> */}
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building Nigeria's Future
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Excellence in Construction, Innovation in Design, Trust in Every
              Project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Our Projects
              </button>
              <button
                onClick={() => window.open("/contact", "_self")}
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div
              id="story-section"
              data-animate
              className={getAnimationClass(
                "story-section",
                "text-center mb-16"
              )}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Story Content */}
              <div
                id="story-content"
                data-animate
                className={getAnimationClass("story-content", "space-y-6")}
              >
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Founded in 2010, Mburubu Construction emerged from a vision to
                  transform Nigeria's construction landscape. What started as a
                  small team of passionate engineers and architects has grown
                  into one of the most trusted names in Nigerian construction,
                  delivering over 200 successful projects across residential,
                  commercial, and industrial sectors.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our commitment to excellence, innovative building techniques,
                  and sustainable construction practices has earned us
                  recognition as a leader in the industry. We believe that every
                  structure we build contributes to Nigeria's growth and
                  prosperity, which drives our dedication to quality
                  craftsmanship.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Today, Mburubu Construction stands as a symbol of reliability
                  and innovation, continuously pushing boundaries while
                  maintaining the highest standards of safety, quality, and
                  customer satisfaction in every project we undertake.
                </p>
              </div>

              {/* Vision & Mission Cards */}
              <div
                id="vision-mission"
                data-animate
                className={getAnimationClass("vision-mission", "space-y-6")}
              >
                <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-xl border-l-4 border-orange-600">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    To be Nigeria's premier construction company, setting the
                    standard for quality, innovation, and sustainable building
                    practices across Africa.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl border-l-4 border-blue-600">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    To deliver exceptional construction solutions that exceed
                    client expectations while contributing to Nigeria's
                    infrastructure development through innovation, quality, and
                    integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div
              id="why-choose-header"
              data-animate
              className={getAnimationClass(
                "why-choose-header",
                "text-center mb-16"
              )}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Mburubu Construction
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We combine expertise, innovation, and dedication to deliver
                construction solutions that stand the test of time.
              </p>
              <div className="w-24 h-1 bg-orange-600 mx-auto mt-8"></div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="w-12 h-12" />,
                  title: "Quality Workmanship",
                  description:
                    "We maintain the highest standards of craftsmanship in every project, using premium materials and proven construction techniques.",
                  color: "orange",
                },
                {
                  icon: <Clock className="w-12 h-12" />,
                  title: "Timely Delivery",
                  description:
                    "Our proven project management system ensures all projects are completed on schedule without compromising quality.",
                  color: "blue",
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Expert Team",
                  description:
                    "Our skilled professionals bring years of experience and continuous training to deliver exceptional results.",
                  color: "green",
                },
                {
                  icon: <CheckCircle className="w-12 h-12" />,
                  title: "Safety First",
                  description:
                    "We prioritize safety in all operations, maintaining zero-accident worksites through rigorous safety protocols.",
                  color: "red",
                },
                {
                  icon: <Star className="w-12 h-12" />,
                  title: "Customer Satisfaction",
                  description:
                    "Our client-centric approach ensures 100% satisfaction with transparent communication throughout the project lifecycle.",
                  color: "purple",
                },
                {
                  icon: <CheckCircle className="w-12 h-12" />,
                  title: "Innovation & Technology",
                  description:
                    "We leverage cutting-edge technology and modern construction methods to deliver efficient, sustainable solutions.",
                  color: "indigo",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  id={`feature-${index}`}
                  data-animate
                  className={getAnimationClass(
                    `feature-${index}`,
                    `bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700`
                  )}
                >
                  <div
                    className={`text-${feature.color}-600 dark:text-${feature.color}-400 mb-6`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div
              id="team-header"
              data-animate
              className={getAnimationClass("team-header", "text-center mb-16")}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Our experienced leaders bring decades of expertise and vision to
                every project.
              </p>
              <div className="w-24 h-1 bg-orange-600 mx-auto mt-8"></div>
            </div>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Engr. Chukwuemeka Mburubu",
                  role: "Chief Executive Officer",
                  bio: "With over 20 years in construction management, Chukwuemeka leads our vision for excellence and innovation in Nigerian construction.",
                  image: "/team-ceo.jpg",
                },
                {
                  name: "Arch. Adaora Okafor",
                  role: "Head of Design & Architecture",
                  bio: "Award-winning architect with expertise in sustainable design and modern construction techniques, bringing creativity to every project.",
                  image: "/team-architect.jpg",
                },
                {
                  name: "Engr. Ibrahim Yusuf",
                  role: "Chief Operations Officer",
                  bio: "Operations expert ensuring seamless project execution, quality control, and timely delivery across all construction phases.",
                  image: "/team-coo.jpg",
                },
                {
                  name: "Mrs. Funmilayo Adebayo",
                  role: "Head of Client Relations",
                  bio: "Dedicated to maintaining exceptional client relationships and ensuring customer satisfaction throughout the project lifecycle.",
                  image: "/team-relations.jpg",
                },
                {
                  name: "Engr. David Okoro",
                  role: "Head of Engineering",
                  bio: "Structural engineering specialist with extensive experience in complex construction projects and innovative building solutions.",
                  image: "/team-engineer.jpg",
                },
                {
                  name: "Mr. Anthony Nwankwo",
                  role: "Safety & Quality Manager",
                  bio: "Safety-first advocate ensuring all projects meet international standards while maintaining the highest quality benchmarks.",
                  image: "/team-safety.jpg",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  id={`team-${index}`}
                  data-animate
                  className={getAnimationClass(
                    `team-${index}`,
                    `bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700`
                  )}
                >
                  {/* Team Member Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <Users className="w-12 h-12 text-orange-600" />
                    </div>
                    {/* Replace with actual image: */}
                    {/* <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" /> */}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-orange-600 dark:text-orange-400 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Banner */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <div
              id="cta-section"
              data-animate
              className={getAnimationClass("cta-section")}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Build Your Dream Project?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how Mburubu Construction can bring your vision to
                life with our expertise and dedication to excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </button>
              </div>

              <div className="mt-8 text-orange-100">
                <p className="text-lg">Available 24/7 for consultations</p>
                <p className="text-orange-200">
                  📞 +234 803 569 6337 | ✉️ info@mburubuconstruction.com
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              © 2024 Mburubu Construction. All rights reserved. | Building
              Nigeria's Future, One Project at a Time.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutUsPage;
