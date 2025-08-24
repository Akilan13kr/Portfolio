import React from 'react';
import './Resume.css';
import { FaFilePdf } from 'react-icons/fa';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="section-title">MY DOCUMENTS</h2>
        <p className="resume-description">
        Download my resume/Cv to explore my skills, education, and project experience.
        </p>
        
        <div className="resume-download-buttons">
          <a href="https://drive.google.com/file/d/1UgoRTNYfytKFHx3ErOyg52jHbkkHSsQZ/view?usp=sharing" className="resume-download-btn" download>
            <FaFilePdf className="resume-pdf-icon" />
            Download Resume
          </a>
          
          <a href="https://drive.google.com/file/d/1Xv8syK755gx-EfEoERnQiqeWRqbZQ1Ke/view?usp=sharing" className="resume-download-btn" download>
            <FaFilePdf className="resume-pdf-icon" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
