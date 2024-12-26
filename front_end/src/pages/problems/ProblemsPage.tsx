import React from 'react';
import { motion } from 'framer-motion';
import { ProblemCategoryCard } from '../../components/problems/ProblemCategoryCard';
import { problemCategories } from '../../data/problemCategories';

export const ProblemsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Problem Categories</h1>
          <p className="text-xl text-gray-400">
            Practice problems across different categories to improve your skills
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {problemCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProblemCategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};