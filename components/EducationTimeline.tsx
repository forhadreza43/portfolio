'use client';
import { useEffect, useRef, useState } from 'react';

interface TimelineProject {
   icon: string;
   name: string;
   description: string;
}

interface TimelineEvent {
   passingYear: string;
   nameOfDegree: string;
   institution: string;
   description: string;
   projects?: TimelineProject[];
   side: 'left' | 'right';
}

const events: TimelineEvent[] = [
   {
      passingYear: '2026',
      nameOfDegree: 'Bachelor in Computer Science and Engineering (B.S.c)',
      institution: 'Green University of Bangladesh (GUB)',
      description:
         'Graduated with a strong foundation in software development, algorithms, and system design. My academic journey equipped me with the skills and knowledge to excel in the tech industry.',

      side: 'right',
   },
   {
      passingYear: '2019',
      nameOfDegree: 'Diploma in Engineering in Shipbuilding Technology',
      institution: 'Bangladesh Institute of Marine Technology (BIMT)',
      description:
         'Completed a comprehensive diploma program focused on shipbuilding technology, gaining practical skills in marine engineering, design, and construction. This experience provided me with a unique perspective on complex systems and project management.',

      side: 'left',
   },
   {
      passingYear: '2018',
      nameOfDegree: 'Higher Secondary School Certificate (H.S.C) : Science',
      institution: 'B.M Union School and College',
      description:
         'Completed my higher secondary education with a focus on science, laying the groundwork for my future studies in computer science and engineering. This period was crucial in shaping my analytical thinking and problem-solving skills.',
      side: 'right',
   },
   {
      passingYear: '2015',
      nameOfDegree: 'Secondary School Certificate (S.S.C) : Science',
      institution: 'Nagdemra High School',
      description:
         'Completed my secondary education, marking the beginning of my academic journey. This milestone provided me with a strong foundation in various subjects and ignited my passion for learning and growth.',
      side: 'left',
   },
];

const TimelineCard = ({
   event,
   isActive,
}: {
   event: TimelineEvent;
   isActive: boolean;
}) => {
   const isLeft = event.side === 'left';

   const dateBadge = (
      <div
         className={`inline-flex w-fit items-center text-xs font-medium px-3 py-1 rounded-full border whitespace-nowrap self-start transition-all duration-500 ${
            isActive
               ? 'bg-primary text-white font-semibold border border-primary/20'
               : 'shadow-md bg-primary/5 border border-primary/20'
         }`}
      >
         {event.passingYear}
      </div>
   );

   const card = (
      <div
         // rounded-xl shadow-md bg-primary/5 border border-primary/20 p-4 md:p-6
         className={` transition-all duration-500 text-left ${
            isActive ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'
         } ${isLeft ? 'md:text-right' : 'md:text-left'}`}
      >
         <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-800 mb-2">
            {event.nameOfDegree}
         </h3>

         {event.institution && (
            <p className="text-sm md:text-base text-gray-400 dark:text-gray-600 leading-relaxed">
               {event.institution}
            </p>
         )}
      </div>
   );

   return (
      <>
         {/* Desktop: alternating layout */}
         <div className="relative hidden md:flex items-start w-full mb-0">
            <div className={`w-5/11 flex justify-end -mt-3`}>
               {isLeft ? card : dateBadge}
            </div>
            <div className="w-1/11 flex flex-col items-center justify-center relative z-10">
               <div
                  className={`w-3 h-3 absolute rounded-full transition-all duration-500 ${
                     isActive ? 'bg-primary' : 'bg-primary/40'
                  }`}
               />
               <div
                  className={`w-6 h-6 absolute rounded-full transition-all duration-500 bg-primary/20`}
               />
            </div>
            <div className={`w-5/11 flex justify-start -mt-3`}>
               {!isLeft ? card : dateBadge}
            </div>
         </div>

         {/* Mobile: single column, line on left */}
         <div className="relative flex md:hidden items-start w-full mb-0">
            <div className="w-8 flex flex-col items-center relative justify-center z-10 shrink-0">
               <div
                  className={`w-3 h-3 absolute rounded-full transition-all duration-500 ${
                     isActive ? 'bg-primary' : 'bg-primary/40'
                  }`}
               />
               <div
                  className={`w-6 h-6 absolute rounded-full transition-all duration-500 bg-primary/20`}
               />
            </div>
            <div className="flex-1 space-y-2 -mt-3">
               {dateBadge}
               {card}
            </div>
         </div>
      </>
   );
};

const EducationTimeline = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   const [scrollProgress, setScrollProgress] = useState(0);
   const [activeIndices, setActiveIndices] = useState<Set<number>>(
      new Set([0])
   );
   const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

   useEffect(() => {
      const handleScroll = () => {
         const container = containerRef.current;
         if (!container) return;

         const rect = container.getBoundingClientRect();
         const containerTop = rect.top;
         const containerHeight = rect.height;
         const viewportCenter = window.innerHeight * 0.5;

         // Calculate how far the viewport center has traveled through the container
         const traveled = viewportCenter - containerTop;
         const progress = Math.max(0, Math.min(1, traveled / containerHeight));
         setScrollProgress(progress);

         // Determine which items are active (viewport center has passed them)
         const newActive = new Set<number>();
         itemRefs.current.forEach((ref, index) => {
            if (!ref) return;
            const itemRect = ref.getBoundingClientRect();
            const itemCenter = itemRect.top + itemRect.height * 0.3;
            if (itemCenter < viewportCenter + 100) {
               newActive.add(index);
            }
         });
         if (newActive.size === 0) newActive.add(0);
         setActiveIndices(newActive);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <section className="pt-5">
         <div className="w-full mx-auto relative" ref={containerRef}>
            {/* Background line (dim) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-1/2" />

            {/* Active line (bright, grows with scroll) */}
            <div
               className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-primary md:-translate-x-1/2 transition-none"
               style={{ height: `${scrollProgress * 100}%` }}
            />

            <div className="space-y-16 md:space-y-24">
               {events.map((event, index) => (
                  <div
                     key={index}
                     ref={(el) => {
                        itemRefs.current[index] = el;
                     }}
                  >
                     <TimelineCard
                        event={event}
                        isActive={activeIndices.has(index)}
                     />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default EducationTimeline;
