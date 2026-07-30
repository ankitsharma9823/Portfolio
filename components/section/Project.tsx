"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Project1 from "@/public/Project1.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Luga Shop",
    image: Project1,
    story:
      "A full e-commerce experience built to feel as fast as a native app, with a robust admin backend.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    github: "https://github.com/ankitsharma9823/luga-shop",
    category: "E-Commerce",
  },
  {
    title: "Attendance System",
    image: Project1,
    story:
      "Relational system that replaces manual tracking with automated reports and clean data flows.",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/ankitsharma9823/Attendance_System",
    category: "Full-Stack",
  },
  {
    title: "Invoicing App",
    image: Project1,
    story:
      "Fast PDF generation and client tracking tool built for freelancers who need professional documents.",
    tech: ["Next.js", "TypeScript", "PDFKit"],
    github: "https://github.com/ankitsharma9823/Invoicing-App",
    category: "Developer Tool",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-10 md:py-15 bg-background text-foreground overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-emerald-500/[0.05] rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[360px] h-[360px] bg-cyan-500/[0.04] rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="container mx-auto px-5 sm:px-6 max-w-6xl relative z-10">
        {/* Header - tighter typography */}
        <div ref={headerRef} className="mb-12 md:mb-16 max-w-xl opacity-0">
          
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug mb-3">
            Projects that solve real problems
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Built with performance, clarity and systems thinking in mind.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="opacity-0 group"
            >
              <article className="h-full flex flex-col rounded-2xl bg-card/50 backdrop-blur-xl border border-border/70 overflow-hidden transition-all duration-400 hover:border-emerald-500/35 hover:shadow-lg hover:shadow-emerald-500/[0.04] hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  {/* subtle bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-background/75 backdrop-blur-md border border-border/60 text-foreground/90">
                      {project.category}
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 text-[10px] font-mono text-white/60 bg-black/25 backdrop-blur-sm px-1.5 py-0.5 rounded">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4 sm:p-5 space-y-3.5">
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-semibold tracking-tight group-hover:text-emerald-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2">
                      {project.story}
                    </p>
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted/70 border border-border/50 text-foreground/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="pt-1 mt-auto">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground/70 hover:text-emerald-500 transition-colors group/link"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>Source</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-0.5 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;