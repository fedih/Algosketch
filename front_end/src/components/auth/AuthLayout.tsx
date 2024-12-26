import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AuthBackground } from './AuthBackground';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: ReactNode;
  illustration?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  illustration = '/auth-illustration.svg'
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <AuthBackground />
      
      <div className="min-h-screen backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-md relative">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate('/')}
            className="absolute -right-2 -top-2 text-gray-400 hover:text-white p-2 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-all duration-200"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </motion.button>

          <div className="flex justify-center mb-8">
            <img
              src={illustration}
              alt="Authentication illustration"
              className="h-32 w-auto"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-center text-3xl font-bold tracking-tight text-white">
              {title}
            </h2>
            <div className="mt-2 text-center text-sm text-gray-400">
              {subtitle}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        >
          <div className="bg-gray-900/50 backdrop-blur-md py-8 px-4 shadow-xl shadow-black/10 sm:rounded-xl sm:px-10 border border-gray-800/50">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};