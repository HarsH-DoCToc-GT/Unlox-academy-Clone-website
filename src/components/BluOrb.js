import React from 'react';
import { motion } from 'framer-motion';

const BluOrb = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
      <motion.div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #3b82f6 0%, #0a0a0a 70%)',
          boxShadow: '0 0 20px #3b82f6'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
          boxShadow: [
            "0 0 20px #3b82f6",
            "0 0 50px #3b82f6",
            "0 0 20px #3b82f6"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default BluOrb;