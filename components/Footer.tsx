"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const NAV = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative border-t border-border/70 bg-muted/40 overflow-hidden"
    >
      {/* Subtle brand glow */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-40 bg-brand-500/10 rounded-full blur-[80px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 sm:px-6 max-w-6xl relative z-10 pt-12 pb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="space-y-2 max-w-sm">
            <p className="text-lg font-extrabold tracking-tight text-foreground">
              Ankit Sharma
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Frontend &amp; Full-Stack Engineer — building performant web
              experiences and secure systems.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-lg border border-border/60 bg-background/60 text-muted-foreground hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500/50 hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ankit Sharma. All rights reserved.
          </p>
          <p className="text-xs font-mono text-muted-foreground/80">
            Built with Next.js
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
