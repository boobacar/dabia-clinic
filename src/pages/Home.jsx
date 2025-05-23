import React from "react";
import HeroVideo from "../components/HeroVideo";
import BeforeAfterGallery from "../components/BeforeAfterGallery";
import ClinicIntro from "../components/ClinicIntro";
import CompetencesGrid from "../components/CompetencesGrid";
import StaffPreview from "../components/StaffPreview";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import GoogleMapSection from "../components/GoogleMapSection";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      <HeroVideo />
      <BeforeAfterGallery />
      <ClinicIntro />
      <CompetencesGrid />
      <StaffPreview />
      <TestimonialsCarousel />
      <GoogleMapSection />
    </div>
  );
};

export default Home;
