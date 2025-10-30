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
  SiMysql,
  SiPostgresql,
  SiAdobeillustrator,
} from "react-icons/si";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import SectionHeading from "./SectionHeading";
import { motion } from "motion/react";
import PillTabs, { TabItemType } from "./shsfui/switch/pill-tabs";
import SkillCard from "./SkillCard";

type SkillData = {
  name: string;
  icon: JSX.Element;
  borderColor: string;
  shadowColor: string;
};

const skillsData = {
  Web: [
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-base-content dark:text-gray-800" />,
      borderColor: "border-base-content",
      shadowColor: "hover:shadow-base-content/40",
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
      borderColor: "border-cyan-400",
      shadowColor: "hover:shadow-cyan-400/40",
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript className="text-blue-400" />,
      borderColor: "border-blue-400",
      shadowColor: "hover:shadow-blue-400/40",
    },
    {
      name: "JavaScript",
      icon: <RiJavascriptFill className="text-yellow-400" />,
      borderColor: "border-yellow-400",
      shadowColor: "hover:shadow-yellow-400/40",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-400" />,
      borderColor: "border-green-400",
      shadowColor: "hover:shadow-green-400/40",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="dark:text-gray-800" />,
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
      name: "MySQL",
      icon: <SiMysql className="text-blue-400" />,
      borderColor: "border-blue-400",
      shadowColor: "hover:shadow-blue-400/40",
    },
    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql className="text-blue-400" />,
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
      icon: <FaGithub className="text-base-content dark:text-gray-800" />,
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
      icon: <SiVercel className="dark:text-gray-800" />,
      borderColor: "border-base-content",
      shadowColor: "hover:shadow-base-content/30",
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
      name: "Illustrator",
      icon: <SiAdobeillustrator className="text-orange-600" />,
      borderColor: "border-red-500",
      shadowColor: "hover:shadow-red-500/40",
    },
    {
      name: "Notion",
      icon: <SiNotion className="dark:text-gray-800" />,
      borderColor: "border-base-content",
      shadowColor: "hover:shadow-black/30 dark:hover:shadow-base-content/30",
    },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = React.useState("Web");

  // Safelist fill-* classes so Tailwind includes them when built from dynamic values
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const TAILWIND_SAFELIST =
    "fill-orange-500 fill-blue-400 fill-cyan-300 fill-yellow-400 fill-cyan-400 fill-base-content fill-green-400 fill-primary fill-yellow-500 fill-red-500 fill-pink-400 fill-blue-300 fill-amber-500 fill-blue-500 " +
    // 20% opacity variants for inner background
    "fill-orange-500/20 fill-blue-400/20 fill-cyan-300/20 fill-yellow-400/20 fill-cyan-400/20 fill-base-content/20 fill-green-400/20 fill-primary/20 fill-yellow-500/20 fill-red-500/20 fill-pink-400/20 fill-blue-300/20 fill-amber-500/20 fill-blue-500/20";

  const tabs: TabItemType[] = Object.keys(skillsData).map((category) => ({
    id: category,
    label: category,
  }));

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section id="skills" className="scroll-mt-30 mt-12 lg:mt-20">
      <div className="mx-auto">
        {/* Heading */}
        <SectionHeading>Skills</SectionHeading>

        {/* Pill Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-full">
            <div className="flex justify-center mb-8">
              <PillTabs
                tabs={tabs}
                defaultActiveId="Web"
                onTabChange={handleTabChange}
                className="backdrop-blur-md border-1 border-primary/20"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5 justify-items-center">
              {skillsData[activeTab as keyof typeof skillsData]?.map(
                (skill: SkillData, index: number) => (
                  // <div
                  //   key={index}
                  //   className={cn(
                  //     `w-full max-w-[11rem] bg-primary/5 rounded-md p-4 md:p-5 flex flex-col items-center justify-center text-center border border-primary/20 shadow-md transition-all ease-in-out duration-500 backdrop-blur-3xl hover:scale-105`
                  //   )}
                  // >
                  //   <div className="text-4xl md:text-5xl mt-2">
                  //     {skill.icon}
                  //   </div>
                  //   <p className="mt-4 font-semibold md:text-lg">
                  //     {skill.name}
                  //   </p>
                  // </div>
                  <SkillCard key={index} name={skill.name}>{skill.icon}</SkillCard>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
