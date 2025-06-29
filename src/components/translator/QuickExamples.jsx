import React from 'react';
import { motion } from 'framer-motion';

const examples = [
  { de: 'Welt', en: 'World' },
  { de: 'schön', en: 'beautiful' },
  { de: 'Morgen', en: 'Morning' }
];

const QuickExamples = ({ onSelectExample, isGermanToEnglish }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 }}
    className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10"
  >
    <h3 className="text-sm font-medium text-violet-200 mb-3">Quick Examples</h3>
    <div className="grid grid-cols-1 gap-2">
      {examples.map((example, index) => (
        <motion.button
          key={index}
          onClick={() => onSelectExample(isGermanToEnglish ? example.de : example.en)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-left p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5"
        >
          <div className="text-white text-sm">
            {isGermanToEnglish ? example.de : example.en}
          </div>
          <div className="text-violet-300 text-xs mt-1">
            → {isGermanToEnglish ? example.en : example.de}
          </div>
        </motion.button>
      ))}
    </div>
  </motion.div>
);

export default QuickExamples;