"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, Download, Terminal, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const highlighterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        textRef.current?.children || [],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }
      ).fromTo(
        cardRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4"
      );

      // Float loop for the card
      gsap.to(cardRef.current, {
        y: -6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Continuous back-and-forth sliding/gliding highlighter animation
      if (highlighterRef.current) {
        gsap.to(highlighterRef.current, {
          x: "100%",
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="" 
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 md:py-28 overflow-x-hidden bg-background"
    >
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-teal-500/[0.04] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left Text Content */}
          <div ref={textRef} className="md:col-span-7 flex flex-col items-start text-left gap-6">
            
            {/* Continuously Sliding Highlighter Underline */}
            <div style={{ opacity: 0 }} className="relative inline-flex items-center pb-2 overflow-hidden">
              <span className="text-xs font-mono text-muted-foreground tracking-wide uppercase">
                Full-Stack & Systems Developer
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-border/40 overflow-hidden rounded-full">
                <div 
                  ref={highlighterRef}
                  className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 rounded-full -translate-x-full" 
                />
              </div>
            </div>

            <div style={{ opacity: 0 }} className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.1]">
                Hi, I&apos;m Ankit.
              </h1>
              <p className="text-md sm:text-lg text-muted-foreground font-normal mt-5">
                I build reliable web applications, backend infrastructure, and developer tools.
              </p>
            </div>

            <div style={{ opacity: 0 }}>
              <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed max-w-lg font-normal">
                Undergraduate BIT student based in Nepal. Passionate about clean code architecture, database design, and low-level systems.
              </p>
            </div>

            <div style={{ opacity: 0 }}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  asChild
                  size="default"
                  className="rounded-xl bg-foreground text-background hover:bg-foreground/90 font-medium px-5 text-sm"
                >
                  <Link href="#projects" className="flex items-center gap-2">
                    View Projects <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="rounded-xl border-border/80 bg-background hover:bg-muted font-medium px-5 text-sm"
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-emerald-500" /> Resume
                  </Link>
                </Button>
              </div>
            </div>

          </div>

          {/* Right Minimalist Developer Card */}
          <div className="md:col-span-5 flex justify-center">
            <div
              ref={cardRef}
              style={{ opacity: 0 }}
              className="w-full max-w-sm rounded-2xl bg-card border border-border/70 shadow-sm p-5 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-border/50 pb-3">
                <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-500" /> stack.config
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                  Active
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs text-muted-foreground">
                <div className="flex justify-between py-1 border-b border-border/40">
                  <span className="text-foreground">Languages</span>
                  <span>TypeScript / JavaScript</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/40">
                  <span className="text-foreground">Frontend</span>
                  <span>React / Next.js</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/40">
                  <span className="text-foreground">Backend</span>
                  <span>Node.js / Express</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-foreground">Databases</span>
                  <span className="text-emerald-500">PostgreSQL / MongoDB / Prisma</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground/80 font-mono border-t border-border/50">
                <span className="flex items-center gap-1"><Code2 className="w-3 h-3 text-emerald-500" /> Software Engineering</span>
                <span>Nepal</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;