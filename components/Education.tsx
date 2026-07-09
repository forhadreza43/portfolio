import EducationTimeline from './EducationTimeline';
import SectionHeading from './SectionHeading';

export const Education = () => {
   return (
      <section className="container" id="education">
         <SectionHeading className="py-4 md:pb-6 text-center">
            Education
         </SectionHeading>
         <EducationTimeline />
      </section>
   );
};
