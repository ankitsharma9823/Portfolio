"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, Cpu, Database, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Project1 from "@/public/Project1.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Luga Shop",
    image: Project1,
    story: "I wanted to simplify the online shopping experience by building a platform that felt as fast as a native app with a robust admin backend.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Stripe"],
    github: "https://github.com/ankitsharma9823/luga-shop",
    metrics: "E-Commerce / Admin Panel",
    icon: Layers,
  },
  {
    title: "Attendance System",
    image: Project1,
    story: "Managing data manually is a recipe for error. I built this relational system to automate tracking and generate clean reports instantly.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/ankitsharma9823/Attendance_System",
    metrics: "Full-Stack / Relational DB",
    icon: Database,
  },
  {
    title: "Invoicing App",
    image: Project1,
    story: "Freelancers struggle with professional document generation. This tool was my answer for fast PDF compilation and client tracking.",
    tech: ["Next.js", "TypeScript", "Tailwind", "PDFKit"],
    github: "https://github.com/ankitsharma9823/Invoicing-App",
    metrics: "Developer Tool / PDF Gen",
    icon: Cpu,
  }
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header entrance animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Staggered card entrance with 3D perspective tilt feel
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Interactive mouse move glow / tilt micro-interaction
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        };

        card.addEventListener("mousemove", handleMouseMove);
        return () => card.removeEventListener("mousemove", handleMouseMove);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="projects" 
      className="relative py-32 container mx-auto px-6 overflow-hidden bg-background text-foreground"
    >
      {/* Immersive Deep Ambient Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-emerald-500/[0.08] via-teal-500/[0.06] to-transparent rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '9s' }} />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/[0.05] via-emerald-500/[0.05] to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-6 opacity-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 02. Featured Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              The Story Behind The Code
            </h2>
          </div>
          <p className="text-sm font-mono text-muted-foreground max-w-xs leading-relaxed">
            Architected for scale, high performance, and real-world utility.
          </p>
        </div>

        {/* Projects Grid with Advanced Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index} 
                ref={(el) => { cardsRef.current[index] = el; }}
                className="opacity-0 h-full group relative"
              >
                {/* Dynamic Mouse-Following Glow Border Effect */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-emerald-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" />

                <Card className="relative flex flex-col h-full bg-card/90 backdrop-blur-xl border border-border/80 shadow-2xl rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 group-hover:-translate-y-1.5">
                  
                  {/* Top Image Frame with Overlay Badge */}
                  <div className="relative h-60 w-full overflow-hidden bg-muted border-b border-border/60">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
                    
                    {/* Floating Metric Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/60 text-[11px] font-mono text-foreground shadow-sm">
                      <IconComponent className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{project.metrics}</span>
                    </div>

                    <div className="absolute bottom-3 right-3 font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 backdrop-blur-sm">
                      #0{index + 1}
                    </div>
                  </div>

                  <div className="grow p-6 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <CardHeader className="p-0">
                        <CardTitle className="text-2xl font-bold tracking-tight text-foreground group-hover:text-emerald-500 transition-colors">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground text-sm leading-relaxed font-normal">
                          &ldquo;{project.story}&rdquo;
                        </p>
                      </CardContent>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                      {project.tech.map((t) => (
                        <Badge 
                          key={t} 
                          variant="secondary" 
                          className="rounded-lg bg-muted/60 border border-border/60 font-mono text-[11px] text-foreground px-2.5 py-1 hover:border-emerald-500/40 transition-colors"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions Footer (GitHub Only) */}
                  <CardFooter className="p-6 pt-0 mt-auto">
                    <Link href={project.github} target="_blank" className="w-full">
                      <Button variant="outline" className="w-full rounded-xl border-border/80 bg-background/50 hover:bg-muted font-medium text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 group/btn py-5">
                        <FaGithub className="mr-2 h-4 w-4 text-emerald-500 group-hover/btn:rotate-12 transition-transform" /> View Source Code
                      </Button>
                    </Link>
                  </CardFooter>

                </Card>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;