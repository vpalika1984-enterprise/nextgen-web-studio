"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, CalendarCheck } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { RESTAURANT_INFO } from "./restaurant-data";

/**
 * Hero
 *
 * Full-bleed opening section for the Ember & Oak Steakhouse demo site.
 * Anchors straight into the on-page Reservation CTA and Full Menu
 * sections rather than linking off-site, since this is a self-contained
 * single-page demo.
 */
export function Hero() {
    return (
          <section className="relative overflow-hidden bg-neutral-950 py-28 text-white sm:py-36">
                <div
                          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(217,119,6,0.25),_transparent_60%)]"
                          aria-hidden="true"
                        />
                <Container className="relative">
                        <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                    className="mx-auto max-w-3xl text-center"
                                  >
                                  <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-amber-400">
                                              <Flame className="h-3.5 w-3.5" aria-hidden="true" />
                                              Live-Fire Steakhouse
                                  </span>
                                  <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight sm:text-6xl">
                                    {RESTAURANT_INFO.name}
                                  </h1>
                                  <p className="mt-4 text-lg text-amber-200">{RESTAURANT_INFO.tagline}</p>
                                  <p className="mx-auto mt-6 max-w-2xl text-base text-white/70">
                                    {RESTAURANT_INFO.summary}
                                  </p>
                                  <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                                              <Button size="lg" className="bg-amber-500 text-neutral-950 hover:bg-amber-400" asChild>
                                                            <Link href="#reserve">
                                                                            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                                                                            Reserve a Table
                                                            </Link>
                                              </Button>
                                              <Button
                                                              size="lg"
                                                              variant="outline"
                                                              className="border-white/20 bg-transparent text-white hover:bg-white/10"
                                                              asChild
                                                            >
                                                            <Link href="#full-menu">View Menu</Link>
                                              </Button>
                                  </div>
                        </motion.div>
                </Container>
          </section>
        );
}
