'use client';
import Link from 'next/link';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import OutlineButton from '@/components/button/OutlineButton';
import PrimaryButton from './button/PrimaryButton';
import { motion } from 'motion/react';
import TechStackGrid from './TechStackGrid';
import { IconType } from 'react-icons';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from './ui/card';
import { RiExternalLinkFill, RiGithubFill, RiLink } from 'react-icons/ri';
import { Project } from '@/data/projects';

export type TechItem = {
   icon: IconType;
   name: string;
   color: string;
};

interface ProjectProps {
   id: string;
   imageUrl: string | StaticImageData;
   title: string;
   description: string;
   techStack: TechItem[];
   liveLink?: string;
   repoLink?: string;
   order?: 0 | 1 | 2 | 3;
   recentTag?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
   id,
   imageUrl,
   title,
   description,
   techStack,
   liveLink,
   repoLink,
   order = 0,
   recentTag,
}) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: 'easeOut' }}
         viewport={{ once: true }}
         key={title}
         id={`${id}`}
         className={cn(
            `relative rounded-xl pt-0 shadow-lg overflow-hidden`,
            { 'lg:col-span-4': order === 0 || order === 3 },
            { 'lg:col-span-3': order === 1 || order === 2 }
         )}
      >
         <div className="relative h-50 lg:h-60 z-0">
            <Image
               src={imageUrl}
               alt={title}
               className="object-cover w-full h-full relative z-0"
               width={1920}
               height={1080}
            />
         </div>
         <Card className="border border-primary/20 bg-primary/5 rounded-t-none relative z-0">
            <CardHeader>
               <CardTitle className="text-white dark:text-gray-800 text-lg flex items-center justify-between">
                  <span>{title} </span>
                  {recentTag && (
                     <span className="border border-dashed rounded-full px-2 py-0.5 text-sm bg-primary/5 border-primary/20 text-primary">
                        {recentTag}
                     </span>
                  )}
               </CardTitle>
               <CardDescription className="flex text-white dark:text-gray-800 items-center gap-2">
                  <TechStackGrid techStack={techStack} />
               </CardDescription>
            </CardHeader>
            <CardContent>
               <div className="text-white dark:text-gray-800 font-light text-base-content/70 h-[4.5em] overflow-hidden line-clamp-3 wrap-break-word break-all hyphens-auto">
                  {description}
               </div>
            </CardContent>
            <CardFooter className="justify-between gap-3 max-sm:flex-col max-sm:items-stretch">
               <div className="flex gap-3 w-full justify-end">
                  <Link
                     href={liveLink || '#'}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group flex items-center rounded-full transition-all duration-300"
                  >
                     <div className="flex px-2 items-center gap-1 rounded-full group bg-primary/5 border border-primary/30 w-full duration-300 p-1.5 hover:bg-primary text-white dark:text-black">
                        <RiLink size={20} />
                        <span
                           className={` font-semibold text-sm text-white text-nowrap dark:text-black`}
                        >
                           Live
                        </span>
                     </div>
                  </Link>
                  <Link
                     href={repoLink || '#'}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group flex items-center rounded-full transition-all duration-300"
                  >
                     <div className=" flex items-center px-1 pr-2 gap-1 rounded-full group bg-primary/5 border border-primary/30 w-full duration-300 p-1 hover:bg-primary text-white dark:text-black">
                        <RiGithubFill size={22} />
                        <span
                           className={`font-semibold text-sm text-white text-nowrap dark:text-black`}
                        >
                           Github Repo
                        </span>
                     </div>
                  </Link>

                  <Link
                     href={`/projects/${id}`}
                     className="group cursor-pointer flex items-center rounded-full transition-all duration-300"
                  >
                     <div className="rounded-full flex items-center gap-1 px-2 group bg-primary/5 border border-primary/30 w-full duration-300 p-1.5 hover:bg-primary text-white dark:text-black">
                        <RiExternalLinkFill size={18} />
                        <span
                           className={`font-semibold transition-all duration-300 text-sm text-white text-nowrap dark:text-black`}
                        >
                           Details
                        </span>
                     </div>
                  </Link>
               </div>
            </CardFooter>
         </Card>
      </motion.div>
   );
};

export default ProjectCard;
