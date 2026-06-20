import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const items = projects.map((project) => (
   <ProjectCard
      key={project.id}
      id={project.id}
      imageUrl={project.imageUrl[0]}
      title={project.title}
      description={project.description}
      techStack={project.techStack}
      liveLink={project.liveLink}
      repoLink={project.repoLink}
      order={project.order as 0 | 1 | 2 | 3}
      recentTag={project.recentTag}
   />
));

export default function ProjectBentoGrid() {
   return (
      <div className="mx-auto space-y-4">
         {Array.from({ length: Math.ceil(items.length / 2) }).map(
            (_, rowIndex) => {
               const firstItem = items[rowIndex * 2];
               const secondItem = items[rowIndex * 2 + 1];

               const isEvenRow = rowIndex % 2 === 0;

               return (
                  <div
                     key={rowIndex}
                     className={`
                  grid grid-cols-1 gap-4
                  md:grid-cols-2
                  lg:grid-cols-7
                `}
                  >
                     {/* First Card */}
                     {firstItem && (
                        <div
                           className={`
                      
                      ${isEvenRow ? 'lg:col-span-4' : 'lg:col-span-3'}
                    `}
                        >
                           {firstItem}
                        </div>
                     )}

                     {/* Second Card */}
                     {secondItem && (
                        <div
                           className={`
                      
                      ${isEvenRow ? 'lg:col-span-3' : 'lg:col-span-4'}
                    `}
                        >
                           {secondItem}
                        </div>
                     )}
                  </div>
               );
            }
         )}
      </div>
   );
}
