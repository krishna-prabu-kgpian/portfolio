import React from "react";
import "./AboutSection.css";
import aboutImage from "../../assets/aboutImage.png"; 
// Replace with your actual image file

function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <h2>ABOUT</h2>
        <p>
          Hi there! I'm Xander, a passionate UI/UX designer with a background 
          in digital design. Over the years, I've helped numerous clients 
          transform their ideas into clean, user-friendly experiences that 
          delight and engage.
        </p>
        <p>
          I'm based in [Location], and when I'm not immersed in design tools, 
          you can find me exploring the local art scene, sketching, or 
          experimenting with new prototyping techniques. I believe design 
          should be both visually appealing and intuitive to use, and I'm 
          always excited to tackle new challenges.
        </p>
      </div>

      <div className="about__image">
        <img src={aboutImage} alt="About me" />
      </div>
    </section>
  );
}

export default AboutSection;
