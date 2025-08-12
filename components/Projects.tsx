import React from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import go1 from "@/assets/projectsInfo/godesh/1.png";
import rec1 from "@/assets/projectsInfo/recipe/1.png";
import study1 from "@/assets/projectsInfo/study/1.png";
const Projects = () => {
  return (
    <div id="projects" className="scroll-mt-30 mt-12 lg:mt-20">
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-col gap-6">
        <ProjectCard
          imageUrl={go1}
          title="GoDesh"
          description="This Travel Management System is a role-based platform designed to optimize user
           experience for Tourists, Guides, and Admins. It enables seamless browsing, booking, and secure
            payment of travel packages while empowering guides to manage bookings and stories. Admins maintain
             control through user management, content approval, and analytics, ensuring operational excellence
              and user satisfaction."
          features={[
            "Book travel packages with secure Stripe payment",
            "Tourists can apply to become guides",
            "Guides manage bookings, accept or reject tours",
            "Admins add and manage tour packages",
            "Comprehensive analytics dashboard for platform insights",
          ]}
          techStack={[
            "React.js",
            "react-router",
            "Tailwind CSS",
            "Tanstack Query",
            "EXpress",
            "MongoDB",
            "Firebase",
          ]}
          liveLink="https://godesh-1ab55.web.app"
          repoLink="https://github.com/forhadreza43/godesh-client"
        />
        <ProjectCard
          imageBg="bg-white"
          order={1}
          imageUrl={rec1}
          title="Recipe Book"
          description="A dynamic Interactive Recipe Management Platform enabling users to explore, create, update, and manage their own recipes."
          features={[
            "View all available recipes",
            "See detailed recipe information",
            "Add new recipes",
            "Update existing recipes",
            "Delete recipes",
          ]}
          techStack={[
            "React.js",
            "EXpress",
            "MongoDB",
            "react-router",
            "Tailwind CSS",
            "Firebase",
          ]}
          liveLink="https://recipe-book-client-five.vercel.app/"
          repoLink="https://github.com/forhadreza43/recipe-book-client"
        />

        <ProjectCard
          imageBg="bg-pink-50"
          imageUrl={study1}
          title="Study Together"
          description="A Online Assignment Management Platform
A collaborative platform enabling students and evaluators to manage assignments efficiently."
          features={[
            "Create assignments",
            "Submit assignments ",
            "Evaluate submissions and assign marks",
            "Track assignment status in real-time (Pending/Completed)",
            "Evaluate assignments",
            "See Self attempted assignments",
          ]}
          techStack={[
            "React.js",
            "EXpress",
            "JWT",
            "MongoDB",
            "react-router",
            "Firebase",
          ]}
          liveLink="https://group-study-app-89073.web.app/"
          repoLink="https://github.com/forhadreza43/group-study-client"
        />
      </div>
    </div>
  );
};

export default Projects;
