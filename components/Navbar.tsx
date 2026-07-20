"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Briefcase, 
  Cpu, 
  Mail, 
  Compass, 
  Menu, 
  X,
  ArrowUpRight
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Experience", href: "#experience", icon: Compass },
  { name: "Services", href: "#services", icon: Cpu },
  { name: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ======================================================== */}
      {/* 1. DESKTOP: Sleek Floating Glass Pill Dock (Side)          */}
      {/* ======================================================== */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3 p-2.5 rounded-full bg-background/70 backdrop-blur-2xl border border-border/60 shadow-2xl shadow-black/10 dark:shadow-neutral-950/20"
      >
        <Link 
          href="/" 
          className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-foreground text-background font-black text-xs tracking-tighter hover:scale-105 transition-all duration-300 shadow-md"
        >
          AK
          <span className="absolute left-16 px-3 py-1.5 rounded-xl bg-popover/90 backdrop-blur-md text-popover-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl pointer-events-none whitespace-nowrap border border-border/80 translate-x-2 group-hover:translate-x-0">
            Ankit Portfolio
          </span>
        </Link>

        <div className="w-5 h-[1px] bg-border/80 my-0.5" />

        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                className="group relative flex items-center justify-center w-10 h-10 rounded-full text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                {isActive && (
                  <motion.div
                    layoutId="desktopActiveIndicator"
                    className="absolute inset-0 bg-foreground/10 rounded-full border border-foreground/20 shadow-inner"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`w-4 h-4 relative z-10 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-foreground" : ""}`} />
                
                <span className="absolute left-16 px-3 py-1.5 rounded-xl bg-popover/90 backdrop-blur-md text-popover-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl pointer-events-none whitespace-nowrap border border-border/80 translate-x-2 group-hover:translate-x-0">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="w-5 h-[1px] bg-border/80 my-0.5" />

        <div className="hover:scale-105 transition-transform duration-300">
          <ThemeToggle />
        </div>
      </motion.aside>

      {/* ======================================================== */}
      {/* 2. MOBILE: Floating Dynamic Island Header Bar             */}
      {/* ======================================================== */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-4 right-4 z-50 md:hidden"
      >
        <div className={`flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all duration-300 ${
          scrolled 
            ? "bg-background/80 backdrop-blur-2xl border border-border/60 shadow-xl shadow-black/10" 
            : "bg-background/50 backdrop-blur-xl border border-border/40 shadow-lg"
        }`}>
          <Link 
            href="/" 
            className="flex items-center gap-2 font-black tracking-tighter text-base text-foreground group"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-foreground text-background text-xs shadow-sm">
              AS
            </span>
            <span>ANKIT</span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative p-2 rounded-xl bg-muted/60 border border-border/60 text-foreground focus:outline-none shadow-sm"
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} className="flex items-center justify-center">
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }} className="flex items-center justify-center">
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* ======================================================== */}
      {/* 3. MOBILE: Immersive Modern Fullscreen Drawer             */}
      {/* ======================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl md:hidden flex flex-col justify-between px-6 pt-28 pb-8 overflow-hidden"
          >
            <div className="relative z-10 flex flex-col gap-6">
             

              {/* Clean Minimalist Staggered Cards for Mobile Menu */}
              <nav className="grid grid-cols-1 gap-3">
                {NAV_ITEMS.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href;

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.07 + 0.1, type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveSection(item.href);
                          setMobileMenuOpen(false);
                        }}
                        className={`relative flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group overflow-hidden ${
                          isActive 
                            ? "bg-foreground/5 border-foreground/30 text-foreground shadow-sm" 
                            : "bg-muted/30 backdrop-blur-md border-border/50 text-foreground hover:bg-muted/70"
                        }`}
                      >
                        <div className="relative z-10 flex items-center gap-4">
                          <span className={`p-2.5 rounded-xl border transition-transform duration-300 group-hover:scale-110 shadow-sm ${
                            isActive ? "bg-foreground text-background border-transparent" : "bg-background/80 border-border/80 text-muted-foreground"
                          }`}>
                            <Icon className="w-5 h-5" />
                          </span>
                          <div>
                            <span className="text-lg font-bold tracking-tight block">{item.name}</span>
                           
                          </div>
                        </div>

                        <div className="relative z-10 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-background/50 border border-border/60 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Bottom CTA & Footer inside Mobile Drawer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="relative z-10 flex flex-col gap-4 pt-4 border-t border-border/40"
            >
              <Button
                asChild
                size="lg"
                className="w-full rounded-2xl bg-foreground text-background hover:bg-foreground/90 font-medium shadow-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="#contact" className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" /> Let&apos;s Build Something Together
                </Link>
              </Button>
              <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground font-mono">
                <span>© {new Date().getFullYear()} Ankit. All Rights Reserved.</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;