"use client";
import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import OutlineButton from "@/components/button/OutlineButton";
import PrimaryButton from "./button/PrimaryButton";
import { motion } from "motion/react";
interface ProjectProps {
  imageUrl: string | StaticImageData;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
  imageBg?: string;
  order?: 0 | 1;
}

const ProjectCard: React.FC<ProjectProps> = ({
  imageUrl,
  title,
  description,
  features,
  techStack,
  liveLink,
  repoLink,
  imageBg = "bg-green-100",
  order = 0,
}) => {
  return (
    <motion.div
      className={cn(
        "flex p-6 flex-col lg:flex-row rounded-lg shadow-md bg-primary/5 border border-primary/20",
        order === 1 && "lg:flex-row-reverse"
      )}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Left - Image Container */}
      <motion.div
        className={cn(
          "lg:w-1/2 rounded-md border border-gray-300 flex items-center justify-center",
          imageBg
        )}
        initial={{ opacity: 0, x: order === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={imageUrl}
          alt={`${title} screenshot`}
          className="w-full h-auto rounded-md object-cover"
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      {/* Right - Content */}
      <motion.div
        className={cn(
          `lg:w-1/2 flex flex-col justify-between ${
            order === 1 ? "lg:pr-6" : "lg:pl-6"
          } pt-4 lg:pt-0`
        )}
        initial={{ opacity: 0, x: order === 0 ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div>
          <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">
            {title}
          </h3>
          <p className="mb-4 text-justify text-sm sm:text-base md:text-md">
            {description}
          </p>
          <h3 className="font-semibold sm:text-md lg:text-lg mb-1 mb-3">
            Key Features
          </h3>
          <ul className="list-decimal list-inside mb-4 space-y-1 text-sm sm:text-base md:text-md">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Technology badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 cursor-default bg-primary/20 border border-primary/40 rounded-full text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {liveLink && (
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              <PrimaryButton>Live Demo</PrimaryButton>
            </Link>
          )}
          {repoLink && (
            <Link href={repoLink} target="_blank" rel="noopener noreferrer">
              <OutlineButton>Github Repo</OutlineButton>
            </Link>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
