import React from 'react';
import { motion } from 'framer-motion';
import { RoadmapSection as RoadmapSectionType } from '../../types/roadmap';

interface RoadmapSectionProps {
  section: RoadmapSectionType;
  index: number;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ section, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
    >
      <div className="text-emerald-500 mb-6">
        <span className="text-2xl font-semibold">{section.title}</span>
      </div>
      <ul className="space-y-6">
        {section.items.map((item, itemIndex) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
            viewport={{ once: true }}
            className="border-l-2 border-emerald-500/20 pl-4"
          >
            <h3 className="text-white font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};