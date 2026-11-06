"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  Download,
  Code2,
  FolderGit2,
  Calendar,
  Layers,
  ArrowUpRight,
  Terminal,
  Cpu,
  BookOpen,
} from "lucide-react";
import profile from "@/public/Profile.png";

const AboutMe = () => {
  // Animation Variants with explicit TypeScript typing (Fixes TS Error)
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const leftContentVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const rightImageVariants: Variants = {
    hidden: { opacity: 0, x: 40, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Snappier stats container trigger
  const statsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Reduced stagger delay so cards pop up faster
        delayChildren: 0.05,   // Removed heavy start delay
      },
    },
  };

  const statItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const stats = [
    { icon: FolderGit2, value: "12+", label: "Total Projects", sub: "Web apps & tools built" },
    { icon: Layers, value: "10+", label: "Tech Stack", sub: "Modern frameworks & tools" },
    { icon: Calendar, value: "2+", label: "Years Learning", sub: "Hands-on experience" },
  ];

  const highlights = [
    {
      icon: Terminal,
      title: "Full-Stack Development",
      description:
        "Building production-grade web applications using React, Next.js, and Node.js with a focus on UI/UX and high availability.",
    },
    {
      icon: Cpu,
      title: "Backend & Systems Focus",
      description:
        "Passionate about clean architecture, optimized database schemas, efficient REST APIs, and system performance.",
    },
    {
      icon: BookOpen,
      title: "Problem Solver & Scholar",
      description:
        "Undergraduate BIT student based in Nepal, dedicated to understanding low-level mechanics and writing clean code.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 container mx-auto px-6 bg-background text-foreground overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-tr from-brand-500/10 via-neon-500/8 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[320px] h-[320px] bg-gradient-to-bl from-neon-500/10 via-brand-500/8 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto space-y-16 relative z-10">
        
        {/* Header — Enters from Top */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center items-center text-center space-y-3 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center">
            About <span className="text-brand-600 dark:text-brand-400">Me</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed text-center mx-auto">
            Full-stack & systems developer focused on modern web platforms,
            clean architecture, and reliable systems.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-10 items-center">
          
          {/* Left Column — Enters from Left */}
          <motion.div
            variants={leftContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="md:col-span-7 space-y-6 order-2 md:order-1"
          >
            <div className="space-y-1.5">
              <p className="text-lg text-brand-500 font-semibold">Hello, I&apos;m</p>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Ankit Sharma
              </h3>
            </div>

            {/* Badge pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border border-border/60 bg-white/5 dark:bg-white/[0.03] text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-brand-500" />
                Based in Nepal
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-500">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-500" />
                </span>
                Open to Opportunities
              </span>
            </div>

            {/* Structured Bullet Points */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl border border-border/40 bg-muted/30 hover:bg-muted/60 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-brand-500/10 text-brand-500 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-base text-muted-foreground leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/Ankit_Resume.pdf"
                download="Ankit-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background hover:bg-foreground/90 font-medium px-5 py-2.5 text-sm transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-background/80 backdrop-blur-sm hover:bg-muted font-medium px-5 py-2.5 text-sm transition-colors"
              >
                <Code2 className="w-4 h-4 text-brand-500" />
                View Projects
              </Link>
            </div>
          </motion.div>

          {/* Right Column — Enters from Right */}
          <motion.div
            variants={rightImageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="md:col-span-5 flex justify-center order-1 md:order-2"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-brand-500/25 via-neon-500/15 to-transparent blur-2xl pointer-events-none" />
              <div className="absolute -inset-2 rounded-full border border-brand-500/20 pointer-events-none" />

              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-brand-500/30 shadow-2xl">
                <Image
                  src={profile}
                  alt="Ankit Sharma"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row — Triggers as soon as 5% comes into view (amount: 0.05) */}
        <motion.div
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={statItemVariants}
                className="group relative flex items-center justify-between p-5 rounded-2xl bg-white/5 dark:bg-white/[0.03] backdrop-blur-md border border-white/10 dark:border-white/8 hover:border-brand-500/40 hover:bg-white/10 dark:hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {stat.sub}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-extrabold text-foreground">
                    {stat.value}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;