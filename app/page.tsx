import AboutMe from '@/components/AboutMe';
import ContactSection from '@/components/ContactSection';
import { Education } from '@/components/Education';
import { ExpandableCard } from '@/components/ExpandableCard';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
// import Projects from "@/components/Projects";
import Skills from '@/components/Skills';
import Timeline from '@/components/EducationTimeline';
import AwardsAndCertifications from '@/components/AwardsAndCertifications';

export default function Home() {
   return (
      <div className="w-11/12 max-w-7xl mx-auto">
         <div>
            <Hero />
            <ExpandableCard />
            <Skills />
            <Experience />
            <AboutMe />
            <Education />
            {/* <BentoCardComponent/> */}
            {/* <Projects /> */}
            <AwardsAndCertifications/>
            <ContactSection />
         </div>
      </div>
   );
}
