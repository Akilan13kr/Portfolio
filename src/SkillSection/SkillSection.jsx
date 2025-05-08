import React from 'react';
import '../SkillSection/SkillSection.css'
import ProgressBar from '../ProgressBar/ProgressBar.jsx';

function SkillSection() {
  return (
    <>
      <div id="skills"className="page-header-wrapper">
        <div className="container">
          <div className="page-header text-center wow fadeInUp" data-wow-delay="0.3s">
            <h2>My Skills</h2>
          </div>
        </div>
      </div>

      <div className="our-skills">
        <div className="container">
          <div className="row">
            <ProgressBar value={80} label="C" />
            <ProgressBar value={70} label="JAVA" />
            <ProgressBar value={70} label="Python" />
            <ProgressBar value={80} label="HTML & CSS" />
            <ProgressBar value={50} label="ReactJs" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillSection;
