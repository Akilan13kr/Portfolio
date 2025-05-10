import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero-section');
    const navbarOffset = hero.offsetHeight;

    const handleScroll = () => {
      // Make navbar sticky only when it reaches top of viewport
      setIsSticky(window.scrollY >= navbarOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">AKILAN</div>
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#resume">RESUME</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#certificates">CERTIFICATES</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;