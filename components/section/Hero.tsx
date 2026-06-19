"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Import Variants type
import profile from "@/public/Profile.png";

const Hero = () => {
  // Explicitly typing as Variants solves the TypeScript issue
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } // "as const" fixes the string type mismatch
    },
  };

  return (
    <section id="hero" className="flex flex-col justify-center container mx-auto px-6 py-5 lg:py-10 min-h-screen w-full">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        
        {/* Text Content Column */}
        <div className="flex flex-col justify-center items-start">
      

          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
            ANKIT <br />
            <span className="text-muted-foreground">SHARMA.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl max-w-xl mb-10 leading-relaxed font-mono text-muted-foreground">
            Full-stack developer building robust, scalable software. 
            Specializing in Next.js, TypeScript, and high-performance system architectures.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link href="#projects">
              <Button size="lg" className="rounded-none px-8 font-bold text-lg hover:translate-x-1 transition-transform">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" size="lg" className="rounded-none px-8 text-lg border-2">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Image Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative aspect-square lg:aspect-auto lg:h-150 w-full shadow-2xl overflow-hidden rounded-2xl transition-all duration-700 ease-in-out"
        >
          <Image
            src={profile}
            alt="Ankit Sharma"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%] pointer-events-none"></div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;