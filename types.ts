import { LucideIcon } from 'lucide-react';

export interface NavItem {
  name: string;
  href: string;
  dropdown?: NavItem[];
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  category?: string; // Optional category for grouping in footer/filters
}

export interface Project {
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  href: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  snippet: string;
  image: string;
  href: string;
  content?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  desc: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  whatsapp: string;
}

export interface SocialLinks {
  linkedin: string;
  twitter: string;
  instagram: string;
}

export interface SiteConfig {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
  about: {
    mainTitle: string;
    mainDesc: string;
    subDesc: string;
    whyUsTitle: string;
    whyUsPoints: string[];
    processSteps: ProcessStep[];
  };
  services: Service[];
  projects: Project[];
  insights: Article[];
  testimonials: Testimonial[];
  contact: ContactInfo;
  socials: SocialLinks;
  navigation: NavItem[];
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface NavigationProps {
  onNavigate: (sectionId: string) => void;
  currentView?: 'home' | 'blog';
}