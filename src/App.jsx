import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
import Certificates from './Components/Certificates/Certificates';
import Contact from './Components/Contact/Contact';
import ProjectDetail from './Components/ProjectDetail/ProjectDetail'; // <== import your detail page

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Full project detail page */}
          <Route path="/Projects/:id" element={<ProjectDetail />} />

          {/* Main one-page app */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Navbar />
                <About />
                <Skills />
                <Resume />
                <Projects />
                <Certificates />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
