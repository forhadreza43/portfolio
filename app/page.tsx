import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-11/12 max-w-7xl mx-auto">
      <div>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactSection />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
