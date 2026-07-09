import AboutMe from '@/components/AboutMe';
import ContactSection from '@/components/ContactSection';
import { Education } from '@/components/Education';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import AwardsAndCertifications from '@/components/AwardsAndCertifications';

export default function Home() {
   return (
      <div className="">
         <div>
            <Hero />
            <Projects />
            <Skills />
            <Experience />
            <AboutMe />
            <Education />
            <AwardsAndCertifications />
            <ContactSection />
         </div>
      </div>
   );
}
