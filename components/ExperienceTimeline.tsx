import { CircleCheck, CodeXml } from 'lucide-react';
import Link from 'next/link';
import { projects } from '../data/projects';

interface TimelineEvent {
   joiningDate: string;
   leavingDate: string;
   role: string;
   type?: string;
   company: string;
   location: string;
   responsibilities?: string[];
   projects?: { name: string; link: string }[];
}

const events: TimelineEvent[] = [
   {
      joiningDate: 'Nov 2025',
      leavingDate: 'Present',
      role: 'Full Stack Developer | Intern',
      type: 'Full-time',
      company: 'NextTech Limited',
      location: '744/1 (3rd Floor), Metro Pillar-296, Shewrapara,  Dhaka 1216',
      responsibilities: [
         'Collaborate with cross-functional teams to design, develop, and maintain web applications using modern technologies.',
         'Implement responsive user interfaces and ensure seamless user experiences across devices.',
         'Participate in code reviews, debugging, and performance optimization to deliver high-quality software solutions.',
      ],
      // projects: [
      //    { name: 'NextTech Website', link: '#' },
      //    {
      //       name: 'Admin Dashboard',
      //       link: '#',
      //    },
      // ],
   },
];

const TimelineCard = ({ event }: { event: TimelineEvent }) => {
   const content = (
      <div className={`transition-all duration-500 opacity-100 translate-y-0`}>
         <h3 className="text-base md:text-lg font-bold font-mono text-foreground leading-tight">
            <Link href={'https://nexttechltd.com'} target="_blank">
               {event.company}
            </Link>
         </h3>
         <p className="text-primary text-sm mt-2 font-semibold font-mono">
            {event.role} | {event.type && `${event.type}`}
         </p>
         <p className="text-sm text-foreground/80 mb-1">
            {event.joiningDate} - {event.leavingDate}
         </p>

         {/* <p className="text-sm text-foreground/80 mt-1">{event.location}</p> */}

         {event.responsibilities && (
            <div className="mt-4 space-y-1 text-sm text-foreground/80">
               {event.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex gap-2 items-start">
                     <span className="shrink-0 text-gray-400 mt-1 md:mt-0.75">
                        <CircleCheck className="w-4 h-4" />
                     </span>
                     <p className="text-gray-400 dark:text-gray-600 leading-relaxed">
                        {resp}
                     </p>
                  </div>
               ))}
            </div>
         )}
         {event.projects && (
            <div className=" mt-5 flex gap-2 items-center flex-wrap space-y-1 text-sm text-foreground/80">
               {event.projects.map((project, idx) => (
                  <Link
                     href={project.link}
                     target="_blank"
                     className="text-primary hover:bg-primary/20 text-xs bg-primary/5 border border-primary/80 px-2 transition-all duration-300 py-0.5 rounded-full"
                     key={idx}
                  >
                     {project.name}
                  </Link>
               ))}
            </div>
         )}
      </div>
   );

   const iconDot = (
      <div
         className={`w-9 h-9 md:w-10 dark:bg-[#cee6f5] border-2 border-primary  bg-[#003a59] md:h-10 rounded-full flex items-center justify-center text-base shrink-0 transition-all duration-500 
            `}
      >
         <CodeXml size={20} />
      </div>
   );

   return (
      <div className="relative flex items-start w-full">
         <div className="flex flex-col items-center relative z-10 shrink-0 mr-4">
            {iconDot}
         </div>
         <div className="flex-1 ">{content}</div>
      </div>
   );
};

const ExperienceTimeline = () => {
   return (
      <div className="mx-auto relative">
         {/* Static vertical line */}
         <div className="absolute left-4.5 md:left-4.75 top-0 bottom-0 w-0.5 bg-primary" />

         <div className="space-y-14">
            {events.map((event, index) => (
               <TimelineCard key={index} event={event} />
            ))}
         </div>
      </div>
   );
};

export default ExperienceTimeline;
