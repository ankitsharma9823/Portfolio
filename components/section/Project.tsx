"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Default imports for image assets
import Luga1 from "@/public/Luga1.png";
import Luga2 from "@/public/luga2.png";
import Luga3 from "@/public/Luga3.png";
import Luga4 from "@/public/Luga4.png";
import Attendance1 from "@/public/Attendance1.png";
import Attendance2 from "@/public/Attendance2.png";
import Attendance3 from "@/public/Attendance3.png";
import Invoice1 from "@/public/Invoice1.png";
import Invoice2 from "@/public/Invoice2.png";
import Invoice3 from "@/public/Invoice3.png";

export interface ProjectType {
  id: string;
  number: string;
  title: string;
  category: string;
  image: StaticImageData;
  gallery: StaticImageData[];
  story: string;
  fullDescription: string;
  features: string[];
  tech: string[];
  github: string;
  demoUrl?: string;
}

export const projectsData: ProjectType[] = [
  {
    id: "luga-shop",
    number: "/01",
    title: "LUGA SHOP",
    category: "FRONTEND , BACKEND",
    image: Luga1,
    gallery: [Luga1, Luga2, Luga3, Luga4],
    story:
      "A professional full-stack e-commerce application built for modern retail experiences, combining catalog browsing, cart management, order processing, and administrative control.",
    fullDescription:
      "Luga Shop is a complete two-tier shopping platform featuring public product browsing with category navigation, secure user authentication, wishlist functionality, order cancellation and refund handling, review moderation, and a robust admin dashboard for products, categories, users, and orders.",
    features: [
      "Public product browsing & category-based navigation",
      "Cart and wishlist state management",
      "Order processing, cancellation, and refund workflows",
      "Customer review submission and admin moderation",
      "Comprehensive admin dashboard for inventory and user control",
      "Newsletter subscription and contact support messaging",
    ],
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/ankitsharma9823/luga-shop",
    demoUrl: "https://luga-shop.demo.app",
  },
  {
    id: "attendance-system",
    number: "/02",
    title: "ATTENDANCE SYSTEM",
    category: "FULL-STACK",
    image: Attendance1,
    gallery: [Attendance1, Attendance2, Attendance3],
    story:
      "A modern, full-stack attendance and workforce management platform combining a responsive web dashboard with backend services for biometric device synchronization, leave workflows, and analytics.",
    fullDescription:
      "Designed to centralize employee attendance using ZKTeco-compatible biometric machines. Features automated attendance sync, structured ledgers for daily logs, robust leave and holiday request workflows, real-time Socket.IO updates, and executive-style analytics visualization.",
    features: [
      "Biometric device integration via node-zklib with attendance sync",
      "Daily status overrides (Present, Late, Absent, Half Day, Leave)",
      "Executive analytics dashboard with Recharts visualization",
      "Leave and holiday request tracking workflows",
      "Role-based user and device administration",
      "Secure authentication with email verification and JWT rate-limiting",
    ],
    tech: ["Next.js", "React", "Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "Socket.IO"],
    github: "https://github.com/ankitsharma9823/Attendance_System",
  },
  {
    id: "invoicing-app",
    number: "/03",
    title: "INVOICING APP",
    category: "FULL-STACK , UTILITY",
    image: Invoice1,
    gallery: [Invoice1, Invoice2, Invoice3],
    story:
      "Professional, lightweight invoicing application for creating, managing, and sending invoices, clients, and products with secure authentication and automated email delivery.",
    fullDescription:
      "A robust invoicing and document tool built for freelancers and businesses needing streamlined invoice compilation. Features MongoDB persistence, JWT authentication, Cloudinary media asset hosting for company logos, and SMTP-compatible email dispatch for direct client notifications.",
    features: [
      "Create and manage invoices, clients, and services/products",
      "PDF invoice generation ready for download and email distribution",
      "Cloudinary asset hosting for company logos and media uploads",
      "Secure JWT authentication and environment-based configuration",
      "SMTP email integration for direct invoice notifications",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Nodemailer"],
    github: "https://github.com/ankitsharma9823/Invoicing-App",
  },
];

const Projects = () => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string>(projectsData[0].id);

  const currentProject =
    projectsData.find((p) => p.id === selectedId) || projectsData[0];

  return (
    <section id="projects" className="py-12 md:py-20 bg-[#f8f9fa] dark:bg-zinc-950 text-foreground">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Centered Top Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wider uppercase text-foreground">
            Projects
          </h2>
          <div className="w-10 h-0.5 bg-emerald-500 mt-2 rounded-full" />
        </div>

        {/* Centered Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive List */}
          <div className="lg:col-span-5 space-y-1">
            {projectsData.map((project) => {
              const isSelected = project.id === selectedId;

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setSelectedId(project.id)}
                  onClick={() => router.push(`/projects/${project.id}`)}
                  className="group cursor-pointer border-b border-border/50 py-3.5 transition-colors duration-200"
                >
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center justify-between pr-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-muted-foreground/60 font-semibold">
                        {project.number}
                      </span>
                      <h3
                        className={`text-base sm:text-lg font-extrabold tracking-tight transition-colors duration-200 ${
                          isSelected
                            ? "text-foreground"
                            : "text-muted-foreground/50 group-hover:text-foreground"
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      className={`w-4 h-4 transition-all duration-300 ${
                        isSelected
                          ? "text-foreground opacity-100"
                          : "text-muted-foreground/30 opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="rounded-2xl bg-card border border-border/70 shadow-xl overflow-hidden p-4 space-y-4"
              >
                {/* Image Frame */}
                <div 
                  onClick={() => router.push(`/projects/${currentProject.id}`)}
                  className="relative h-52 sm:h-64 w-full rounded-xl overflow-hidden bg-muted cursor-pointer group"
                >
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-[11px] font-mono font-medium bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                      View Project Details →
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="space-y-3 px-1">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight uppercase">
                      {currentProject.title}
                    </h3>
                    <p className="text-[10px] font-mono tracking-wider text-muted-foreground/80 uppercase mt-0.5">
                      {currentProject.category}
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {currentProject.story}
                  </p>

                  {/* Actions */}
                  <div className="space-y-2 pt-1">
                    <Link
                      href={`/projects/${currentProject.id}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-semibold py-2.5 text-[11px] tracking-wider uppercase hover:opacity-90 transition-opacity"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <div className="grid grid-cols-2 gap-2">
                      {currentProject.demoUrl && (
                        <Link
                          href={currentProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border/70 bg-background hover:bg-muted font-semibold py-2 text-[10px] tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Live Demo</span>
                        </Link>
                      )}

                      <Link
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-1.5 rounded-lg border border-border/70 bg-background hover:bg-muted font-semibold py-2 text-[10px] tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors ${
                          !currentProject.demoUrl ? "col-span-2" : ""
                        }`}
                      >
                        <FaGithub className="w-3 h-3" />
                        <span>GitHub</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;