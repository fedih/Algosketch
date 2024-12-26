import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '../../types/visualization';
import { BookOpen, GitBranch, Cpu, Database } from 'lucide-react';

const categoryIcons = {
  'backtracking': BookOpen,
  'branch-and-bound': GitBranch,
  'brute-force': Cpu,
  'dynamic-programming': Database,
};

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      {categories.map(category => {
        const Icon = categoryIcons[category.id as keyof typeof categoryIcons];
        
        return (
          <motion.button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`
              w-full text-left px-6 py-4 rounded-xl transition-all duration-300
              ${selectedCategory === category.id
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
              }
            `}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center">
              <Icon className="h-5 w-5 mr-3" />
              <div>
                <span className="text-lg font-medium">{category.label}</span>
                <span className="ml-2 text-sm opacity-75">
                  ({category.algorithms.length})
                </span>
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};