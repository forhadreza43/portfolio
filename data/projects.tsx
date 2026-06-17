import { IconType } from 'react-icons';
import go1 from '@/assets/projectsInfo/godesh/1.png';
import rec1 from '@/assets/projectsInfo/recipe/1.png';
import study1 from '@/assets/projectsInfo/study/1.png';
import eco from '@/assets/projectsInfo/ecovista/eco.png';
import stayswift from '@/assets/projectsInfo/stayswift/stayswift.png';

import quran1 from '@/assets/projectsInfo/quran/1.png';
import quran2 from '@/assets/projectsInfo/quran/2.png';
import quran3 from '@/assets/projectsInfo/quran/3.png';
import quran4 from '@/assets/projectsInfo/quran/4.png';

import alumni1 from '@/assets/projectsInfo/alumni/1.png';
import alumni2 from '@/assets/projectsInfo/alumni/2.png';
import alumni3 from '@/assets/projectsInfo/alumni/3.png';
import alumni4 from '@/assets/projectsInfo/alumni/4.png';
import alumni5 from '@/assets/projectsInfo/alumni/5.png';
import alumni6 from '@/assets/projectsInfo/alumni/6.png';
import alumni7 from '@/assets/projectsInfo/alumni/7.png';

import glow1 from '@/assets/projectsInfo/glowsera/1.png';
import glow2 from '@/assets/projectsInfo/glowsera/2.png';
import glow3 from '@/assets/projectsInfo/glowsera/3.png';
import glow4 from '@/assets/projectsInfo/glowsera/4.png';
import glow5 from '@/assets/projectsInfo/glowsera/5.png';

import appli1 from '@/assets/projectsInfo/appli-tract/1.png';
import appli2 from '@/assets/projectsInfo/appli-tract/2.png';
import appli3 from '@/assets/projectsInfo/appli-tract/3.png';

import {
   SiReactrouter,
   SiReact,
   SiExpress,
   SiMongodb,
   SiReactquery,
   SiMongoose,
   SiShadcnui,
   SiPrisma,
   SiGooglegemini,
} from 'react-icons/si';
import {
   BiLogoTailwindCss,
   BiLogoFirebase,
   BiLogoStripe,
   BiLogoPostgresql,
   BiLogoTypescript,
} from 'react-icons/bi';
import { RiNextjsLine } from 'react-icons/ri';
import BetterAUth from './icons/BetterAUthIcon';

export type Project = {
   id: string;
   imageBg?: string;
   order: 0 | 1 | 2 | 3;
   imageUrl: string[];
   title: string;
   description: string;
   features: string[];
   techStack: {
      icon: IconType;
      name: string;
      color: string;
   }[];
   liveLink: string;
   repoLink: string;
   note?: string;
};

