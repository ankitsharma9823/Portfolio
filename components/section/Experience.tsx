"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  Layers,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const experienceData = [
  {
    id: "aarambha",
    role: "Frontend Engineer",
    company: "Aarambha",
    period: "2025 - Present",
    type: "Work Experience",
    status: "Currently Working Here",
    desc: "Building real-world web apps with a focus on fast load times, clean UI design, and seamless dynamic user experiences across devices.",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js"],
    icon: Building2,
  },
  {
    id: "bit-student",
    role: "BIT Undergraduate",
    company: "University Student",
    period: "2024 - Present",
    type: "Education",
    status: "In Progress",
    desc: "Studying core computer science topics including system design, database architecture, backend logic, and clean software development practices.",
    skills: ["System Design", "SQL Databases", "Data Structures", "Software Architecture"],
    icon: GraduationCap,
  },
];

// Clean, readable skill categories
const skillDecks = [
  {
    id: "frontend",
    category: "Frontend & UI Development",
    icon: Layers,
    badge: "What I use for Interfaces",
    skills: [
      { name: "Next.js", icon: "⚡", tag: "Fast page loads & server rendering", level: "Advanced" },
      { name: "React", icon: "⚛️", tag: "Interactive UI & reusable components", level: "Advanced" },
      { name: "TypeScript", icon: "📘", tag: "Catching bugs before code runs", level: "Advanced" },
      { name: "Tailwind CSS", icon: "🎨", tag: "Custom responsive styling", level: "Expert" },
    ],
  },
  {
    id: "backend",
    category: "Backend & Databases",
    icon: Database,
    badge: "What I use behind the scenes",
    skills: [
      { name: "Node.js", icon: "🟢", tag: "Running JavaScript on servers", level: "Intermediate" },
      { name: "Express", icon: "🚂", tag: "Building backend API routes", level: "Intermediate" },
      { name: "PostgreSQL", icon: "🐘", tag: "Structured relational databases", level: "Intermediate" },
      { name: "Prisma ORM", icon: "💎", tag: "Safely connecting code to databases", level: "Intermediate" },
      { name: "MongoDB", icon: "🍃", tag: "Flexible document-based databases", level: "Intermediate" },
    ],
  },
  {
    id: "languages",
    category: "Programming & Foundations",
    icon: Code2,
    badge: "Core Engineering Concepts",
    skills: [
      { name: "JavaScript (ES6+)", icon: "🟨", tag: "Core web language & modern syntax", level: "Advanced" },
      { name: "TypeScript", icon: "🔷", tag: "Type-safe code structure", level: "Advanced" },
      { name: "SQL", icon: "📊", tag: "Database queries & joins", level: "Intermediate" },
      { name: "Object-Oriented Design", icon: "📐", tag: "Clean, reusable code patterns", level: "Intermediate" },
    ],
  },
  {
    id: "tools",
    category: "Developer Tools & Workflow",
    icon: Wrench,
    badge: "Daily Productivity Stack",
    skills: [
      { name: "Git & GitHub", icon: "🐙", tag: "Version control & collaboration", level: "Advanced" },
      { name: "System Architecture", icon: "⚙️", tag: "Designing how software flows", level: "Intermediate" },
      { name: "Vercel & Postman", icon: "🚀", tag: "Hosting websites & testing APIs", level: "Intermediate" },
    ],
  },
];

