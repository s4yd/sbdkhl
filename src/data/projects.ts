import React from 'react';

import type { Project } from '../types';
import {
  Code2,
  Github,
  Smartphone,
  Languages,
  Code,
  Database,
  Search,
  User,
  Palette,
  LineChart,
  Globe2,
  Webhook,
  FileJson,
  Terminal,
  Settings,
  ShoppingCart,
  FileText,
  BookOpen,
  ListTodo,
} from 'lucide-react';
import { 
  SiN8N, 
  SiReact, 
  SiExpo, 
  SiJavascript, 
  SiGooglesheets,
  SiOpenai,
  SiTrello,
  SiLinkedin,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiWordpress,
  SiPhp,
  SiMysql,
  SiBrevo,
  SiWebflow
} from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoNetlify, BiLogoTypescript } from 'react-icons/bi';
import { GrStorage } from 'react-icons/gr';

export const projects: Project[] = [
  {
  id: 'brevo-email-marketing-n8n',
    title: 'ai199',
    description:
      'aid199',
    longDescription:
      'Email marketing automation workflow with Google Sheets/Webflow CMS integration, Brevo email delivery, and engagement tracking.',
    image: '/images/projects/Brevo Email Marketing (n8n.svg',
    tags: [
      { name: "n8n", icon: React.createElement(SiN8N, { className: "w-3.5 h-3.5" }) },
      { name: "Brevo", icon: React.createElement(SiBrevo, { className: "w-3.5 h-3.5" }) },
      { name: "Google Sheets", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
      { name: "Webflow", icon: React.createElement(SiWebflow, { className: "w-3.5 h-3.5" }) },
      { name: "Webhook", icon: React.createElement(Webhook, { className: "w-3.5 h-3.5" }) },
      { name: "Workflow JSON", icon: React.createElement(FileJson, { className: "w-3.5 h-3.5" }) },
    ],
    link: '',
    github: 'https://github.com/dhruba-datta/n8n/tree/main/Brevo%20Email%20Marketing',
    featured: true,
    category: 'automation',
  },
  {
  id: 'content-idea-generator-n8n',
    title: 'ai299',
    description:
      'aid299',
    longDescription:
      'Automated content creation workflow with Google Sheets integration, AI content generation, and Trello management.',
    image: '/images/projects/Content Idea Generator (n8n.svg',
    tags: [
      { name: "n8n", icon: React.createElement(SiN8N, { className: "w-3.5 h-3.5" }) },
      { name: "OpenAI", icon: React.createElement(SiOpenai, { className: "w-3.5 h-3.5" }) },
      { name: "Google Sheets", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
      { name: "Trello", icon: React.createElement(SiTrello, { className: "w-3.5 h-3.5" }) },
      { name: "Webhook", icon: React.createElement(Webhook, { className: "w-3.5 h-3.5" }) },
      { name: "Workflow JSON", icon: React.createElement(FileJson, { className: "w-3.5 h-3.5" }) },
    ],
    link: '',
    github: 'https://github.com/dhruba-datta/n8n/tree/main/Content%20Automation',
    featured: true,
    category: 'automation',
  },
  {
    id: 'intelligent-product-order-n8n',
    title: 'ai399',
    description:
      'aid399',
    longDescription:
      'Automated order processing workflow using n8n to sync catalogs, parse emails with OpenAI, and create tasks in Monday.com.',
    image: '/images/projects/Intelligent Product Order (n8n.svg',
    tags: [
      { name: "n8n", icon: React.createElement(SiN8N, { className: "w-3.5 h-3.5" }) },
      { name: "OpenAI", icon: React.createElement(SiOpenai, { className: "w-3.5 h-3.5" }) },
      { name: "Google Sheets", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
      { name: "Monday.com", icon: React.createElement(ListTodo, { className: "w-3.5 h-3.5" }) },
      { name: "Webhook", icon: React.createElement(Webhook, { className: "w-3.5 h-3.5" }) },
      { name: "Workflow JSON", icon: React.createElement(FileJson, { className: "w-3.5 h-3.5" }) },
    ],
    link: '/projects/intelligent-product-order-n8n',
    github: 'https://github.com/dhruba-datta/n8n/tree/main/Intelligent%20Product%20Order',
    featured: true,
    category: 'automation',
  },

  {
  id: 'photobooth',
    title: 'ai499',
    description:
      'aid499',
    longDescription:
      'Full-stack social photo app with Google login, drag-and-drop uploads, comments, likes, and pin-style masonry layout.',
    image: '/images/projects/photoboot.svg',
    tags: [
      { name: "React", icon: React.createElement(SiReact, { className: "w-3.5 h-3.5" }) },
      { name: "Sanity CMS", icon: React.createElement(Database, { className: "w-3.5 h-3.5" }) },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss, { className: "w-3.5 h-3.5" }) },
      { name: "Google OAuth", icon: React.createElement(User, { className: "w-3.5 h-3.5" }) },
      { name: "JavaScript ES6+", icon: React.createElement(SiJavascript, { className: "w-3.5 h-3.5" }) },
      { name: "Responsive Design", icon: React.createElement(Smartphone, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'https://phootobooth.netlify.app/',
    github: 'https://github.com/dhruba-datta/photoBooth',
    featured: true,
    category: 'development',
  },
  {
  id: 'ab-pharmacy-expo',
    title: 'ai599',
    description:
      'aid599',
    longDescription:
      'Cross-platform React Native Expo app for pharmacy trade shows with live scheduling, exhibitor directory, product catalog, offline capabilities, and instant search.',
    image: '/images/projects/AB Pharmacy Exp.svg',
    tags: [
      { name: "React Native", icon: React.createElement(SiReact, { className: "w-3.5 h-3.5" }) },
      { name: "Expo", icon: React.createElement(SiExpo, { className: "w-3.5 h-3.5" }) },
      { name: "JavaScript ES6+", icon: React.createElement(SiJavascript, { className: "w-3.5 h-3.5" }) },
      { name: "React Navigation", icon: React.createElement(Code, { className: "w-3.5 h-3.5" }) },
      { name: "AsyncStorage", icon: React.createElement(GrStorage, { className: "w-3.5 h-3.5" }) },
      { name: "Google Sheets", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'http://surl.li/lkiufr',
    github: 'https://github.com/dhruba-datta/AB-Pharmacy-Expo',
    featured: true,
    category: 'app',
  },
  {
  id: 'cryptoverse',
    title: 'ai699',
    description:
      'aid699',
    longDescription:
      'Real-time crypto stats, interactive Chart.js visualizations, Redux Toolkit Query state management, Ant Design UI, and aggregated news intelligence.',
    image: '/images/projects/CryptoVers.svg',
    tags: [
      { name: "React", icon: React.createElement(SiReact, { className: "w-3.5 h-3.5" }) },
      { name: "Redux Toolkit", icon: React.createElement(Database, { className: "w-3.5 h-3.5" }) },
      { name: "Ant Design", icon: React.createElement(Palette, { className: "w-3.5 h-3.5" }) },
      { name: "Chart.js", icon: React.createElement(LineChart, { className: "w-3.5 h-3.5" }) },
      { name: "API Integration", icon: React.createElement(Globe2, { className: "w-3.5 h-3.5" }) },
      { name: "Responsive Design", icon: React.createElement(Smartphone, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'https://cryptoverse20.netlify.app/',
    github: 'https://github.com/dhruba-datta/CryptoVerse',
    featured: true,
    category: 'development',
  },
  {
  id: 'portfolio-v2',
    title: 'ai799',
    description:
      'aid799',
    longDescription:
      'Modern, highly interactive portfolio built with React 18, TypeScript, and Tailwind CSS. Features advanced Framer Motion animations, comprehensive case studies, a fully responsive design, and seamless dark mode integration.',
    image: '/images/projects/Portfolio v.svg',
    tags: [
      { name: "React 18", icon: React.createElement(SiReact, { className: "w-3.5 h-3.5" }) },
      { name: "TypeScript", icon: React.createElement(SiTypescript, { className: "w-3.5 h-3.5" }) },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss, { className: "w-3.5 h-3.5" }) },
      { name: "Framer Motion", icon: React.createElement(SiFramer, { className: "w-3.5 h-3.5" }) },
      { name: "Vite", icon: React.createElement(SiVite, { className: "w-3.5 h-3.5" }) },
      { name: "Dark Theme", icon: React.createElement(Palette, { className: "w-3.5 h-3.5" }) },
    ],
    link: '#',
    github: 'https://github.com/dhruba-datta/Portfolio-v2',
    featured: true,
    category: 'development',
  },
  {
  id: 'ab-pharmacy-orders',
    title: 'ai899',
    description:
      'aid899',
    longDescription:
      'Pharmacy order management system with Google Sheets backend integration, WhatsApp order confirmation, and streamlined UI for quick order placement and status tracking.',
    image: '/images/projects/AB Pharmacy Order.svg',
    tags: [
      { name: "React", icon: React.createElement(SiReact, { className: "w-3.5 h-3.5" }) },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss, { className: "w-3.5 h-3.5" }) },
      { name: "Google Sheets", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
      { name: "Netlify", icon: React.createElement(BiLogoNetlify, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'https://abpharmacy-order.netlify.app/',
    github: 'https://github.com/dhruba-datta/AB-Pharmacy-Order-Management',
    featured: false,
    category: 'development',
  },

  {
  id: 'portfolio-v1',
    title: 'ai999',
    description:
      'aid999',
    longDescription:
      'Lightweight, SEO-focused personal portfolio built with semantic HTML5, CSS3, and Bootstrap. Features a responsive grid layout, accessible design, and Netlify deployment for high performance.',
    image: '/images/projects/Portfolio v.svg',
    tags: [
      { name: "HTML5", icon: React.createElement(Code, { className: "w-3.5 h-3.5" }) },
      { name: "CSS3", icon: React.createElement(Palette, { className: "w-3.5 h-3.5" }) },
      { name: "JavaScript", icon: React.createElement(SiJavascript, { className: "w-3.5 h-3.5" }) },
      { name: "SEO Optimized", icon: React.createElement(Search, { className: "w-3.5 h-3.5" }) },
      { name: "Responsive Design", icon: React.createElement(Smartphone, { className: "w-3.5 h-3.5" }) },
      { name: "Netlify", icon: React.createElement(BiLogoNetlify, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'https://dhruba-datta.netlify.app/',
    github: 'https://github.com/dhruba-datta/Portfolio-v1',
    featured: true,
    category: 'development',
  },

  // Dice Job Search (n8n) automation project
  {
  id: 'dice-job-search-n8n',
    title: 'ai1099',
    description:
      'aid1099',
    longDescription:
      'Automated job scraping workflow using n8n to fetch, filter, and alert on new Dice.com job listings via Telegram/Email.',
    image: '/images/projects/Dice Job Search (n8n.svg',
    tags: [
      { name: 'n8n', icon: React.createElement(SiN8N, { className: 'w-3.5 h-3.5' }) },
      { name: 'Dice.com', icon: React.createElement(Search, { className: 'w-3.5 h-3.5' }) },
      { name: 'Web Scraping', icon: React.createElement(Search, { className: 'w-3.5 h-3.5' }) },
      { name: 'Google Sheets', icon: React.createElement(SiGooglesheets, { className: 'w-3.5 h-3.5' }) },
      { name: 'Webhook', icon: React.createElement(Webhook, { className: 'w-3.5 h-3.5' }) },
      { name: 'Workflow JSON', icon: React.createElement(FileJson, { className: 'w-3.5 h-3.5' }) },
    ],
  link: '/projects/dice-job-search-n8n',
    github: 'https://github.com/dhruba-datta/n8n/tree/main/Dice%20Job%20Search',
    featured: true,
    category: 'automation',
  },

  {
  id: 'kingsley-group',
    title: 'ai1199',
    description:
      'aid1199',
    longDescription:
      'Corporate WordPress redesign featuring custom post types for resources & news, granular SEO optimization, Cloudflare performance hardening, and a multi-regional content strategy.',
    image: '/images/projects/Kingsley Grou.svg',
    tags: [
      { name: "WordPress", icon: React.createElement(SiWordpress, { className: "w-3.5 h-3.5" }) },
      { name: "PHP", icon: React.createElement(SiPhp, { className: "w-3.5 h-3.5" }) },
      { name: "MySQL", icon: React.createElement(SiMysql, { className: "w-3.5 h-3.5" }) },
      { name: "SEO Optimization", icon: React.createElement(Search, { className: "w-3.5 h-3.5" }) },
      { name: "Responsive Design", icon: React.createElement(Smartphone, { className: "w-3.5 h-3.5" }) },
      { name: "Content Management", icon: React.createElement(FileText, { className: "w-3.5 h-3.5" }) },
      { name: "Blog System", icon: React.createElement(BookOpen, { className: "w-3.5 h-3.5" }) },
      { name: "Custom Theme", icon: React.createElement(Palette, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'https://kingsleygroup.co/',
    github: '',
    featured: true,
    category: 'development',
  },
  {
  id: 'linkedin-job-search-n8n',
    title: 'ai1299',
    description:
      'aid1299',
    longDescription:
      'Automated job scraping workflow using n8n to fetch, filter, and alert on new LinkedIn job listings via Telegram/Email.',
    image: '/images/projects/LinkedIn Job Search (n8n.svg',
    tags: [
      { name: "n8n", icon: React.createElement(SiN8N, { className: "w-3.5 h-3.5" }) },
      { name: "LinkedIn", icon: React.createElement(SiLinkedin, { className: "w-3.5 h-3.5" }) },
      { name: "Web Scraping", icon: React.createElement(Search, { className: "w-3.5 h-3.5" }) },
      { name: "Google Sheets", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
      { name: "Webhook", icon: React.createElement(Webhook, { className: "w-3.5 h-3.5" }) },
      { name: "Data Extraction", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
    ],
    link: '',
    github: 'https://github.com/dhruba-datta/n8n/tree/main/Linkedin%20Job%20Search',
    featured: true,
    category: 'automation',
  },
  {
  id: 'kfc-clone',
    title: 'ai1399',
    description:
      'aid1399',
    longDescription:
      'Advanced Vue 3 food ordering SPA featuring internationalization (i18n), dynamic cart management, location-based services with Leaflet.js, and a robust component architecture with data persistence.',
    image: '/images/projects/KFC Clon.svg',
    tags: [
      { name: "Vue 3", icon: React.createElement(FaVuejs, { className: "w-3.5 h-3.5" }) },
      { name: "TailwindCSS", icon: React.createElement(RiTailwindCssFill, { className: "w-3.5 h-3.5" }) },
      { name: "TypeScript/ES6+", icon: React.createElement(BiLogoTypescript, { className: "w-3.5 h-3.5" }) },
      { name: "Vue I18n", icon: React.createElement(Languages, { className: "w-3.5 h-3.5" }) },
      { name: "localStorage", icon: React.createElement(GrStorage, { className: "w-3.5 h-3.5" }) },
      { name: "Netlify", icon: React.createElement(BiLogoNetlify, { className: "w-3.5 h-3.5" }) },
      { name: "GitHub", icon: React.createElement(Github, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'https://kfc-bd.netlify.app/',
    github: 'https://github.com/dhruba-datta/kfc-clone',
    featured: true,
    category: 'development',
  },
  {
  id: 'easycooking',
    title: 'ai1499',
    description:
      'aid1499',
    longDescription:
      'Immersive multi-cuisine cooking tutorial platform featuring authentic Bengali, Chinese, and Indian recipes. Built with semantic HTML5 and CSS3 for distraction-free reading, lightning-fast zero-dependency performance, and a fully responsive cross-device experience.',
    image: '/images/projects/EasyCookin.svg',
    tags: [
      { name: "HTML5", icon: React.createElement(SiHtml5, { className: "w-3.5 h-3.5" }) },
      { name: "CSS3", icon: React.createElement(SiCss3, { className: "w-3.5 h-3.5" }) },
      { name: "Responsive Design", icon: React.createElement(Smartphone, { className: "w-3.5 h-3.5" }) },
      { name: "Multi-Cuisine", icon: React.createElement(Globe2, { className: "w-3.5 h-3.5" }) },
      { name: "GitHub Pages", icon: React.createElement(Github, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'https://dhruba-datta.github.io/EasyCooking/',
    github: 'https://github.com/dhruba-datta/EasyCooking',
    featured: true,
    category: 'development',
  },
  {
  id: 'food-ordering-system',
    title: 'ai1599',
    description:
      'aid1599',
    longDescription:
      'Robust C++ ordering system featuring token-based tracking, smart time estimation, automated billing, and secure password-protected admin panel with persistent file storage.',
    image: '/images/projects/Food Ordering Syste.svg',
    tags: [
      { name: "C++", icon: React.createElement(SiCplusplus, { className: "w-3.5 h-3.5" }) },
      { name: "OOP", icon: React.createElement(Code, { className: "w-3.5 h-3.5" }) },
      { name: "File Handling", icon: React.createElement(Database, { className: "w-3.5 h-3.5" }) },
      { name: "Admin Panel", icon: React.createElement(Settings, { className: "w-3.5 h-3.5" }) },
      { name: "Console App", icon: React.createElement(Terminal, { className: "w-3.5 h-3.5" }) },
      { name: "Order Management", icon: React.createElement(ShoppingCart, { className: "w-3.5 h-3.5" }) },
    ],
    link: '',
    github: 'https://github.com/dhruba-datta/FoodOrderingSystem',
    featured: true,
    category: 'app',
  },
];

export const categories = [
  { key: 'ga99', label: 'ga99', icon: Code2 },
  { key: 'gb99', label: 'gb99', icon: Smartphone },
  { key: 'gc99', label: 'gc99', icon: SiN8N },
];

export const categoryMeta: Record<string, { label: string; Icon: React.ElementType }> = {
  development: { label: 'ga99', Icon: Code2 },
  app: { label: 'gb99', Icon: Smartphone },
  g99: { label: 'gc99c', Icon: SiN8N },
};
