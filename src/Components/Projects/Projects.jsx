import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaGlobe, FaYoutube } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const projects = [
    {
      id: 1,
      title: "Endangered Heritage Platform",
      description: "A web portal to preserve and share indigenous culture using AI and community contributions.",
      category: "WEBSITES",
      image: "heritage.jpg",
      inProgress: false,
      links: {
        github: "https://github.com/yourusername/heritage-platform",
        website: "https://yourheritageplatform.com",
        youtube: "https://youtube.com"
      }
    },
    {
      id: 2,
      title: "Gas Leak Detection IoT System",
      description: "A smart IoT device that detects gas leaks and triggers safety actions automatically.",
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
      description: "An automated dam control system using sensors and servo motors for flood prevention.",
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
      description: "A mobile app using Firebase to record, track, and manage student attendance easily.",
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
      title: "Weather Prediction",
      description: "A responsive portfolio with 3D animations and dark mode",
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
      description: "An AI-powered bot recommending plantation areas to support eco-initiatives.",
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
      description: "A personal portfolio site showcasing my projects, skills, and downloadable resume.",
      category: "WEBSITES",
      image: "treeplantation.jpg",
      inProgress: true,
      links: {
        github: "https://github.com/yourusername/tree-plantation",
        website: "",
        youtube: ""
      }
    }
  ];
  


const filters = ['ALL', 'IN PROGRESS', 'WEBSITES', 'AI', 'APPS', 'IOT'];


const filteredProjects = activeFilter === 'ALL' 
  ? projects 
  : activeFilter === 'IN PROGRESS'
    ? projects.filter(project => project.inProgress)
    : projects.filter(project => project.category.includes(activeFilter));
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">THINGS I’VE BUILD</h2>
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
              <p className="project-description">{project.description}</p> {/* Add this line */}
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