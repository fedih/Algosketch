import React from 'react';

export const AuthBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-black to-black" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1108 632"
        aria-hidden="true"
        fill="none"
      >
        <path
          opacity="0.2"
          d="M583.5 70.5L706.5 447L424 587.5L154.5 495L65.5 326L150.5 95.5L583.5 70.5Z"
          stroke="url(#pulse-1)"
          strokeWidth="2"
        />
        <path
          opacity="0.2"
          d="M672.5 244.5L937.5 383L878 608.5L607.5 552.5L406 477L427.5 277.5L672.5 244.5Z"
          stroke="url(#pulse-2)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="pulse-1" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981" />
            <stop offset="1" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="pulse-2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981" />
            <stop offset="1" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};