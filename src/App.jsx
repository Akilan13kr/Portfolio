import React from 'react';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects'
import Certificates from './Components/Certificates/Certificates'
import Contact from './Components/Contact/Contact'


function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Certificates />
      <Contact />
      
      
      
      {/* Other sections will go here */}
     
    </div>
  );
}

export default App;