'use client';
import person1 from '@/assets/2.png';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import { motion } from 'motion/react';
import SectionTitle from './SectionTitle';
import Link from 'next/link';
import { Button } from './ui/button';

const AboutMe = () => {
   return (
      <section
         id="about"
         className="container relative flex flex-col md:flex-row items-center gap-10 lg:gap-20"
      >
         {/* <SectionHeading>About me</SectionHeading> */}

         {/* rounded-lg shadow-md bg-primary/5 border border-primary/20 */}
         <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
         >
            <SectionHeading>About</SectionHeading>
            <SectionTitle className="pt-3 pb-4">
               Developer who loves to build stuff
            </SectionTitle>
            <p className="text-justify text-sm sm:text-base md:text-md text-base-content/70 wrap-break-word hyphens-auto">
               Hello! I&apos;m Forhad Reza, a passionate web developer who
               thrives on creating innovative solutions that tackle complex user
               challenges.
            </p>
            <p className="py-4 text-justify text-sm sm:text-base md:text-md text-base-content/70 wrap-break-word hyphens-auto">
               My attention to detail allows me to enhance every interaction,
               ensuring it not only boosts productivity but also elevates user
               satisfaction.
            </p>

            <div className="flex gap-3 md:gap-4 mt-4 items-center">
               <Link href="#contact">
                  <Button
                     variant="outline"
                     className="rounded-full border-primary/50 hover:bg-primary hover:border-primary dark:hover:bg-primary/80 dark:hover:border-primary/80 dark:hover:text-white"
                  >
                     Contact me
                  </Button>
               </Link>
               <Link
                  href="#projects"
                  className="hover:text-primary transition-colors duration-300"
               >
                  View projects
               </Link>
            </div>
         </motion.div>
         <motion.div
            className="flex flex-1 relative z-0 justify-center lg:justify-end w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
         >
            <Image
               src={person1}
               alt="Profile image"
               className="rounded-lg w-112.5 h-auto relative z-0"
               width={3072}
               height={3072}
               priority
               placeholder="blur"
            />
         </motion.div>
      </section>
   );
};

export default AboutMe;
