import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';
import { FaGithub, FaGlobe, FaYoutube } from 'react-icons/fa';
import allProjects from '../../data/ProjectData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = allProjects.find(p => p.id === parseInt(id));

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <p className="not-found">Project not found.</p>;

  // Filter out empty tech stack categories
  const validTechStackEntries = Object.entries(project.techStack || {}).filter(
    ([_, technologies]) => technologies && technologies.length > 0
  );

  return (
    <div className="project-detail-page">
      <header className="project-detail-header">
        <div className="project-detail-meta">
          <span className="project-detail-category">{project.category}</span>
          {project.inProgress && <span className="project-detail-status">IN PROGRESS</span>}
        </div>
        <h1>{project.title}</h1>
      </header>

      <div className="project-detail-banner-container">
        <img className="project-detail-banner" src={project.image} alt={project.title} />
      </div>

      <div className="project-detail-content">
        <section className="project-detail-section">
          <h2>PROJECT OVERVIEW</h2>
          <p className="project-detail-description">{project.description.long}</p>
        </section>

        <div className="project-details-grid">
          {project.features?.length > 0 && (
            <section className="project-detail-section">
              <h2>FEATURES</h2>
              <ul className="feature-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {validTechStackEntries.length > 0 && (
            <section className="project-detail-section">
              <h2>TECH STACK</h2>
              <div className="tech-stack-container">
                {validTechStackEntries.map(([category, technologies]) => (
                  <div key={category} className="tech-stack-category">
                    <h3>{category.toUpperCase()}</h3>
                    <div className="tech-stack-items">
                      {technologies.map((tech, index) => (
                        <span key={index} className="tech-stack-item">
                          {tech}{index < technologies.length - 1 ? ',' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Rest of your sections remain the same */}
        {project.howItWorks?.length > 0 && (
          <section className="project-detail-section">
            <h2>HOW IT WORKS</h2>
            <ol className="how-it-works-list">
              {project.howItWorks.map((step, index) => (
                <li key={index}>
                  <span className="step-number">{index + 1}</span>
                  <span className="step-content">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {project.challenges?.length > 0 && (
          <section className="project-detail-section">
            <h2>CHALLENGES</h2>
            <ul className="challenges-list">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>
        )}

        {project.futurePlans?.length > 0 && (
          <section className="project-detail-section">
            <h2>FUTURE PLANS</h2>
            <ul className="future-plans-list">
              {project.futurePlans.map((plan, index) => (
                <li key={index}>{plan}</li>
              ))}
            </ul>
          </section>
        )}

        {project.role && (
          <section className="project-detail-section">
            <h2>MY ROLE</h2>
            <p className='project-detail-description'>{project.role}</p>
          </section>
        )}

        {project.links && (
          <section className="project-detail-links-section">
            <h2>LINKS</h2>
            <div className="project-detail-links">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GITHUB
                </a>
              )}
              {project.links.website && (
                <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                  <FaGlobe /> LIVE SITE
                </a>
              )}
              {project.links.youtube && (
                <a href={project.links.youtube} target="_blank" rel="noopener noreferrer">
                  <FaYoutube /> DEMO VIDEO
                </a>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
