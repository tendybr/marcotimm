import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  // Use a split text logic for a nicer animation
  const text = "Marco Timm".split("");

  return (
    <motion.div
      className="loading-screen"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="loading-content">
        <motion.div className="loading-logo">
          {text.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom spring-like ease
                delay: index * 0.04 + 0.2, // Staggered delay
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div
            className="loading-progress-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
