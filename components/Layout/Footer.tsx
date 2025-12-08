import React from 'react';
import { Hexagon, Linkedin, Twitter, Instagram } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const Footer: React.FC = () => {
  const { services, socials, contact, metadata } = siteConfig;

  // Group services for the footer if needed, or just slice the top ones
  // For the prompt "update footer with All listed Services", we will list them in a grid or extensive list.
  // Given 18+ services, a simple list is too long. Let's categorise them in columns conceptually or just list key categories.
  // However, let's map the first 8-10 or use the categories from the new structure.
  
  // Grouping logic for footer display
  const engineering = services.filter(s => s.category === 'Engineering');
  const aiData = services.filter(s => s.category === 'AI & Data');
  const design = services.filter(s => s.category === 'Design');
  const consultancy = services.filter(s => s.category === 'Consultancy');

  return (
    <footer className="border-t border-white/10 bg-background-dark/50 py-16 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 text-white mb-4">
              <div className="text-primary">
                  <Hexagon size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold">{metadata.title}</h3>
            </div>
            <p className="text-sm text-text-secondary-dark mb-6 max-w-xs">
              Crafting the next wave of digital experiences. From Web 3.0 to AI and beyond.
            </p>
            <div className="flex gap-4">
              <a href={socials.linkedin} className="text-text-secondary-dark hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1" aria-label="LinkedIn">
                  <Linkedin size={20} />
              </a>
              <a href={socials.twitter} className="text-text-secondary-dark hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1" aria-label="Twitter">
                  <Twitter size={20} />
              </a>
              <a href={socials.instagram} className="text-text-secondary-dark hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1" aria-label="Instagram">
                  <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services Column 1: Engineering */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4">Engineering</h4>
            <ul className="space-y-2 text-sm">
              {engineering.map(s => (
                <li key={s.title}>
                  <a className="text-text-secondary-dark hover:text-primary transition-colors block py-0.5" href={s.href}>{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2: AI & Data */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4">AI & Data</h4>
            <ul className="space-y-2 text-sm">
              {aiData.map(s => (
                <li key={s.title}>
                  <a className="text-text-secondary-dark hover:text-primary transition-colors block py-0.5" href={s.href}>{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

           {/* Services Column 3: Design & Consultancy */}
           <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4">Design & Growth</h4>
            <ul className="space-y-2 text-sm">
              {design.map(s => (
                 <li key={s.title}>
                 <a className="text-text-secondary-dark hover:text-primary transition-colors block py-0.5" href={s.href}>{s.title}</a>
               </li>
              ))}
              {consultancy.map(s => (
                 <li key={s.title}>
                 <a className="text-text-secondary-dark hover:text-primary transition-colors block py-0.5" href={s.href}>{s.title}</a>
               </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a className="text-text-secondary-dark hover:text-primary transition-colors" href="#about">About Us</a></li>
              <li><a className="text-text-secondary-dark hover:text-primary transition-colors" href="#projects">Our Projects</a></li>
              <li><a className="text-text-secondary-dark hover:text-primary transition-colors" href="#insights">Insights Blog</a></li>
              <li className="pt-2">
                 <a className="text-text-secondary-dark hover:text-primary transition-colors font-semibold" href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm text-text-secondary-dark">
          <p>© 2024 {metadata.title}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};