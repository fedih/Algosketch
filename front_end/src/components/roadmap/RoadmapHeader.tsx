import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface RoadmapHeaderProps {
  title: string;
  description: string;
}

export const RoadmapHeader: React.FC<RoadmapHeaderProps> = ({ title, description }) => {
  return (
    <>
      <div className="mb-8">
        <Link 
          to="/roadmap"
          className="inline-flex items-center text-emerald-500 hover:text-emerald-400"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Roadmaps
        </Link>
      </div>

      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </>
  );
};