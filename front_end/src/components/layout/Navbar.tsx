import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Logo className="h-8 w-auto text-white" />
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <Link to="/visualization" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Visualizations
              </Link>
              <Link to="/problems" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Problems
              </Link>
              <Link to="/roadmap" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Roadmap
              </Link>
              <Link to="/research" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Research
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Sign in
            </Link>
            <Link to="/register" className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600">
              Sign up
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
            <Link to="/visualization" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Visualizations
            </Link>
            <Link to="/problems" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Problems
            </Link>
            <Link to="/roadmap" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Roadmap
            </Link>
            <Link to="/research" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Research
            </Link>
            <Link to="/login" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Sign in
            </Link>
            <Link to="/register" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};