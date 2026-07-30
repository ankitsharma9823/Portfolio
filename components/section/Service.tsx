"use client";

import { motion } from "framer-motion";
import { Code, Server, Code2, Layers } from "lucide-react";

const services = [
  {
    title: "Full-Stack Development",
    desc: "End-to-end application development using the MERN stack and Next.js, optimized for performance and scalability.",
    icon: Code,
  },
  {
    title: "Frontend Engineering",
    desc: "Building high-performance, responsive interfaces with Next.js and React. Focused on clean architecture and pixel-perfect UI.",
    icon: Code2,
  },
  {
    title: "API & Backend Design",
    desc: "Robust RESTful APIs with secure authentication, solid database modeling, and clean business logic.",
    icon: Server,
  },
  {
    title: "UI/UX Implementation",
    desc: "Turning high-fidelity designs into responsive, accessible, and maintainable component libraries.",
    icon: Layers,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 bg-background text-foreground overflow-hidden"
    >
      {/* Soft ambient */}
      <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-emerald-500/[0.05] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-5 sm:px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            
           
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border/70 bg-card/40 backdrop-blur-sm p-6 hover:border-emerald-500/35 hover:bg-card/60 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 group-hover:scale-105 transition-transform duration-300">
                <service.icon className="w-5 h-5" />
              </div>

              <h3 className="text-base font-semibold tracking-tight mb-2.5 group-hover:text-emerald-500 transition-colors">
                {service.title}
              </h3>

              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {service.desc}
              </p>

              {/* subtle number */}
              <span className="absolute top-5 right-5 text-[11px] font-mono text-muted-foreground/40">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;