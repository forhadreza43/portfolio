'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
   return (
      <div id="projects" className="scroll-mt-30 mt-12 lg:mt-20">
         <SectionHeading>Projects</SectionHeading>
         <div className="flex flex-col gap-6">
            {
               /* Map through the projects array to render ProjectCard components */
               projects.map((project, index) => (
                  <ProjectCard
                     key={index}
                     imageBg={project.imageBg}
                     order={project.order as 0 | 1 | 2 | 3}
                     imageUrl={project.imageUrl}
                     title={project.title}
                     description={project.description}
                     features={project.features}
                     techStack={project.techStack}
                     liveLink={project.liveLink}
                     repoLink={project.repoLink}
                  />
               ))
            }
         </div>
      </div>
   );
};

export default Projects;
