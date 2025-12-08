
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: (e: React.MouseEvent) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const MotionDiv = motion.div as any;
  const MotionLink = motion.a as any;
  
  // Logic for Coming Soon / Locked state
  const isLocked = project.category === "In Development" || project.image === "";

  return (
    <MotionDiv
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      // Responsive width: 85vw for mobile ensures it fits on screen, fixed widths for larger screens
      className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] group/card relative flex flex-col rounded-2xl overflow-hidden bg-[#1a1a24] border border-white/5 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 snap-center h-full"
    >
      {/* Image Section */}
      <div className="relative h-[220px] md:h-[250px] w-full overflow-hidden flex items-center justify-center bg-gray-900">
        {isLocked ? (
           <div className="absolute inset-0 bg-black/60 backdrop-blur-xl flex flex-col items-center justify-center z-10 border-b border-white/5">
             <div className="p-4 rounded-full bg-white/5 border border-white/10 mb-2">
                <Lock className="text-gray-400" size={32} />
             </div>
             <span className="text-xl font-bold text-gray-300 tracking-widest uppercase">Coming Soon</span>
           </div>
        ) : (
          <img
            className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-110"
            src={project.image}
            alt={project.title}
            loading="lazy"
          />
        )}
        
        {!isLocked && <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24] to-transparent opacity-80"></div>}
        
        <div className="absolute top-4 left-4 z-20">
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold shadow-lg border border-white/10 ${isLocked ? 'bg-gray-700 text-gray-300' : 'bg-accent/90 backdrop-blur-sm text-white'}`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className={`flex flex-col flex-grow p-5 md:p-6 relative z-10 ${isLocked ? '' : '-mt-8'}`}>
        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-1">{project.title}</h3>
        <p className="text-xs md:text-sm font-medium text-primary mb-3">for {project.client}</p>
        <p className="text-text-secondary-dark text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="mt-auto pt-4 border-t border-white/5">
          <MotionLink
            href={isLocked ? '#' : project.href}
            onClick={isLocked ? (e: React.MouseEvent) => e.preventDefault() : onClick}
            whileTap={isLocked ? {} : { scale: 0.95 }}
            className={`inline-flex items-center gap-2 text-sm font-bold transition-colors group/link ${isLocked ? 'text-gray-500 cursor-not-allowed' : 'text-white hover:text-primary'}`}
          >
            {isLocked ? 'Confidential' : 'View Case Study'}
            {!isLocked && <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />}
          </MotionLink>
        </div>
      </div>
    </MotionDiv>
  );
};
