"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// 1. Import all images at the top
import Project1 from "@/public/Project1.png";

const projects = [
  {
    title: "Luga Shop",
    image: Project1, // Use the imported variable directly
    story: "I wanted to simplify the online shopping experience by building a platform that felt as fast as a native app.",
    tech: ["Next.js", "MongoDB", "Tailwind", "Stripe"],
    github: "https://github.com/ankitsharma9823/luga-shop",
    live: "#",
  },
  {
    title: "Attendance System",
    image: Project1,
    story: "Managing data manually is a recipe for error. I built this system to automate the mundane.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/ankitsharma9823/Attendance_System",
    live: "#",
  },
  {
    title: "Invoicing App",
    image: Project1,
    story: "Freelancers struggle with professional document generation. This tool was my answer.",
    tech: ["Next.js", "TypeScript", "Tailwind", "PDFKit"],
    github: "https://github.com/ankitsharma9823/Invoicing-App",
    live: "#",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 container mx-auto px-6">
      <div className="mb-16 border-l-4 border-foreground pl-6">
        <h3 className="text-2xl md:text-4xl font-bold tracking-tighter">THE_STORY_BEHIND_THE_CODE</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="h-full"
          >
            {/* Removed the trailing '}' that was causing a syntax error */}
            <Card className="group flex flex-col h-full p-1 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] rounded-2xl overflow-hidden">
              <div className="relative h-70 w-full overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-99 rounded-2xl" 
                />
              </div>

              <div className="grow p-6">
                <span className="font-mono text-xs text-muted-foreground mb-4 block">0{index + 1}.</span>
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-2xl font-bold tracking-tight">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="italic text-muted-foreground mb-6 font-serif text-base">"{project.story}"</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-none border border-foreground/20 font-mono text-xs uppercase">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
              
              <CardFooter className="p-6 pt-0 gap-3 mt-auto">
                <Link href={project.github} target="_blank" className="w-full">
                  <Button variant="outline" className="w-full rounded-none border-2 font-bold uppercase hover:bg-foreground hover:text-background transition-colors">
                    <FaGithub className="mr-2 h-4 w-4" /> Code
                  </Button>
                </Link>
                <Link href={project.live} target="_blank" className="w-full">
                  <Button className="w-full rounded-none bg-foreground text-background font-bold uppercase hover:opacity-90 transition-opacity">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;