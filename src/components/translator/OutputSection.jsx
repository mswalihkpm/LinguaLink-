import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Volume2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import WordFeatures from '@/components/translator/WordFeatures';

const OutputSection = ({ translationResult, isTranslating, onSpeak }) => {
  const handleCopy = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    toast({
      title: "✨ Copied to clipboard!",
      duration: 2000,
    });
  };

  const translatedText = translationResult?.translation;

  return (
    <AnimatePresence>
      {(translationResult || isTranslating) && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl overflow-hidden"
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-violet-200">Translation</span>
              <div className="flex gap-2">
                <motion.button
                  onClick={onSpeak}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  disabled={!translatedText}
                >
                  <Volume2 className="w-4 h-4 text-violet-200" />
                </motion.button>
                <motion.button
                  onClick={() => handleCopy(translatedText)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  disabled={!translatedText}
                >
                  <Copy className="w-4 h-4 text-violet-200" />
                </motion.button>
              </div>
            </div>
            
            <div className="min-h-[4rem] flex items-center">
              <AnimatePresence mode="wait">
                {isTranslating ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full flex items-center justify-center"
                  >
                    <div className="flex gap-2">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.p
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-white text-2xl font-bold leading-relaxed w-full"
                  >
                    {translatedText}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            
            {!isTranslating && translationResult && (
              <WordFeatures type={translationResult.type} features={translationResult.features} />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OutputSection;