import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';
import { Article } from '../../types';
import { siteConfig } from '../../data/siteConfig';

interface InsightsProps {
  onReadArticle: (article: Article) => void;
}

export const Insights: React.FC<InsightsProps> = ({ onReadArticle }) => {
  const { insights } = siteConfig;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    let animationFrameId: number;
    const scroll = () => {
      if (scrollRef.current && direction) {
        const scrollSpeed = 6;
        const scrollAmount = direction === 'right' ? scrollSpeed : -scrollSpeed;
        scrollRef.current.scrollLeft += scrollAmount;
        animationFrameId = requestAnimationFrame(scroll);
      }
    };
    if (isScrolling) scroll();
    else if (animationFrameId!) cancelAnimationFrame(animationFrameId);
    return () => { if (animationFrameId!) cancelAnimationFrame(animationFrameId); };
  }, [isScrolling, direction]);

  const handleMouseEnter = (dir: 'left' | 'right') => { setDirection(dir); setIsScrolling(true); };
  const handleMouseLeave = () => { setIsScrolling(false); setDirection(null); };

  const MotionDiv = motion.div as any;
  const MotionButton = motion.button as any;

  return (
    // Shading Effect: Darker than Projects to create depth, slightly lighter than pure black
    <section id="insights" className="py-24 relative z-10 bg-[#0f0f13]">
      <div className="w-full max-w-[100vw]">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl px-4 md:px-8 mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white">Insights & News</h2>
          <div className="w-20 h-1 bg-primary mt-4 mb-4 rounded-full"></div>
          <p className="text-lg text-text-secondary-dark max-w-2xl">
            Stay ahead of the curve with our latest articles and industry analysis.
          </p>
        </MotionDiv>

        <div className="relative w-full group">
            {/* Hover Zones */}
            <div 
                className="absolute left-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-r from-[#0f0f13] to-transparent flex items-center justify-start pl-4 cursor-w-resize opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onMouseEnter={() => handleMouseEnter('left')}
                onMouseLeave={handleMouseLeave}
            >
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white"><ChevronLeft size={24} /></div>
            </div>
            <div 
                className="absolute right-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-l from-[#0f0f13] to-transparent flex items-center justify-end pr-4 cursor-e-resize opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onMouseEnter={() => handleMouseEnter('right')}
                onMouseLeave={handleMouseLeave}
            >
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white"><ChevronRight size={24} /></div>
            </div>

            {/* Carousel */}
            <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-8 px-8 md:px-16 scrollbar-hide snap-x"
                style={{ scrollBehavior: 'auto' }}
            >
                {insights.map((article, index) => (
                    <MotionDiv
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex-shrink-0 w-[300px] md:w-[340px] glassmorphic rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group/card snap-center"
                    >
                        <div className="h-48 w-full overflow-hidden relative">
                            <img 
                                src={article.image} 
                                alt={article.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110" 
                                loading="lazy"
                            />
                            <div className="absolute top-3 left-3">
                                <span className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                                    <Tag size={10} /> {article.category}
                                </span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                                <Calendar size={12} /> {article.date}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover/card:text-primary transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-sm text-text-secondary-dark mb-4 line-clamp-3">
                                {article.snippet}
                            </p>
                            <MotionButton 
                              onClick={() => onReadArticle(article)}
                              whileTap={{ scale: 0.95 }}
                              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors cursor-pointer"
                            >
                                Read More <ArrowRight size={16} />
                            </MotionButton>
                        </div>
                    </MotionDiv>
                ))}
                <div className="w-8 flex-shrink-0" />
            </div>
        </div>
      </div>
    </section>
  );
};