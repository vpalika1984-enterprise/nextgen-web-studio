"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BackgroundGrid } from "@/components/shared/background-grid";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { EASE_PREMIUM } from "@/lib/constants";
import { DEMO_CATEGORIES } from "@/components/live-demos/demos-data";

const QUICK_CATEGORIES = DEMO_CATEGORIES.filter((category) => category.id !== "all").slice(0, 6);

/**
 * MarketplaceHero
 *
 * Above-the-fold hero for the Live Demo Marketplace. Frames the page as a
 * browsable catalog of real, interactive builds rather than static
 * screenshots, with quick links into the searchable grid below.
 */
export function MarketplaceHero() {
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
                                              Live Demo Marketplace
                                  </motion.div>
                        
                                  <motion.h1
                                                initial={{ opacity: 0, y: 16 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.05, ease: EASE_PREMIUM }}
                                                className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
                                              >
                                              Browse real websites,{" "}
                                              <span className="bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                                                            not screenshots
                                              </span>
                                  </motion.h1>
                        
                                  <motion.p
                                                initial={{ opacity: 0, y: 16 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.1, ease: EASE_PREMIUM }}
                                                className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground"
                                              >
                                              Every demo below is a fully interactive, production-quality build.
                                              Click in, click around, and see exactly what your industry's
                                              website could look like.
                                  </motion.p>
                        
                                  <motion.div
                                                initial={{ opacity: 0, y: 16 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.15, ease: EASE_PREMIUM }}
                                                className="mt-10"
                                              >
                                              <Link
                                                              href="#demo-grid"
                                                              className="mx-auto flex max-w-xl items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-left shadow-sm transition-colors hover:bg-muted/40"
                                                            >
                                                            <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                                                            <span className="text-sm text-muted-foreground">
                                                                            Search live demos by name or industry...
                                                            </span>
                                              </Link>
                                  </motion.div>
                        
                                  <motion.div
                                                initial={{ opacity: 0, y: 16 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.2, ease: EASE_PREMIUM }}
                                                className="mt-6 flex flex-wrap items-center justify-center gap-2"
                                              >
                                    {QUICK_CATEGORIES.map((category) => (
                                                              <Link
                                                                                key={category.id}
                                                                                href="#demo-grid"
                                                                                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground"
                                                                              >
                                                                {category.label}
                                                              </Link>
                                                            ))}
                                  </motion.div>
                        
                                  <motion.div
                                                initial={{ opacity: 0, y: 16 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.25, ease: EASE_PREMIUM }}
                                                className="mt-10"
                                              >
                                              <Button asChild size="lg" className="group">
                                                            <Link href="/book-consultation">
                                                                            Book a Consultation
                                                                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                                            </Link>
                                              </Button>
                                  </motion.div>
                </div>
                </Container>
          </Section>
        );
}
