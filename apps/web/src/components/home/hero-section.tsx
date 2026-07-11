"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BackgroundGrid } from "@/components/shared/background-grid";

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

/**
 * HeroSection
 *
 * Above-the-fold homepage hero. Animated headline, supporting copy, dual
 * CTAs, and a floating product preview card. BackgroundGrid provides the
 * ambient aurora/grid backdrop defined in the Visual Design System.
 */
export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-20 sm:pt-28 lg:pt-36">
      <BackgroundGrid />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_PREMIUM }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            Trusted by 200+ businesses worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: EASE_PREMIUM }}
            className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            Building Websites That{" "}
            <span className="bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              Grow Businesses
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE_PREMIUM }}
            className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground"
          >
            NextGen Web Studio designs and engineers premium websites, AI
            products, and digital experiences for startups, enterprises, and
            everything in between.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE_PREMIUM }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="group">
              <Link href="/book-consultation">
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="/live-demos">
                <PlayCircle className="h-4 w-4" />
                Explore Live Demos
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE_PREMIUM }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-border bg-muted/40 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <div className="aspect-[16/9] w-full bg-gradient-to-br from-primary/10 via-fuchsia-500/10 to-cyan-400/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
