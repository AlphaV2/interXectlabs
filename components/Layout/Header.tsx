import React, { useState } from 'react';
import { Menu, X, Hexagon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../UI/Button';
import { NavigationProps } from '../../types';
import { siteConfig } from '../../data/siteConfig';

export const Header: React.FC<NavigationProps> = ({ onNavigate, currentView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { navigation } = siteConfig;

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setHoveredLink(null); 
    setMobileExpanded(null);
    
    const targetId = href.replace('#', '');
    onNavigate(targetId);
  };

  const toggleMobileDropdown = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileExpanded(prev => prev === name ? null : name);
  };

  const MotionNav = motion.nav as any;
  const MotionDiv = motion.div as any;
  const MotionA = motion.a as any;

  return (
    <header className="sticky top-4 z-50 mx-auto w-[95%] max-w-5xl">
      <MotionNav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="flex items-center justify-between rounded-xl border border-white/10 bg-black/60 p-4 shadow-lg backdrop-blur-xl"
      >
        <div className="flex items-center gap-4 cursor-pointer" onClick={(e) => handleNavClick(e, '#')}>
          <div className="text-primary">
             <Hexagon size={28} strokeWidth={2.5} />
          </div>
          <h2 className="text-lg font-bold text-white tracking-wide">{siteConfig.metadata.title}</h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navigation.map((link) => (
            <div 
                key={link.name}
                className="relative group h-full py-2"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
            >
                <MotionA
                    href={link.href}
                    onClick={(e: React.MouseEvent<HTMLElement>) => handleNavClick(e, link.href)}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                        link.name === 'Blog' && currentView === 'blog' 
                            ? 'text-primary' 
                            : 'text-gray-300 hover:text-primary'
                    }`}
                >
                    {link.name}
                    
                    {/* Animated Underline */}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out ${
                        (link.name === 'Blog' && currentView === 'blog') || hoveredLink === link.name ? 'w-full' : 'w-0'
                    }`} />

                    {link.dropdown && (
                        <ChevronDown 
                            size={14} 
                            className={`transition-transform duration-300 ${hoveredLink === link.name ? 'rotate-180 text-primary' : ''}`} 
                        />
                    )}
                </MotionA>

                {/* Desktop Dropdown Menu */}
                <AnimatePresence>
                    {link.dropdown && hoveredLink === link.name && (
                        <MotionDiv
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 ${link.name === 'Services' ? 'w-[640px]' : 'w-64'}`}
                        >
                            <div className="rounded-xl border border-white/10 bg-[#101012]/95 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-black/50">
                                <div className={`p-2 ${link.name === 'Services' ? 'grid grid-cols-2 gap-1' : 'flex flex-col'}`}>
                                    {link.dropdown.map((item) => (
                                        <MotionA
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e: React.MouseEvent<HTMLElement>) => handleNavClick(e, item.href)}
                                            whileTap={{ scale: 0.95 }}
                                            className="block w-full rounded-lg px-4 py-3 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-primary transition-all duration-200"
                                        >
                                            {item.name}
                                        </MotionA>
                                    ))}
                                </div>
                            </div>
                        </MotionDiv>
                    )}
                </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
            <Button 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="min-w-[84px] h-10 px-4 text-sm font-bold bg-primary text-background-dark hover:bg-primary/90 hover:scale-105 transition-transform shadow-none rounded-lg"
            >
                Get Started
            </Button>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </MotionNav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="absolute top-full left-0 right-0 mt-3 overflow-hidden z-40 rounded-xl border border-white/10 bg-[#101012]/95 backdrop-blur-2xl shadow-2xl"
          >
            <div className="p-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              {navigation.map((link) => (
                <div key={link.name} className="flex flex-col border-b border-white/5 last:border-0">
                    <div className="flex items-center justify-between group">
                        <MotionA
                            href={link.href}
                            className={`flex-grow text-base font-medium px-4 py-4 rounded-lg transition-colors ${
                                link.name === 'Blog' && currentView === 'blog' ? 'text-primary' : 'text-gray-200 hover:text-primary'
                            }`}
                            onClick={(e: React.MouseEvent<HTMLElement>) => handleNavClick(e, link.href)}
                            whileTap={{ scale: 0.95 }}
                        >
                            {link.name}
                        </MotionA>
                        
                        {/* Mobile Accordion Toggle */}
                        {link.dropdown && (
                            <motion.button 
                                onClick={(e) => toggleMobileDropdown(e, link.name)}
                                whileTap={{ scale: 0.9 }}
                                className="p-4 text-gray-400 hover:text-primary transition-colors focus:outline-none"
                            >
                                <ChevronDown 
                                    size={18} 
                                    className={`transition-transform duration-300 ${mobileExpanded === link.name ? 'rotate-180 text-primary' : ''}`}
                                />
                            </motion.button>
                        )}
                    </div>

                    {/* Mobile Submenu */}
                    <AnimatePresence>
                        {link.dropdown && mobileExpanded === link.name && (
                            <MotionDiv
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden bg-black/20 rounded-lg mx-2"
                            >
                                <div className="py-2 px-2 grid gap-1">
                                    {link.dropdown.map((item) => (
                                        <MotionA
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e: React.MouseEvent<HTMLElement>) => handleNavClick(e, item.href)}
                                            whileTap={{ scale: 0.95 }}
                                            className="text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 py-3 px-4 rounded-md transition-all flex items-center gap-2"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                                            {item.name}
                                        </MotionA>
                                    ))}
                                </div>
                            </MotionDiv>
                        )}
                    </AnimatePresence>
                </div>
              ))}
              <div className="pt-4 pb-2">
                <Button 
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="w-full bg-primary text-background-dark font-bold h-12 text-base"
                >
                    Get Started
                </Button>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  );
};