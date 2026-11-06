"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AboutMe from "@/components/section/AboutMe";
import Experience from "@/components/section/Experience";
import Hero from "@/components/section/Hero";
import Project from "@/components/section/Project";
import Services from "@/components/section/Service";
import Contact from "@/components/section/Contact";

const NAME = "ANKIT SHARMA";
const WORDS = NAME.split(" ");

const DIRECTIONS = [
  { x: -28, y: 8 },
  { x: 28, y: 8 },
  { x: 0, y: -24 },
  { x: 14, y: 18 },
  { x: -14, y: 18 },
];

// Hold on the intro, then run the iris exit
const HOLD_MS = 2800;
const NAME_START = 0.35;

// Deterministic star field (avoids SSR/client hydration mismatch)
const STAR_COUNT = 42;
const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 100,
  size: 1 + ((i * 3) % 3),
  delay: (i * 0.23) % 2.4,
  duration: 1.6 + ((i * 0.19) % 1.8),
  neon: i % 3 === 0,
}));

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/ankitsharma9823",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ankit-sharma-1aa523386/",
    icon: FaLinkedin,
  },
];

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), HOLD_MS);
    return () => clearTimeout(timer);
  }, []);

  // Lock scroll while intro is showing; unlock only after exit completes
  useEffect(() => {
    if (!loading) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }, [loading]);

  // Safety unlock on full page unmount
  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  const skipIntro = () => setLoading(false);

  return (
    <>
      <AnimatePresence
        onExitComplete={() => {
          document.documentElement.style.overflow = "";
          document.body.style.overflow = "";
        }}
      >
        {loading && (
          <motion.div
            key="intro"
            initial={{ clipPath: "circle(150% at 50% 48%)" }}
            animate={{ clipPath: "circle(150% at 50% 48%)" }}
            exit={{
              clipPath: "circle(0% at 50% 48%)",
              transition: { duration: 1.05, ease: [0.76, 0, 0.24, 1] },
            }}
            onClick={skipIntro}
            className="fixed inset-0 z-50 cursor-pointer bg-[#0b0813]"
            style={{ willChange: "clip-path" }}
          >
            {/* Royal Amethyst × Neon Violet atmosphere */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(109,40,217,0.55), transparent 60%), radial-gradient(ellipse 55% 45% at 85% 85%, rgba(168,85,247,0.32), transparent 55%), radial-gradient(ellipse 50% 40% at 8% 75%, rgba(76,29,149,0.5), transparent 50%)",
              }}
            />

            {/* Soft horizon glow behind the name */}
            <div
              className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_45%,rgba(168,85,247,0.18),transparent_65%)]"
              aria-hidden="true"
            />

            {/* Twinkling star field */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
              {stars.map((star, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: [0.15, 0.9, 0.15] }}
                  transition={{
                    delay: star.delay,
                    duration: star.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute rounded-full ${
                    star.neon ? "bg-neon-400" : "bg-brand-300"
                  }`}
                  style={{
                    left: `${star.left}%`,
                    top: `${star.top}%`,
                    width: star.size,
                    height: star.size,
                    boxShadow: star.neon
                      ? "0 0 8px 1px rgba(168,85,247,0.7)"
                      : "0 0 6px 1px rgba(167,139,250,0.5)",
                  }}
                />
              ))}
            </div>

            {/* Content — text letter animation in, iris exit out */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6 px-6">
              <motion.div
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-7"
              >
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      onClick={(e) => e.stopPropagation()}
                      className="text-white/85 hover:text-neon-300 transition-all duration-200 hover:scale-125 hover:drop-shadow-[0_0_14px_rgba(192,132,252,0.8)]"
                    >
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </a>
                  );
                })}
              </motion.div>

              <h1
                aria-label={NAME}
                className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 px-4 sm:px-8"
                style={{ perspective: 800 }}
              >
                {WORDS.map((word, wIdx) => {
                  const offset =
                    WORDS.slice(0, wIdx).join(" ").length + (wIdx > 0 ? 1 : 0);
                  return (
                    <span key={wIdx} className="flex whitespace-nowrap" aria-hidden="true">
                      {word.split("").map((char, i) => {
                        const idx = offset + i;
                        const dir = DIRECTIONS[idx % DIRECTIONS.length];
                        return (
                          <motion.span
                            key={i}
                            initial={{
                              opacity: 0,
                              y: dir.y + 30,
                              x: dir.x * 0.35,
                              rotateX: 70,
                              scale: 0.9,
                              filter: "blur(10px)",
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              x: 0,
                              rotateX: 0,
                              scale: 1,
                              filter: "blur(0px)",
                            }}
                            transition={{
                              duration: 0.9,
                              delay: NAME_START + idx * 0.07,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="inline-block font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white will-change-transform"
                            style={{
                              letterSpacing: "-0.02em",
                              transformOrigin: "50% 100%",
                              textShadow:
                                "0 0 48px rgba(168,85,247,0.5), 0 0 18px rgba(109,40,217,0.35)",
                            }}
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content: out of flow + hidden while intro plays (no scrollbar) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{
          opacity: loading ? 0 : 1,
          scale: loading ? 1.03 : 1,
        }}
        transition={{
          duration: loading ? 0 : 1.05,
          ease: [0.65, 0, 0.35, 1],
        }}
        className={
          loading ? "fixed inset-0 overflow-hidden pointer-events-none" : "relative"
        }
        aria-hidden={loading}
        inert={loading}
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
