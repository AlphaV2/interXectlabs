import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const Testimonials: React.FC = () => {
  const { testimonials } = siteConfig;
  const testimonial = testimonials[0]; // Currently showing just one, can be expanded to a slider later

  const MotionDiv = motion.div as any;

  return (
    // Shading Effect: Textured background to differentiate "Client Voice"
    <section className="py-24 relative z-10 bg-background-dark overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(138,43,226,0.1),_transparent_40%)]"></div>
       
      <MotionDiv 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl text-center px-4 md:px-8"
      >
        <div className="mb-8 flex justify-center text-primary/20">
            <Quote size={64} />
        </div>
        
        <img 
            className="mx-auto mb-8 h-24 w-24 rounded-full object-cover ring-4 ring-white/5 shadow-2xl" 
            alt={`Avatar of ${testimonial.author}`} 
            src={testimonial.avatar} 
            loading="lazy"
        />
        
        <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-white font-display italic">
            “{testimonial.quote}”
        </blockquote>
        
        <div className="mt-8">
            <p className="text-xl font-bold text-primary">{testimonial.author}</p>
            <p className="text-sm text-text-secondary-dark uppercase tracking-widest mt-1">{testimonial.role}</p>
        </div>
      </MotionDiv>
    </section>
  );
};