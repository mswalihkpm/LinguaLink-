import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Tag } from 'lucide-react';

const WordFeatures = ({ type, features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="mt-4 pt-4 border-t border-white/10"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="flex items-center gap-2 text-sm text-violet-200 bg-white/10 px-3 py-1 rounded-full">
        <Tag className="w-4 h-4" />
        <span>{type}</span>
      </div>
    </div>
    
    {features && features.length > 0 && (
      <div>
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-4 h-4 text-violet-300" />
          <h4 className="text-sm font-semibold text-violet-200">Common Features</h4>
        </div>
        <ul className="space-y-1 list-disc list-inside pl-2">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="text-sm text-white"
            >
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
    )}
  </motion.div>
);

export default WordFeatures;