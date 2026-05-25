'use client';

// import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';
// import SectionTitle from './SectionTitle';
import ProjectBentoGrid from './ProjectBentoGrid';
import SectionHeading from './SectionHeading';
import SectionTitle from './SectionTitle';
const Projects = () => {
   return (
      <section id="projects" className="scroll-mt-30 mt-12 lg:mt-20">
         <SectionHeading className="text-center py-3">Projects</SectionHeading>
         <SectionTitle className="tracking-tight text-center pb-4">
            Discover what I've created
         </SectionTitle>
         <p className="text-center text-base-content/70 max-w-xl mx-auto mb-12">
            Each piece reflects my passion for innovation and commitment to
            delivering high-quality results. Feel free to explore and get
            inspired!
         </p>
         <ProjectBentoGrid />
      </section>
   );
};

export default Projects;
