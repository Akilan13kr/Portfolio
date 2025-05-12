import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('.hero-section');
    const navbarOffset = hero?.offsetHeight || 0;

    const handleScroll = () => {
      setIsSticky(window.scrollY >= navbarOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">AKILAN</div>
        
        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>HOME</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a></li>
          <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>SKILLS</a></li>
          <li><a href="#resume" onClick={() => setIsMobileMenuOpen(false)}>RESUME</a></li>
          <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</a></li>
          <li><a href="#certificates" onClick={() => setIsMobileMenuOpen(false)}>CERTIFICATES</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" onClick={toggleMobileMenu}>HOME</a></li>
          <li><a href="#about" onClick={toggleMobileMenu}>ABOUT</a></li>
          <li><a href="#skills" onClick={toggleMobileMenu}>SKILLS</a></li>
          <li><a href="#resume" onClick={toggleMobileMenu}>RESUME</a></li>
          <li><a href="#projects" onClick={toggleMobileMenu}>PROJECTS</a></li>
          <li><a href="#certificates" onClick={toggleMobileMenu}>CERTIFICATES</a></li>
          <li><a href="#contact" onClick={toggleMobileMenu}>CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;