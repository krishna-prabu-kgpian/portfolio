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
            Hi there! I'm Krishna, a second-year Computer Science student at IIT Kharagpur, deeply passionate about Artificial Intelligence and their applications. 
            I love solving problems in the areas of Computer Vision, NLP, and LLMs, where I explore how AI can be leveraged to solve real-world problems.
            </p>
            <p>
              I've worked on exciting projects, including building a chatbot that answers internship-related queries, developing an automatic waste segregation system using computer vision, and implementing a text summarization tool powered by BERT. 
              Currently, I'm gaining hands-on experience as an AI/ML Trainee at Airbotix, further deepening my understanding of applied AI.
            </p>
            <p>
            Beyond academics, I'm an avid strategy game enthusiast, particularly enjoying StarCraft 2, Age of Empires 2, or other RTS games. 
            I also love strategy board games like Catan, Scythe, Ticket to Ride among others, the love of which led me to design and develop Threshold, a strategy-based board game that I'm preparing to publish. 
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
