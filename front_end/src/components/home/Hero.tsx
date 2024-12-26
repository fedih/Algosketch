import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NetworkGraph } from './NetworkGraph';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center md:text-left md:w-1/2 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Visualize the Power of
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
              Algorithms
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl"
          >
            Experience algorithms and data structures like never before. Interactive visualizations, real-world applications, and a community-driven learning platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <Link 
              to="/login"
              className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/roadmap"
              className="bg-white/10 text-white px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-colors"
            >
              View Roadmap
            </Link>
          </motion.div>
        </div>
        <NetworkGraph />
      </div>
    </div>
  );
};