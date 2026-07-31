"use client";

import React, { use, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Code,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "@/components/section/Project";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Fallback to project.image if gallery is missing or empty
  const galleryImages: StaticImageData[] =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  const [activeImage, setActiveImage] = useState<StaticImageData>(galleryImages[0]);

  return (
    <main className="min-h-screen bg-background text-foreground py-6 sm:py-10 relative">
      <div className="container mx-auto px-4 max-w-5xl space-y-6">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between border-b border-border/40 pb-3">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-emerald-500 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects</span>
          </Link>

          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-medium uppercase">
            {project.category}
          </span>
        </div>

        {/* Hero Showcase with Active Image & Thumbnails */}
        <div className="space-y-3">
          <div className="relative w-full h-[280px] sm:h-[420px] rounded-2xl border border-border/80 bg-black/40 overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage.src}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.6 }}
                transition={{ duration: 0.15 }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeImage}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>

            {/* Overlaid Title */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent p-4 sm:p-6 flex flex-col justify-end">
              <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                {project.title}
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1 max-w-2xl mt-1">
                {project.story}
              </p>
            </div>
          </div>

          {/* Interactive Thumbnail Carousel Bar */}
          {galleryImages.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-20 h-12 rounded-lg overflow-hidden border transition-all shrink-0 ${
                    activeImage.src === img.src
                      ? "border-emerald-500 ring-2 ring-emerald-500/20 scale-95"
                      : "border-border/50 opacity-40 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Screen ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Developer Briefing & Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-2">
          
          {/* Left Side: Overview & Links */}
          <div className="md:col-span-5 space-y-4">
            <div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md p-5 space-y-4">
              
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider border-b border-border/40 pb-2.5">
                <Terminal className="w-4 h-4" />
                <span>Project Log</span>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-semibold flex items-center gap-1">
                  <Code className="w-3 h-3 text-emerald-500" /> Summary
                </span>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2 pt-2 border-t border-border/40">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-semibold flex items-center gap-1">
                  <Layers className="w-3 h-3 text-emerald-500" /> Technologies
                </span>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted/80 border border-border/60 text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-border/40 flex flex-col gap-2">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-foreground text-background font-semibold py-2 text-xs hover:opacity-90 transition-opacity"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </Link>

                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-background hover:bg-muted font-semibold py-2 text-xs transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Open Live Application</span>
                  </Link>
                )}
              </div>

            </div>
          </div>

          {/* Right Side: Features */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md p-5 space-y-4 h-full">
              
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider border-b border-border/40 pb-2.5">
                <Cpu className="w-4 h-4" />
                <span>Capabilities & Highlights</span>
              </div>

              <div className="space-y-2.5">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl border border-border/50 bg-background/40"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground/90 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
}