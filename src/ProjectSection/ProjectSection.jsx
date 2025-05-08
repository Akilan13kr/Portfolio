import React from 'react';
import '../ProjectSection/ProjectSection.css'
import projectImage from '../assets/project.png'

const projects = [
      {
        title: "Heritage Preservation Platform",
        category: "fullstack",
        image: projectImage,
        description: "A full-stack platform to digitally preserve endangered indigenous heritage using AI, user-submitted content, and verification workflows.",
      },
      {
        title: "Portfolio",
        category: "frontend",
        image: projectImage,
        description: "A responsive React-based portfolio website showcasing my projects, skills, and background as a software engineer.",
      },
      {
        title: "Attendance App",
        category: "Mobile App",
        image: projectImage,
        description: "An Android app built with Firebase for real-time attendance tracking, data sync, and user authentication.",
      },
      {
        title: "Recommendation Chatbot",
        category: "ai",
        image: projectImage,
        description: "An AI-powered chatbot that recommends heritage sites and content based on user inputs and interests.",
      },
      {
        title: "Weather Prediction",
        category: "ai",
        image: projectImage,
        description: "A machine learning model that predicts local weather patterns using historical climate data and real-time input.",
      },
      {
        title: "User Contribution System",
        category: "backend",
        image: projectImage,
        description: "A Flask backend that handles multimedia and article submissions, verifies authenticity, and stores data securely.",
      },
      {
        title: "Automated Dam Close System",
        category: "backend",
        image: projectImage,
        description: "Automated Dam Opening system that triggers servo actions and sends alerts via SMS/calls using SIM800L.",
      },
    ];
    

function ProjectSection() {
  return (
    <section className="site-section section-works" id="works">
      <div className="container">
        <h2>My Projects</h2>
        <p className="section-subtitle"><span>Explore some of my featured work</span></p>

        <div className="portfolio">
          <ul className="portfolio-sorting list-inline">
            <li><a href="#" className="active" data-group="all">All</a></li>
            <li><a href="#" data-group="frontend">Frontend</a></li>
            <li><a href="#" data-group="iot">Iot</a></li>
            <li><a href="#" data-group="backend">Backend</a></li>
            <li><a href="#" data-group="Mobile App">Mobile App</a></li>
            <li><a href="#" data-group="fullstack">Full Stack</a></li>
            <li><a href="#" data-group="ai">AI</a></li>
            
          </ul>

          <div className="row" id="grid">
            {projects.map((project, index) => (
              <div className="col-md-3 col-sm-4 col-xs-6" key={index} data-groups={`["${project.category}"]`}>
                <div className="portfolio-item">
                  <div className="portfolio-item-thumb">
                    <img src={project.image} alt={project.title} className="img-res" />
                    <a href={project.image} className="rectangle" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-plus"></i>
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
