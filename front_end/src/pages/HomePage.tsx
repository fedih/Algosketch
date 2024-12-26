import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { CallToAction } from '../components/home/CallToAction';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Features />
      <CallToAction />
    </div>
  );
};