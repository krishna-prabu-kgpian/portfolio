import React, { useState, useEffect } from "react";
import NSSCLogo from "../../assets/NSSC.png";
import AirbotixLogo from "../../assets/Airbotix.png"
import SWGLogo from "../../assets/SWGLogo.jpg"; // Using NSSC logo as placeholder, replace with actual SWG logo
import "./ExperienceSection.css";

const experienceData = [
  {
    id: 1,
    role: "AI/ML Intern",
    company: "Airbotix",
    location: "Remote",
    year: "Dec'24 – May'25 (Present)",
    backgroundImage: AirbotixLogo,
    shortDescription: "Working on AI systems for real-time object tracking and natural language-driven robotics control.",
    longDescription: `
    <p>At Airbotix, I'm building applied AI systems that bridge <strong>computer vision</strong>, <strong>natural language processing (NLP)</strong>, and <strong>robotics</strong>. The main focus of my work has been on creating a real-time <strong>aerial object tracking</strong> model, and enabling a quadrupedal robot to understand and respond to <strong>natural language</strong> commands in real time.</p>

    <p><strong>Key responsibilities:</strong></p>
    <ul>
      <li>Built a <strong>real-time object detection pipeline</strong> using <strong>Faster R-CNN</strong>, tailored for aerial vehicle datasets</li>
      <li>Designed a <strong>natural language-based control system</strong> to convert user commands into motion goals</li>
      <li>Packaged the models into <strong>modular Python tools</strong> for integration into the broader robotics platform</li>
      <li>Worked closely with control architecture constraints, keeping latency and deployability in mind</li>
    </ul>

    <p>This internship has helped me apply <strong>LLMs</strong> and <strong>computer vision</strong> in a practical robotics setting, and sharpened my skills in fast prototyping, integration, and building for real-world use.</p>
  `,

    skills: [
      "Python",
      "Computer Vision",
      "Faster R-CNN",
      "Natural Language Processing",
      "Robotics",
      "Vision Language Models",
      "LangChain",
      "Modular Deployment"
    ]
  },
  {
    id: 2,
    role: "Associate Member",
    company: "Student Welfare Group",
    location: "IIT Kharagpur",
    year: "Aug'23 – May'24",
    backgroundImage: SWGLogo,
    shortDescription: "Organized academic and welfare initiatives to support and engage the student community at IIT Kharagpur.",
    longDescription: `
      <p>As an Associate Member of the Student Welfare Group (SWG), I worked on a variety of initiatives focused on academic support, peer mentorship, and campus engagement. I was part of the team that planned and executed events aimed at making student life smoother and more inclusive.</p>

      <p>Key contributions:</p>
      <ul>
        <li>Organized <strong>Examania</strong>, SWG's flagship academic support event, providing curated prep materials and strategies during exam seasons</li>
        <li>Helped run the <strong>Academic Orientation Webinar</strong> for incoming students, introducing them to course planning, minors, and institute culture</li>
        <li>Contributed to <strong>Study Abroad 101</strong> and the <strong>Research Guidance Webinar</strong>, both designed to provide direction for students pursuing international education or academic research</li>
        <li>Designed event posters and outreach material using <strong>Canva</strong> and <strong>Photoshop</strong> to ensure clear, consistent communication</li>
      </ul>

      <p>This experience helped me grow as a communicator and problem-solver, while also giving me insight into student needs and the value of thoughtful peer support.</p>
    `,
    skills: [
      "Event Planning",
      "Organizing Skills",
      "Graphic Design",
      "Canva",
      "Photoshop",
    ]
  },
  {
    id: 3,
    role: "Junior Coordinator",
    company: "National Students' Space Challenge (NSSC), spAts",
    location: "IIT Kharagpur",
    year: "Aug'23 – Nov'23",
    backgroundImage: NSSCLogo,
    shortDescription: "Assisted in organizing NSSC, focusing on participant accommodation and event logistics.",
    longDescription: `
      <p>As a Junior Coordinator for the <strong>National Students' Space Challenge (NSSC)</strong>, I was part of the organizing team for IIT Kharagpur's annual astro-tech fest. My main responsibility was handling <strong>accommodation logistics</strong> for outstation participants, while also supporting event operations during the fest.</p>

      <p><strong>Key contributions:</strong></p>
      <ul>
        <li>Managed participant accommodation across multiple hostels, including check-ins and room allocation</li>
        <li>Coordinated between <strong>hospitality</strong>, <strong>registration</strong>, and <strong>event teams</strong> to ensure smooth workflows</li>
        <li>Helped troubleshoot on-ground issues and assisted with live event operations during peak hours</li>
        <li>Worked with volunteers to maintain schedules and assist participants during their stay</li>
      </ul>

      <p>This experience helped me develop skills in <strong>event logistics</strong>, <strong>coordination</strong>, and staying composed in high-pressure environments.</p>
    `,
    skills: [
      "Event Operations",
      "Logistics Coordination",
      "Team Collaboration",
      "Problem Solving",
      "On-ground Management"
    ]
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
