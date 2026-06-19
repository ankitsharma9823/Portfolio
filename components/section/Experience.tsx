"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, GitBranch, Code2 } from "lucide-react";

const experienceData = [
  {
    title: "Freelance Full-Stack Developer",
    subtitle: "Self-Employed",
    date: "2025 - Present",
    desc: "Developing scalable MERN/Next.js applications for clients.",
    icon: Briefcase,
  },
  {
    title: "BIT Undergraduate",
    subtitle: "Student",
    date: "2024 - Present",
    desc: "Focusing on OOAD, system infrastructure, and architecture.",
    icon: GraduationCap,
  },
];

const skillCategories = [
  { title: "Languages", skills: ["JavaScript", "TypeScript", "SQL"] },
  { title: "Frameworks & Libs", skills: ["Next.js", "React", "Node.js", "Express", "TailwindCSS"] },
  { title: "Infrastructure & Other", skills: ["PostgreSQL", "MongoDB", "Git"] }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 container mx-auto px-6 bg-background text-foreground">
      <div className="mb-16 border-l-4 border-emerald-500 pl-6">
        <h2 className="text-sm font-mono text-emerald-600 dark:text-emerald-500 mb-2 flex items-center gap-2 uppercase tracking-widest">
          <GitBranch className="w-4 h-4" /> System_Logs
        </h2>
        <h3 className="text-4xl font-bold tracking-tighter">TECHNICAL_PROFILE</h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Experience Column */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-0 w-9 h-9 bg-background border-2 border-emerald-500 flex items-center justify-center z-10">
                  <item.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
                </div>
                <div className="bg-card p-6 border border-border">
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-emerald-600 dark:text-emerald-500 font-mono text-xs mb-2">{item.date}</p>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Categorized Skills Column */}
        <div className="space-y-10">
          <div className="flex items-center gap-3 text-xl font-bold uppercase tracking-widest">
            <Code2 className="text-emerald-600 dark:text-emerald-500" /> Technical_Dependencies
          </div>
          
          <div className="grid gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-emerald-600 dark:text-emerald-500 font-mono text-xs uppercase tracking-widest mb-4">
                  {`// ${category.title}`}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-card border border-border text-muted-foreground font-mono text-sm hover:border-emerald-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;