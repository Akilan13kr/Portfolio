import React from 'react';
import './About.css';
import { FaUser, FaCode, FaHeart, FaBullseye } from 'react-icons/fa';

const About = () => {
  const aboutItems = [
    {
      title: "Who I Am",
      content: "A computer engineering graduate who loves building real-world tech solutions.",
      icon: <FaUser />
    },
    {
      title: "What I Do",
      content: "I develop web apps, mobile apps, and AI-based projects that solve practical problems.",
      icon: <FaCode />
    },
    {
      title: "My Interests",
      content: "Enthusiastic about AI, creative tech, and solving real-world challenges.",
      icon: <FaHeart />
    },
    {
      title: "Goal",
      content: "To keep learning, innovate, and create meaningful impact through technology.",
      icon: <FaBullseye />
    }
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="about-section-title">ABOUT</h2>
      <p className="about-section-subtitle">Discover who I am, what I do, and what drives me as a developer.</p>
      
      <div className="about-grid">
        {aboutItems.map((item, index) => (
          <div key={index} className="about-card">
            <div className="about-icon-container">
              <div className="about-icon-box">
                {React.cloneElement(item.icon, { 
                  className: "about-icon" 
                })}
              </div>
            </div>
            <h3 className="about-title">{item.title}</h3>
            <p className="about-content">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;