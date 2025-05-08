import React from 'react'
import '../HeroSection/HeroSection.css'

function HeroSection() {
  return (
    <div id="top" className="hero background-overlay">
    
        {/* hero image change in css */}
        <div className="hero-content">
            <h1>I am Akilan K. R.</h1>
            <p className="hero-job"><span>I'M A CREATIVE WEB DEVELOPER & SOFTWARE ENGINEER</span></p>
            <p className="hero-job-desc">I STAND ON A SWEET SPOT WHERE DESIGN &amp; CODE INTERSECTS. </p>

        </div>
        {/* hero arrow */}
        <div className="hero-arrow page-scroll home-arrow-down">
            <a className="" href="#intro"><i className="fa fa-angle-double-down" aria-hidden="true"></i></a>
        </div>

    </div>

  )
}

export default HeroSection