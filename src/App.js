import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
// import SkillsSection from "./components/SkillsSection/SkillsSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import EducationSection from "./components/EducationSection/EducationSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Get saved preference from localStorage or use system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply dark mode class to document root
    document.documentElement.classList.toggle('dark-theme', darkMode);
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <NavBar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <HeroSection />
      <AboutSection />
      {/* <SkillsSection /> */}
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <Footer />
    </div>
  );
}

export default App;
