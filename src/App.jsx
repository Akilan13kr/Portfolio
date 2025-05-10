import React from 'react';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      {/* Other sections will go here */}
      <div style={{ height: '200vh' }}> {/* Temporary spacer for testing */}</div>
    </div>
  );
}

export default App;