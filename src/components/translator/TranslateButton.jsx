import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TranslateButton = ({ onTranslate, isDisabled, isTranslating }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
    <Button
      onClick={onTranslate}
      disabled={isDisabled}
      className="w-full h-14 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold text-lg rounded-2xl shadow-xl border-0 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <AnimatePresence mode="wait">
        {isTranslating ? (
          <motion.div
            key="translating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
            />
            Translating...
          </motion.div>
        ) : (
          <motion.div
            key="translate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <Zap className="w-5 h-5" />
            Translate
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  </motion.div>
);

export default TranslateButton;