"use client";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { projects } from "@/data/projects";
import { RiExternalLinkFill, RiGithubFill, RiLink } from "react-icons/ri";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import TechStackGrid from "./TechStackGrid";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

export function ExpandableCard() {
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () =>
    setActive(null)
  );

  return (
    <div id="projects" className="scroll-mt-30 mt-12 lg:mt-20">
      <SectionHeading>Projects</SectionHeading>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* popup  */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-100">
            {/* close button  */}

            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-primary rounded-full h-7 w-7"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit flex flex-col bg-[rgb(0,29,46)] dark:bg-[rgb(227,244,255)] sm:rounded-3xl overflow-hidden overflow-y-auto"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={250}
                  height={200}
                  src={active.imageUrl}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <div className="flex items-center justify-between">
                      <motion.h2
                        layoutId={`title-${active.title}-${id}`}
                        className="text-2xl font-semibold"
                      >
                        {active.title}
                      </motion.h2>
                      <div className="flex items-center gap-3">
                        <motion.span
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Link
                            href={active.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center hover:bg-primary rounded-full transition-all duration-300 hover:pr-2"
                          >
                            <div className="rounded-full group bg-primary/5 border border-primary/30 w-full duration-300 p-1.5 hover:bg-primary text-white dark:text-black">
                              <RiLink size={22} />
                            </div>
                            <span
                              className={`hidden group-hover:block transition-all font-semibold duration-300 text-sm text-white text-nowrap dark:text-black`}
                            >
                              Live Link
                            </span>
                          </Link>
                        </motion.span>
                        <motion.span>
                          <Link
                            href={active.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center hover:bg-primary rounded-full transition-all duration-300 hover:pr-2"
                          >
                            <div className="rounded-full group bg-primary/5 border border-primary/30 w-full duration-300 p-1 hover:bg-primary text-white dark:text-black">
                              <RiGithubFill size={26} />
                            </div>
                            <span
                              className={`hidden font-semibold group-hover:block transition-all duration-300 text-sm text-white text-nowrap dark:text-black`}
                            >
                              Github Repo
                            </span>
                          </Link>
                        </motion.span>
                      </div>
                    </div>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-base pt-2 wrap-break-word break-all hyphens-auto text-base-content/70"
                    >
                      {active.description}
                    </motion.p>
                    <h3 className="font-semibold sm:text-md lg:text-lg mb-2 mt-3">
                      Key Features
                    </h3>
                    <ul className="list-decimal list-inside mb-4 space-y-1 text-sm sm:text-base md:text-md">
                      {active.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  {active.note && (
                    <p className="text-xs text-red-500 pb-2">
                      Note: {active.note}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 items-start gap-4">
        {projects.map((card) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className={cn(
              `relative rounded-xl pt-0 shadow-lg overflow-hidden`,
              { "lg:col-span-4": card.order === 0 },
              { "lg:col-span-3": card.order === 1 || card.order === 2 }
            )}
          >
            <div className="relative h-50 lg:h-60">
              <Image
                src={card.imageUrl}
                alt={card.title}
                className="object-cover w-full h-full"
                width={200}
                height={200}
              />
            </div>
            <Card className="border border-primary/20 bg-primary/5 rounded-t-none">
              <CardHeader>
                <CardTitle className="text-white dark:text-gray-800 text-lg">
                  {card.title}
                </CardTitle>
                <CardDescription className="flex text-white dark:text-gray-800 items-center gap-2">
                  <TechStackGrid techStack={card.techStack} />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-white dark:text-gray-800 font-light text-base-content/70 max-h-[4.5em] overflow-hidden line-clamp-3 wrap-break-word break-all hyphens-auto">
                  {card.description}
                </div>
              </CardContent>
              <CardFooter className="justify-between gap-3 max-sm:flex-col max-sm:items-stretch">
                <div className="flex gap-3 w-full justify-end">
                  <Link
                    href={card.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center rounded-full transition-all duration-300"
                  >
                    <div className="flex px-2 items-center gap-1 rounded-full group bg-primary/5 border border-primary/30 w-full duration-300 p-1.5 hover:bg-primary text-white dark:text-black">
                      <RiLink size={20} />
                      <span
                        className={` font-semibold text-sm text-white text-nowrap dark:text-black`}
                      >
                        Live Link
                      </span>
                    </div>
                  </Link>
                  <Link
                    href={card.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center rounded-full transition-all duration-300"
                  >
                    <div className=" flex items-center px-1 pr-2 gap-1 rounded-full group bg-primary/5 border border-primary/30 w-full duration-300 p-1 hover:bg-primary text-white dark:text-black">
                      <RiGithubFill size={22} />
                      <span
                        className={`font-semibold text-sm text-white text-nowrap dark:text-black`}
                      >
                        Github Repo
                      </span>
                    </div>
                  </Link>

                  <button
                    onClick={() => setActive(card)}
                    className="group cursor-pointer flex items-center rounded-full transition-all duration-300"
                  >
                    <div className="rounded-full flex items-center gap-1 px-2 group bg-primary/5 border border-primary/30 w-full duration-300 p-1.5 hover:bg-primary text-white dark:text-black">
                      <RiExternalLinkFill size={18} />
                      <span
                        className={`font-semibold transition-all duration-300 text-sm text-white text-nowrap dark:text-black`}
                      >
                        Details
                      </span>
                    </div>
                  </button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
