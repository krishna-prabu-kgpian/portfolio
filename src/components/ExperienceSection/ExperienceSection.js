import React, { useState, useEffect, useRef } from "react";
import "./ExperienceSection.css";

const experienceData = [
  {
    id: 1,
    role: "AI/ML Trainee",
    company: "Airbotix",
    year: "Dec'24 - Apr'25 (Present)",
    backgroundImage: "https://via.placeholder.com/400x300?text=Tech+Co",
    shortDescription: "Developed end-to-end web applications and APIs.",
    longDescription:
      "During my time at Tech Co, I led a small team building microservices for a high-traffic platform. I integrated CI/CD pipelines, performed code reviews, and collaborated with cross-functional teams to deliver new features.",
  },
  {
    id: 2,
    role: "Senior Developer",
    company: "InnovateX",
    year: "2022 - 2024",
    backgroundImage: "https://via.placeholder.com/400x300?text=InnovateX",
    shortDescription: "Focused on AI-driven solutions for enterprise clients.",
    longDescription:
      "At InnovateX, I specialized in creating AI-driven solutions using NLP and computer vision. Implemented advanced ML models, containerized solutions with Docker, and optimized data pipelines for large-scale deployments.",
  }
  // Add more experiences as needed
];

function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState(null);
  const [inViewIds, setInViewIds] = useState([]); // track which items are in view

  // Modal open/close
  const openModal = (exp) => setSelectedExp(exp);
  const closeModal = () => setSelectedExp(null);

  // IntersectionObserver for each experience item
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewIds((prev) => [...prev, entry.target.id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Close modal if click outside content
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("exp-modal-overlay")) {
      closeModal();
    }
  };

  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>
      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <div
            key={exp.id}
            id={`exp-item-${exp.id}`}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`experience-item ${
              inViewIds.includes(`exp-item-${exp.id}`) ? "in-view" : ""
            }`}
          >
            {/* Left side: image card with overlay */}
            <div
              className="experience-image"
              style={{ backgroundImage: `url(${exp.backgroundImage})` }}
            >
              <div className="experience-image-overlay">
                <p>{exp.shortDescription}</p>
                <button onClick={() => openModal(exp)}>Show More</button>
              </div>
            </div>

            {/* Dot in the center */}
            <div className="experience-dot"></div>

            {/* Right side: text + year */}
            <div className="experience-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p className="experience-year">{exp.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedExp && (
        <div
          className="exp-modal-overlay"
          onClick={handleOverlayClick}
        >
          <div className="exp-modal-content">
            <button className="exp-close-button" onClick={closeModal}>
              &times;
            </button>
            <h2>
              {selectedExp.role} @ {selectedExp.company}
            </h2>
            <p>{selectedExp.longDescription}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default ExperienceSection;
