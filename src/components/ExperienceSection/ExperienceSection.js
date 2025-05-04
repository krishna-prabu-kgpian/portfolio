import React, { useState, useEffect } from "react";
import NSSCLogo from "../../assets/NSSC.png";
import AirbotixLogo from "../../assets/Airbotix.png"
import "./ExperienceSection.css";

const experienceData = [
  {
    id: 1,
    role: "AI/ML/Robotics Intern",
    company: "Airbotix",
    location: "Remote",
    year: "Dec'24 - May'25 (Present)",
    backgroundImage: AirbotixLogo,
    shortDescription: "Working on machine learning solutions for autonomous systems.",
    longDescription: `
      <p>At Airbotix, I'm deeply involved in developing and optimizing machine learning algorithms for autonomous drone navigation and control systems.</p>
      
      <p>Key responsibilities:</p>
      <ul>
        <li>Implementing computer vision algorithms for object detection and tracking</li>
        <li>Optimizing reinforcement learning models for flight control</li>
        <li>Collaborating with hardware engineers to integrate ML solutions with drone systems</li>
        <li>Testing and validating ML models in simulated environments</li>
      </ul>
      
      <p>This role has significantly enhanced my expertise in practical AI applications and autonomous systems engineering.</p>
    `,
    skills: ["Python", "TensorFlow", "Computer Vision", "Reinforcement Learning", "Keras"]
  },
  {
    id: 2,
    role: "Junior Coordinator",
    company: "spAts",
    location: "IIT Kharagpur",
    year: "Aug'23 - Nov'23",
    backgroundImage: NSSCLogo,
    shortDescription: "Managed technical operations and events for the student organization.",
    longDescription: `
      <p>As a Junior Coordinator at spAts (Student Platform for Activities and Technical Society) at IIT Kharagpur, I was responsible for organizing and executing technical events and workshops.</p>
      
      <p>Key achievements:</p>
      <ul>
        <li>Organized two campus-wide technical workshops with over 200 participants</li>
        <li>Coordinated a team of 15 volunteers for event management</li>
        <li>Developed and maintained the organization's website</li>
        <li>Created promotional materials and marketing strategies for events</li>
      </ul>
      
      <p>This experience strengthened my leadership, project management, and teamwork capabilities while providing valuable insights into event organization.</p>
    `,
    skills: ["Event Management", "Team Leadership", "Web Development", "Marketing"]
  }
];

function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Add scroll observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(".experience-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Modal open/close
  const openModal = (exp) => {
    setSelectedExp(exp);
    setImageLoaded(false);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setSelectedExp(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle image load
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Close modal if clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("exp-modal-overlay")) {
      closeModal();
    }
  };

  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && selectedExp) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedExp]);

  // Timeline animation class
  const timelineClass = isVisible ? "experience-timeline show" : "experience-timeline";

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="experience-title">Professional Experience</h2>
        <div className={timelineClass}>
          {experienceData.map((exp) => (
            <div key={exp.id} className="experience-item">
              {/* Left side: image card with overlay */}
              <div
                className="experience-image"
                style={{ backgroundImage: `url(${exp.backgroundImage})` }}
                onClick={() => openModal(exp)}
              >
                <div className={`experience-image-overlay ${isMobile ? 'mobile-visible' : ''}`}>
                  <p>{exp.shortDescription}</p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); 
                      openModal(exp);
                    }}
                    aria-label="View more details"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Dot in the center */}
              <div className="experience-dot"></div>

              {/* Right side: text content */}
              <div className="experience-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                {exp.location && <p className="experience-location">{exp.location}</p>}
                <p className="experience-year">{exp.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with scrollable content */}
      {selectedExp && (
        <div className="exp-modal-overlay" onClick={handleOverlayClick}>
          <div className="exp-modal-content">
            <button className="exp-close-button" onClick={closeModal} aria-label="Close">
              &times;
            </button>
            <h2>
              {selectedExp.role} @ {selectedExp.company}
            </h2>
            <p className="experience-year">{selectedExp.year}</p>
            
            {/* Image container */}
            <div className="exp-modal-image-container">
              <img 
                src={selectedExp.backgroundImage} 
                alt={`${selectedExp.company} - ${selectedExp.role}`}
                className="exp-modal-image"
                onLoad={handleImageLoad}
                style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
              />
            </div>
            
            {/* Content with automatic scrolling if needed */}
            <div dangerouslySetInnerHTML={{ __html: selectedExp.longDescription }}></div>
            
            {selectedExp.skills && (
              <div className="experience-skills">
                <h3>Skills</h3>
                <div className="skill-tags">
                  {selectedExp.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default ExperienceSection;
