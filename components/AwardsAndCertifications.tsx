import { Award, Library } from 'lucide-react';
import SectionHeading from './SectionHeading';

const AwardsAndCertifications = () => {
   return (
      <section
         className="container flex flex-col gap-10 md:flex-row-reverse md:justify-between"
         id="awards-and-certifications"
      >
         <div className="md:flex-1">
            <SectionHeading className="py-4 md:pb-6 text-center md:text-left">
               Awards
            </SectionHeading>
            <div className="space-y-6">
               <div className="flex items-start gap-2">
                  <Award size={24} className="mt-0.5   text-primary" />
                  <div>
                     <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-800 mb-2">
                        Dean's Award for Outstanding Academic Performance.
                     </h3>
                     <p className="text-sm md:text-base text-gray-400 dark:text-gray-600 leading-relaxed">
                        Green University of Bangladesh
                     </p>
                  </div>
               </div>
               <div className="flex items-start gap-2">
                  <Award size={24} className="mt-0.5   text-primary" />
                  <div>
                     <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-800 mb-2">
                        BLACKBELT {'<Web Developer />'}
                     </h3>
                     <p className="text-sm md:text-base text-gray-400 dark:text-gray-600 leading-relaxed">
                        Programming Hero
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="md:flex-1">
            <SectionHeading className="py-4 md:pb-6 text-center md:text-left">
               Certificates
            </SectionHeading>
            <div className="space-y-6">
               <div className="flex items-start gap-2">
                  <Library size={24} className="mt-0.5   text-primary" />
                  <div>
                     <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-800 mb-2">
                        Complete Web Development
                     </h3>
                     <p className="text-sm md:text-base text-gray-400 dark:text-gray-600 leading-relaxed">
                        Programming Hero
                     </p>
                  </div>
               </div>
               <div className="flex items-start gap-2">
                  <Library size={24} className="mt-0.5   text-primary" />
                  <div>
                     <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-800 mb-2">
                        Reactive Accelerator
                     </h3>
                     <p className="text-sm md:text-base text-gray-400 dark:text-gray-600 leading-relaxed">
                        Learn with Sumit
                     </p>
                  </div>
               </div>
               <div className="flex items-start gap-2">
                  <Library size={24} className="mt-0.5   text-primary" />
                  <div>
                     <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-800 mb-2">
                        CS Fundamentals
                     </h3>
                     <p className="text-sm md:text-base text-gray-400 dark:text-gray-600 leading-relaxed">
                        Phitron
                     </p>
                  </div>
               </div>
               <div className="flex items-start gap-2">
                  <Library size={24} className="mt-0.5   text-primary" />
                  <div>
                     <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-800 mb-2">
                        SQL Advance
                     </h3>
                     <p className="text-sm md:text-base text-gray-400 dark:text-gray-600 leading-relaxed">
                        Hacker Rank
                     </p>
                  </div>
               </div>
               <div className="flex items-start gap-2">
                  <Library size={24} className="mt-0.5   text-primary" />
                  <div>
                     <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-800 mb-2">
                        Next.js App Router
                     </h3>
                     <p className="text-sm md:text-base text-gray-400 dark:text-gray-600 leading-relaxed">
                        Vercel
                     </p>
                  </div>
               </div>
            </div>
         </div>
         {/* <EducationTimeline /> */}
      </section>
   );
};

export default AwardsAndCertifications;
