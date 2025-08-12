import React from "react";
import SectionHeading from "./SectionHeading";

const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-30 mx-auto mt-12 lg:mt-20">
      <SectionHeading>About me</SectionHeading>

      <div className="p-6 rounded-lg shadow-md bg-primary/5 border border-primary/20">
        <p className="text-justify text-sm sm:text-base md:text-md text-base-content/70">
          I&apos;m a passionate MERN Stack developer with a strong foundation in
          building dynamic, scalable, and user-focused web applications.
          Proficient in MongoDB, Express.js, React, and Node.js, I thrive on
          transforming ideas into seamless digital experiences. With a keen eye
          for detail and a commitment to writing clean, efficient code, I
          specialize in crafting responsive front-end interfaces and robust
          back-end systems. My goal is to create innovative solutions that solve
          real-world problems while staying updated with the latest industry
          trends. When I&apos;m not coding, you can find me exploring new
          technologies, contributing to open-source projects, or sharing
          knowledge with the developer community.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
