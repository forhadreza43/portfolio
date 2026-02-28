import ExperienceTimeline from './ExperienceTimeline';
import SectionHeading from './SectionHeading';

const Experience = () => {
   return (
      <section id="experience" className="container">
         <SectionHeading className="py-4 md:pb-6 text-center">
            Work Experience
         </SectionHeading>
         <ExperienceTimeline />
      </section>
   );
};

export default Experience;
