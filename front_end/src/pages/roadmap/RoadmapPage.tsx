import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Brain, Cpu, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RoadmapDomain } from '../../types/roadmap';

const domains: RoadmapDomain[] = [
  {
    id: 'full-stack',
    title: 'Full Stack Development',
    description: 'Master both frontend and backend development with modern technologies and best practices.',
    icon: <Code2 className="h-8 w-8" />,
    path: '/roadmap/full-stack'
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Learn the practices of DevOps, from CI/CD to cloud infrastructure and automation.',
    icon: <Server className="h-8 w-8" />,
    path: '/roadmap/devops'
  },
  {
    id: 'ai-data-science',
    title: 'AI & Data Science',
    description: 'Explore machine learning, deep learning, and data analysis techniques.',
    icon: <Brain className="h-8 w-8" />,
    path: '/roadmap/ai-data-science'
  },
  {
    id: 'computer-science',
    title: 'Computer Science',
    description: 'Build a strong foundation in computer science fundamentals and theory.',
    icon: <Cpu className="h-8 w-8" />,
    path: '/roadmap/computer-science'
  },
  {
    id: 'competitive-programming',
    title: 'Competitive Programming',
    description: 'Master algorithms and data structures for competitive programming contests.',
    icon: <Trophy className="h-8 w-8" />,
    path: '/roadmap/competitive-programming'
  }
];

export const RoadmapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Learning Roadmaps</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose your learning path and follow a structured curriculum to achieve your goals.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={domain.path}
                className="block p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="text-emerald-500 mb-4">{domain.icon}</div>
                <h2 className="text-xl font-semibold text-white mb-2">{domain.title}</h2>
                <p className="text-gray-400">{domain.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};