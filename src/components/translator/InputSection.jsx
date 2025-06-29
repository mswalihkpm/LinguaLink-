import React from 'react';
import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';

const InputSection = ({ sourceText, setSourceText, sourceLanguage, onClear, onSpeak }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl overflow-hidden"
    >
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-violet-200">Enter a word</span>
          <div className="flex gap-2">
            <motion.button
              onClick={onSpeak}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              disabled={!sourceText}
            >
              <Volume2 className="w-4 h-4 text-violet-200" />
            </motion.button>
          </div>
        </div>
        <textarea
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          placeholder={`Type a word in ${sourceLanguage}...`}
          className="w-full h-20 bg-transparent text-white placeholder-violet-300 resize-none focus:outline-none text-lg"
          maxLength={50}
          rows={1}
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-violet-300">{sourceText.length}/50</span>
          {sourceText && (
            <motion.button
              onClick={onClear}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs text-violet-300 hover:text-white transition-colors"
            >
              Clear
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InputSection;