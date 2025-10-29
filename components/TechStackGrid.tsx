import React from "react";
import { TechCard } from "./TechCard";
import { TechItem } from "./ProjectCard";

interface TechStackGridProps {
  techStack: TechItem[];
}

const TechStackGrid = ({ techStack }: TechStackGridProps) => {
  return (
    <div className="flex items-center  overflow-x-auto">
      <div className="inline-flex items-center relative">
        {techStack.map((tech, index) => (
          <div
            key={tech.name}
            className="animate-in fade-in slide-in-from-bottom-4 transition-all duration-300"
            style={{
              animationDelay: `${index * 50}ms`,
              animationFillMode: "backwards",
              marginLeft: index > 0 ? "-6px" : "0",
            }}
          >
            <TechCard {...tech} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechStackGrid;
