'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BackToTop() {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsVisible(window.scrollY > 300);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <AnimatePresence>
         {isVisible && (
            <motion.button
               key="back-to-top"
               onClick={scrollToTop}
               initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 20,
                  boxShadow: '0 0 0px rgba(0,0,0,0)',
               }}
               animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)', // subtle glow on appear
               }}
               exit={{ opacity: 0, scale: 0.8, y: 20 }}
               transition={{ duration: 0.3, ease: 'easeOut' }}
               whileHover={{
                  scale: 1.1, // bounce scale effect
                  boxShadow: '0 6px 28px rgba(0, 0, 0, 0.25)',
                  transition: { type: 'spring', stiffness: 300, damping: 15 },
               }}
               className={cn(
                  'fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 focus:outline-none'
               )}
               aria-label="Back to top"
            >
               <ArrowUp size={20} />
            </motion.button>
         )}
      </AnimatePresence>
   );
}
