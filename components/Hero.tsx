"use client";
import React from "react";
import { GridPattern } from "./magicui/grid-pattern";
import { FloatingNav } from "./FloatingNav";
import { navItems } from "@/data/navItem";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import coding from "@/assets/coding.json";
import ResumeDownload from "./ResumeDownload";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const words = ["Quick Learner", "Tech Enthusiast"];

  return (
    <div id="home" className="relative overflow-hidden w-full min-h-[70vh]">
      <GridPattern
        width={150}
        height={150}
        x={-1}
        y={-1}
        squares={[
          [2, 3],
          [3, 0],
          [4, 4],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] opacity-50"
        )}
      />

      {/* Sticky Nav */}
      <FloatingNav navItems={navItems} />

      <section className="pt-28 md:pt-40 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
          {/* left side */}
          <motion.div
            className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-lg md:text-xl font-semibold -mb-3">
              Hello! I am,
            </p>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-base-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Forhad <span className="text-primary">Reza</span>
            </motion.h1>
            <motion.h2
              className="text-base sm:text-lg md:text-xl font-medium text-base-content/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              MERN Stack Developer
            </motion.h2>
            <h2 className="text-base sm:text-lg md:text-xl font-medium text-base-content/80">
              <Typewriter
                words={words}
                loop={100}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
              />
            </h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-base-content/70 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              I build modern web applications with a focus on performance,
              accessibility, and great user experience. Let&apos;s create
              something amazing together!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex gap-3 mt-4"
            >
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:scale-110 transition-transform"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1DA1F2] hover:scale-110 transition-transform"
                aria-label="Twitter"
              >
                <FaTwitter size={28} />
              </a>
            </motion.div>
            <div className="flex gap-3 md:gap-4 mt-4">
              <ResumeDownload />
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="rounded-full hover:bg-primary hover:border-primary"
                >
                  Contact me
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* right side */}
          <motion.div
            className="flex justify-center lg:justify-end w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Lottie
              animationData={coding}
              className="w-[250px] sm:w-[320px] md:w-[420px] lg:w-[500px] h-auto "
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
