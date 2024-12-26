import React from 'react';
import { motion } from 'framer-motion';

interface SubmitButtonProps {
  children: React.ReactNode;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type="submit"
      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
    >
      {children}
    </motion.button>
  );
};