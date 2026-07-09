'use client';
import { motion } from 'motion/react';

const SectionHeading = ({
   children,
   className,
}: {
   children: string;
   className?: string;
}) => {
   return (
      <motion.h2
         className={`uppercase text-sm lg:text-xs font-mono tracking-widest font-light ${className || ''}`}
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5 }}
      >
         {children}
      </motion.h2>
   );
};

export default SectionHeading;
