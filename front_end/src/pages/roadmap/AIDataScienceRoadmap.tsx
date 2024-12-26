import React from 'react';
import { RoadmapHeader } from '../../components/roadmap/RoadmapHeader';
import { RoadmapSection } from '../../components/roadmap/RoadmapSection';
import { aiDataScienceRoadmap } from '../../data/roadmaps/ai-data-science';

export const AIDataScienceRoadmap: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RoadmapHeader 
          title={aiDataScienceRoadmap.title}
          description={aiDataScienceRoadmap.description}
        />

        <div className="grid gap-8 md:grid-cols-2">
          {aiDataScienceRoadmap.sections.map((section, index) => (
            <RoadmapSection 
              key={section.title}
              section={section}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};