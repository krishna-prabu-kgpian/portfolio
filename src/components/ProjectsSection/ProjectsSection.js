import React, { useState } from "react";
import "./ProjectsSection.css";
import aboutImage from "../../assets/aboutImage.png"; 
const initialProjects = [
  {
    id: 1,
    title: "Chat App",
    backgroundImage: aboutImage, 
    modalImage: aboutImage,
    shortDescription: "A real-time chat application with Next.js, Socket.io, etc.",
    longDescription:
      "This project taught me a lot about real-time communication using Socket.io, user authentication with NextAuth, and working with Prisma as an ORM. It features real-time messaging, channels, and user presence. The UI is built with Tailwind CSS for a modern look and feel.",
    skills: ["Next.js", "Socket.io", "Tailwind CSS", "NextAuth", "Prisma"],
    githubLink: "https://github.com/your-username/chat-app",
    demoLink: "https://chat-app.example.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    backgroundImage: aboutImage,
    modalImage: aboutImage,
    shortDescription: "My personal portfolio showcasing projects and skills.",
    longDescription:
      "Built with React and styled-components, this site highlights my design sense, project experience, and skillset. It features smooth scrolling, responsive design, and dynamic content that’s easy to update.",
    skills: ["React", "styled-components", "Responsive Design"],
    githubLink: "https://github.com/your-username/portfolio",
    demoLink: "https://portfolio.example.com",
  },
  {
    id: 3,
    title: "E-commerce Store",
    backgroundImage: aboutImage,
    modalImage: aboutImage,
    shortDescription: "A full-stack e-commerce platform with cart, checkout, etc.",
    longDescription:
      "A Node.js and React-based e-commerce platform that includes a product catalog, shopping cart, secure checkout with Stripe integration, and a custom admin dashboard for managing products and orders.",
    skills: ["React", "Node.js", "Stripe", "MongoDB"],
    githubLink: "https://github.com/your-username/ecommerce",
    demoLink: "https://ecommerce.example.com",
  },
  {
    id: 4,
    title: "E-commerce Store",
    backgroundImage: aboutImage,
    modalImage: aboutImage,
    shortDescription: "A full-stack e-commerce platform with cart, checkout, etc.",
    longDescription:
      "A Node.js and React-based e-commerce platform that includes a product catalog, shopping cart, secure checkout with Stripe integration, and a custom admin dashboard for managing products and orders.",
    skills: ["React", "Node.js", "Stripe", "MongoDB"],
    githubLink: "https://github.com/your-username/ecommerce",
    demoLink: "https://ecommerce.example.com",
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
              <button onClick={() => openModal(project)}>Show More</button>
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
