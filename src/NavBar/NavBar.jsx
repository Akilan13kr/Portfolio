import React from 'react'
import '../NavBar/NavBar.css'
import HeroSection from '../HeroSection/HeroSection.jsx'


function NavBar() {
    return (
      <>
        <HeroSection />
        <header id="header" className="header-main">
          <nav id="main-navbar" className="navbar" role="navigation"> 
            <div className="container">
              <a className="name" href="#top">
                <h3>AK</h3>
              </a>
  
              <div className="list-container">
                <ul className="orderlist">
                  <li><a className="page-scroll" href="#top">HOME</a></li>
                  <li><a className="page-scroll"href="#skills">SKILLS</a></li>
                  <li><a className="page-scroll"href="#services-section">Services</a></li>
                  <li><a className="page-scroll"href="#portfolio-section">Works</a></li>
                  <li><a className="page-scroll"href="#team-section">Team</a></li>
                  <li><a className="page-scroll"href="#prices-section">Prices</a></li>
                  <li><a className="page-scroll"href="#contact-section">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    )
  }
  

export default NavBar