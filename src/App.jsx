import React from "react";
import FounderMembers from "./components/FounderMembers";
import OurAdvisors from "./components/OurAdvisors";
import OurLawyers from "./components/OurLawyers";
import HeroSection from "./components/HeroSection";
import PsychiatristPsychologist from "./components/Psychologist";
import OurServices from "./components/OurServices";
import OurTeam from "./components/OurTeam";
import CharityMorganCafe from "./components/CharityMorganCafe";
import PhotoGallery from "./components/PhotoGallery";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Event from "./components/Event";

function App() {
  return (
    <>
    <Navbar/>
      <HeroSection />
      <FounderMembers />
      <OurAdvisors />
      <OurLawyers />
      <PsychiatristPsychologist/>
      <OurServices/>
      <OurTeam/>
      <CharityMorganCafe/>
      <PhotoGallery/>
      <AboutUs/>
      <Event/>
    </>
  );
}

export default App;
