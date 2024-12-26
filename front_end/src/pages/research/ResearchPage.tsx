import React from 'react';
import { ResearchTopic } from '../../components/research/ResearchTopic';

export const ResearchPage: React.FC = () => {
  const researchTopics = [
    {
      title: 'Quantum Machine Learning (QML) Algorithms',
      description: 'Algorithms that leverage quantum computing to speed up machine learning tasks, such as the Quantum Support Vector Machine (QSVM).',
      pdfFileName: 'quantum-ml-algorithms.pdf'
    },
    {
      title: 'Graph Attention Networks (GAT)',
      description: 'GATs enhance Graph Neural Networks (GNN) by using attention mechanisms to weigh neighboring nodes differently, improving performance on tasks like node classification.',
      pdfFileName: 'graph-attention-networks.pdf'
    },
    {
      title: 'AlphaZero',
      description: 'A reinforcement learning algorithm combining Monte Carlo tree search, outperforming humans in games like chess and Go.',
      pdfFileName: 'alphazero.pdf'
    },
    {
      title: 'Proof-of-Stake (PoS) Algorithms',
      description: 'An alternative to Proof-of-Work (PoW) for validating blockchain transactions, with ongoing research to improve security, scalability, and energy efficiency.',
      pdfFileName: 'proof-of-stake.pdf'
    },
    {
      title: 'Sharding Algorithms for Blockchains',
      description: 'Algorithms that divide a blockchain into smaller chains (shards), allowing parallel transaction processing for scalability in networks like Ethereum.',
      pdfFileName: 'blockchain-sharding.pdf'
    },
    {
      title: 'Generative Models for Molecular Design',
      description: 'Using algorithms like GANs and VAEs to generate novel drug molecules with specific properties for pharmaceutical applications.',
      pdfFileName: 'molecular-design.pdf'
    }
  ];

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Research Topics</h1>
          <p className="text-xl text-gray-400">
            Explore cutting-edge research in algorithms and machine learning
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {researchTopics.map((topic) => (
            <ResearchTopic
              key={topic.title}
              title={topic.title}
              description={topic.description}
              pdfFileName={topic.pdfFileName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};