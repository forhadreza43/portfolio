import { IconType } from 'react-icons';
import go1 from '@/assets/projectsInfo/godesh/1.png';
import rec1 from '@/assets/projectsInfo/recipe/1.png';
import study1 from '@/assets/projectsInfo/study/1.png';
import eco from '@/assets/projectsInfo/ecovista/eco.png';
import stayswift from '@/assets/projectsInfo/stayswift/stayswift.png';

import {
   SiReactrouter,
   SiReact,
   SiExpress,
   SiMongodb,
   SiReactquery,
   SiMongoose,
} from 'react-icons/si';
import {
   BiLogoTailwindCss,
   BiLogoFirebase,
   BiLogoStripe,
} from 'react-icons/bi';
import { RiNextjsLine } from 'react-icons/ri';
import BetterAUth from './icons/BetterAUthIcon';

export type Project = {
   imageBg?: string;
   order: 0 | 1 | 2;
   imageUrl: string;
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
      imageBg: 'bg-green-100',
      order: 0,
      imageUrl: go1,
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
      liveLink: 'https://godesh-1ab55.web.app',
      repoLink: 'https://github.com/forhadreza43/godesh-client',
      note: '',
   },
   {
      imageBg: 'bg-blue-50',
      order: 1,
      imageUrl: stayswift,
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
      imageBg: 'bg-green-50',
      order: 2,
      imageUrl: eco,
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
      imageBg: 'bg-white',
      order: 3,
      imageUrl: rec1,
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
   {
      imageBg: 'bg-pink-50',
      order: 0,
      imageUrl: study1,
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
];
