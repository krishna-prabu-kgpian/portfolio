import React, { useState } from "react";
import "./ProjectsSection.css";
import aboutImage from "../../assets/aboutImage.png"; 
import DIYProject from "../../assets/DIYProject.jpeg";
import PortfolioWebsite from "../../assets/PortfolioWebsite.png";
const initialProjects = [
  {
    id: 1,
    title: "Campus Pal",
    backgroundImage: aboutImage,
    modalImage: aboutImage,
    shortDescription: "A chatbot to answer all student queries regarding internships.",
    longDescription:
      "Built to answer queries that a student may have regarding the CDC Placement and Internship Process. Performs RAG over the Foresight articles available, and helps the user with his/her query.",
    skills: ["RAG", "Langchain", "Langgraph", "Chainlit", "Pinecone", "LlamaIndex"],
    githubLink: "https://github.com/your-username/portfolio",
    demoLink: "https://portfolio.example.com",
  },
  {
    id: 2,
    title: "NLP Based Text Summarizer",
    backgroundImage: aboutImage, 
    modalImage: aboutImage,
    shortDescription: "A real-time application which will summarize text messages.",
    longDescription:
      "This project aims to summarize whatsapp and other messages, and generates summaries of them. It is aimed for a conversation occuring in a group or between individuals, to generate concise and full summaries.",
    skills: ["Fine Tuning", "Transformers", "HuggingFace", "NLP"],
    githubLink: "https://github.com/your-username/chat-app",
    demoLink: "https://chat-app.example.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    backgroundImage: PortfolioWebsite,
    modalImage: PortfolioWebsite,
    shortDescription: "A portfolio website showcasing me, who I am, my achievements and interests.",
    longDescription:
      "A React App hosted on Netlify, showcasing my projects, skills, and other hobbies of mine. The site is responsive and has a clean, modern design. It uses CSS for styling.",
    skills: ["React", "HTML", "CSS", "Javascipt"],
    githubLink: "https://github.com/krishna-prabu-kgpian/portfolio",
    demoLink: "https://krishnaprabu.netlify.app/",
  },
  {
    id: 4,
    title: "Automatic Waste Segregator",
    backgroundImage: DIYProject,
    modalImage: DIYProject,
    shortDescription: "An AI Powered Automatic Waste Segregator.",
    longDescription:
      "This project automates waste classification using OpenAI's Vision API and an Arduino-based sorting mechanism. The system downloads images from emails, processes them with AI for classification, and then transmits the classification data to an Arduino for physical sorting or further action.",
    skills: ["Arduino", "Python", "Data Handling", "API Integration"],
    githubLink: "https://github.com/krishna-prabu-kgpian/diy_project",
    demoLink: "https://drive.google.com/file/d/1jgA1qZ4_fPEUxQzfD2-TWgAc1hFxtYgi/view?usp=sharing",
  },
  {
    id: 5,
    title: "Threshold: The Dawn of Civilization",
    backgroundImage: DIYProject,
    modalImage: DIYProject,
    shortDescription: "A Turn-Based Strategy Board Game.",
    longDescription:
      "This project automates waste classification using OpenAI's Vision API and an Arduino-based sorting mechanism. The system downloads images from emails, processes them with AI for classification, and then transmits the classification data to an Arduino for physical sorting or further action.",
    skills: ["Arduino", "Python", "Data Handling", "API Integration"],
    githubLink: "https://github.com/krishna-prabu-kgpian/diy_project",
    demoLink: "https://drive.google.com/file/d/1jgA1qZ4_fPEUxQzfD2-TWgAc1hFxtYgi/view?usp=sharing",
  },
];

function ProjectsSection() {
  const [projects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  // Opens modal with selected project details
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Closes the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  // Close modal if click occurs on the overlay (outside modal content)
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            style={{ backgroundImage: `url(${project.backgroundImage})` }}
          >
            {/* Hover overlay with short description */}
            <div className="card-overlay">
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
              <p className="projects-section-button" onClick={() => openModal(project)}>Show More</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedProject.title}</h2>

            {/* Optional larger image in the modal */}
            <img
              src={selectedProject.modalImage || selectedProject.backgroundImage}
              alt={selectedProject.title}
              className="modal-image"
            />

            <p className="long-description">{selectedProject.longDescription}</p>

            {/* Skills gained */}
            {selectedProject.skills && selectedProject.skills.length > 0 && (
              <div className="modal-skills">
                <h4>Skills Gained:</h4>
                <ul>
                  {selectedProject.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            <div className="modal-links">
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
              <a
                href={selectedProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;
