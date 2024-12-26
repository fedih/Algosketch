import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const NQueens: React.FC = () => {
  const [size, setSize] = useState(8);
  const [board, setBoard] = useState<boolean[][]>([]);
  const [solutions, setSolutions] = useState<boolean[][][]>([]);
  const [currentSolution, setCurrentSolution] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    initializeBoard();
  }, [size]);

  const initializeBoard = () => {
    const newBoard = Array(size).fill(false).map(() => Array(size).fill(false));
    setBoard(newBoard);
    setSolutions([]);
    setCurrentSolution(0);
  };

  const isSafe = (board: boolean[][], row: number, col: number): boolean => {
    // Check row and column
    for (let i = 0; i < size; i++) {
      if (board[row][i] || board[i][col]) return false;
    }

    // Check diagonals
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[i][j] && 
            (Math.abs(row - i) === Math.abs(col - j))) {
          return false;
        }
      }
    }

    return true;
  };

  const solveNQueens = async () => {
    setIsRunning(true);
    const solutions: boolean[][][] = [];
    const board = Array(size).fill(false).map(() => Array(size).fill(false));

    const solve = async (board: boolean[][], col: number) => {
      if (!isRunning) return false;
      
      if (col >= size) {
        solutions.push(board.map(row => [...row]));
        setSolutions([...solutions]);
        await new Promise(resolve => setTimeout(resolve, 500));
        return true;
      }

      for (let i = 0; i < size; i++) {
        if (isSafe(board, i, col)) {
          board[i][col] = true;
          setBoard([...board]);
          await new Promise(resolve => setTimeout(resolve, 100));

          await solve(board, col + 1);
          
          board[i][col] = false;
          setBoard([...board]);
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
      return false;
    };

    await solve(board, 0);
    setIsRunning(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-4 items-center justify-center">
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(Math.min(12, Math.max(4, parseInt(e.target.value) || 4)))}
          className="bg-gray-800 text-white px-4 py-2 rounded-md w-20"
          min="4"
          max="12"
        />
        <button
          onClick={() => isRunning ? setIsRunning(false) : solveNQueens()}
          className="bg-emerald-500 text-white px-6 py-2 rounded-md hover:bg-emerald-600"
        >
          {isRunning ? 'Stop' : 'Solve'}
        </button>
      </div>

      <div className="flex justify-center">
        <div 
          className="grid gap-1"
          style={{
            gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
          }}
        >
          {board.map((row, i) => (
            row.map((isQueen, j) => (
              <motion.div
                key={`${i}-${j}`}
                className={`w-12 h-12 ${(i + j) % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}`}
                animate={{
                  scale: isQueen ? 1.1 : 1,
                  backgroundColor: isQueen ? '#10B981' : undefined
                }}
              >
                {isQueen && (
                  <div className="w-full h-full flex items-center justify-center text-white text-2xl">
                    ♕
                  </div>
                )}
              </motion.div>
            ))
          ))}
        </div>
      </div>

      {solutions.length > 0 && (
        <div className="text-center text-lg text-white">
          Found {solutions.length} solutions
        </div>
      )}
    </div>
  );
};