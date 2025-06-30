import React from 'react';
import { motion } from 'framer-motion';

const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="pt-8 pb-6 px-4"
  >
    <div className="max-w-md mx-auto text-center">
      <motion.div
        className="inline-block mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img 
          src="https://i.postimg.cc/2jbmzYGy/Chat-GPT-Image-Jun-30-2025-01-25-55-PM-removebg-preview.png" 
          alt="LinguaLink Logo" 
          className="w-21 h-21 rounded-2xl shadow-lg mx-auto"
        />
      </motion.div>
      
      <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent mb-2">
        LinguaLink
      </h1>
      <p className="text-violet-200 text-sm">
        Your Deutschmate
      </p>
    </div>
  </motion.header>
);

export default Header;
