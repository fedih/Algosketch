import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Node {
  value: number;
  bound: number;
  level: number;
  selected: boolean[];
  cost: number;
}

export const BranchAndBound: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [currentNode, setCurrentNode] = useState<Node | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [matrix, setMatrix] = useState<number[][]>([
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
  ]);

  const calculateBound = (node: Node): number => {
    let bound = node.cost;
    let used = [...node.selected];
    
    for (let i = 0; i < matrix.length; i++) {
      if (!used[i]) {
        let min = Infinity;
        for (let j = 0; j < matrix.length; j++) {
          if (!used[j] && i !== j) {
            min = Math.min(min, matrix[i][j]);
          }
        }
        bound += min;
      }
    }
    
    return bound;
  };

  const solve = async () => {
    setIsRunning(true);
    const initialNode: Node = {
      value: 0,
      bound: 0,
      level: 0,
      selected: [true, ...Array(matrix.length - 1).fill(false)],
      cost: 0
    };
    
    initialNode.bound = calculateBound(initialNode);
    setNodes([initialNode]);
    setCurrentNode(initialNode);

    await new Promise(resolve => setTimeout(resolve, 1000));

    let queue = [initialNode];
    while (queue.length > 0 && isRunning) {
      const node = queue.shift()!;
      setCurrentNode(node);

      if (node.level === matrix.length - 1) {
        continue;
      }

      for (let i = 0; i < matrix.length; i++) {
        if (!node.selected[i]) {
          const newNode: Node = {
            value: i,
            level: node.level + 1,
            selected: [...node.selected],
            cost: node.cost + matrix[node.value][i],
            bound: 0
          };
          newNode.selected[i] = true;
          newNode.bound = calculateBound(newNode);
          
          if (newNode.bound < Infinity) {
            queue.push(newNode);
            setNodes(prev => [...prev, newNode]);
            await new Promise(resolve => setTimeout(resolve, 500));
          }
        }
      }

      queue.sort((a, b) => a.bound - b.bound);
    }
    
    setIsRunning(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <button
          onClick={() => isRunning ? setIsRunning(false) : solve()}
          className="bg-emerald-500 text-white px-6 py-2 rounded-md hover:bg-emerald-600"
        >
          {isRunning ? 'Stop' : 'Start Branch and Bound'}
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2 max-w-2xl mx-auto">
        {matrix.map((row, i) => (
          row.map((cost, j) => (
            <motion.div
              key={`${i}-${j}`}
              className={`p-4 rounded-md text-center ${
                i === j ? 'bg-gray-800' : 'bg-gray-700'
              }`}
              animate={{
                scale: currentNode?.value === i && currentNode?.selected[j] ? 1.1 : 1,
                backgroundColor: currentNode?.value === i && currentNode?.selected[j] 
                  ? '#059669' : undefined
              }}
            >
              {cost}
            </motion.div>
          ))
        ))}
      </div>

      <div className="space-y-4">
        {nodes.map((node, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-4 rounded-md ${
              currentNode === node ? 'bg-emerald-900' : 'bg-gray-800'
            }`}
          >
            <p className="text-white">
              Level: {node.level}, Cost: {node.cost}, Bound: {node.bound.toFixed(2)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};