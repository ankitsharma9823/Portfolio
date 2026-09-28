"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutMe from "@/components/section/AboutMe";
import Experience from "@/components/section/Experience";
import Hero from "@/components/section/Hero";
import Project from "@/components/section/Project";
import Services from "@/components/section/Service";
import Contact from "@/components/section/Contact";

const NAME = "ANKIT SHARMA";
const WORDS = NAME.split(" ");

const DIRECTIONS = [
  { x: -36, y: 0 },
  { x: 36, y: 0 },
  { x: 0, y: -30 },
  { x: 0, y: 30 },
];

const MOUNTAIN_DURATION = 1;
const RAIN_START = MOUNTAIN_DURATION - 0.3; // rain starts as mountain is still finishing
const NAME_START = MOUNTAIN_DURATION + 0.3;
const HOLD_AFTER_NAME = 0.6;

// Deterministic "random" rain drops (avoids SSR/client hydration mismatch)
const RAIN_COUNT = 46;
const rainDrops = Array.from({ length: RAIN_COUNT }, (_, i) => {
  const left = (i * 37) % 100; // spread across width
  const delay = (i * 0.13) % 1.6;
  const duration = 0.9 + ((i * 0.07) % 0.6);
  const height = 14 + ((i * 5) % 12);
  return { left, delay, duration, height };
});

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(true);

  // Run the intro timers ONCE on mount (previously re-ran when `loading` changed)
  useEffect(() => {
    const nameFinishedAt = NAME_START * 1000 + NAME.length * 150 + 700;
    const holdEndsAt = nameFinishedAt + HOLD_AFTER_NAME * 1000;

    const fadeTimer = setTimeout(() => setContentVisible(false), holdEndsAt);
    const wipeTimer = setTimeout(() => setLoading(false), holdEndsAt + 400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(wipeTimer);
    };
  }, []);

  // Lock page scroll only while the intro is showing
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  const skipIntro = () => {
    setContentVisible(false);
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="intro"
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { duration: 1.2, ease: [0.65, 0, 0.35, 1] },
            }}
            className="fixed inset-0 z-50 pointer-events-auto overflow-hidden
                       bg-gradient-to-b from-emerald-50 via-emerald-100 to-emerald-300
                       dark:from-[#020d08] dark:via-[#042f1f] dark:to-[#0b6b46]"
          >
            {/* Rain, falling across the entire screen */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              {rainDrops.map((drop, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: "-5vh" }}
                  animate={{ opacity: [0, 0.5, 0], y: "110vh" }}
                  transition={{
                    delay: RAIN_START + drop.delay,
                    duration: drop.duration,
                    repeat: Infinity,
                    repeatDelay: 0.4,
                    ease: "easeIn",
                  }}
                  className="absolute top-0 w-px rounded-full
                             bg-emerald-900/30 dark:bg-emerald-100/30"
                  style={{ left: `${drop.left}%`, height: drop.height }}
                />
              ))}
            </div>

            {/* Soft green glow behind the name */}
            <div
              className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_30%,rgba(52,211,153,0.35),transparent_60%)]"
              aria-hidden="true"
            />

            {/* Content column */}
            <motion.div
              animate={{ opacity: contentVisible ? 1 : 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              {/* Mountain — layered, full-width range with depth, snow caps and moon */}
              <svg
                viewBox="0 0 1000 300"
                preserveAspectRatio="none"
                className="absolute inset-x-0 bottom-0 w-full h-[52vh] sm:h-[58vh] text-emerald-950 dark:text-emerald-50"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="mtnFar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.07" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
                  </linearGradient>
                  <linearGradient id="mtnMid" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
                  </linearGradient>
                  <linearGradient id="mtnFront" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.03" />
                  </linearGradient>
                </defs>

                {/* Moon */}
                <motion.circle
                  cx="140"
                  cy="70"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.35"
                  strokeWidth="1.2"
                  vectorEffect="non-scaling-stroke"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />

                {/* Far range */}
                <motion.path
                  d="M-20,300 L-20,210 L120,150 L220,200 L380,110 L500,190 L640,90 L780,180 L920,120 L1020,170 L1020,300 Z"
                  fill="url(#mtnFar)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                />

                {/* Middle range */}
                <motion.path
                  d="M-20,300 L-20,250 L60,200 L140,240 L260,150 L340,220 L450,160 L560,230 L700,140 L800,210 L900,170 L1020,230 L1020,300 Z"
                  fill="url(#mtnMid)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                />

                {/* Front range fill */}
                <motion.path
                  d="M-20,300 L-20,230 L90,140 L150,190 L230,70 L300,170 L370,100 L430,210 L520,30 L600,180 L670,110 L740,230 L820,80 L900,190 L1020,240 L1020,300 Z"
                  fill="url(#mtnFront)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                />

                {/* Front range outline (draws in) */}
                <motion.path
                  d="M-20,230 L90,140 L150,190 L230,70 L300,170 L370,100 L430,210 L520,30 L600,180 L670,110 L740,230 L820,80 L900,190 L1020,240"
                  stroke="currentColor"
                  strokeOpacity="0.55"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: MOUNTAIN_DURATION, ease: [0.65, 0, 0.35, 1] },
                    opacity: { duration: 0.3 },
                  }}
                />

                {/* Snow caps on the tallest peaks */}
                <motion.path
                  d="M490,58 L505,48 L520,30 L535,50 L552,62 M208,94 L220,84 L230,70 L244,86 L258,98 M798,104 L809,93 L820,80 L832,94 L846,106"
                  stroke="currentColor"
                  strokeOpacity="0.4"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.7 }}
                />
              </svg>

              {/* Name — centered. Words never split mid-word on small screens */}
              <div className="absolute inset-x-0 top-0 h-[52vh] sm:h-[48vh] flex items-center justify-center">
                <h1
                  aria-label={NAME}
                  className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 px-4 sm:px-8"
                >
                  {WORDS.map((word, wIdx) => {
                    // running letter index so the stagger continues across words
                    const offset = WORDS.slice(0, wIdx).join(" ").length + (wIdx > 0 ? 1 : 0);
                    return (
                      <span key={wIdx} className="flex whitespace-nowrap" aria-hidden="true">
                        {word.split("").map((char, i) => {
                          const idx = offset + i;
                          const dir = DIRECTIONS[idx % DIRECTIONS.length];
                          return (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, x: dir.x, y: dir.y, filter: "blur(6px)" }}
                              animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                              transition={{
                                duration: 0.7,
                                delay: NAME_START + idx * 0.15,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl
                                         text-emerald-950 dark:text-emerald-50"
                              style={{ letterSpacing: "0.01em" }}
                            >
                              {char}
                            </motion.span>
                          );
                        })}
                      </span>
                    );
                  })}
                </h1>
              </div>

              {/* Skip button */}
              <button
                onClick={skipIntro}
                aria-label="Skip intro animation"
                className="absolute bottom-6 right-6 z-10 px-3 py-1.5 rounded-full border border-emerald-950/30
                           dark:border-emerald-50/30 text-[11px] font-mono uppercase tracking-wider
                           text-emerald-950/70 dark:text-emerald-50/70 hover:text-emerald-950
                           dark:hover:text-emerald-50 hover:border-emerald-950/60
                           dark:hover:border-emerald-50/60 transition-colors"
              >
                Skip
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 1.03 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
      >
        <div>
          <Hero />
          <AboutMe />
          <Project />
          <Experience />
          <Services />
          <Contact />
        </div>
      </motion.div>
    </>
  );
};

export default Page;