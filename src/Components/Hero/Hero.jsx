import './Hero.css';
import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const handleHireMeClick = () => {
    window.location.href = "mailto:akilan13kr@gmail.com?subject=Hire%20Akilan%20K.R&body=Hello%20Akilan,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20potential%20opportunity...";
  };

  const jobTitles = [
    "SOFTWARE DEVELOPER",
    "WEB DEVELOPER",
    "TESTER",
    "FULL STACK ENGINEER"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayLetters, setDisplayLetters] = useState([]);
  const animationRef = useRef(null);

  // Initialize display letters
  useEffect(() => {
    setDisplayLetters(jobTitles[0].split('').map(char => ({
      current: char,
      target: char,
      isChanging: false
    })));
  }, []);

  useEffect(() => {
    const transitionToNextTitle = () => {
      const nextIndex = (currentIndex + 1) % jobTitles.length;
      const currentTitle = jobTitles[currentIndex];
      const nextTitle = jobTitles[nextIndex];
      
      // Set up new target letters
      setDisplayLetters(prev => {
        const newLetters = [];
        const maxLength = Math.max(currentTitle.length, nextTitle.length);
        
        for (let i = 0; i < maxLength; i++) {
          const currentChar = i < currentTitle.length ? currentTitle[i] : ' ';
          const targetChar = i < nextTitle.length ? nextTitle[i] : ' ';
          
          newLetters.push({
            current: i < prev.length ? prev[i].current : currentChar,
            target: targetChar,
            isChanging: currentChar !== targetChar
          });
        }
        
        return newLetters;
      });

      // Start animation
      animateLetters(nextIndex);
    };

    const animateLetters = (nextIndex) => {
      let animationComplete = false;
      let animationFrameId;
      
      const updateLetters = () => {
        setDisplayLetters(prev => {
          let allComplete = true;
          const newLetters = prev.map(letter => {
            if (letter.current === letter.target || !letter.isChanging) {
              return letter;
            }
            
            allComplete = false;
            
            // Get next character in sequence
            let nextCode = letter.current.charCodeAt(0) + 1;
            if (letter.current === ' ') nextCode = 65; // Space -> A
            if (nextCode > 90) nextCode = 65; // Z -> A
            
            // Check if we've reached target
            const targetCode = letter.target.charCodeAt(0);
            if (nextCode === targetCode || 
                (letter.target === ' ' && nextCode >= 90)) {
              return { ...letter, current: letter.target, isChanging: false };
            }
            
            return { ...letter, current: String.fromCharCode(nextCode) };
          });
          
          if (allComplete) {
            animationComplete = true;
            setCurrentIndex(nextIndex);
          }
          
          return newLetters;
        });
        
        if (!animationComplete) {
          animationFrameId = requestAnimationFrame(updateLetters);
        }
      };
      
      animationRef.current = animationFrameId;
      updateLetters();
    };
    
    const interval = setInterval(transitionToNextTitle, 3000);
    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationRef.current);
    };
  }, [currentIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">I AM AKILAN K.R</h1>
        <h2 className="hero-subtitle">
          {displayLetters.map((letter, index) => (
            <span 
              key={index} 
              className={`letter ${letter.isChanging ? 'changing' : ''}`}
            >
              {letter.current === ' ' ? '\u00A0' : letter.current}
            </span>
          ))}
        </h2>
        <p className="hero-description">
          Crafting seamless digital experiences with clean code and thoughtful design
        </p>
        
        <button className="hire-me-btn" onClick={handleHireMeClick}>
          HIRE ME
        </button>
        
        <div className="social-icons">
          <a href="https://github.com/Akilan13kr" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/akilan-k-r/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="mailto:akilan13kr@gmail.com">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;