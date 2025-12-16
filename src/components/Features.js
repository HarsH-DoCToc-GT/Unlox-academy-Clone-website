// src/components/Features.js
import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const featureList = [
    {
      title: "Blu: Hyper Intelligent AI",
      desc: "Your personal 24/7 mentor. Real-time conversation, doubts solved instantly, and personalized learning paths.",
      icon: "🤖"
    },
    {
      title: "Edu-let Tablet",
      desc: "A dedicated learning device provided to every student. Distraction-free education with pre-loaded content.",
      icon: "📱"
    },
    {
      title: "Job Bridge Programs",
      desc: "100% Career Opportunities with guaranteed project completion and industry-grade experience.",
      icon: "💼"
    }
  ];

  return (
    <section className="features-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // Animates only once when in view
        transition={{ duration: 0.6 }}
      >
        Why Choose Unlox?
      </motion.h2>

      <div className="features-grid">
        {featureList.map((feature, index) => (
          <motion.div 
            key={index} 
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered delay
            whileHover={{ y: -10, borderColor: "#3b82f6", boxShadow: "0px 10px 30px rgba(59, 130, 246, 0.2)" }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;