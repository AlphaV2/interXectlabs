import React from 'react';
import { motion } from 'framer-motion';

export const HexagonCircuitBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#050508] pointer-events-none">
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>

      {/* Animated Circuit Container - Zoom Effect */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 800 800"
          className="w-full h-full max-w-[1000px] max-h-[1000px] opacity-40"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00BFFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#00BFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Central Hexagon */}
          <motion.path
            d="M400 350 L443.3 375 L443.3 425 L400 450 L356.7 425 L356.7 375 Z"
            fill="none"
            stroke="#00BFFF"
            strokeWidth="4"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Inner Hexagon Detail */}
           <motion.path
            d="M400 360 L434.6 380 L434.6 420 L400 440 L365.4 420 L365.4 380 Z"
            fill="rgba(0, 191, 255, 0.1)"
            stroke="none"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Radiating Circuit Lines */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.g key={i} transform={`rotate(${angle} 400 400)`}>
              {/* Main outward line */}
              <motion.path
                d="M400 340 L400 200 L420 180 L420 100"
                fill="none"
                stroke="url(#circuit-gradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
              />
              {/* Moving data packet */}
              <motion.circle
                r="3"
                fill="#fff"
                filter="url(#glow)"
              >
                <animateMotion
                  dur={`${3 + i * 0.5}s`}
                  repeatCount="indefinite"
                  path="M400 340 L400 200 L420 180 L420 100"
                />
              </motion.circle>
              {/* Branching line */}
               <motion.path
                d="M400 280 L380 260 L380 220"
                fill="none"
                stroke="url(#circuit-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 1, delay: 1 + i * 0.1 }}
              />
            </motion.g>
          ))}
          
          {/* Outer Rings */}
          <motion.circle 
            cx="400" 
            cy="400" 
            r="250" 
            fill="none" 
            stroke="#8A2BE2" 
            strokeWidth="1" 
            strokeOpacity="0.2"
            strokeDasharray="10 20"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
           <motion.circle 
            cx="400" 
            cy="400" 
            r="350" 
            fill="none" 
            stroke="#00BFFF" 
            strokeWidth="1" 
            strokeOpacity="0.1"
            strokeDasharray="40 40"
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </motion.div>
      
      {/* Grid Overlay for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none"></div>
    </div>
  );
};