"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutMe from "@/components/section/AboutMe";
import Experience from "@/components/section/Experience";
import Hero from "@/components/section/Hero";
import Project from "@/components/section/Project";
import Services from "@/components/section/Service";
import Contact from "@/components/section/Contact";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock background scroll when loading intro is active
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, [loading]);

  const firstName = "ANKIT".split("");
  const lastName = "SHARMA".split("");

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white overflow-hidden pointer-events-auto"
          >
            {/* High-visibility animated background gradient pulses */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-emerald-500/35 rounded-full blur-[100px] pointer-events-none"
            />

            {/* Glowing Grid Layer */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />

            <div className="relative flex flex-col items-center gap-6 z-20">
              
              {/* Animated Letter by Letter Name Container */}
              <div className="flex flex-col items-center gap-2">
                
                {/* First Name */}
                <div className="flex overflow-hidden">
                  {firstName.map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                        ease: [0.215, 0.61, 0.355, 1],
                      }}
                      className="font-mono text-3xl sm:text-5xl font-extrabold tracking-widest text-white inline-block drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>

                {/* Last Name */}
                <div className="flex overflow-hidden">
                  {lastName.map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.4 + index * 0.08,
                        ease: [0.215, 0.61, 0.355, 1],
                      }}
                      className="font-mono text-3xl sm:text-5xl font-extrabold tracking-widest text-emerald-400 inline-block drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>

              </div>

              {/* Vibrant Progress Bar */}
              <div className="w-40 h-1 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700 mt-2 shadow-lg">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2.1, ease: "easeInOut" }}
                  className="w-full h-full bg-emerald-400 shadow-[0_0_15px_#10b981]"
                />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <div>
          <Hero />
          <AboutMe />
          <Project />
          <Experience />
          <Services />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Page;