export const projects = [
   {
      id: 'quran-mazid',
      imageBg: 'bg-green-800',
      order: 0,
      imageUrl: [quran1, quran2, quran3, quran4],
      title: 'Quran Mazid',
      description:
         'Quran Mazid is a modern, fully responsive Quran reading and listening web application designed to deliver a seamless spiritual learning experience across mobile, tablet, and desktop devices. Users can explore all 114 Surahs with Arabic text and English translation, listen to recitations, customize reading preferences, and search Surahs instantly with an intuitive dark/light mode interface.',
      features: [
         'Browse and read all 114 Surahs with Arabic and English translation',
         'Listen to Surah and Ayah recitations with integrated audio playback',
         'Search Surahs instantly with fast and user-friendly search functionality',
         'Customize Arabic font family for a personalized reading experience',
         'Adjust Arabic and English translation font sizes independently',
         'Fully responsive design optimized for mobile, tablet, and desktop devices',
         'Switch seamlessly between dark mode and light mode themes',
         'Smooth navigation between Surahs and Ayahs for better usability',
         'Clean and accessible UI focused on distraction-free Quran reading',
         'Optimized performance for a fast and seamless user experience',
         'Persist user settings in local storage',
      ],
      techStack: [
         { icon: RiNextjsLine, name: 'Next.js', color: '#FFFFFF' },
         { icon: BiLogoTailwindCss, name: 'Tailwind CSS', color: '#06B6D4' },
         { icon: SiShadcnui, name: 'ShadcnUI', color: '#FFFFFF' },
         { icon: BiLogoTypescript, name: 'TypeScript', color: '#3178c6' },
         { icon: SiExpress, name: 'Express.js', color: '#339933' },
      ],
      liveLink: 'https://quran-web-app-client-olive.vercel.app',
      repoLink: 'https://github.com/forhadreza43/quran-web-app',
      note: '',
   },
   {
      id: 'go-desh',
      imageBg: 'bg-green-100',
      order: 1,
      imageUrl: [go1],
      title: 'GoDesh',
      description:
         'This Travel Management System is a role-based platform designed to optimize user experience for Tourists, Guides, and Admins. It enables seamless browsing, booking, and secure payment of travel packages while empowering guides to manage bookings and stories. Admins maintain control through user management, content approval, and analytics, ensuring operational excellence and user satisfaction.',
      features: [
         'Book travel packages with secure Stripe payment',
         'Tourists can apply to become guides',
         'Guides manage bookings, accept or reject tours',
         'Admins add and manage tour packages',
         'Comprehensive analytics dashboard for platform insights',
      ],
      techStack: [
         { icon: SiReact, name: 'React.js', color: '#61DAFB' },
         { icon: SiReactrouter, name: 'React-Router', color: '#CA4242' },
         { icon: BiLogoTailwindCss, name: 'Tailwind CSS', color: '#06B6D4' },
         { icon: SiReactquery, name: 'Tanstack Query', color: '#E10098' },
         { icon: SiExpress, name: 'Express.js', color: '#339933' },
         { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
         { icon: BiLogoFirebase, name: 'Firebase', color: '#FFCA28' },
         { icon: BiLogoStripe, name: 'Stripe', color: '#6772E5' },
      ],
      liveLink: 'https://godesh.vercel.app',
      repoLink: 'https://github.com/forhadreza43/godesh-client',
      note: '',
   },
   {
      id: 'appli-tract',
      imageBg: 'bg-green-800',
      order: 2,
      imageUrl: [appli1, appli2, appli3],
      title: 'Appli-Tract',
      description:
         'AI Job Tracker, also known as APPLI-TRACT, is an intelligent job application management platform built to help job seekers organize, analyze, and improve their application pipeline. The application allows users to paste raw job descriptions from emails, PDFs, LinkedIn posts, or plain text, then uses Google Gemini AI to extract structured job information such as company name, job title, location, salary range, skills, responsibilities, qualifications, benefits, deadlines, and more. After extraction, users can review the extracted data, save jobs to a personal dashboard, update application status, search and filter opportunities, and visualize job search progress through analytics. The project combines a modern Next.js App Router frontend with server actions, Better Auth authentication, Prisma ORM, PostgreSQL persistence, AI-powered extraction, and interactive dashboard charts.',
      features: [
         'AI-powered job description extraction using Google Gemini',
         'Structured extraction of job title, company, location, salary, skills, responsibilities, qualifications, benefits, deadlines, and vacancies',
         'AI confidence scoring for extracted job details',
         'Gemini Model selector for extraction',
         'Job creation from extracted AI results',
         'Personal dashboard for saved job applications',
         'Application status tracking such as applied, interview, offered, and rejected',
         'Edit and delete saved jobs',
         'Sortable job management table',
         'Filters by job type, work mode, and application status',
         'Dashboard analytics with total jobs, interviews, offers, and response rate',
         'Company distribution bar chart',
         'Work mode and job type pie charts',
         'Secure email/password authentication with Better Auth',
         'PostgreSQL database persistence with Prisma ORM',
         'Responsive UI built with Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, and Radix UI',
         'TanStack Table-powered job listing',
         'Server actions for job CRUD and AI extraction workflows',
      ],
      techStack: [
         { icon: RiNextjsLine, name: 'Next.js', color: '#FFFFFF' },
         { icon: BiLogoTailwindCss, name: 'Tailwind CSS', color: '#06B6D4' },
         { icon: SiShadcnui, name: 'ShadcnUI', color: '#FFFFFF' },
         { icon: BiLogoTypescript, name: 'TypeScript', color: '#3178c6' },
         { icon: BiLogoPostgresql, name: 'PostgreSQL', color: '#336791' },
         { icon: SiPrisma, name: 'Prisma', color: '#5A67D8' },
         { icon: BetterAUth, name: 'Better Auth', color: '#000000' },
         { icon: SiGooglegemini, name: 'Google Gemini API', color: '#4285F4' },
      ],
      liveLink: 'https://appli-tract.vercel.app',
      repoLink: 'https://github.com/forhadreza43/ai-job-tracker',
      note: '',
   },
   {
      id: 'alumni-network',
      imageBg: 'bg-green-50',
      order: 0,
      imageUrl: [alumni1, alumni2, alumni3, alumni4, alumni5, alumni6, alumni7],
      title: 'Alumni Network',
      description:
         'Alumni Network is a secure, role-based web application designed to connect graduates through a centralized alumni directory. The platform enables users to browse alumni profiles, view professional details, and build meaningful connections. Access to detailed profiles is protected via authentication, while registered alumni can manage and update their own profiles. The system also includes a controlled registration flow using ticket-based verification and admin-issued security codes to ensure authenticity and trust within the network. The application is fully responsive across mobile, tablet, and desktop devices.',
      features: [
         'Browse public list of alumni with name, designation, and current company',
         'Secure authentication required to view detailed alumni profiles',
         'Alumni can register using ticket number and email-based security code verification',
         'Admin generates ticket numbers and security codes and sends them via email',
         'Alumni can update and manage their own profile information',
         'Comprehensive alumni profile including image, bio, and about section',
         'Contact information management including phone and email',
         'Support for date of birth and full address details (present and permanent)',
         'Social links integration including LinkedIn, Facebook, and personal website',
         'Education history tracking with academic background details',
         'Work experience history with roles and companies',
         'Skills section for professional expertise showcase',
         'Secure role-based access control for users and admins',
         'Admin dashboard for managing tickets, users, and verification flow',
         'Fully responsive UI optimized for mobile, tablet, and desktop devices',
      ],
      techStack: [
         { icon: RiNextjsLine, name: 'Next.js', color: '#FFFFFF' },
         { icon: BiLogoTailwindCss, name: 'Tailwind CSS', color: '#06B6D4' },
         { icon: SiShadcnui, name: 'ShadcnUI', color: '#FFFFFF' },
         { icon: BiLogoTypescript, name: 'TypeScript', color: '#3178c6' },
         { icon: SiExpress, name: 'Express.js', color: '#339933' },
         { icon: BiLogoPostgresql, name: 'PostgreSQL', color: '#336791' },
         { icon: SiPrisma, name: 'Prisma', color: '#5A67D8' },
      ],
      liveLink: 'https://alumni-network-six.vercel.app',
      repoLink: 'https://github.com/forhadreza43/alumni-network',
      note: '',
   },
   {
      id: 'glowsera',
      imageBg: 'bg-orange-100',
      order: 1,
      imageUrl: [glow1, glow2, glow3, glow4, glow5],
      title: 'Glowsera',
      description:
         'Glowsera is a modern beauty and cosmetics e-commerce frontend prototype designed to deliver a premium shopping experience. It showcases skincare and beauty products with intuitive browsing, smart filtering, and curated discovery sections such as categories, concerns, and trending collections. The platform emphasizes user engagement through wishlists, carts, reviews, and expert blogs, while maintaining a clean and responsive UI across all devices.',
      features: [
         'Showcase featured products in an interactive carousel on the landing page',
         'Display best selling and new arrival product sections',
         'Browse products by category such as serum, sunscreen, and face mask',
         'Shop products based on skin concerns like acne, dryness, and hair fall',
         'View customer reviews and expert-written blog content',
         'Advanced product filtering by category, price range, availability, and tags',
         'Sorting options including latest, most popular, price low to high and high to low',
         'Product search by name, type, or category',
         'Add products to wishlist and shopping cart',
         'Move products from wishlist to cart or remove them easily',
         'Support for checkout flow UI including online payment and cash on delivery (frontend only)',
         'Fully responsive design optimized for mobile, tablet, and desktop devices',
      ],
      techStack: [
         { icon: RiNextjsLine, name: 'Next.js', color: '#FFFFFF' },
         { icon: BiLogoTailwindCss, name: 'Tailwind CSS', color: '#06B6D4' },
         { icon: BiLogoTypescript, name: 'TypeScript', color: '#3178c6' },
         { icon: SiShadcnui, name: 'ShadcnUI', color: '#FFFFFF' },
      ],
      liveLink: 'https://glowsera-client.vercel.app',
      repoLink: 'https://github.com/forhadreza43/glowsera-client',
      note: '',
   },
   {
      id: 'stay-swift',
      imageBg: 'bg-blue-50',
      order: 2,
      imageUrl: [stayswift],
      title: 'StaySwift',
      description:
         'A modern, full-stack hotel booking platform built with Next.js 16, MongoDB, and Better Auth. Browse hotels, filter by amenities and price, check availability, and complete secure bookings with an intuitive UI.',
      features: [
         'Advanced search with real-time filtering by price range, star ratings, amenities, and sorting',
         'Date-based booking with conflict detection, availability validation',
         'Integrated payment form with card validation, automatic price calculation based on stay duration',
         'Multi-Provider Authentication (credential, Google, GitHub)',
         'Mobile-first architecture with adaptive layouts',
      ],
      techStack: [
         { icon: RiNextjsLine, name: 'Next.js', color: '#FFFFFF' },
         { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
         { icon: SiMongoose, name: 'Mongoose', color: '#880000' },
         { icon: BetterAUth, name: 'Better Auth', color: '#000000' },
         { icon: BiLogoTailwindCss, name: 'Tailwind CSS', color: '#06B6D4' },
      ],
      liveLink: 'https://stay-swift-two.vercel.app/',
      repoLink: 'https://github.com/forhadreza43/stay-swift',
      note: '',
   },
   {
      id: 'eco-vista',
      imageBg: 'bg-green-50',
      order: 0,
      imageUrl: [eco],
      title: 'Eco Vista',
      description:
         'A modern, responsive weather dashboard. Eco Vista provides comprehensive weather information including current conditions, temperature, wind data, and air quality metrics for locations worldwide.',
      features: [
         'Show Temperature',
         'Show current weather',
         'Show wind speed',
         'Provide air quality with various matrix',
         'Also can change location',
      ],
      techStack: [
         { icon: RiNextjsLine, name: 'Next.js', color: '#FFFFFF' },
         { icon: BiLogoTailwindCss, name: 'Tailwind CSS', color: '#06B6D4' },
         { icon: SiReactquery, name: 'Tanstack Query', color: '#E10098' },
      ],
      liveLink: 'https://eco-vista-azure.vercel.app/',
      repoLink: 'https://github.com/forhadreza43/eco-vista',
      note: 'Need Location Access',
   },
   {
      id: 'study-together',
      imageBg: 'bg-pink-50',
      order: 1,
      imageUrl: [study1],
      title: 'Study Together',
      description:
         'A Online Assignment Management Platform A collaborative platform enabling students and evaluators to manage assignments efficiently.',
      features: [
         'Create assignments',
         'Submit assignments ',
         'Evaluate submissions and assign marks',
         'Track assignment status in real-time (Pending/Completed)',
         'Evaluate assignments',
         'See Self attempted assignments',
      ],
      techStack: [
         { icon: SiReact, name: 'React.js', color: '#61DAFB' },
         { icon: SiExpress, name: 'Express.js', color: '#339933' },
         { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
         { icon: BiLogoFirebase, name: 'Firebase', color: '#FFCA28' },
         { icon: SiReactrouter, name: 'React-Router', color: '#CA4242' },
         { icon: BiLogoTailwindCss, name: 'Tailwind CSS', color: '#06B6D4' },
      ],
      liveLink: 'https://group-study-app-89073.web.app/',
      repoLink: 'https://github.com/forhadreza43/group-study-client',
      note: '',
   },
   {
      id: 'recipe-book',
      imageBg: 'bg-white',
      order: 2,
      imageUrl: [rec1],
      title: 'Recipe Book',
      description:
         'A dynamic Interactive Recipe Management Platform enabling users to explore, create, update, and manage their own recipes.',
      features: [
         'View all available recipes',
         'See detailed recipe information',
         'Add new recipes',
         'Update existing recipes',
         'Delete recipes',
      ],
      techStack: [
         { icon: RiNextjsLine, name: 'Next.js', color: '#FFFFFF' },
         { icon: SiExpress, name: 'Express.js', color: '#339933' },
         { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
         { icon: BiLogoTailwindCss, name: 'Tailwind CSS', color: '#06B6D4' },
      ],
      liveLink: 'https://recipe-book-next-mu.vercel.app/',
      repoLink: 'https://github.com/forhadreza43/recipe-book-next',
      note: '',
   },
];
