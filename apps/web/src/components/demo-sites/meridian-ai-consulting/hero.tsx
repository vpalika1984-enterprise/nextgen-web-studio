"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { CONSULTING_INFO } from "./consulting-data";

/**
 * Hero
 *
 * Full-bleed opening section for the Meridian AI Consulting demo site.
 * Anchors straight into the on-page Book Consultation section rather
 * than linking off-site, since this is a self-contained single-page
 * demo. The primary CTA is available above the fold rather than after
 * a scroll, since lead capture is the page's main objective.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28 text-white sm:py-36">
      <div
        className="absolute inset-0 bg-gradient-mesh opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.18),_transparent_60%)]"
        aria-hidden="true"
      />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            AI Consulting &middot; Digital Transformation
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            {CONSULTING_INFO.name}
          </h1>
          <p className="mt-4 text-lg text-cyan-300">{CONSULTING_INFO.tagline}</p>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300">
            {CONSULTING_INFO.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-500" asChild>
              <Link href="#consultation">
                Book Your Free AI Discovery Call
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10"
              asChild
            >
              <Link href="#case-studies">See Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
