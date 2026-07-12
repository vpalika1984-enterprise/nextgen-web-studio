"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BackgroundGrid } from "@/components/shared/background-grid";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { EASE_PREMIUM } from "@/lib/constants";

/**
 * IndustriesHero
 *
 * Above-the-fold hero for the Industries page. Frames the page as a
 * strategic navigation hub into services, live demos, and future
 * case studies, rather than a static list of verticals.
 */
export function IndustriesHero() {
    return (
          <Section className="relative isolate overflow-hidden pb-20 pt-20 sm:pt-28">
                <BackgroundGrid />
          
                <Container>
                        <div className="mx-auto max-w-3xl text-center">
                                  <motion.div
                                                initial={{ opacity: 0, y: 12 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, ease: EASE_PREMIUM }}
                                                className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-1.5 text-xs font-medium text-muted-foreground"
                                              >
                                              Industries
                                  </motion.div>
                        
                                  <motion.h1
                                                initial={{ opacity: 0, y: 16 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.05, ease: EASE_PREMIUM }}
                                                className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
                                              >
                                              Websites built for how{" "}
                                              <span className="bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                                                            your industry
                                              </span>{" "}
                                              actually works
                                  </motion.h1>
                        
                                  <motion.p
                                                initial={{ opacity: 0, y: 16 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.1, ease: EASE_PREMIUM }}
                                                className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground"
                                              >
                                              No generic templates. Every engagement starts with the
                                              challenges your industry actually faces, then pairs them with
                                              the exact features, integrations, and live demos that solve them.
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
                                                                            <Rocket className="h-4 w-4" />
                                                                            Browse Live Demos
                                                            </Link>
                                              </Button>
                                  </motion.div>
                        </div>
                </Container>
          </Section>
        );
}
