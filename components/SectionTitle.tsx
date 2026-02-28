'use client';
import { motion } from 'motion/react';

const SectionTitle = ({
   children,
   className,
}: {
   children: string | React.ReactNode;
   className?: string;
}) => {
   return (
      <motion.h2
         className={`text-xl md:text-2xl lg:text-3xl font-semibold relative ${className || ''}`}
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5 }}
      >
         {children}
      </motion.h2>
   );
};

export default SectionTitle;
