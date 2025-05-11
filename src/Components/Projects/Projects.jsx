import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaGlobe, FaYoutube } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const projects = [
    {
      id: 1,
      title: "Endangered Heritage Platform",
      description: "A platform to document and preserve cultural heritage sites using 3D scanning technology",
      category: "WEBSITES",
      image: "heritage.jpg",
      inProgress: false,
      links: {
        github: "https://github.com/yourusername/heritage-platform",
        website: "https://yourheritageplatform.com",
        youtube: ""
      }
    },
    {
      id: 2,
      title: "Gas Leak Detection IoT System",
      description: "Real-time gas leak detection with SMS alerts and cloud monitoring",
      category: "IOT",
      image: "gasleak.jpg",
      inProgress: true,
      links: {
        github: "https://github.com/yourusername/gas-leak-detector",
        website: "",
        youtube: ""
      }
    },
    {
      id: 3,
      title: "Disaster Management Dam Controller",
      description: "Automated water level control system for flood prevention",
      category: "IOT",
      image: "damcontroller.jpg",
      inProgress: false,
      links: {
        github: "https://github.com/yourusername/dam-disaster-management",
        website: "",
        youtube: ""
      }
    },
    {
      id: 4,
      title: "Android Attendance System",
      description: "Facial recognition attendance system with geofencing",
      category: "APPS",
      image: "attendance.jpg",
      inProgress: false,
      links: {
        github: "https://github.com/yourusername/attendance-app",
        website: "",
        youtube: ""
      }
    },
    {
      id: 5,
      title: "AI Chatbot for Heritage Support",
      description: "NLP chatbot providing information about cultural heritage sites",
      category: "AI",
      image: "chatbot.jpg",
      inProgress: false,
      links: {
        github: "https://github.com/yourusername/ai-heritage-chatbot",
        website: "",
        youtube: ""
      }
    },
    {
      id: 6,
      title: "Recommendation Chatbot",
      description: "AI-powered tree species recommendation system for urban planning",
      category: "AI",
      image: "treeplantation.jpg",
      inProgress: false,
      links: {
        github: "https://github.com/yourusername/tree-plantation",
        website: "",
        youtube: ""
      }
    },
    {
      id: 7,
      title: "Portfolio",
      description: "Interactive developer portfolio with 3D elements",
      category: "WEBSITES",
      image: "portfolio.jpg",
      inProgress: true,
      links: {
        github: "https://github.com/yourusername/portfolio",
        website: "",
        youtube: ""
      }
    }
  ];

  const filters = ['ALL', 'IN PROGRESS', 'WEBSITES', 'IOT', 'APPS', 'AI'];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : activeFilter === 'IN PROGRESS'
      ? projects.filter(project => project.inProgress)
      : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">THINGS I'VE BUILD</h2>
        <p className="section-subtitle">A glimpse of my technical journey—each project tells a story.</p>
        
        <div className="filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              {project.inProgress && (
                <div className="progress-badge">In Progress</div>
              )}
              <div className="project-image">
                <img src={`/images/${project.image}`} alt={project.title} />
                <div className="project-links">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="project-icon" />
                    </a>
                  )}
                  {project.links.website && (
                    <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                      <FaGlobe className="project-icon" />
                    </a>
                  )}
                  {project.links.youtube && (
                    <a href={project.links.youtube} target="_blank" rel="noopener noreferrer">
                      <FaYoutube className="project-icon" />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-category">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;