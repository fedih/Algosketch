import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const BinarySearch: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [target, setTarget] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [right, setRight] = useState<number>(0);
  const [mid, setMid] = useState<number>(0);
  const [found, setFound] = useState<boolean | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const newArray = Array.from({ length: 15 }, (_, i) => i * 2);
    setArray(newArray);
    setRight(newArray.length - 1);
  };

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const search = async () => {
    setIsSearching(true);
    setFound(null);
    let l = 0;
    let r = array.length - 1;

    while (l <= r) {
      setLeft(l);
      setRight(r);
      const m = Math.floor((l + r) / 2);
      setMid(m);

      await sleep(1000);

      if (array[m] === target) {
        setFound(true);
        setIsSearching(false);
        return;
      }

      if (array[m] < target) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }

    setFound(false);
    setIsSearching(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-4 items-center justify-center">
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(Number(e.target.value))}
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
          placeholder="Enter target number"
        />
        <button
          onClick={search}
          disabled={isSearching}
          className="bg-emerald-500 text-white px-6 py-2 rounded-md hover:bg-emerald-600 disabled:opacity-50"
        >
          Search
        </button>
      </div>

      <div className="flex justify-center space-x-2">
        {array.map((num, index) => (
          <motion.div
            key={index}
            className={`
              w-10 h-10 flex items-center justify-center rounded-md
              ${index === mid ? 'bg-emerald-500' : 
                index >= left && index <= right ? 'bg-gray-700' : 'bg-gray-800'}
              ${found && index === mid ? 'ring-2 ring-emerald-400' : ''}
            `}
            animate={{
              scale: index === mid ? 1.1 : 1,
            }}
          >
            {num}
          </motion.div>
        ))}
      </div>

      {found !== null && (
        <p className="text-center text-lg">
          {found 
            ? `Found ${target} at index ${mid}!` 
            : `${target} not found in the array.`}
        </p>
      )}
    </div>
  );
};