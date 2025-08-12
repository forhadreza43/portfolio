import React from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import go1 from "@/assets/projectsInfo/godesh/1.png";

const Projects = () => {
  return (
    <div id="projects" className="mt-12">
      <SectionHeading>Projects</SectionHeading>
      <div>
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
          techStack={["React.js", "react-router", "Tailwind CSS", "Firebase"]}
          liveLink="https://godesh-1ab55.web.app"
          repoLink="https://github.com/forhadreza43/godesh-client"
        />
      </div>
    </div>
  );
};

export default Projects;
