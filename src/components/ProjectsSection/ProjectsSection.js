import React, { useState, useEffect } from "react";
import "./ProjectsSection.css";
import aboutImage from "../../assets/aboutImage.png"; 
import DIYProject from "../../assets/DIYProject.jpeg";
import PortfolioWebsite from "../../assets/PortfolioWebsite.png";
import defaultProjectImage from "../../assets/default-project.png"; // You should add a default image to your assets
import farImage from "../../assets/FARImage.png"
import ThresholdImage from "../../assets/Threshold.png"

// Enhanced project data with categories and display hints
const initialProjects = [
  {
    id: 1,
    title: "FindMyProf",
    backgroundImage: farImage,
    modalImage: farImage,
    shortDescription: "An all in one stop for any and all research pursuits",
    longDescription:
      "This being my Software Lab Project, I built a web application that helps students find professors based on their research interests. This features diplaying interest aligned professors based on your profile, a chatbot to understand the research pursuits of the professor, and a personalized SOP generator and CV generator.",
    skills: ["React", "Flask", "RAG", "Database Management"],
    githubLink: "https://github.com/krishna-prabu-kgpian/far-frontend",
    demoLink: "https://drive.google.com/file/d/1nJGeJAtiD84545exNggIPbO_-k1AKO8a/view?usp=sharing",
    category: "Web Development",
    featured: true,
  },
  {
    id: 2,
    title: "Campus Pal",
    backgroundImage: aboutImage,
    modalImage: aboutImage,
    shortDescription: "A chatbot to answer all student queries regarding internships.",
    longDescription:
      "Built to answer queries that a student may have regarding the CDC Placement and Internship Process. Performs RAG over the Foresight articles available, and helps the user with his/her query.",
    skills: ["RAG", "Langchain", "Langgraph", "Chainlit", "Pinecone", "LlamaIndex"],
    githubLink: "https://github.com/your-username/portfolio",
    demoLink: "https://portfolio.example.com",
    category: "AI/ML",
    featured: true,
  },
  {
    id: 3,
    title: "NLP Based Text Summarizer",
    backgroundImage: aboutImage, 
    modalImage: aboutImage,
    shortDescription: "A real-time application which will summarize text messages.",
    longDescription:
      "This project aims to summarize whatsapp and other messages, and generates summaries of them. It is aimed for a conversation occuring in a group or between individuals, to generate concise and full summaries.",
    skills: ["Fine Tuning", "Transformers", "HuggingFace", "NLP"],
    githubLink: "https://github.com/your-username/chat-app",
    demoLink: "https://chat-app.example.com",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "Portfolio Website",
    backgroundImage: PortfolioWebsite,
    modalImage: PortfolioWebsite,
    shortDescription: "A portfolio website showcasing me, who I am, my achievements and interests.",
    longDescription:
      "A React App hosted on Netlify, showcasing my projects, skills, and other hobbies of mine. The site is responsive and has a clean, modern design. It uses CSS for styling.",
    skills: ["React", "HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/krishna-prabu-kgpian/portfolio",
    demoLink: "https://krishnaprabu.netlify.app/",
    category: "Web Development",
  },
  {
    id: 5,
    title: "Automatic Waste Segregator",
    backgroundImage: DIYProject,
    modalImage: DIYProject,
    shortDescription: "An AI Powered Automatic Waste Segregator.",
    longDescription:
      "This project automates waste classification using OpenAI's Vision API and an Arduino-based sorting mechanism. The system downloads images from emails, processes them with AI for classification, and then transmits the classification data to an Arduino for physical sorting or further action.",
    skills: ["Arduino", "Python", "Data Handling", "API Integration"],
    githubLink: "https://github.com/krishna-prabu-kgpian/diy_project",
    demoLink: "https://drive.google.com/file/d/1jgA1qZ4_fPEUxQzfD2-TWgAc1hFxtYgi/view?usp=sharing",
    category: "IoT",
  },
  {
    id: 6,
    title: "Threshold: The Dawn of Civilization",
    backgroundImage: ThresholdImage,
    modalImage: ThresholdImage,
    shortDescription: "A Turn-Based Strategy Board Game.",
    longDescription:
      "An immersive turn-based strategy game that simulates the rise and development of ancient civilizations. Players navigate resource management, technological advancements, and diplomatic relations while building their society from a small settlement to a thriving civilization. Note - View Code takes you to the game website, Live Demo takes you to a game showcase.",
    skills: ["Game Design", "Strategy Development", "Creative Writing", "UX Design"],
    githubLink: "https://www.thresholdboardgame.com",
    demoLink: "https://boardgamegeek.com/example-link",
    category: "Game Development",
    displayMode: "contain", // Added hint for this specific image
  },
];

function ProjectsSection() {
  const [projects] = useState(initialProjects);
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeCategory, setActiveCategory] = useState("All");
  const [imgLoadError, setImgLoadError] = useState({});
  const [imageStyles, setImageStyles] = useState({});

  // Get all unique categories
  const categories = ["All", ...new Set(projects.map(project => project.category))];

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

  // Enhanced image handling logic
  const handleImageLoad = (projectId, event) => {
    const img = event.target;
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    
    // Calculate optimal background-size property
    let backgroundSize;
    let imageClass = '';
    
    // More refined logic for aspect ratio handling
    if (aspectRatio > 1.5) {
      // Very wide image
      backgroundSize = 'contain';
      imageClass = 'wide-image';
    } else if (aspectRatio < 0.75) {
      // Very tall image
      backgroundSize = 'contain';
      imageClass = 'tall-image';
    } else if (aspectRatio >= 0.9 && aspectRatio <= 1.1) {
      // Close to square
      backgroundSize = 'cover';
      imageClass = '';
    } else {
      // Normal proportions
      backgroundSize = 'cover';
      imageClass = '';
    }
    
    // Check if the project has a specific display mode hint
    const project = projects.find(p => p.id === projectId);
    if (project && project.displayMode === 'contain') {
      backgroundSize = 'contain';
      imageClass = 'use-contain';
    }
    
    setImageStyles(prev => ({
      ...prev,
      [projectId]: { backgroundSize, imageClass }
    }));
  };

  // Handle image loading errors
  const handleImageError = (projectId) => {
    setImgLoadError(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  // Filter projects by category
  const filterProjects = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  // Opens modal with selected project details
  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Closes the modal
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Close modal if click occurs on the overlay (outside modal content)
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedProject]);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">
          Here are some of my recent work and personal projects
        </p>

        {/* Category filtering */}
        <div className="project-categories">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => filterProjects(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={`projects-grid ${isMobile ? 'mobile-grid' : ''}`}>
          {filteredProjects.map((project) => {
            // Get image style for this project
            const imgStyle = imageStyles[project.id] || {};
            const imageClassNames = imgStyle.imageClass || '';
            
            return (
              <div
                key={project.id}
                className={`project-card ${imgLoadError[project.id] ? 'no-image' : ''} ${imageClassNames}`}
                style={{ 
                  backgroundImage: imgLoadError[project.id] 
                    ? 'none' 
                    : `url(${project.backgroundImage || defaultProjectImage})`,
                  backgroundSize: imgStyle.backgroundSize || 'cover' // Apply explicit backgroundSize
                }}
                onClick={() => openModal(project)}
              >
                {/* Hidden image to detect load errors and analyze dimensions */}
                <img 
                  src={project.backgroundImage || defaultProjectImage} 
                  alt="" 
                  style={{ display: 'none' }} 
                  onError={() => handleImageError(project.id)}
                  onLoad={(e) => handleImageLoad(project.id, e)}
                />
                
                {/* Featured badge */}
                {project.featured && (
                  <span className="project-card-badge">Featured</span>
                )}
                
                {/* Hover overlay with short description */}
                <div className="card-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  <button 
                    className="projects-section-button" 
                    onClick={() => openModal(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedProject.title}</h2>

            {/* Optimized image display in modal */}
            <div className="modal-image-container">
              <img
                src={selectedProject.modalImage || selectedProject.backgroundImage || defaultProjectImage}
                alt={selectedProject.title}
                className="modal-image"
                onError={(e) => {e.target.src = defaultProjectImage}}
              />
            </div>

            <p className="long-description">{selectedProject.longDescription}</p>

            {/* Skills gained */}
            {selectedProject.skills && selectedProject.skills.length > 0 && (
              <div className="modal-skills">
                <h4>Skills & Technologies</h4>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                View Code
              </a>
              <a
                href={selectedProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V13.5A1.5 1.5 0 0 0 4.5 15h8a1.5 1.5 0 0 0 1.5-1.5V2.5A1.5 1.5 0 0 0 12.5 1h-8Zm8 14h-8a.5.5 0 0 1-.5-.5V2.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5Z"/>
                  <path d="M6.146 3.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 1 1-.708-.708L7.793 5.5 6.146 3.854a.5.5 0 0 1 0-.708ZM4.5 9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z"/>
                </svg>
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
