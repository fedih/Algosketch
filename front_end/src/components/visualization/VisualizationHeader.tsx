import React from 'react';
import { motion } from 'framer-motion';

export const VisualizationHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
        Algorithm Visualizations
      </h1>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        Explore and understand complex algorithms through interactive visualizations
      </p>
    </motion.div>
  );
};