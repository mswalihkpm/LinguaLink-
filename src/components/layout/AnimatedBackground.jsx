import React from 'react';
import { motion } from 'framer-motion';

const Glitter = ({ delay }) => {
  const size = Math.random() * 3 + 1;
  const duration = Math.random() * 5 + 5;

  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        width: size,
        height: size,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: 0,
      }}
      animate={{
        y: [0, -100, 0],
        x: [0, Math.random() * 40 - 20, 0],
        opacity: [0, 0.8, 0],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    />
  );
};

const AnimatedBackground = () => {
  const numGlitters = 50;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-violet-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="absolute inset-0">
        {Array.from({ length: numGlitters }).map((_, i) => (
          <Glitter key={i} delay={Math.random() * 10} />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;