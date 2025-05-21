import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import { FaGithub, FaGlobe, FaYoutube } from 'react-icons/fa';

// Images
import heritageimage from '../../assets/Projectsimg/heritageimage.jpg';
import gasleaksystemimage from '../../assets/Projectsimg/gasleaks.jpg';
import damopenimage from '../../assets/Projectsimg/damopenimage.jpg';
import attendanceimage from '../../assets/Projectsimg/attendanceimage.png';
import weatherimage from '../../assets/Projectsimg/weatherimage.jpg';
import chatbotimage from '../../assets/Projectsimg/chatbotimage.jpg';
import portfolio from '../../assets/Projectsimg/portfolio.jpg';
import allProjects from '../../data/ProjectData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const navigate = useNavigate();
  const projects = allProjects

  // const projects = [
  //   {
  //     id: 1,
  //     title: "DIGITAL PLATFORM FOR PRESERVING HERITAGE",
  //     description: "A platform to document and preserve cultural heritage sites and know about all heritages and cultures",
  //     category: "WEBSITES",
  //     image: heritageimage,
  //     inProgress: false,
  //     links: {
  //       github: "https://github.com/yourusername/heritage-platform",
  //       website: "https://yourheritageplatform.com",
  //       youtube: ""
  //     }
  //   },
  //   {
  //     id: 2,
  //     title: "GAS LEAK DETECTION IOT SYSTEM",
  //     description: "Real-time gas leak detection with SMS alerts and cloud monitoring",
  //     category: "IOT",
  //     image: gasleaksystemimage,
  //     inProgress: true,
  //     links: {
  //       github: "https://github.com/yourusername/gas-leak-detector",
  //       website: "",
  //       youtube: ""
  //     }
  //   },
  //   {
  //     id: 3,
  //     title: "DISASTER MANAGEMENT DAM CONTROLLER",
  //     description: "Automated water level control system for flood prevention",
  //     category: "IOT",
  //     image: damopenimage,
  //     inProgress: false,
  //     links: {
  //       github: "https://github.com/yourusername/dam-disaster-management",
  //       website: "",
  //       youtube: ""
  //     }
  //   },
  //   {
  //     id: 4,
  //     title: "ANDROID ATTENDENCE SYSTEM",
  //     description: "Facial recognition attendance system with geofencing",
  //     category: "APPS",
  //     image: attendanceimage,
  //     inProgress: false,
  //     links: {
  //       github: "https://github.com/yourusername/attendance-app",
  //       website: "",
  //       youtube: ""
  //     }
  //   },
  //   {
  //     id: 5,
  //     title: "WEATHER PREDICTION SYSTEM",
  //     description: "A machine learning-based system that predicts weather patterns using image trained model.",
  //     category: "AI",
  //     image: weatherimage,
  //     inProgress: false,
  //     links: {
  //       github: "https://github.com/yourusername/ai-heritage-chatbot",
  //       website: "",
  //       youtube: ""
  //     }
  //   },
  //   {
  //     id: 6,
  //     title: "RECOMMENDATION CHATBOT",
  //     description: "AI-powered tree species recommendation system for urban planning",
  //     category: "AI",
  //     image: chatbotimage,
  //     inProgress: false,
  //     links: {
  //       github: "https://github.com/yourusername/tree-plantation",
  //       website: "",
  //       youtube: ""
  //     }
  //   },
  //   {
  //     id: 7,
  //     title: "PORTFOLIO",
  //     description: "Interactive developer portfolio with 3D elements",
  //     category: "WEBSITES",
  //     image: portfolio,
  //     inProgress: true,
  //     links: {
  //       github: "https://github.com/yourusername/portfolio",
  //       website: "",
  //       youtube: ""
  //     }
  //   }
  // ];

  const filters = ['ALL', 'IN PROGRESS', 'WEBSITES', 'IOT', 'APPS', 'AI'];

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : activeFilter === 'IN PROGRESS'
      ? projects.filter(project => project.inProgress)
      : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="project-container">
        <h2 className="project-section-title">THINGS I'VE BUILD</h2>
        <p className="project-section-subtitle">A glimpse of my technical journey—each project tells a story.</p>

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
            <div
              key={project.id}
              className="project-card"
              onClick={() => navigate(`/projects/${project.id}`)}
              // style={{ cursor: 'zoom-in' }}
            >
              {project.inProgress && (
                <div className="progress-badge">In Progress</div>
              )}

              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links" onClick={(e) => e.stopPropagation()}>
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

              <div className="project-info"
               style={{ cursor: 'zoom-in' }}>
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
