"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Briefcase, Cpu, Mail, Compass } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Experience", href: "#experience", icon: Compass },
  { name: "Services", href: "#services", icon: Cpu },
  { name: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#about");
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Scroll hide / show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (delta > 8 && currentScrollY > 60) {
        setHidden(true);
      } else if (delta < -8 || currentScrollY < 20) {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer to dynamically update active section based on scroll position
  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      // Trigger when the section is roughly centered in the viewport
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    });

    NAV_ITEMS.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-0 right-0 h-24 lg:h-32 z-50 flex items-end justify-center pointer-events-none">
      <motion.aside
        initial={false}
        animate={
          hidden
            ? { y: 90, opacity: 0, scale: 0.85 }
            : { y: 0, opacity: 1, scale: 1 }
        }
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl bg-background/70 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 dark:shadow-neutral-950/40 pointer-events-auto"
      >
        {/* Home / Logo */}
        <Link
          href="/"
          onClick={() => setActiveSection("")}
          className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-foreground text-background font-bold text-xs tracking-tight shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
        >
          AS
          <span className="absolute -top-12 px-2.5 py-1 rounded-lg bg-popover text-popover-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md pointer-events-none whitespace-nowrap border border-border hidden lg:block">
            Home
          </span>
        </Link>

        <div className="w-[1px] h-7 sm:h-8 bg-border/60 mx-0.5 sm:mx-1 self-center" />

        <nav className="flex items-center gap-2 sm:gap-3">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                className={`group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95
                  ${
                    isActive
                      ? "bg-foreground/90 text-background font-semibold shadow-md"
                      : "text-muted-foreground bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 hover:bg-white/25 dark:hover:bg-white/15 hover:text-foreground hover:backdrop-blur-md"
                  }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" strokeWidth={2} />

                {/* Mobile active indicator */}
                {isActive && (
                  <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-background dark:bg-foreground lg:hidden" />
                )}

                <span className="absolute -top-12 px-2.5 py-1 rounded-lg bg-popover text-popover-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md pointer-events-none whitespace-nowrap border border-border hidden lg:block">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="w-[1px] h-7 sm:h-8 bg-border/60 mx-0.5 sm:mx-1 self-center" />

        {/* Theme toggle */}
        <div className="flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
          <ThemeToggle />
        </div>
      </motion.aside>
    </div>
  );
};

export default Navbar;