import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Share2, Clock, User } from 'lucide-react';
import { Button } from '../UI/Button';
import { Article } from '../../types';

interface BlogPostProps {
  article: Article;
  onBack: () => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ article, onBack }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll to top when mounting
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const MotionDiv = motion.div as any;
  const MotionHeader = motion.header as any;
  const MotionArticle = motion.article as any;

  return (
    <div className="min-h-screen bg-[#101012] text-[#F0F0F0] pt-24 pb-20 relative z-20">
      {/* Reading Progress Bar */}
      <MotionDiv
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX } as any}
      />

      <div className="mx-auto max-w-3xl px-6">
        {/* Back Button */}
        <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Button 
                variant="ghost" 
                onClick={onBack}
                className="mb-8 pl-0 hover:bg-transparent hover:text-primary gap-2"
            >
                <ArrowLeft size={20} /> Back to Insights
            </Button>
        </MotionDiv>

        {/* Header */}
        <MotionHeader
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
        >
            <div className="flex items-center gap-4 text-sm text-text-secondary-dark mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <Tag size={12} /> {article.category}
                </span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> 5 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-8 text-white">
                {article.title}
            </h1>

            <div className="flex items-center justify-between border-y border-white/10 py-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-400">
                        <User size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white">InterXect Team</p>
                        <p className="text-xs text-text-secondary-dark">Editorial Staff</p>
                    </div>
                </div>
                <button className="text-text-secondary-dark hover:text-primary transition-colors">
                    <Share2 size={20} />
                </button>
            </div>
        </MotionHeader>

        {/* Hero Image */}
        <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-primary/5"
        >
            <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-[400px] object-cover"
            />
        </MotionDiv>

        {/* Content Body */}
        <MotionArticle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-primary prose-strong:text-white text-gray-300 leading-relaxed"
        >
            <p className="text-xl leading-relaxed font-medium text-white mb-8">
                {article.snippet}
            </p>

            <p>
                In the rapidly evolving landscape of digital technology, businesses are constantly seeking ways to stay ahead. 
                Whether it is implementing <strong>Web 3.0</strong> strategies or optimizing for <strong>AI-driven</strong> workflows, the goal remains the same: efficiency and innovation.
            </p>

            <h3>The Shift to Decentralization</h3>
            <p>
                Traditional centralized systems are being challenged by blockchain technologies. 
                This isn't just about cryptocurrency; it's about immutable ledgers, smart contracts, and giving users ownership of their data.
                We have seen a 40% increase in requests for decentralized identity solutions this quarter alone.
            </p>

            <div className="my-8 p-6 bg-white/5 border-l-4 border-primary rounded-r-xl italic text-gray-200">
                "The future of the web isn't just about reading and writing; it's about owning. That's the core promise of Web3."
            </div>

            <h3>Why UI/UX Matters More Than Ever</h3>
            <p>
                With complex technologies running in the background, the frontend must be simpler than ever. 
                Users shouldn't need to understand how the blockchain works to use it. 
                Good design bridges the gap between complex tech and everyday usability.
            </p>

            <h3>Conclusion</h3>
            <p>
                As we move forward into 2024, the convergence of AI, Blockchain, and intuitive Design will define the market leaders.
                Is your business ready for the shift?
            </p>
        </MotionArticle>

        <div className="mt-16 pt-12 border-t border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Enjoyed this article?</h3>
            <p className="text-text-secondary-dark mb-8">Subscribe to our newsletter for more insights.</p>
            <Button onClick={onBack}>Read More Articles</Button>
        </div>
      </div>
    </div>
  );
};