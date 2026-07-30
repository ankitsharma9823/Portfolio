"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile from "@/public/Profile.png";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.55 }
      )
        .fromTo(
          imageRef.current,
          { opacity: 0, x: -24, scale: 0.96 },
          { opacity: 1, x: 0, scale: 1, duration: 0.75 },
          "-=0.25"
        )
        .fromTo(
          gsap.utils.toArray(contentRef.current?.children || []),
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.1 },
          "-=0.45"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const facts = [
    { label: "Role", value: "BIT Undergraduate & Full-Stack Developer" },
    { label: "Location", value: "Based in Nepal, working globally" },
    { label: "Focus", value: "Low-level systems, backend design & tools" },
    { label: "Current", value: "Available for freelance projects & roles" },
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-10 md:py-32 container mx-auto px-6 bg-background text-foreground overflow-hidden"
    >
      {/* Ambient lights */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/8 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[320px] h-[320px] bg-gradient-to-bl from-cyan-500/10 via-emerald-500/8 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto space-y-14 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex items-center justify-between border-b border-border/50 pb-4"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
            <span>About Me</span>
          </div>
          <span className="text-xs font-mono text-emerald-500 font-medium tracking-wide">
            Ankit Sharma
          </span>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-center">
          {/* Simple Image */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div
              ref={imageRef}
              style={{ opacity: 0 }}
              className="relative w-full max-w-90 h-110 rounded-2xl overflow-hidden"
            >
              <Image
                src={profile}
                alt="Ankit Sharma"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="md:col-span-7 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Behind the code.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
                I am deeply enthusiastic about software development, clean
                architecture, performance, and understanding how underlying
                systems operate.
              </p>
            </div>

            {/* Fact sheet */}
            <div className="space-y-2.5 font-mono text-xs sm:text-sm">
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 p-3.5 rounded-xl bg-white/5 dark:bg-white/[0.03] backdrop-blur-md border border-white/10 dark:border-white/8 hover:border-emerald-500/30 hover:bg-white/10 dark:hover:bg-white/[0.06] transition-all duration-300"
                >
                  <span className="text-muted-foreground font-medium tracking-wide">
                    {fact.label}
                  </span>
                  <span className="text-foreground font-semibold text-left sm:text-right">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;