"use client"
import { IconType } from "react-icons";
import { useState } from "react";


interface TechCardProps {
  icon: IconType;
  name: string;
  color: string;
}

export const TechCard = ({ icon: Icon, name, color }: TechCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative h-8 rounded-full dark:bg-[#cee6f5] bg-[#003a59] border-1 border-primary/30 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:z-20 flex items-center ${
        isHovered ? "w-auto px-4" : "w-8"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content container */}
      <div className="relative flex items-center justify-center w-full gap-0">
        {/* Icon */}
        <Icon
          className="transition-all duration-300 flex-shrink-0"
          size={16}
          style={{
            color: color,
          }}
        />

        {/* Name reveal on hover */}
        <span
          className={`text-sm font-semibold whitespace-nowrap transition-all duration-500 cursor-default ${
            isHovered ? "opacity-100 w-auto ml-2" : "opacity-0 w-0"
          }`}
        >
          {name}
        </span>
      </div>
    </div>
  );
};
