import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const handleHireMeClick = () => {
    window.location.href = "mailto:akilan@example.com?subject=Hire%20Akilan%20K.R&body=Hello%20Akilan,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20potential%20opportunity...";
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">I AM AKILAN K.R</h1>
        <h2 className="hero-subtitle">SOFTWARE DEVELOPER</h2>
        <p className="hero-description">
          STAND ON A SWEET SPOT WHERE DESIGN & CODE INTERSECTS.
        </p>
        
        <button className="hire-me-btn" onClick={handleHireMeClick}>
          HIRE ME
        </button>
        
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="mailto:akilan@example.com">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;