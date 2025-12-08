
import { 
  Code2, Smartphone, ShoppingBag, Server, Container, 
  Bot, Sparkles, BarChart3, Workflow, 
  Palette, AppWindow, Video, 
  Briefcase, LineChart, FileText, 
  Blocks, Radio, Lock
} from 'lucide-react';
import { SiteConfig } from '../types';

/**
 * SITE CONFIGURATION
 * 
 * This file is the central source of truth for all dynamic content on the website.
 * Update this file to modify text, images, services, projects, and contact info.
 */

export const siteConfig: SiteConfig = {
  // =================================================================================================
  // GLOBAL METADATA
  // =================================================================================================
  metadata: {
    title: "InterXect Solutions",
    description: "We engineer the internet’s next upgrade. Full-stack web development, AI solutions, and blockchain architecture.",
  },

  // =================================================================================================
  // NAVIGATION (HEADER)
  // =================================================================================================
  navigation: [
    { name: 'Home', href: '#' },
    { 
      name: 'About', 
      href: '#about',
      dropdown: [
        { name: 'Who We Are', href: '#about' },
        { name: 'Why Work With Us', href: '#about' },
        { name: 'Our Process', href: '#about' },
      ]
    },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: [
        { name: 'Custom Web & Mobile Apps', href: '#services' },
        { name: 'AI, ML & Chatbots', href: '#services' },
        { name: 'Web3 & Blockchain', href: '#services' },
        { name: 'UI/UX & Branding', href: '#services' },
        { name: 'Data Analytics & BI', href: '#services' },
        { name: 'Automation Solutions', href: '#services' },
        { name: 'DevOps & Cloud', href: '#services' },
        { name: 'Consultancy', href: '#services' }
      ]
    },
    { name: 'Blog', href: '#insights' },
    { 
      name: 'Projects', 
      href: '#projects',
      dropdown: [
        { name: 'Enterprise Platform (Coming Soon)', href: '#projects' },
        { name: 'FinTech App (Coming Soon)', href: '#projects' },
        { name: 'AI Ecosystem (Coming Soon)', href: '#projects' }
      ]
    },
    { name: 'Contact', href: '#contact' },
  ],

  // =================================================================================================
  // HERO SECTION
  // =================================================================================================
  hero: {
    title: "We engineer the internet’s next upgrade.",
    subtitle: "Building the Future of the Web at InterXection.",
    ctaText: "Discover Our Work",
    ctaLink: "projects"
  },

  // =================================================================================================
  // ABOUT SECTION
  // =================================================================================================
  about: {
    mainTitle: "About Us",
    mainDesc: "We’re a multidisciplinary team blending engineering, design, AI, and finance into one streamlined execution engine.",
    subDesc: "We build products fast, design experiences that stick, automate what’s slow, and manage the numbers that matter. Our work is simple: high-quality, fast delivery, zero noise.",
    whyUsTitle: "Why Work With Us?",
    whyUsPoints: [
      "Full-stack team without hiring full-time.",
      "Plug into your business across tech, design, automation, and finance.",
      "Start small or scale big. We adapt to your goals and budgets."
    ],
    processSteps: [
      { number: '01', title: 'Understand', desc: 'We break down your goals, challenges, and expectations.' },
      { number: '02', title: 'Plan', desc: 'Clear scope, timeline, and cost — no hidden chaos.' },
      { number: '03', title: 'Execute', desc: 'Design, development, automation, AI models, or accounts — done with precision.' },
      { number: '04', title: 'Deliver', desc: 'Launch-ready results. Continuous improvement as needed.' },
    ]
  },

  // =================================================================================================
  // SERVICES (MISSION) SECTION
  // =================================================================================================
  services: [
    // PRIORITY 1: WEB 3.0
    {
      title: 'Web 3.0 Experiences',
      description: 'Decentralized apps (dApps), smart contracts, tokenomics, and blockchain-based workflows.',
      icon: Blocks,
      href: '#contact',
      category: 'Engineering'
    },
    // PRIORITY 2: AI & CHATBOTS
    {
      title: 'AI Agents & Chatbots',
      description: 'RAG systems, LangChain, OpenAI-powered chatbots, and domain-specific AI assistants.',
      icon: Bot,
      href: '#contact',
      category: 'AI & Data'
    },
    {
      title: 'GenAI Solutions',
      description: 'Text generation, content AI, image-based models, and enterprise generative pipelines.',
      icon: Sparkles,
      href: '#contact',
      category: 'AI & Data'
    },
    // PRIORITY 3: CORE DEV
    {
      title: 'Custom Web Apps',
      description: 'End-to-end web products, dashboards, CRMs, and scalable backend systems using Python & React.',
      icon: Code2,
      href: '#contact',
      category: 'Engineering'
    },
    {
      title: 'Mobile App Dev',
      description: 'Cross-platform mobile apps using Flutter + Firebase with fast iterations and optimized performance.',
      icon: Smartphone,
      href: '#contact',
      category: 'Engineering'
    },
    {
      title: 'Automation Solutions',
      description: 'UiPath automation, API-triggered workflows, and manual-to-automated process transitions.',
      icon: Workflow,
      href: '#contact',
      category: 'Engineering'
    },
    // PRIORITY 4: DESIGN
    {
      title: 'UI/UX Design',
      description: 'Figma-based user research, wireframes, prototyping, and complete UX documentation.',
      icon: Palette,
      href: '#contact',
      category: 'Design'
    },
    {
      title: 'E-Commerce Sites',
      description: 'Shopify stores, booking systems, and full inventory management systems delivered end-to-end.',
      icon: ShoppingBag,
      href: '#contact',
      category: 'Engineering'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Interactive dashboards with Tableau, Power BI, and advanced reporting systems.',
      icon: BarChart3,
      href: '#contact',
      category: 'AI & Data'
    },
    {
      title: 'Web & App Design',
      description: 'Clean, modern, responsive UI designs optimized for user behavior and conversion.',
      icon: AppWindow,
      href: '#contact',
      category: 'Design'
    },
    // REST OF SERVICES
    {
      title: 'API Integrations',
      description: 'REST APIs, payment gateways, authentication, microservices, and 3rd-party integrations.',
      icon: Server,
      href: '#contact',
      category: 'Engineering'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Dockerization, automated testing, deployment pipelines, and scalable hosting setup.',
      icon: Container,
      href: '#contact',
      category: 'Engineering'
    },
    {
      title: 'Market Research',
      description: 'Competitor analysis, pricing strategy, user persona development, and product strategy.',
      icon: LineChart,
      href: '#contact',
      category: 'Consultancy'
    },
    {
      title: 'Video & Content',
      description: 'Video editing, reels, product demos, and brand-focused visual content creation.',
      icon: Video,
      href: '#contact',
      category: 'Design'
    },
    {
      title: 'Business Development',
      description: 'Pitch creation, presentation decks, lead systems, and outreach workflows.',
      icon: Briefcase,
      href: '#contact',
      category: 'Consultancy'
    },
    {
      title: 'Antenna Design',
      description: 'NASYS HFSS simulation, RF circuit design, and antenna optimization for IoT.',
      icon: Radio,
      href: '#contact',
      category: 'Engineering'
    },
    {
      title: 'Bookkeeping',
      description: 'Recording, reconciliation, ledger updates, expense tracking, and monthly reports.',
      icon: FileText,
      href: '#contact',
      category: 'Consultancy'
    }
    // Removed Tax Consultation
  ],

  // =================================================================================================
  // PROJECTS SECTION (COMING SOON)
  // =================================================================================================
  projects: [
    {
      title: "Enterprise Platform",
      client: "Confidential",
      category: "In Development",
      description: "A large-scale enterprise solution currently under development. Stay tuned for the reveal.",
      image: "", 
      href: "#"
    },
    {
      title: "FinTech App",
      client: "Confidential",
      category: "In Development",
      description: "Revolutionary financial technology application coming to the market soon.",
      image: "",
      href: "#"
    },
    {
      title: "AI Ecosystem",
      client: "Confidential",
      category: "In Development",
      description: "Next-gen AI integration ecosystem for automated business workflows.",
      image: "",
      href: "#"
    }
  ],

  // =================================================================================================
  // INSIGHTS (BLOG) SECTION
  // =================================================================================================
  insights: [
    {
      id: '1',
      title: "Top 5 Web 3.0 Trends to Watch in 2024",
      category: "Industry Analysis",
      date: "Oct 12, 2024",
      snippet: "From decentralized identity to zero-knowledge proofs, explore the technologies shaping the next iteration of the internet.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3",
      href: "#"
    },
    {
      id: '2',
      title: "The Future of AI in FinTech",
      category: "AI & Finance",
      date: "Sep 28, 2024",
      snippet: "How machine learning algorithms are revolutionizing fraud detection, personalized banking, and algorithmic trading.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2565&ixlib=rb-4.0.3",
      href: "#"
    },
    {
      id: '3',
      title: "Optimizing React Performance",
      category: "Development",
      date: "Sep 15, 2024",
      snippet: "A deep dive into server components, memoization, and code-splitting strategies to make your web apps lightning fast.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      href: "#"
    },
    {
      id: '4',
      title: "Sustainable Blockchain Solutions",
      category: "Blockchain",
      date: "Aug 30, 2024",
      snippet: "Examining the shift towards Proof of Stake and eco-friendly consensus mechanisms in modern blockchain networks.",
      image: "https://images.unsplash.com/photo-1642104704074-907c0698b98d?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3",
      href: "#"
    },
    {
      id: '5',
      title: "Designing for the Metaverse",
      category: "UI/UX",
      date: "Aug 10, 2024",
      snippet: "UX principles for spatial computing and 3D environments. How to design interfaces that feel natural in VR/AR.",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=2808&ixlib=rb-4.0.3",
      href: "#"
    }
  ],

  // =================================================================================================
  // TESTIMONIALS SECTION (EMPTY)
  // =================================================================================================
  testimonials: [],

  // =================================================================================================
  // CONTACT INFO
  // =================================================================================================
  contact: {
    email: "interxectlabs@gmail.com",
    phone: "+91 83409 52114",
    address: "India",
    whatsapp: "https://wa.me/918340952114"
  },

  // =================================================================================================
  // SOCIAL LINKS
  // =================================================================================================
  socials: {
    linkedin: "#",
    twitter: "#",
    instagram: "#"
  }
};
