
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NavigationProps } from '../../types';
import { siteConfig } from '../../data/siteConfig';
import { ProjectCard } from '../UI/ProjectCard';

export const Projects: React.FC<NavigationProps> = ({ onNavigate }) => {
  const { projects } = siteConfig;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  // Scroll logic using requestAnimationFrame for smoothness
  useEffect(() => {
    let animationFrameId: number;

    const scroll = () => {
      if (scrollRef.current && direction) {
        const scrollSpeed = 8; 
        const scrollAmount = direction === 'right' ? scrollSpeed : -scrollSpeed;
        scrollRef.current.scrollLeft += scrollAmount;
        animationFrameId = requestAnimationFrame(scroll);
      }
    };

    if (isScrolling) {
      scroll();
    } else {
      if (animationFrameId!) cancelAnimationFrame(animationFrameId);
    }

    return () => {
      if (animationFrameId!) cancelAnimationFrame(animationFrameId);
    };
  }, [isScrolling, direction]);

  const handleMouseEnter = (dir: 'left' | 'right') => {
    setDirection(dir);
    setIsScrolling(true);
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
    setDirection(null);
  };

  const handleViewCaseStudy = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('contact');
  };

  const MotionDiv = motion.div as any;

  return (
    // Shading Effect: Slightly lighter background than Hero/Mission to create separation
    <section id="projects" className="py-24 relative z-10 bg-[#13131a]">
      <div className="w-full max-w-[100vw]">
        <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl px-4 md:px-8 mb-12 text-center"
        >
            <h2 className="text-4xl font-bold tracking-tight text-white">Our Work</h2>
            <p className="mt-4 text-lg text-text-secondary-dark max-w-2xl mx-auto">
                We're proud of the solutions we've delivered. Here's a selection of our favorite projects.
            </p>
        </MotionDiv>
        
        <div className="relative w-full group">
            {/* Left Scroll Zone */}
            <div 
                className="absolute left-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-r from-[#13131a] to-transparent flex items-center justify-start pl-4 cursor-w-resize opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:flex hidden"
                onMouseEnter={() => handleMouseEnter('left')}
                onMouseLeave={handleMouseLeave}
            >
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-md text-primary">
                <ChevronLeft size={32} />
                </div>
            </div>

            {/* Right Scroll Zone */}
            <div 
                className="absolute right-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-l from-[#13131a] to-transparent flex items-center justify-end pr-4 cursor-e-resize opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:flex hidden"
                onMouseEnter={() => handleMouseEnter('right')}
                onMouseLeave={handleMouseLeave}
            >
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-md text-primary">
                <ChevronRight size={32} />
                </div>
            </div>

            {/* Scroll Container with "Train" effect setup */}
            <div 
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto pb-12 px-8 md:px-16 scrollbar-hide snap-x items-stretch"
                style={{ scrollBehavior: 'auto' }}
            >
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        project={project} 
                        index={index} 
                        onClick={handleViewCaseStudy} 
                    />
                ))}
                <div className="w-8 flex-shrink-0" />
            </div>
        </div>
      </div>
    </section>
  );
};
