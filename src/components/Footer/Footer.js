import React from "react";
import "./Footer.css";
import linkedInIcon from "../../assets/LinkedIn.jpeg"; // example local icon
import githubIcon from "../../assets/github.png";     // example local icon

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Krishna. All rights reserved.</p>
      <div className="footer-links">
        {/* Mail link */}
        <a href="mailto:krishna604pk@gmail.com" className="footer-mail">
          Email Me
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/krishna-prabu-2a368a28b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInIcon} alt="LinkedIn" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/krishna-prabu-kgpian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
