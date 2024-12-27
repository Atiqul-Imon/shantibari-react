import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import Navbar from "./components/Navbar";
import FounderMembers from "./components/FounderMembers";
import OurAdvisors from "./components/OurAdvisors";
import OurLawyers from "./components/OurLawyers";
import HeroSection from "./components/HeroSection";
import PsychiatristPsychologist from "./components/Psychologist";
import OurServices from "./components/OurServices";
import OurTeam from "./components/OurTeam";
import CharityMorganCafe from "./components/CharityMorganCafe";
import PhotoGallery from "./components/PhotoGallery";
import AboutUs from "./components/AboutUs";
import Event from "./components/Event";

function HomePage() {
  return (
    <>
      <HeroSection />
      <FounderMembers />
      <OurAdvisors />
      <OurLawyers />
      <PsychiatristPsychologist />
      <OurServices />
      <OurTeam />
      <CharityMorganCafe />
      <PhotoGallery />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Keep homepage layout */}
        <Route path="/" element={<HomePage />} />
        {/* Define separate routes for other pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/events" element={<Event />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/contact" element={<OurTeam />} />
        <Route path="/audio-visual" element={<OurLawyers />} />
        <Route path="/media-coverage" element={<CharityMorganCafe />} />
        <Route path="/brochure" element={<PsychiatristPsychologist />} />
      </Routes>
    </Router>
  );
}

export default App;
