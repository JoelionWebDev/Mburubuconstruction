"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

// Reusable Input Component with Floating Labels
const FloatingLabelInput = ({
  type = "text",
  name,
  label,
  value,
  onChange,
  error,
  required = false,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;

  return (
    <div className="relative mb-6">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className={`
          w-full px-4 pt-6 pb-2 text-gray-900 bg-white border-2 rounded-lg
          transition-all duration-300 focus:outline-none
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 focus:border-blue-600"
          }
          ${hasValue || focused ? "pt-6 pb-2" : "pt-4 pb-4"}
        `}
        placeholder=""
        {...props}
      />
      <label
        className={`
          absolute left-4 transition-all duration-300 pointer-events-none
          ${
            hasValue || focused
              ? "top-2 text-xs text-blue-600 font-medium"
              : "top-4 text-gray-500"
          }
          ${error ? "text-red-500" : ""}
        `}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
          <AlertCircle size={14} />
          {error}
        </p>
      )}
    </div>
  );
};

// Reusable Textarea Component with Floating Labels
const FloatingLabelTextarea = ({
  name,
  label,
  value,
  onChange,
  error,
  required = false,
  rows = 4,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;

  return (
    <div className="relative mb-6">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={rows}
        className={`
          w-full px-4 pt-6 pb-2 text-gray-900 bg-white border-2 rounded-lg
          transition-all duration-300 focus:outline-none resize-vertical
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 focus:border-blue-600"
          }
        `}
        placeholder=""
        {...props}
      />
      <label
        className={`
          absolute left-4 transition-all duration-300 pointer-events-none
          ${
            hasValue || focused
              ? "top-2 text-xs text-blue-600 font-medium"
              : "top-4 text-gray-500"
          }
          ${error ? "text-red-500" : ""}
        `}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
          <AlertCircle size={14} />
          {error}
        </p>
      )}
    </div>
  );
};

// Reusable Button Component
const Button = ({
  type = "button",
  variant = "primary",
  size = "md",
  loading = false,
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-200",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={loading}
      {...props}
    >
      {loading && (
        <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
};

// Lazy Loading Image Component
const LazyImage = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {inView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          {...props}
        />
      )}
    </div>
  );
};

// Main Contact Page Component
const ContactPage = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Animation state
  const [isVisible, setIsVisible] = useState({});

  // Company contact information - easily editable
  const contactInfo = {
    address: "123 Construction Avenue, Victoria Island, Lagos, Nigeria",
    phone: "+234 (0) 803 569 6337",
    email: "info@mburubu.com",
    hours:
      "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: Closed",
    socialMedia: {
      linkedin: "https://linkedin.com/company/mburubu-construction",
      instagram: "https://instagram.com/mburubu_construction",
      facebook: "https://facebook.com/mburubu.construction",
      twitter: "https://twitter.com/mburubu_build",
    },
  };

  // Form validation
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[\+]?[0-9\s\-\(\)]+$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For demo purposes, randomly simulate success/failure
      const isSuccess = Math.random() > 0.2;

      if (isSuccess) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32 overflow-hidden"
        data-section="hero"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          {/* Construction-themed background pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible.hero
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Contact{" "}
              <span className="text-yellow-400">Mburubu Construction</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Let's bring your construction dreams to life. We're here to help
              you build something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold"
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Started Today
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                onClick={() =>
                  document
                    .getElementById("contact-info")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View Contact Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information Section */}
          <div
            id="contact-info"
            className={`transform transition-all duration-1000 ${
              isVisible.contactInfo
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
            data-section="contactInfo"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Office Address
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Phone Number
                    </h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-green-600 hover:text-green-700 font-medium transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Email Address
                    </h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Office Hours
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {contactInfo.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href={contactInfo.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-700 transition-all transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={contactInfo.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 p-3 rounded-lg text-white hover:bg-pink-700 transition-all transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={contactInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-800 p-3 rounded-lg text-white hover:bg-blue-900 transition-all transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={contactInfo.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 p-3 rounded-lg text-white hover:bg-black transition-all transform hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div
            id="contact-form"
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible.contactForm
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            data-section="contactForm"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Let's Build Together
              </h2>
              <p className="text-gray-600 mb-8">
                Send us a message and we'll get back to you within 24 hours.
              </p>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-medium">
                      Message sent successfully!
                    </p>
                    <p className="text-green-700 text-sm">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-red-800 font-medium">
                      Failed to send message
                    </p>
                    <p className="text-red-700 text-sm">
                      Please try again or contact us directly.
                    </p>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingLabelInput
                    name="name"
                    label="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={formErrors.name}
                    required
                  />

                  <FloatingLabelInput
                    type="email"
                    name="email"
                    label="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={formErrors.email}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingLabelInput
                    type="tel"
                    name="phone"
                    label="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={formErrors.phone}
                    required
                  />

                  <FloatingLabelInput
                    name="subject"
                    label="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    error={formErrors.subject}
                    required
                  />
                </div>

                <FloatingLabelTextarea
                  name="message"
                  label="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  error={formErrors.message}
                  rows={5}
                  required
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2"
                  loading={isSubmitting}
                  onClick={handleSubmit}
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div
          className={`mt-16 transform transition-all duration-1000 delay-300 ${
            isVisible.map
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          data-section="map"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 lg:p-10 pb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-gray-600">
                Located in the heart of Victoria Island, Lagos. Easy access via
                public transport and ample parking available.
              </p>
            </div>

            {/* Lazy-loaded Google Maps Embed */}
            <div className="h-96 lg:h-[500px] relative">
              <iframe
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7898234567893!2d3.4165!3d6.4302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDkuMiJOIDPCsDI0JzU5LjQiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                title="Mburubu Construction Office Location"
                className="rounded-b-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
