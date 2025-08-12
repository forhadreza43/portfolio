"use client";

import { cn } from "@/lib/utils";
import React, { JSX } from "react";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaRegImage,
  FaBolt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiCanva,
  SiAdobexd,
  SiAdobephotoshop,
  SiNotion,
  SiTrello,
  SiNetlify,
  SiVercel,
  SiReactquery,
  SiFirebase,
  SiJsonwebtokens,
  SiNextdotjs,
} from "react-icons/si";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SectionHeading from "./SectionHeading";

type SkillData = {
  name: string;
  icon: JSX.Element;
  borderColor: string;
  shadowColor: string;
};

const skillsData = {
  Web: [
    {
      name: "HTML5",
      icon: <SiHtml5 className="text-orange-500" />,
      borderColor: "border-orange-500",
      shadowColor: "hover:shadow-orange-500/40",
    },
    {
      name: "CSS3",
      icon: <SiCss3 className="text-blue-400" />,
      borderColor: "border-blue-400",
      shadowColor: "hover:shadow-blue-400/40",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-300" />,
      borderColor: "border-cyan-300",
      shadowColor: "hover:shadow-cyan-300/40",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      borderColor: "border-yellow-400",
      shadowColor: "hover:shadow-yellow-400/40",
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
      borderColor: "border-cyan-400",
      shadowColor: "hover:shadow-cyan-400/40",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-base-content" />,
      borderColor: "border-base-content",
      shadowColor: "hover:shadow-base-content/40",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-400" />,
      borderColor: "border-green-400",
      shadowColor: "hover:shadow-green-400/40",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      borderColor: "border-base-content",
      shadowColor: "hover:shadow-base-content/30",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-primary" />,
      borderColor: "border-primary",
      shadowColor: "hover:shadow-primary/40",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500" />,
      borderColor: "border-yellow-500",
      shadowColor: "hover:shadow-yellow-500/40",
    },
  ],
  Tools: [
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-600" />,
      borderColor: "border-orange-600",
      shadowColor: "hover:shadow-orange-600/40",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-base-content" />,
      borderColor: "border-base-content",
      shadowColor: "hover:shadow-base-content/30",
    },
    {
      name: "JWT",
      icon: <SiJsonwebtokens className="text-amber-500" />,
      borderColor: "border-amber-500",
      shadowColor: "hover:shadow-amber-500/40",
    },
    {
      name: "Atlas",
      icon: <SiMongodb className="text-primary" />,
      borderColor: "border-primary",
      shadowColor: "hover:shadow-primary/40",
    },
    {
      name: "Netlify",
      icon: <SiNetlify className="text-green-400" />,
      borderColor: "border-green-400",
      shadowColor: "hover:shadow-green-400/40",
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      borderColor: "border-base-content",
      shadowColor: "hover:shadow-base-content/30",
    },
    {
      name: "AOS",
      icon: <FaRegImage className="text-pink-400" />,
      borderColor: "border-pink-400",
      shadowColor: "hover:shadow-pink-400/40",
    },
    {
      name: "TanStack Query",
      icon: <SiReactquery className="text-red-500" />,
      borderColor: "border-red-500",
      shadowColor: "hover:shadow-red-500/40",
    },
    {
      name: "Surge",
      icon: <FaBolt className="text-yellow-400" />,
      borderColor: "border-yellow-400",
      shadowColor: "hover:shadow-yellow-400/40",
    },
  ],
  Others: [
    {
      name: "Figma",
      icon: <FaFigma className="text-pink-500" />,
      borderColor: "border-pink-500",
      shadowColor: "hover:shadow-pink-500/40",
    },
    {
      name: "Canva",
      icon: <SiCanva className="text-blue-400" />,
      borderColor: "border-blue-400",
      shadowColor: "hover:shadow-blue-400/40",
    },
    {
      name: "Adobe XD",
      icon: <SiAdobexd className="text-pink-400" />,
      borderColor: "border-pink-400",
      shadowColor: "hover:shadow-pink-400/40",
    },
    {
      name: "Pixo",
      icon: <FaRegImage className="text-green-400" />,
      borderColor: "border-green-400",
      shadowColor: "hover:shadow-green-400/40",
    },
    {
      name: "Photoshop",
      icon: <SiAdobephotoshop className="text-blue-300" />,
      borderColor: "border-blue-300",
      shadowColor: "hover:shadow-blue-300/40",
    },
    {
      name: "Notion",
      icon: <SiNotion />,
      borderColor: "border-base-content",
      shadowColor: "hover:shadow-black/30 dark:hover:shadow-base-content/30",
    },
    {
      name: "Trello",
      icon: <SiTrello className="text-blue-500" />,
      borderColor: "border-blue-500",
      shadowColor: "hover:shadow-blue-500/40",
    },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-30 mt-12">
      <div className="mx-auto">
        {/* Heading */}
        <SectionHeading>Skills</SectionHeading>

        {/* Shadcn Tabs */}
        <Tabs defaultValue="Web" className="w-full">
          <TabsList className="flex bg-white/20 backdrop-blur-md flex-wrap justify-center  gap-2 md:gap-4 mb-8 mx-auto">
            {Object.keys(skillsData).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="
    px-3 py-1.5 rounded-md border-2 border-primary
    dark:text-primary
    data-[state=active]:bg-primary
    data-[state=active]:text-white
    hover:scale-105 transition-transform min-w-[100px]
    text-sm 
    dark:data-[state=active]:bg-primary
    dark:data-[state=active]:text-white
  "
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(skillsData).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5 justify-items-center">
                {skills.map((skill: SkillData, index: number) => (
                  <div
                    key={index}
                    className={cn(
                      `w-full max-w-[11rem] bg-primary/5 rounded-md p-4 md:p-5 flex flex-col items-center justify-center text-center border border-primary/20 shadow-md transition-all ease-in-out duration-500 backdrop-blur-3xl hover:scale-105`
                    )}
                  >
                    {/* p-6 rounded-xl shadow-lg bg-primary/5 border border-primary/20 */}
                    <div className="text-4xl md:text-5xl mt-2">
                      {skill.icon}
                    </div>
                    <p className="mt-4 font-semibold md:text-lg">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
