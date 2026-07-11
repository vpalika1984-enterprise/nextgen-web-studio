"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { cn } from "@/lib/utils";
import { CommandPaletteProvider } from "./command-palette-context";
import { CommandPaletteDialog } from "./command-palette-dialog";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { NavLogo } from "./nav-logo";
import { NAV_CTA } from "./nav-config";
import { SearchTrigger } from "./search-trigger";

/**
 * Navbar
 *
 * Sticky primary site header. Transparent over the hero on the homepage,
 * gaining a glassmorphism background once the user scrolls past a small
 * threshold. Houses the logo, desktop mega-menu nav, search trigger,
 * command palette, theme toggle, mobile nav, and primary CTA.
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 16);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <CommandPaletteProvider>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          isScrolled
            ? "border-b border-border/60 bg-background/80 backdrop-blur-md shadow-sm"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <NavLogo />
            <DesktopNav />
          </div>

          <div className="flex items-center gap-2">
            <SearchTrigger />
            <ThemeToggle />
            <Button asChild size="sm" className="hidden lg:inline-flex">
              <Link href={NAV_CTA.href}>{NAV_CTA.label}</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <CommandPaletteDialog />
    </CommandPaletteProvider>
  );
}
