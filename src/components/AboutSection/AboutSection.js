import React from "react";
import "./AboutSection.css";
import AboutMe from "../../assets/AboutMe.jpg"; 
// Replace with your actual image file

function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="about__title">ABOUT</h2>
        
        <div className="about__wrapper">
          <div className="about__content">
            <p>
            Hi there! I'm <strong>Krishna</strong>, a soon-to-be third-year <strong>Computer Science</strong> student at <strong>IIT Kharagpur</strong> with a deep passion for Artificial Intelligence and its real-world applications. I enjoy working at the intersection of <strong>Computer Vision</strong>, <strong>Natural Language Processing (NLP)</strong>, and <strong>Large Language Models (LLMs)</strong>, where I explore how intelligent systems can simplify or transform everyday challenges.
            </p>
            <p>
              Over the past year, I've built several applied AI projects — from a chatbot that answers internship-related queries using <strong>RAG</strong> pipelines, to a <strong>computer vision-based</strong> waste segregation system, and a <strong>BERT-powered</strong> tool for automatic text summarization. I'm currently working as an <strong>AI/ML Trainee at Airbotix</strong>, where I'm gaining hands-on experience with <strong>real-time object tracking</strong> and <strong>NLP-based control for robotics</strong>.
            </p>
            <p>
            Outside the world of code, I'm a huge fan of strategy games — whether it's <strong>StarCraft II</strong>, <strong>Age of Empires II</strong>, or board games like <strong>Catan</strong>, <strong>Scythe</strong>, and <strong>Ticket to Ride</strong>. My love for game mechanics and design even inspired me to create <strong>Threshold</strong>, a strategy-based board game that I'm preparing to publish. I believe great ideas lie at the intersection of logic, creativity, and play — and that's the energy I bring to everything I build. 
            </p>
          </div>

          <div className="about__image">
            <img src={AboutMe} alt="About me" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
