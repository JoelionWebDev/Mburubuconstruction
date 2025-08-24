"use client";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Apply dark mode to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", color: "hover:text-blue-500" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-500" },
    { icon: FaYoutube, href: "#", color: "hover:text-red-500" },
    {
      icon: FaTiktok,
      href: "#",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
  ];

  return (
    <nav className="bg-gray-900 dark:bg-gray-900 bg-opacity-95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/logo.JPEG"
                alt="Logo"
                className="h-8 lg:h-10 w-auto transition-transform duration-300 hover:scale-105 rounded-l-2xl"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white dark:text-white hover:text-blue-400 dark:hover:text-blue-400 px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right side: Social Icons + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-white dark:text-white ${social.color} transition-all duration-300 hover:scale-125 hover:rotate-6 p-2 rounded-full hover:bg-white hover:bg-opacity-10`}
                  >
                    <IconComponent className="w-4 h-4 lg:w-5 lg:h-5" />
                  </a>
                );
              })}
            </div>

            {/* Separator */}
            <div className="w-px h-6 bg-gray-600 dark:bg-gray-600"></div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-800 dark:bg-gray-800 text-yellow-400 dark:text-yellow-400 hover:bg-gray-700 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              {isDarkMode ? (
                <MdLightMode className="w-5 h-5" />
              ) : (
                <MdDarkMode className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-800 dark:bg-gray-800 text-yellow-400 dark:text-yellow-400 hover:bg-gray-700 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {isDarkMode ? (
                <MdLightMode className="w-4 h-4" />
              ) : (
                <MdDarkMode className="w-4 h-4" />
              )}
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="text-white dark:text-white hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-300 p-2"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-gray-800 dark:bg-gray-800 border-t border-gray-700 dark:border-gray-700">
          {/* Mobile Navigation Links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-white dark:text-white hover:text-blue-400 dark:hover:text-blue-400 px-3 py-3 text-base font-medium transition-colors duration-300 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex justify-center space-x-6 pt-4 border-t border-gray-700 dark:border-gray-700 mt-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className={`text-white dark:text-white ${social.color} transition-all duration-300 hover:scale-125 p-2 rounded-full hover:bg-white hover:bg-opacity-10`}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
