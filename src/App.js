// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import BluOrb from './components/BluOrb'; // Import the new component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <BluOrb /> {/* Placed between Hero and Features for visual impact */}
      <Features />
      <Footer />
    </div>
  );
}

export default App;