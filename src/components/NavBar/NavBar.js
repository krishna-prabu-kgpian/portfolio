import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Krishna.</div>
      <ul className="navbar__links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#CV">CV</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
