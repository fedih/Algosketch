import React from 'react';
import { AlgorithmCard } from './AlgorithmCard';
import { Algorithm } from '../../types/visualization';

interface AlgorithmGridProps {
  algorithms: Algorithm[];
}

export const AlgorithmGrid: React.FC<AlgorithmGridProps> = ({ algorithms }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {algorithms.map(algorithm => (
        <AlgorithmCard
          key={algorithm.id}
          id={algorithm.id}
          label={algorithm.label}
          path={algorithm.path}
        />
      ))}
    </div>
  );
};