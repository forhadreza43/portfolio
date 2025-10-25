import React from "react";
// import {
//   Code2,
//   Database,
//   Server,
//   Zap,
//   GitBranch,
//   Box,
//   Layers,
//   Cpu,
//   Cloud,
//   Lock,
//   Palette,
//   Terminal,
// } from "lucide-react";
import { TechCard } from "./TechCard";
import { TechItem } from "./ProjectCard";

// const technologies = [
//   { icon: Code2, name: "React", color: "#61DAFB" },
//   { icon: Zap, name: "Vue", color: "#42B883" },
//   { icon: Layers, name: "Next.js", color: "#FFFFFF" },
//   { icon: Terminal, name: "TypeScript", color: "#3178C6" },
//   { icon: Server, name: "Node.js", color: "#339933" },
//   { icon: Database, name: "PostgreSQL", color: "#4169E1" },
//   { icon: Database, name: "MongoDB", color: "#47A248" },
//   { icon: GitBranch, name: "Git", color: "#F05032" },
//   { icon: Box, name: "Docker", color: "#2496ED" },
//   { icon: Cloud, name: "AWS", color: "#FF9900" },
//   { icon: Cpu, name: "Python", color: "#3776AB" },
//   { icon: Lock, name: "GraphQL", color: "#E10098" },
//   { icon: Palette, name: "Tailwind", color: "#06B6D4" },
// ];



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
