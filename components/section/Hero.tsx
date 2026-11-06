"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ArrowUpRight, Mail, MapPin, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const STACK = ["React", "Next.js", "TypeScript", "Node.js"];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Text column: staggered rise
      tl.fromTo(
        textRef.current?.children || [],
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.1 },
      );

      // Headline: word-by-word clip reveal
      if (nameRef.current) {
        const words = nameRef.current.querySelectorAll(".hero-word");
        tl.fromTo(
          words,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.55",
        );
      }

      // Media: rise + slight rotate settle
      if (mediaRef.current) {
        tl.fromTo(
          mediaRef.current,
          { opacity: 0, y: 48, rotate: 2, scale: 0.95 },
          { opacity: 1, y: 0, rotate: 0, scale: 1, duration: 1 },
          "-=0.5",
        );
      }

      // Scroll cue drop-in
      if (scrollCueRef.current) {
        tl.fromTo(
          scrollCueRef.current,
          { opacity: 0, y: -8 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3",
        );
        gsap.to(scrollCueRef.current, {
          y: 8,
          duration: 1.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.2,
        });
      }

      // Continuous soft float on media card
      if (mediaRef.current) {
        gsap.to(mediaRef.current, {
          y: -10,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.4,
        });
      }

      // Accent square gentle spin
      if (accentRef.current) {
        gsap.to(accentRef.current, {
          rotation: 360,
          duration: 40,
          repeat: -1,
          ease: "none",
        });
      }

      // Frame breathe
      if (frameRef.current) {
        gsap.to(frameRef.current, {
          scale: 1.02,
          opacity: 0.7,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Grid drift
      if (gridRef.current) {
        gsap.to(gridRef.current, {
          backgroundPosition: "48px 48px",
          duration: 18,
          repeat: -1,
          ease: "none",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse parallax on media + accents (desktop only)
  useEffect(() => {
    const el = containerRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(mediaRef.current, {
        x: x * 18,
        y: y * 14,
        duration: 0.9,
        ease: "power3.out",
        overwrite: "auto",
      });
      gsap.to(accentRef.current, {
        x: x * -28,
        y: y * -20,
        duration: 1.1,
        ease: "power3.out",
        overwrite: "auto",
      });
      gsap.to(frameRef.current, {
        x: x * 10,
        y: y * 8,
        duration: 1.1,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative isolate flex items-start md:items-center min-h-[100svh] pt-6 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-background"
    >
      {/* ── Background ── */}
      <div
        className="absolute inset-0 -z-30 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(109,40,217,0.16), transparent 55%), radial-gradient(ellipse 50% 45% at 15% 80%, rgba(168,85,247,0.10), transparent 50%)",
        }}
      />
      <div
        ref={gridRef}
        className="absolute inset-0 -z-30 pointer-events-none opacity-50 dark:opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--color-brand-500) 18%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-brand-500) 18%, transparent) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 750px 550px at 50% 45%, black 0%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 750px 550px at 50% 45%, black 0%, transparent 78%)",
        }}
      />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-background to-transparent -z-10 pointer-events-none" />

      {/* ── Content ── */}
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* LEFT — copy */}
          <div
            ref={textRef}
            className="md:col-span-7 flex flex-col items-start text-left gap-6"
          >
            {/* Availability */}
            <div
              style={{ opacity: 0 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-500/35 px-3.5 py-1.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-500" />
              </span>
              <span className="text-sm font-medium text-brand-700 dark:text-brand-300">
                Open to opportunities
              </span>
            </div>

            {/* Name as display type */}
            <div style={{ opacity: 0 }} className="space-y-3 w-full">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neon-600 dark:text-neon-400">
                Hello, I&apos;m
              </p>
              <h1
                ref={nameRef}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05] overflow-hidden"
              >
                {["Ankit", "Sharma"].map((word) => (
                  <span key={word} className="inline-block overflow-hidden align-bottom mr-3 sm:mr-4 last:mr-0">
                    <span className="hero-word inline-block will-change-transform">
                      {word}
                    </span>
                  </span>
                ))}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold leading-snug text-brand-700 dark:text-brand-300">
                Frontend &amp; Full-Stack Engineer
              </p>
            </div>

            {/* Value prop */}
            <p
              style={{ opacity: 0 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[52ch]"
            >
              I build performant web products and secure systems — turning
              complex requirements into clean interfaces and reliable APIs
              with React, Next.js, and Node.js.
            </p>

            {/* Tech row */}
            <ul
              style={{ opacity: 0 }}
              className="flex flex-wrap items-center gap-2"
              aria-label="Core stack"
            >
              {STACK.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border/70 bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-brand-500/50 hover:text-foreground hover:-translate-y-0.5"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {/* CTAs + socials */}
            <div style={{ opacity: 0 }} className="flex flex-col gap-5 pt-1">
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold px-6 shadow-lg shadow-brand-600/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all"
                >
                  <Link href="#projects" className="gap-2">
                    View Projects
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-xl border-border bg-background/70 backdrop-blur-sm hover:bg-muted font-medium px-6 hover:-translate-y-0.5 transition-all"
                >
                  <Link href="#contact" className="gap-2">
                    <Mail className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                    Contact
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/ankitsharma9823"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2.5 rounded-lg border border-border/50 bg-muted/50 text-muted-foreground hover:text-foreground hover:border-brand-500/50 hover:-translate-y-0.5 transition-all"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ankit-sharma-1aa523386/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2.5 rounded-lg border border-border/50 bg-muted/50 text-muted-foreground hover:text-foreground hover:border-brand-500/50 hover:-translate-y-0.5 transition-all"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                </div>
                <span className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                  Available remotely
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — media */}
          <div ref={mediaRef} className="md:col-span-5" style={{ opacity: 0 }}>
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              {/* Accent frame */}
              <div
                ref={frameRef}
                className="absolute -inset-3 rounded-3xl border border-brand-500/25 bg-brand-500/[0.04] -z-10"
                aria-hidden="true"
              />
              <div
                ref={accentRef}
                className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl border border-neon-500/30 bg-neon-500/10 -z-10 rotate-6"
                aria-hidden="true"
              />

              {/* Image */}
              <div className="relative aspect-[4/5] sm:aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 shadow-2xl shadow-brand-900/25 bg-muted group">
                <Image
                  src="/hero.jpg"
                  alt="Developer working at a laptop"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,8,19,0.5) 0%, transparent 42%)",
                  }}
                />

                {/* Floating chip on image */}
                <div className="absolute left-4 bottom-4 right-4 rounded-xl border border-white/15 bg-black/45 px-3 py-2.5 backdrop-blur-md translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                  <p className="text-xs sm:text-sm text-white/90 leading-snug">
                    Crafting UI that feels fast — and stays secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          ref={scrollCueRef}
          style={{ opacity: 0 }}
          className="hidden md:flex absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex-col items-center gap-1 text-muted-foreground/70"
          aria-hidden="true"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
