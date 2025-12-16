// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import './Hero.css';

const Hero = () => {
  // Animation variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 } // Stagger effects for children
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="badge">
          Certified by FutureSkills Prime
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="hero-title">
          Learning <span className="highlight">Reimagined</span><br />
          For The Future.
        </motion.h1>
        
        <motion.p variants={itemVariants} className="hero-subtitle">
          Unlox was created with one simple yet powerful core belief: 
          "Learning Made Easy". Dive into our dynamic programs and 
          experience education like never before.
        </motion.p>
        
        <motion.div variants={itemVariants} className="hero-buttons">
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Programs
          </motion.button>
          <motion.button 
            className="btn-secondary"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            View Demo
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;