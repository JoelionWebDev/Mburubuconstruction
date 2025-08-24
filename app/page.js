import React from "react";
import Hero from "./components/Hero";
import FeaturedSection from "./components/Features";
import AboutUs from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";

const page = () => {
  return (
    <div>
      <Hero />
      <FeaturedSection />
      <AboutUs />
      <ServicesSection />
    </div>
  );
};

export default page;
