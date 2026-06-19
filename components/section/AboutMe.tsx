"use client";

import { motion } from "framer-motion";
import { Terminal, Cloud, Database, LayoutTemplate } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 container mx-auto px-6 bg-background text-foreground">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: The Narrative */}
        <div className="space-y-8">
          <div className="border-l-4 border-emerald-500 pl-6">
            <h3 className="text-2xl lg:text-4xl font-bold tracking-tighter">ABOUT_ME</h3>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
            <p>
              I am a Full-Stack Engineer and current BIT undergraduate. I don't just write code; I design systems. 
              My approach bridges the gap between complex backend logic and seamless, performant frontend experiences.
            </p>
            <p>
              I specialize in building end-to-end solutions that are not only functional but architecturally sound. 
              From optimizing database queries to deploying scalable applications on the cloud, I am committed to 
              maintaining clean, maintainable, and high-performance codebases.
            </p>
          </div>
        </div>

        {/* Right Column: Pillars of Expertise */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: LayoutTemplate, label: "fullStack Engineering" },
            { icon: Database, label: "Backend API Design" },
            { icon: LayoutTemplate, label: "Frontend Engineering" },
            { icon: Terminal, label: "Clean Code Logic" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-6 flex flex-col gap-4 hover:border-emerald-500/50 transition-all shadow-sm"
            >
              <item.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-500" />
              <span className="font-mono text-sm uppercase">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;