const Experience = () => {
  const [activeDeckIndex, setActiveDeckIndex] = useState(0);

  const nextDeck = () => {
    setActiveDeckIndex((prev) => (prev + 1) % skillDecks.length);
  };

  const prevDeck = () => {
    setActiveDeckIndex((prev) => (prev - 1 + skillDecks.length) % skillDecks.length);
  };

  const currentDeck = skillDecks[activeDeckIndex];

  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 bg-background text-foreground overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/[0.07] rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-teal-500/[0.05] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-5 sm:px-6 max-w-6xl relative z-10">
        
        {/* Main Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono font-medium mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>My Journey & Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">
            Experience & Tools
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3 shadow-sm shadow-emerald-500/50" />
        </div>

        {/* ================= WORK & EDUCATION TIMELINE ================= */}
        <div className="mb-24">
          <div className="relative">
            
            {/* Tree Trunk Lines */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-emerald-500/80 via-emerald-500/40 to-border -translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.3)]" />
            <div className="md:hidden absolute left-[21px] top-4 bottom-4 w-1 bg-gradient-to-b from-emerald-500/80 via-emerald-500/40 to-border rounded-full shadow-[0_0_12px_rgba(16,185,129,0.3)]" />

            <div className="space-y-12 md:space-y-16">
              {experienceData.map((item, index) => {
                const isLeft = index % 2 === 0;
                const IconComponent = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative"
                  >
                    {/* ====== DESKTOP LAYOUT ====== */}
                    <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center">
                      
                      {/* Left Side */}
                      <div className={isLeft ? "text-right" : "opacity-0 pointer-events-none"}>
                        {isLeft && (
                          <div className="inline-block text-left w-full max-w-md">
                            <div className="group rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-md p-6 sm:p-7 shadow-xl hover:border-emerald-500/50 transition-all duration-300">
                              
                              <div className="flex items-center justify-between gap-3 mb-3">
                                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                                  <Calendar className="w-3 h-3" />
                                  {item.period}
                                </span>
                                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/80 font-bold bg-muted px-2 py-0.5 rounded">
                                  {item.status}
                                </span>
                              </div>

                              <h3 className="text-xl font-extrabold tracking-tight group-hover:text-emerald-500 transition-colors">
                                {item.role}
                              </h3>
                              <p className="text-xs font-semibold text-muted-foreground/90 mb-3">
                                {item.company}
                              </p>

                              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                                {item.desc}
                              </p>

                              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                                {item.skills.map((s, i) => (
                                  <span
                                    key={i}
                                    className="px-2.5 py-1 rounded-md bg-muted/70 border border-border/60 text-[10px] font-mono font-medium text-foreground/80"
                                  >
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Center Tree Badge */}
                      <div className="flex justify-center z-10">
                        <div className="w-12 h-12 rounded-2xl bg-card border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-4 ring-background">
                          <IconComponent className="w-5 h-5 text-emerald-500" />
                        </div>
                      </div>

                      {/* Right Side */}
                      <div className={!isLeft ? "" : "opacity-0 pointer-events-none"}>
                        {!isLeft && (
                          <div className="w-full max-w-md">
                            <div className="group rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-md p-6 sm:p-7 shadow-xl hover:border-emerald-500/50 transition-all duration-300">
                              
                              <div className="flex items-center justify-between gap-3 mb-3">
                                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                                  <Calendar className="w-3 h-3" />
                                  {item.period}
                                </span>
                                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/80 font-bold bg-muted px-2 py-0.5 rounded">
                                  {item.status}
                                </span>
                              </div>

                              <h3 className="text-xl font-extrabold tracking-tight group-hover:text-emerald-500 transition-colors">
                                {item.role}
                              </h3>
                              <p className="text-xs font-semibold text-muted-foreground/90 mb-3">
                                {item.company}
                              </p>

                              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                                {item.desc}
                              </p>

                              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                                {item.skills.map((s, i) => (
                                  <span
                                    key={i}
                                    className="px-2.5 py-1 rounded-md bg-muted/70 border border-border/60 text-[10px] font-mono font-medium text-foreground/80"
                                  >
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                    </div>

                    {/* ====== MOBILE LAYOUT ====== */}
                    <div className="md:hidden relative pl-14">
                      <div className="absolute left-0 top-1 w-11 h-11 rounded-2xl bg-card border-2 border-emerald-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                        <IconComponent className="w-5 h-5 text-emerald-500" />
                      </div>

                      <div className="rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-md p-5 shadow-lg space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            {item.period}
                          </span>
                          <span className="text-[9px] font-mono uppercase text-muted-foreground font-bold bg-muted px-1.5 py-0.5 rounded">
                            {item.status}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-base font-extrabold tracking-tight text-foreground">
                            {item.role}
                          </h3>
                          <p className="text-xs font-medium text-muted-foreground/90">
                            {item.company}
                          </p>
                        </div>

                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                          {item.skills.map((s, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded bg-muted/70 border border-border/60 text-[10px] font-mono text-foreground/80"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

        {/* ================= USER-FRIENDLY SKILLS SLIDER ================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-border/50 pb-4">
            <div className="flex flex-col">
              <h3 className="text-lg font-extrabold tracking-tight text-foreground">
                Technologies I Use
              </h3>
              <p className="text-xs text-muted-foreground">
                Browse through the tools and frameworks I use to build software.
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 mr-2">
                {skillDecks.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveDeckIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === activeDeckIndex
                        ? "w-6 bg-emerald-500"
                        : "w-2 bg-muted hover:bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-1.5">
                <button
                  onClick={prevDeck}
                  aria-label="Previous Category"
                  className="p-2 rounded-xl border border-border/80 bg-card/60 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-foreground transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextDeck}
                  aria-label="Next Category"
                  className="p-2 rounded-xl border border-border/80 bg-card/60 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-foreground transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Card Area */}
          <div className="relative min-h-[380px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDeck.id}
                initial={{ opacity: 0, x: 30, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full rounded-2xl border-2 border-border/80 bg-card/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Header inside Card */}
                <div className="flex items-center justify-between border-b border-border/50 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                      {React.createElement(currentDeck.icon, { className: "w-5 h-5" })}
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold tracking-tight text-foreground">
                        {currentDeck.category}
                      </h3>
                      <span className="text-[11px] font-mono text-muted-foreground">
                        Category {activeDeckIndex + 1} of {skillDecks.length}
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono font-bold">
                    {currentDeck.badge}
                  </span>
                </div>

                {/* Grid of Tools */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentDeck.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center justify-between p-3.5 rounded-xl border border-border/60 bg-muted/30 hover:bg-emerald-500/[0.04] hover:border-emerald-500/40 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl p-1.5 rounded-lg bg-background border border-border/50 shadow-sm">
                          {skill.icon}
                        </span>
                        <div>
                          <p className="text-sm font-mono font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                            {skill.name}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {skill.tag}
                          </p>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer note */}
                <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Tested & used in my personal or live projects</span>
                  </div>
                  <span>Use arrows or dots to switch categories</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;