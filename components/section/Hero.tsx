"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"; // Standard brand icons
import { Button } from "@/components/ui/button";

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false },
);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const highlighterRef = useRef<HTMLDivElement>(null);
  const cosmicRingRef = useRef<HTMLDivElement>(null);
  const cosmicRingRef2 = useRef<HTMLDivElement>(null);
  const starsGroupRef = useRef<HTMLDivElement>(null);
  const orbitNodesRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        textRef.current?.children || [],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
      ).fromTo(
        lottieRef.current,
        { opacity: 0, x: 20, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.7 },
        "-=0.4",
      );

      if (highlighterRef.current) {
        gsap.to(highlighterRef.current, {
          x: "100%",
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      if (lottieRef.current) {
        gsap.to(lottieRef.current, {
          y: -10,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (cosmicRingRef.current) {
        gsap.to(cosmicRingRef.current, {
          rotate: 360,
          duration: 90,
          repeat: -1,
          ease: "none",
        });
      }
      if (cosmicRingRef2.current) {
        gsap.to(cosmicRingRef2.current, {
          rotate: -360,
          duration: 130,
          repeat: -1,
          ease: "none",
        });
      }

      if (orbitNodesRef.current) {
        const nodes = orbitNodesRef.current.children;
        Array.from(nodes).forEach((node, i) => {
          gsap.to(node, {
            rotation: 360,
            duration: 40 + i * 15,
            repeat: -1,
            ease: "none",
            transformOrigin: "250px 250px",
          });
        });
      }

      if (gridRef.current) {
        gsap.to(gridRef.current, {
          backgroundPosition: "48px 48px",
          duration: 14,
          repeat: -1,
          ease: "none",
        });
      }

      if (starsGroupRef.current) {
        gsap.to(starsGroupRef.current.children, {
          y: "random(-15, 15)",
          x: "random(-10, 10)",
          scale: "random(0.85, 1.3)",
          opacity: "random(0.6, 1)",
          duration: "random(2, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.15,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative isolate min-h-[85vh] flex items-center justify-center pt-24 pb-16 md:py-28 overflow-hidden bg-background"
    >
      {/* 
        ============================================================
        BACKGROUND — BOOSTED VISIBILITY, THEME-AWARE
        ============================================================
      */}

      {/* 1. Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-emerald-500/20 via-emerald-500/5 to-background dark:from-emerald-950/40 pointer-events-none -z-30" />

      {/* 2. Technical grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none -z-30 opacity-70 dark:opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(5,150,105,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(5,150,105,0.2) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 700px 500px at center, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 700px 500px at center, black 0%, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none -z-30 hidden dark:block opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(52,211,153,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(52,211,153,0.25) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 700px 500px at center, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 700px 500px at center, black 0%, transparent 75%)",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-137.5 h-137.5 bg-emerald-500/25 dark:bg-emerald-500/8 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-112.5 h-112.5 bg-teal-500/25 dark:bg-teal-500/8 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* 4. Cosmic Rings */}
      <div
        ref={cosmicRingRef}
        className="absolute top-1/2 left-[65%] -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full border-2 border-emerald-600/40 dark:border-emerald-400/35 pointer-events-none -z-20 border-dashed"
      />
      <div
        ref={cosmicRingRef2}
        className="absolute top-1/2 left-[65%] -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full border-2 border-teal-600/30 dark:border-teal-300/25 pointer-events-none -z-20"
      />

      {/* 5. Orbiting nodes */}
      <div
        ref={orbitNodesRef}
        className="absolute top-1/2 left-[65%] -translate-x-62.5 -translate-y-62.5 w-125 h-125 pointer-events-none -z-20"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_12px_3px_rgba(16,185,129,0.6)]" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-teal-500 dark:bg-teal-400 shadow-[0_0_10px_3px_rgba(45,212,191,0.5)]" />
      </div>

      {/* 6. Twinkling stars */}
      <div
        ref={starsGroupRef}
        className="absolute inset-0 pointer-events-none -z-20 overflow-hidden"
      >
        <div className="absolute top-[15%] left-[18%] w-3 h-3 bg-emerald-600 dark:bg-emerald-400 rounded-full shadow-[0_0_10px_#059669]" />
        <div className="absolute top-[28%] right-[12%] w-3.5 h-3.5 bg-teal-600 dark:bg-teal-300 rounded-full shadow-[0_0_10px_#0d9488]" />
        <div className="absolute top-[65%] left-[8%] w-2.5 h-2.5 bg-emerald-700 dark:bg-emerald-300 rounded-full shadow-[0_0_8px_#047857]" />
        <div className="absolute bottom-[18%] right-[22%] w-3 h-3 bg-emerald-600 dark:bg-emerald-400 rounded-full shadow-[0_0_10px_#059669]" />
        <div className="absolute top-[78%] left-[42%] w-3.5 h-3.5 bg-teal-600 dark:bg-teal-400 rounded-full shadow-[0_0_10px_#0d9488]" />
        <div className="absolute top-[12%] right-[38%] w-2.5 h-2.5 bg-emerald-700 dark:bg-emerald-300 rounded-full shadow-[0_0_8px_#047857]" />
        <div className="absolute top-[45%] left-[85%] w-3 h-3 bg-teal-700 dark:bg-teal-300 rounded-full shadow-[0_0_10px_#0f766e]" />
        <div className="absolute top-[8%] left-[55%] w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full shadow-[0_0_8px_#059669]" />
      </div>

      {/* 7. Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none -z-10" />

      {/* ============================================================ */}

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* LEFT SIDE CONTENT */}
          <div
            ref={textRef}
            className="md:col-span-6 flex flex-col items-start text-left gap-5"
          >
            {/* Status Tag */}
            <div
              style={{ opacity: 0 }}
              className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm"
            >
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Open to Software Engineering Roles
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <div
                ref={highlighterRef}
                className="absolute bottom-0 left-0 h-px w-1/2 bg-emerald-500 -translate-x-full"
              />
            </div>

            {/* Headline */}
            <div style={{ opacity: 0 }} className="space-y-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                Frontend & Full-Stack Engineer
              </h1>
              <h2 className="text-lg sm:text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                Crafting Performant Web Experiences & Secure Systems
              </h2>
            </div>

            {/* Paragraphs */}
            <div
              style={{ opacity: 0 }}
              className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg"
            >
              <p>
                I&apos;m Ankit Sharma — a developer bridging the gap between
                pixel-perfect user interfaces and robust backend architectures.
              </p>
              <p>
                Specializing in React, Next.js, and Node.js, I build scalable
                web apps designed for high performance, intuitive UX, and
                enterprise-grade security.
              </p>
            </div>

            {/* Tag Badges */}
            <div style={{ opacity: 0 }} className="flex flex-wrap gap-2 pt-1">
              {[
                "UI/UX Architecture",
                "Next.js Ecosystem",
                "Secure Web APIs",
                "Full-Stack Web",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-muted/80 text-muted-foreground border border-border/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons & Social Icons */}
            <div style={{ opacity: 0 }} className="flex flex-col gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="default"
                  className="rounded-xl bg-foreground text-background hover:bg-foreground/90 font-medium px-5 text-sm"
                >
                  <Link href="#projects" className="flex items-center gap-2">
                    Projects <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="rounded-xl border-border/80 bg-background/80 backdrop-blur-sm hover:bg-muted font-medium px-5 text-sm"
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    Contact <Mail className="w-4 h-4 text-emerald-500" />
                  </Link>
                </Button>
              </div>

              {/* Social Link Buttons with react-icons */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors border border-border/40"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors border border-border/40"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE LOTTIE ANIMATION */}
          <div className="md:col-span-6 flex justify-center items-center">
            <div
              ref={lottieRef}
              style={{ opacity: 0 }}
              className="w-full max-w-lg lg:max-w-xl aspect-square flex items-center justify-center p-0 m-0"
            >
              <DotLottieReact
                src="https://lottie.host/337c46c7-043e-49e6-a216-70754e5d17ca/lB2UevzsJv.json"
                loop
                autoplay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
