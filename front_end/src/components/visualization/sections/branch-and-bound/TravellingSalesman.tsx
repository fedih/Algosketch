import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface City {
  x: number;
  y: number;
  name: string;
}

export const TravellingSalesman: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [currentPath, setCurrentPath] = useState<number[]>([]);
  const [bestPath, setBestPath] = useState<number[]>([]);
  const [bestCost, setBestCost] = useState<number>(Infinity);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    generateRandomCities();
  }, []);

  const generateRandomCities = () => {
    const newCities: City[] = [];
    for (let i = 0; i < 8; i++) {
      newCities.push({
        x: Math.random() * 500 + 50,
        y: Math.random() * 400 + 50,
        name: String.fromCharCode(65 + i)
      });
    }
    setCities(newCities);
    setBestPath([]);
    setBestCost(Infinity);
  };

  const distance = (city1: City, city2: City): number => {
    const dx = city1.x - city2.x;
    const dy = city1.y - city2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const calculatePathCost = (path: number[]): number => {
    let cost = 0;
    for (let i = 0; i < path.length - 1; i++) {
      cost += distance(cities[path[i]], cities[path[i + 1]]);
    }
    if (path.length === cities.length) {
      cost += distance(cities[path[path.length - 1]], cities[path[0]]);
    }
    return cost;
  };

  const solve = async () => {
    setIsRunning(true);
    const visited = new Array(cities.length).fill(false);
    const path: number[] = [0];
    visited[0] = true;

    const branchAndBound = async (level: number, currentCost: number) => {
      if (!isRunning) return;

      if (level === cities.length - 1) {
        const totalCost = currentCost + distance(cities[path[path.length - 1]], cities[0]);
        if (totalCost < bestCost) {
          setBestCost(totalCost);
          setBestPath([...path, 0]);
        }
        return;
      }

      for (let i = 1; i < cities.length; i++) {
        if (!visited[i]) {
          const newCost = currentCost + distance(cities[path[path.length - 1]], cities[i]);
          
          if (newCost < bestCost) {
            visited[i] = true;
            path.push(i);
            setCurrentPath([...path]);
            await new Promise(resolve => setTimeout(resolve, 100));

            await branchAndBound(level + 1, newCost);

            visited[i] = false;
            path.pop();
            setCurrentPath([...path]);
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        }
      }
    };

    await branchAndBound(0, 0);
    setIsRunning(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-4 items-center justify-center">
        <button
          onClick={generateRandomCities}
          className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-600"
        >
          Generate New Cities
        </button>
        <button
          onClick={() => isRunning ? setIsRunning(false) : solve()}
          className="bg-emerald-500 text-white px-6 py-2 rounded-md hover:bg-emerald-600"
        >
          {isRunning ? 'Stop' : 'Solve'}
        </button>
      </div>

      <div className="relative w-[600px] h-[500px] mx-auto bg-gray-900 rounded-lg">
        {/* Draw paths */}
        <svg className="absolute inset-0">
          {currentPath.map((cityIndex, i) => {
            if (i === currentPath.length - 1) return null;
            const city1 = cities[cityIndex];
            const city2 = cities[currentPath[i + 1]];
            return (
              <line
                key={`current-${i}`}
                x1={city1.x}
                y1={city1.y}
                x2={city2.x}
                y2={city2.y}
                stroke="#10B981"
                strokeWidth="2"
              />
            );
          })}
          {bestPath.map((cityIndex, i) => {
            if (i === bestPath.length - 1) return null;
            const city1 = cities[cityIndex];
            const city2 = cities[bestPath[i + 1]];
            return (
              <line
                key={`best-${i}`}
                x1={city1.x}
                y1={city1.y}
                x2={city2.x}
                y2={city2.y}
                stroke="#059669"
                strokeWidth="2"
                strokeDasharray="4"
              />
            );
          })}
        </svg>

        {/* Draw cities */}
        {cities.map((city, index) => (
          <motion.div
            key={index}
            className="absolute w-8 h-8 -ml-4 -mt-4 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold"
            style={{ left: city.x, top: city.y }}
            animate={{
              scale: currentPath.includes(index) ? 1.2 : 1
            }}
          >
            {city.name}
          </motion.div>
        ))}
      </div>

      {bestPath.length > 0 && (
        <div className="text-center text-lg text-white">
          Best Path Cost: {bestCost.toFixed(2)}
        </div>
      )}
    </div>
  );
};