import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Layers, Target } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const About: React.FC = () => {
  const { about } = siteConfig;
  const MotionDiv = motion.div as any;

  return (
    <section id="about" className="py-24 relative z-10 bg-[#101012]">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        
        {/* About Us Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white mb-6">{about.mainTitle}</h2>
            <div className="w-20 h-1 bg-primary mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {about.mainDesc}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {about.subDesc}
            </p>
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full opacity-50"></div>
            <div className="relative glassmorphic p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">{about.whyUsTitle}</h3>
              <ul className="space-y-4">
                {about.whyUsPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {index === 0 ? <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} /> : 
                     index === 1 ? <Layers className="text-primary mt-1 shrink-0" size={20} /> :
                     <Target className="text-primary mt-1 shrink-0" size={20} />
                    }
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionDiv>
        </div>

        {/* How We Work Block */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white">How We Work</h2>
          <p className="text-text-secondary-dark mt-2">A streamlined process for predictable results.</p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {about.processSteps.map((step, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors group"
            >
              <div className="text-5xl font-black text-white/5 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                {step.desc}
              </p>
            </MotionDiv>
          ))}
        </div>

      </div>
    </section>
  );
};