"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { AGENCY_INFO } from "./realty-data";

/**
 * Hero
 *
 * Full-bleed opening section for the Summit Realty Group demo site.
 * Anchors into the on-page Property Search and Contact sections rather
 * than linking off-site, since this is a self-contained single-page demo.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28 sm:py-36">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(217,119,6,0.12),_transparent_60%)]"
        aria-hidden="true"
      />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-600/20 bg-amber-600/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-amber-700">
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            Denver Metro Real Estate
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            {AGENCY_INFO.name}
          </h1>
          <p className="mt-4 text-lg text-amber-700">{AGENCY_INFO.tagline}</p>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600">
            {AGENCY_INFO.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-amber-600 text-white hover:bg-amber-500" asChild>
              <Link href="#properties">
                <Search className="h-4 w-4" aria-hidden="true" />
                View Listings
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
              asChild
            >
              <Link href="#contact">Contact an Agent</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
