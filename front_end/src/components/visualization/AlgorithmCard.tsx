import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AlgorithmCardProps {
  id: string;
  label: string;
  path: string;
}

export const AlgorithmCard: React.FC<AlgorithmCardProps> = ({ id, label, path }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{label}</h3>
        <div className="bg-emerald-500/10 p-2 rounded-lg">
          <Play className="h-5 w-5 text-emerald-400" />
        </div>
      </div>
      <Link
        to={path}
        className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group"
      >
        View Visualization
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};