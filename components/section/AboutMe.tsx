"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, MapPin } from "lucide-react";
import profile from "@/public/Profile.png";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance animation triggered on scroll
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
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          cardRef.current,
          { opacity: 0, x: -30, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          contentRef.current?.children || [],
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
          "-=0.5"
        );

      // 2. Continuous subtle floating loop for the photo card
      gsap.to(cardRef.current, {
        y: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
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
      className="relative py-28 container mx-auto px-6 bg-background text-foreground flex flex-col items-center overflow-hidden"
    >
      {/* Rich Ambient Gradient Background Lights */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-transparent rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-gradient-to-bl from-cyan-500/10 via-emerald-500/10 to-transparent rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-5xl w-full mx-auto space-y-12 relative z-10">
        
        {/* Minimal Section Header */}
        <div ref={headerRef} className="flex items-center justify-between border-b border-border/60 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
            <span>About Me</span>
          </div>
          <span className="text-xs font-mono text-emerald-500 font-semibold">Ankit Sharma</span>
        </div>

        {/* Asymmetric Split Layout: Floating Card Left, Clean Info Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Left: Compact Photo Card */}
          <div className="md:col-span-5 flex justify-center">
            <div
              ref={cardRef}
              style={{ opacity: 0 }}
              className="w-full max-w-[260px] rounded-2xl bg-card/80 backdrop-blur-md border border-border/80 p-3 shadow-xl group cursor-pointer"
            >
              <div className="relative w-full h-72 rounded-xl overflow-hidden bg-muted border border-border/60">
                <Image
                  src={profile} 
                  alt="Ankit Sharma"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex items-center justify-between pt-3 px-1 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1 text-foreground font-medium">
                  <Terminal className="w-3.5 h-3.5 text-emerald-500" /> ankit.dev
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" /> NP
                </span>
              </div>
            </div>
          </div>

          {/* Right: Clean Key-Value Fact Sheet */}
          <div ref={contentRef} className="md:col-span-7 space-y-5">
            <div className="space-y-2 pb-1">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Behind the code.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed">
                I am deeply enthusiastic about software development, clean architecture, performance, and understanding how underlying systems operate.
              </p>
            </div>

            <div className="space-y-2.5 font-mono text-xs sm:text-sm">
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-card/50 backdrop-blur-sm border border-border/60 gap-1 sm:gap-4 hover:border-emerald-500/40 transition-colors"
                >
                  <span className="text-muted-foreground font-medium">{fact.label}</span>
                  <span className="text-foreground text-left sm:text-right font-semibold">{fact.value}</span>
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