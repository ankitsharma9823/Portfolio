"use client";

import { motion } from "framer-motion";
import { GraduationCap, GitBranch, Building2 } from "lucide-react";

const experienceData = [
  {
    title: "Frontend Engineer",
    subtitle: "Aarambha",
    date: "2025 - Present",
    desc: "Working on real projects, collaborating with the team, and gaining hands-on experience in full-stack development and system design.",
    icon: Building2,
  },
  {
    title: "BIT Undergraduate",
    subtitle: "Student",
    date: "2024 - Present",
    desc: "Focusing on OOAD, system infrastructure, backend design, and software architecture.",
    icon: GraduationCap,
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "SQL",
  "Next.js",
  "React",
  "TailwindCSS",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Git",
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-10 md:py-15 bg-background text-foreground overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/[0.05] rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="container mx-auto px-5 sm:px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-left mb-14 md:mb-16">
         
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Technical Profile
          </h2>
        </div>

        {/* ====== ALTERNATING TREE TIMELINE ====== */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-12 text-sm font-medium text-foreground/80">
            <GitBranch className="w-4 h-4 text-emerald-500" />
            <span>Work Experience</span>
          </div>

          <div className="relative">
            {/* Center line - desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            {/* Left line - mobile */}
            <div className="md:hidden absolute left-[18px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-12 md:space-y-16">
              {experienceData.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Desktop alternating */}
                    <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start">
                      <div className={isLeft ? "text-right" : "opacity-0 pointer-events-none"}>
                        {isLeft && (
                          <div className="inline-block text-left max-w-sm">
                            <span className="text-[11px] font-mono text-emerald-500 mb-1 block">
                              {item.date}
                            </span>
                            <div className="rounded-xl border border-border/70 bg-card/40 backdrop-blur-sm p-5 hover:border-emerald-500/30 transition-colors">
                              <h3 className="text-base font-semibold tracking-tight mb-0.5">
                                {item.title}
                              </h3>
                              <p className="text-xs text-muted-foreground mb-2">
                                {item.subtitle}
                              </p>
                              <p className="text-[13px] text-muted-foreground leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-center">
                        <div className="w-10 h-10 rounded-xl bg-background border border-emerald-500/60 flex items-center justify-center z-10 shadow-sm">
                          <item.icon className="w-4 h-4 text-emerald-500" />
                        </div>
                      </div>

                      <div className={!isLeft ? "" : "opacity-0 pointer-events-none"}>
                        {!isLeft && (
                          <div className="max-w-sm">
                            <span className="text-[11px] font-mono text-emerald-500 mb-1 block">
                              {item.date}
                            </span>
                            <div className="rounded-xl border border-border/70 bg-card/40 backdrop-blur-sm p-5 hover:border-emerald-500/30 transition-colors">
                              <h3 className="text-base font-semibold tracking-tight mb-0.5">
                                {item.title}
                              </h3>
                              <p className="text-xs text-muted-foreground mb-2">
                                {item.subtitle}
                              </p>
                              <p className="text-[13px] text-muted-foreground leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Mobile */}
                    <div className="md:hidden relative pl-12">
                      <div className="absolute left-0 top-1 w-9 h-9 rounded-xl bg-background border border-emerald-500/60 flex items-center justify-center z-10 shadow-sm">
                        <item.icon className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-[11px] font-mono text-emerald-500 mb-1 block">
                        {item.date}
                      </span>
                      <div className="rounded-xl border border-border/70 bg-card/40 backdrop-blur-sm p-4">
                        <h3 className="text-sm font-semibold tracking-tight mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">
                          {item.subtitle}
                        </p>
                        <p className="text-[13px] text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ====== SKILLS SLIDE (marquee) ====== */}
        <div className="overflow-hidden py-5">
          <p className="text-center text-[11px] font-mono text-muted-foreground tracking-widest uppercase mb-6">
            Skills & Technologies
          </p>

          <div className="relative">
            {/* fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex gap-3 animate-marquee whitespace-nowrap">
              {[...skills, ...skills].map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-mono bg-card/60 border border-border/70 text-foreground/80 hover:border-emerald-500/40 hover:text-foreground transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Experience;