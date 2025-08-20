"use client";

import React, { JSX, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";
import { ThreeDCard } from "./3d-card";
import { SheetTrigger, Sheet, SheetContent, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import ResumeDownload from "./ResumeDownload";
import Logo from "./Logo";
type NavItem = {
  name: string;
  href: string;
  icon?: JSX.Element;
};

export const FloatingNav = ({
  navItems,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const [isVisible, setIsVisible] = useState(true);
  const { theme } = useTheme();

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href);
    }
  };

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking with IntersectionObserver
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActiveSection(id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  const isScrolledBgClass =
    theme === "dark"
      ? "bg-background/30 backdrop-blur-md border border-primary/20 shadow-[0_8px_32px_rgba(255,255,255,0.03)]"
      : "bg-background/40 backdrop-blur-md border border-primary/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]";

  const notScrolledBgClass =
    theme === "dark"
      ? "bg-background/20 backdrop-blur-sm border border-primary/20"
      : "bg-background/20 backdrop-blur-sm border border-primary/20";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          // variants={navbarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={cn(
            "fixed top-4 z-999 left-1/2 -translate-x-1/2 w-11/12 max-w-7xl z-50 transition-all duration-300 rounded-full py-3 pl-6 pr-4",
            isScrolled ? isScrolledBgClass : notScrolledBgClass
          )}
        >
          <ThreeDCard className="w-full">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <div className="w-[160px] flex-shrink-0">
                <Link
                  href="/"
                  className="font-display text-xl font-bold transition-colors hover:text-primary"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Forhad Reza */}
                    <Logo />
                  </motion.span>
                </Link>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex justify-center flex-1">
                <nav className="flex items-center gap-1">
                  {navItems.map((navItem, idx) => (
                    <motion.div
                      key={idx}
                      // variants={itemVariants}
                    >
                      <Link
                        href={navItem.href}
                        className={cn(
                          "px-4 py-2 rounded-md text-sm font-medium transition-all hover:text-primary hover:underline decoration-2 underline-offset-5 variable-font",
                          activeSection === navItem.href
                            ? "text-primary underline decoration-2 underline-offset-5 font-semibold"
                            : ""
                        )}
                        onClick={(event) => {
                          setActiveSection(navItem.href);
                          handleNavClick(event, navItem.href);
                        }}
                      >
                        {navItem.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Theme + Resume (desktop only) */}
              <div className="flex items-center justify-end gap-3 w-[200px]">
                <ThemeToggle />
                <ResumeDownload />
              </div>

              {/* Mobile Menu */}
              <Sheet>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="md:hidden flex-shrink-0"
                >
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-muted/50"
                    >
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                </motion.div>
                <SheetContent
                  side="right"
                  className="p-0 w-64"
                  aria-describedby={undefined}
                >
                  <VisuallyHidden>
                    <p>Navigation menu for small devices</p>
                    <SheetTitle>MObile Navigation Menu</SheetTitle>
                  </VisuallyHidden>
                  <div className="flex flex-col h-full">
                    <div className="p-6 flex justify-between items-center">
                      <Link href="/">
                        <Logo />
                      </Link>
                      <div className="mr-10">
                        <ThemeToggle />
                      </div>
                    </div>
                    <div className="flex-1 px-6 py-8 space-y-4">
                      {navItems.map((navItem, idx) => (
                        <Link
                          key={idx}
                          href={navItem.href}
                          className="block py-2 text-sm hover:text-primary"
                          onClick={() => setActiveSection(navItem.href)}
                        >
                          {navItem.name}
                        </Link>
                      ))}
                      <ResumeDownload />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </ThreeDCard>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
