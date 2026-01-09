import React from "react";
import Link from "next/link";

const MburubuFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Main footer content container - responsive max width */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Branding Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4">
              Mburubu Construction
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              Building the future with innovative construction solutions. Your
              trusted partner for residential, commercial, and industrial
              projects.
            </p>

            {/* Company Address */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Our Location
              </h3>
              <address className="text-gray-300 text-sm md:text-base not-italic leading-relaxed">
                1B Azubuike Street
                <br />
                Liberty Estate
                <br />
                Enugu, Nigeria
              </address>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {/* <a
                href="https://facebook.com/mburubu-construction"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Mburubu Construction on Facebook"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a> */}

              {/* <a
                href="https://instagram.com/mburubu_construction"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Mburubu Construction on Instagram"
                className="p-2 bg-gray-800 hover:bg-pink-600 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.529l1.529-1.297c.447.596 1.149.978 1.929.978.894 0 1.615-.723 1.615-1.615 0-.894-.721-1.615-1.615-1.615-.894 0-1.615.721-1.615 1.615H5.571c0-1.765 1.446-3.211 3.211-3.211s3.211 1.446 3.211 3.211-1.446 3.211-3.211 3.211zm7.532 0c-1.297 0-2.448-.596-3.205-1.529l1.529-1.297c.447.596 1.149.978 1.929.978.894 0 1.615-.723 1.615-1.615 0-.894-.721-1.615-1.615-1.615-.894 0-1.615.721-1.615 1.615h-1.529c0-1.765 1.446-3.211 3.211-3.211s3.211 1.446 3.211 3.211-1.446 3.211-3.211 3.211z" />
                </svg>
              </a> */}

              {/* <a
                href="https://tiktok.com/@mburubu_construction"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Mburubu Construction on TikTok"
                className="p-2 bg-gray-800 hover:bg-black rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a> */}
              <a
                href="https://www.youtube.com/@mburubuconstruction"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Mburubu Construction on TikTok"
                className="p-2 bg-gray-800 hover:bg-black rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <svg
                  className="w-5 h-5 fill-current text-red-600"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.5 6.2c-.3-1.1-1.2-2-2.3-2.3C19.1 3.5 12 3.5 12 3.5s-7.1 0-9.2.4C1.7 4.2.8 5.1.5 6.2.1 8.3.1 12 .1 12s0 3.7.4 5.8c.3 1.1 1.2 2 2.3 2.3 2.1.4 9.2.4 9.2.4s7.1 0 9.2-.4c1.1-.3 2-1.2 2.3-2.3.4-2.1.4-5.8.4-5.8s0-3.7-.4-5.8zM9.75 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm md:text-base"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm md:text-base"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm md:text-base"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm md:text-base"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services Overview */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>Residential Construction</li>
              <li>Commercial Buildings</li>
              <li>Industrial Projects</li>
              <li>Renovation & Remodeling</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mburubu Construction. All rights
              reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MburubuFooter;
