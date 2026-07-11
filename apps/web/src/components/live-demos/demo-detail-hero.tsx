"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BackgroundGrid } from "@/components/shared/background-grid";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { EASE_PREMIUM } from "@/lib/constants";
import type { Demo } from "@/components/live-demos/demos-data";

const STATUS_LABELS: Record<string, string> = {
    featured: "Featured",
    new: "New",
    "coming-soon": "Coming Soon",
};

interface DemoDetailHeroProps {
    demo: Demo;
}

/**
 * DemoDetailHero
 *
 * Above-the-fold hero for an individual live demo detail page. Frames the
 * demo's industry and value proposition, then routes visitors to the live
 * build itself or into a consultation to request something similar.
 * Renders an optional status badge, source link, and brochure link when
 * a demo record supplies them, so richer catalog entries render more
 * without any change to this component.
 */
export function DemoDetailHero({ demo }: DemoDetailHeroProps) {
    const statusLabel = demo.status ? STATUS_LABELS[demo.status] : undefined;

  return (
        <Section className="relative isolate overflow-hidden pb-20 pt-20 sm:pt-28">
              <BackgroundGrid />
        
              <Container>
                      <div className="mx-auto max-w-3xl text-center">
                                <motion.div
                                              initial={{ opacity: 0, y: 12 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{ duration: 0.5, ease: EASE_PREMIUM }}
                                              className="flex flex-wrap items-center justify-center gap-2"
                                            >
                                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                                              {demo.categoryLabel}
                                            </span>
                                  {statusLabel && (
                                                            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
                                                              {statusLabel}
                                                            </span>
                                            )}
                                </motion.div>
                      
                                <motion.h1
                                              initial={{ opacity: 0, y: 16 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{ duration: 0.6, delay: 0.05, ease: EASE_PREMIUM }}
                                              className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
                                            >
                                  {demo.name}
                                </motion.h1>
                      
                                <motion.p
                                              initial={{ opacity: 0, y: 16 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{ duration: 0.6, delay: 0.1, ease: EASE_PREMIUM }}
                                              className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground"
                                            >
                                  {demo.description}
                                </motion.p>
                      
                                <motion.div
                                              initial={{ opacity: 0, y: 16 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{ duration: 0.6, delay: 0.15, ease: EASE_PREMIUM }}
                                              className="mt-10 flex flex-wrap items-center justify-center gap-3"
                                            >
                                            <a
                                                            href={demo.liveUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
                                                          >
                                                          Launch Live Demo
                                                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                            </a>
                                            <Button asChild size="lg" variant="outline" className="group">
                                                          <Link href="/book-consultation">
                                                                          Request a Similar Website
                                                                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                                          </Link>
                                            </Button>
                                </motion.div>
                      
                        {(demo.repositoryUrl || demo.brochureUrl) && (
                      <motion.div
                                      initial={{ opacity: 0, y: 16 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.6, delay: 0.2, ease: EASE_PREMIUM }}
                                      className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm"
                                    >
                        {demo.repositoryUrl && (
                                                      <a
                                                                          href={demo.repositoryUrl}
                                                                          target="_blank"
                                                                          rel="noopener noreferrer"
                                                                          className="font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                                                                        >
                                                                        View Source
                                                      </a>
                                    )}
                        {demo.brochureUrl && (
                                                      <a
                                                                          href={demo.brochureUrl}
                                                                          className="font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                                                                        >
                                                                        Download Brochure
                                                      </a>
                                    )}
                      </motion.div>
                    )}
                      </div>
              </Container>
        </Section>
      );

}
