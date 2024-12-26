import React from 'react';
import logo from '../../assets/files_1770776-1732921073317-2.png';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-auto' }) => {
  return (
    <div className={className}>
      <img 
        src={logo} 
        alt="AlgoSketch Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};