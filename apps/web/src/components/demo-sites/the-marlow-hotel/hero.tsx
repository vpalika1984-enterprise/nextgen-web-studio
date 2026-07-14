"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BedDouble, MessageCircle } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { HOTEL_INFO } from "./hotel-data";

/**
 * Hero
 *
 * Full-bleed opening section for The Marlow Hotel demo site. Anchors
 * into the on-page Room Showcase and Contact sections rather than
 * linking off-site, since this is a self-contained single-page demo.
 * Leads with a direct-booking value proposition (best rate, no OTA
 * commission) alongside the room-availability CTA.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-28 text-white sm:py-36">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(180,140,90,0.25),_transparent_60%)]"
        aria-hidden="true"
      />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-amber-300">
            <BedDouble className="h-3.5 w-3.5" aria-hidden="true" />
            Boutique Hotel &middot; {HOTEL_INFO.address.city}, {HOTEL_INFO.address.state}
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            {HOTEL_INFO.name}
          </h1>
          <p className="mt-4 text-lg text-amber-300">{HOTEL_INFO.tagline}</p>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300">
            {HOTEL_INFO.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-amber-500 text-slate-900 hover:bg-amber-400" asChild>
              <Link href="#rooms">
                <BedDouble className="h-4 w-4" aria-hidden="true" />
                Check Availability
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10"
              asChild
            >
              <a href={HOTEL_INFO.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Book via WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
