import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);


  const leftColumnSkills = [
    { name: 'C', percentage: 75 },
    { name: 'HTML & CSS', percentage: 80 },
    { name: 'MOBILE APP DEVELOPMENT', percentage: 65 }
  ];

  const rightColumnSkills = [
    { name: 'JAVA', percentage: 70 },
    { name: 'Python', percentage: 60 },
    { name: 'ReactJs', percentage: 65 } // Added one more for balance
  ];

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <h2 className="section-title">SKILLS</h2>
      
      <div className="skills-container">
        <div className="skills-column">
          {leftColumnSkills.map((skill, index) => (
            <SkillBar 
              key={index} 
              name={skill.name} 
              percentage={skill.percentage} 
              animated={animated}
              delay={index * 0.2} // Stagger delay
            />
          ))}
        </div>
        
        <div className="skills-column">
          {rightColumnSkills.map((skill, index) => (
            <SkillBar 
              key={index} 
              name={skill.name} 
              percentage={skill.percentage} 
              animated={animated}
              delay={(index + leftColumnSkills.length) * 0.2} // Continue staggered delay
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ name, percentage, animated, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (animated) {
      const duration = 1500; // Animation duration in ms
      const incrementTime = duration / percentage;
      let currentCount = 0;
      
      const counter = setInterval(() => {
        currentCount += 1;
        if (currentCount <= percentage) {
          setCount(currentCount);
        } else {
          clearInterval(counter);
        }
      }, incrementTime);

      return () => clearInterval(counter);
    }
  }, [animated, percentage]);

  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{count}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ 
            width: animated ? `${percentage}%` : '0%',
            transition: `width 1.5s ease-out ${delay}s`
          }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;