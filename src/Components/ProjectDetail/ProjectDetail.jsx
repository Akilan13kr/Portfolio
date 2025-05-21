import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';
import { FaGithub, FaGlobe, FaYoutube } from 'react-icons/fa';
import allProjects from '../../data/ProjectData'; // Separate file where all project data is stored

const ProjectDetail = () => {
  const { id } = useParams();
  const project = allProjects.find(p => p.id === parseInt(id));

  if (!project) return <p style={{ color: 'white' }}>Project not found.</p>;

  return (
    <div className="project-detail-page">
      <div className="project-header">
        <h1>{project.title}</h1>
        <p className="project-sub">{project.category}</p>
      </div>

      <img className="project-banner" src={project.image} alt={project.title} />

      <div className="project-content">
        <h2>Overview</h2>
        <p>{project.description}</p>

        {project.features && (
          <>
            <h2>Features</h2>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        <h2>Tech Stack</h2>
        <ul>
          {Object.entries(project.techStack || {}).map(([key, stack]) => (
            <li key={key}>
              <strong>{key}:</strong> {stack.join(', ')}
            </li>
          ))}
        </ul>

        {project.howItWorks && (
          <>
            <h2>How It Works</h2>
            <ol>
              {project.howItWorks.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </>
        )}

        {project.links && (
          <div className="project-links">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            )}
            {project.links.website && (
              <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                <FaGlobe /> Live Site
              </a>
            )}
            {project.links.youtube && (
              <a href={project.links.youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube /> Demo Video
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
