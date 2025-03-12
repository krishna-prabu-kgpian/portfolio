import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
// import SkillsSection from "./components/SkillsSection/SkillsSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import EducationSection from "./components/EducationSection/EducationSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import Footer from "./components/Footer/Footer";

import "./App.css"; // or a global CSS file with body background, etc.

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      {/* <SkillsSection /> */}
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <Footer />
      {/* Other sections go here... */}
    </>
  );
}

export default App;
