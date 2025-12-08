import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../UI/Button';
import { NavigationProps } from '../../types';
import { siteConfig } from '../../data/siteConfig';

export const Hero: React.FC<NavigationProps> = ({ onNavigate }) => {
  const { hero } = siteConfig;
  
  const handleDiscoverClick = () => {
    onNavigate(hero.ctaLink);
  };

  const MotionH1 = motion.h1 as any;
  const MotionP = motion.p as any;
  const MotionDiv = motion.div as any;

  return (
    <section className="relative -mt-20 flex min-h-screen w-full items-center justify-center overflow-hidden px-4 md:px-8 bg-transparent">
      {/* Content Container */}
      <div className="z-10 flex max-w-4xl flex-col items-center gap-6 text-center">
        <MotionH1 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl font-black leading-tight tracking-tighter md:text-7xl text-white drop-shadow-[0_0_15px_rgba(0,191,255,0.5)]"
        >
          {hero.title}
        </MotionH1>
        
        <MotionP 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="max-w-2xl text-lg text-gray-200 drop-shadow-lg font-medium"
        >
            {hero.subtitle}
        </MotionP>
        
        <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
        >
            <Button 
                onClick={handleDiscoverClick}
                className="mt-6 h-12 px-8 text-base font-bold bg-primary text-background-dark shadow-[0_0_30px_rgba(0,191,255,0.6)] hover:scale-105 hover:shadow-[0_0_40px_rgba(0,191,255,0.8)] transition-all duration-300 border border-white/20"
            >
              {hero.ctaText}
            </Button>
        </MotionDiv>
      </div>
    </section>
  );
};