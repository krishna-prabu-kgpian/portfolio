import React from "react";
import "./HeroSection.css";
import heroImage from "../../assets/HeroImage.jpg"; 

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <h1>I&apos;m Krishna Prabu</h1>
        <h2>AI Enthusiast &amp; Problem Solver</h2>
        <p>
          I&apos;m a soon-to-be third-year Computer Science student at IIT Kharagpur and a 
          passionate AI enthusiast. I particularly enjoy the areas of Computer Vision, 
          NLP, and Large Language Models. I love applying AI and intelligent agents 
          to solve real-world challenges.
        </p>
        <a href="mailto:krishna604pk@gmail.com" className="hero__button">Get in touch</a>
      </div>

      <div className="hero__image">
        <img src={heroImage} alt="Krishna Prabu" />
      </div>
    </section>
  );
}

export default HeroSection;
