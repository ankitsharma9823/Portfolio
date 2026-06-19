"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetClose 
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          ANKIT
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="ml-2 pl-2 border-l border-border">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border">
              <nav className="flex flex-col gap-6 mt-20 px-5">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-lg font-medium text-foreground hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;