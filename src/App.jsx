import React from 'react';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Resume from './Components/Resume/Resume'



function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Resume />
      
      
      {/* Other sections will go here */}
     
    </div>
  );
}

export default App;