import React, { useState } from "react";
import "./NavBar.css";

function NavBar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">Krishna.</div>
      
      <button 
        className="navbar__mobile-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>
      
      <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
        <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
        {/* <li><a href="#CV" onClick={() => setMenuOpen(false)}>CV</a></li> */}
      </ul>
      
      <button 
        className="theme-toggle" 
        onClick={toggleDarkMode}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default NavBar;
