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
    desc: "Building high-performance, responsive interfaces using Next.js and React. Focused on pixel-perfect fidelity and component-driven architecture.",
    icon: Code2,
  },
  {
    title: "API & Backend Design",
    desc: "Robust RESTful API development with secure authentication, database modeling, and complex business logic.",
    icon: Server,
  },
  {
    title: "UI/UX Implementation",
    desc: "Translating high-fidelity designs into responsive, high-contrast, and clean component libraries.",
    icon: Layers,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 container mx-auto px-6 bg-background text-foreground">
      <div className="mb-16 border-l-4 border-emerald-500 pl-6">
        <h3 className="text-2xl lg:text-4xl font-bold tracking-tighter">SERVICES</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card p-8 border border-border hover:border-emerald-500/50 transition-all duration-300"
          >
            <service.icon className="w-10 h-10 text-emerald-600 dark:text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h4>
            <p className="text-muted-foreground font-light leading-relaxed text-sm">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;