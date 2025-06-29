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
          src="https://storage.googleapis.com/hostinger-horizons-assets-prod/aba42882-e11d-47bc-a4fa-a70d7c3a7194/ff8a9e1600647bf00f4f4a1bb4fa1694.png" 
          alt="LinguaLink Logo" 
          className="w-16 h-16 rounded-2xl shadow-lg mx-auto"
        />
      </motion.div>
      
      <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent mb-2">
        LinguaLink
      </h1>
      <p className="text-violet-200 text-sm">
        Your Link to Languages
      </p>
    </div>
  </motion.header>
);

export default Header;
