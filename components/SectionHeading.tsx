"use client"
import { motion } from "motion/react";
import React from "react";


const SectionHeading = ({ children }: { children: string }) => {
  return (
    <motion.h2
      className="text-xl md:text-2xl font-bold mb-6 text-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeading;
