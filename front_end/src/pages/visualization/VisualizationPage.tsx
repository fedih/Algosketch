import React, { useState } from 'react';
import { CategorySelector } from '../../components/visualization/CategorySelector';
import { AlgorithmGrid } from '../../components/visualization/AlgorithmGrid';
import { VisualizationHeader } from '../../components/visualization/VisualizationHeader';
import { visualizationCategories } from '../../data/visualizationCategories';

export const VisualizationPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(visualizationCategories[0].id);
  const currentCategory = visualizationCategories.find(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <VisualizationHeader />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-1">
            <CategorySelector
              categories={visualizationCategories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          {/* Algorithm Grid */}
          <div className="lg:col-span-3">
            {currentCategory && <AlgorithmGrid algorithms={currentCategory.algorithms} />}
          </div>
        </div>
      </div>
    </div>
  );
};