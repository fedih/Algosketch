import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage';
import { RoadmapPage } from './pages/roadmap/RoadmapPage';
import { FullStackRoadmap } from './pages/roadmap/FullStackRoadmap';
import { DevOpsRoadmap } from './pages/roadmap/DevOpsRoadmap';
import { AIDataScienceRoadmap } from './pages/roadmap/AIDataScienceRoadmap';
import { ComputerScienceRoadmap } from './pages/roadmap/ComputerScienceRoadmap';
import { CompetitiveProgrammingRoadmap } from './pages/roadmap/CompetitiveProgrammingRoadmap';
import { ResearchPage } from './pages/research/ResearchPage';
import { ProblemsPage } from './pages/problems/ProblemsPage';
import { VisualizationPage } from './pages/visualization/VisualizationPage';

// Visualization Routes
import { NQueens } from './components/visualization/sections/backtracking/NQueens';
import { TravellingSalesman } from './components/visualization/sections/branch-and-bound/TravellingSalesman';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/roadmap/full-stack" element={<FullStackRoadmap />} />
          <Route path="/roadmap/devops" element={<DevOpsRoadmap />} />
          <Route path="/roadmap/ai-data-science" element={<AIDataScienceRoadmap />} />
          <Route path="/roadmap/computer-science" element={<ComputerScienceRoadmap />} />
          <Route path="/roadmap/competitive-programming" element={<CompetitiveProgrammingRoadmap />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/problems" element={<ProblemsPage />} />
          <Route path="/visualization" element={<VisualizationPage />} />
          
          {/* Visualization Routes */}
          <Route path="/visualization/backtracking/n-queens" element={<NQueens />} />
          <Route path="/visualization/branch-and-bound/travelling-salesman" element={<TravellingSalesman />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;