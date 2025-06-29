import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';

const LanguageSelector = ({ sourceLanguage, targetLanguage, onSwap }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl"
  >
    <div className="flex items-center justify-between">
      <div className="text-center flex-1">
        <div className="text-lg font-semibold text-white">{sourceLanguage}</div>
        <div className="text-xs text-violet-200">Source</div>
      </div>
      
      <motion.button
        onClick={onSwap}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        className="p-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full shadow-lg mx-4"
      >
        <ArrowLeftRight className="w-5 h-5 text-white" />
      </motion.button>
      
      <div className="text-center flex-1">
        <div className="text-lg font-semibold text-white">{targetLanguage}</div>
        <div className="text-xs text-violet-200">Target</div>
      </div>
    </div>
  </motion.div>
);

export default LanguageSelector;