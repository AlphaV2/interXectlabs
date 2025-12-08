
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  index: number;
  onClick?: (e: React.MouseEvent) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onClick }) => {
  const MotionDiv = motion.div as any;
  const MotionLink = motion.a as any;

  return (
    <MotionDiv
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex-shrink-0 w-[300px] md:w-[350px] glassmorphic glow-effect flex flex-col justify-between gap-4 rounded-xl p-6 transition-all duration-300 border border-white/5 hover:border-primary/30 snap-center h-full"
    >
      <div>
        <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary ring-1 ring-inset ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-background-dark">
          <service.icon className="w-8 h-8" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
        <p className="text-sm leading-relaxed text-text-secondary-dark">{service.description}</p>
      </div>

      <MotionLink
        href={service.href}
        onClick={onClick}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-white group/link mt-4"
      >
        Learn More
        <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
      </MotionLink>
    </MotionDiv>
  );
};
