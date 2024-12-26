import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Users, Lightbulb, BookOpen, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Feature } from '../../types/feature';

const features: Feature[] = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'Interactive Visualizations',
    description: 'Watch algorithms come to life with step-by-step animations and interactive demonstrations.',
    link: '/visualization'  // Updated from /problems to /visualization
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'Real-world Applications',
    description: 'Understand how algorithms solve real-world problems across different industries.',
    link: '/problems'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Community Learning',
    description: 'Join a vibrant community of learners and contribute to the knowledge base.',
    link: '/login'
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Problems',
    description: 'Practice with curated problems and improve your problem-solving skills.',
    link: '/problems'
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Roadmap',
    description: 'Follow carefully designed learning paths from basics to advanced concepts.',
    link: '/roadmap'
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: 'Research',
    description: 'Stay updated with the latest algorithmic research and developments.',
    link: '/research'
  }
];

export const Features: React.FC = () => {
  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Why Choose AlgoSketch?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={feature.link}
                className="block p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors"
              >
                <div className="text-emerald-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};