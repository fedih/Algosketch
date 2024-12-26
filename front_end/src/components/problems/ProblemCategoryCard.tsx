import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ProblemCategory } from '../../types/problem';

interface ProblemCategoryCardProps {
  category: ProblemCategory;
}

export const ProblemCategoryCard: React.FC<ProblemCategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/problems/${category.id}`}
      className="block p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
          <p className="text-gray-400 mb-4">{category.description}</p>
          <span className="text-sm text-emerald-500">{category.count} problems</span>
        </div>
        <ArrowRight className="h-5 w-5 text-emerald-500" />
      </div>
    </Link>
  );
}