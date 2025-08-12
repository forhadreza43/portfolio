import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  imageUrl: string | StaticImageData;
  title: string;
  description: string;
  features: string[];
  techStack: string[]; // e.g., ["Node", "Express", "Next.js", "React", "React-Router", "Firebase"]
  liveLink?: string;
  repoLink?: string;
  // Add more links if needed
}

const ProjectCard: React.FC<ProjectProps> = ({
  imageUrl,
  title,
  description,
  features,
  techStack,
  liveLink,
  repoLink,
}) => {
  return (
    <div className="flex p-6 flex-col lg:flex-row rounded-lg shadow-md bg-primary/5 border border-primary/20">
      {/* Left - Image Container */}
      <div className="lg:w-1/2 rounded-md border border-gray-300 bg-green-100 flex items-center justify-center">
        
        
        <Image
          src={imageUrl}
          alt={`${title} screenshot`}
          className="w-full h-auto rounded-md object-cover"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Right - Content */}
      <div className="lg:w-1/2 flex flex-col justify-between px-6 py-4 ">
        <div>
          <h3 className="font-bold text-xl lg:text-2xl mb-2">{title}</h3>
          <p className=" mb-4 text-justify text-sm sm:text-base md:text-md">
            {description}
          </p>
          <h3 className="font-semibold lg:text-lg mb-1 mb-3">Key Features</h3>
          <ul className="list-decimal list-inside mb-4 space-y-1 text-sm sm:text-base md:text-md">
            {features.map((feature, idx) => (
              <li key={idx} className="">
                {feature}
              </li>
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
              <Button className="bg-primary rounded-full text-sm shadow-md transition">
                Details
              </Button>
            </Link>
          )}
          {repoLink && (
            <Link href={repoLink} target="_blank" rel="noopener noreferrer">
              <Button
                variant={"outline"}
                className="hover:bg-primary hover:border-primary rounded-full text-sm shadow-md transition"
              >
                Github Repo
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
