import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import OutlineButton from "@/components/button/OutlineButton";
import PrimaryButton from "./button/PrimaryButton";
interface ProjectProps {
  imageUrl: string | StaticImageData;
  title: string;
  description: string;
  features: string[];
  techStack: string[]; // e.g., ["Node", "Express", "Next.js", "React", "React-Router", "Firebase"]
  liveLink?: string;
  repoLink?: string;
  imageBg?: string;
  order?: 0 | 1; // New prop for layout swap
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
  order = 0, // default value
}) => {
  return (
    <div
      className={cn(
        "flex p-6 flex-col lg:flex-row rounded-lg shadow-md bg-primary/5 border border-primary/20",
        order === 1 && "lg:flex-row-reverse"
      )}
    >
      {/* Left - Image Container */}
      <div
        className={cn(
          "lg:w-1/2 rounded-md border border-gray-300 flex items-center justify-center",
          imageBg
        )}
      >
        <Image
          src={imageUrl}
          alt={`${title} screenshot`}
          className="w-full h-auto rounded-md object-cover"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Right - Content */}
      <div
        className={cn(
          `lg:w-1/2 flex flex-col justify-between ${
            order === 1 ? "lg:pr-6" : "lg:pl-6"
          } pt-4 lg:pt-0`
        )}
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
      </div>
    </div>
  );
};

export default ProjectCard;
