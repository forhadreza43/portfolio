import AboutMe from '@/components/AboutMe';
import ContactSection from '@/components/ContactSection';
import { Education } from '@/components/Education';
import { ExpandableCard } from '@/components/ExpandableCard';
import Hero from '@/components/Hero';
// import Projects from "@/components/Projects";
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';

export default function Home() {
   return (
      <div className="w-11/12 max-w-7xl mx-auto">
         <div>
            <Hero />
            <AboutMe />
            <Education/>
            {/* <BentoCardComponent/> */}
            <ExpandableCard />
            <Skills />
            {/* <Projects /> */}
            <ContactSection />
         </div>
      </div>
   );
}
