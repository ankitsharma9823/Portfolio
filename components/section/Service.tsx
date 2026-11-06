"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  Zap,
  Layers,
  Sparkles,
  Layout,
  Link2,
  Atom,
  Flame,
  FileCode2,
  Terminal,
  GitBranch,
} from "lucide-react";

// Inline Brand Icons
const FigmaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 38 57" fill="currentColor" className={className}>
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Balanced services tailored to your true skills
const services = [
  { title: "Frontend Development & Next.js", icon: Code2 },
  { title: "Responsive Websites & Web Apps", icon: Globe },
  { title: "UI/UX & Component Libraries", icon: Layout },
  { title: "API Integration & Data Fetching", icon: Link2 },
  { title: "Basic Database Modeling & CRUD", icon: Database },
  { title: "Performance & SEO Optimization", icon: Zap },
  { title: "Interactive UI & Micro-Animations", icon: Sparkles },
  { title: "Design Systems & Figma Conversion", icon: Layers },
];

// Tech Stack Pills matching your current experience
const techStack = [
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Flame },
  { name: "TypeScript", icon: FileCode2 },
  { name: "Tailwind CSS", icon: Sparkles },
  { name: "Node.js (Basic)", icon: Terminal },
  { name: "PostgreSQL / MongoDB", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: GithubIcon },
  { name: "Figma", icon: FigmaIcon },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const leftVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 bg-background text-foreground overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-brand-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              <span className="text-brand-500 font-medium">
                Services that
              </span>{" "}
              bring your ideas to life.
            </h2>

            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-medium text-foreground tracking-wide">
                My tech stack
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/70 bg-card/60 backdrop-blur-sm text-xs font-medium text-foreground shadow-sm hover:border-brand-500/40 hover:bg-card transition-all duration-200 cursor-default"
                    >
                      <Icon className="w-3.5 h-3.5 text-brand-500" />
                      {tech.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-6 space-y-2.5 lg:pl-4"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex items-center gap-4 p-2 rounded-2xl transition-all duration-200 hover:bg-muted/30"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-950 dark:bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-white shadow-md group-hover:scale-105 group-hover:border-brand-500/50 transition-all duration-200">
                    <Icon className="w-4 h-4 text-zinc-200 group-hover:text-brand-400 transition-colors" />
                  </div>

                  <span className="text-base font-semibold tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">
                    {service.title}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;