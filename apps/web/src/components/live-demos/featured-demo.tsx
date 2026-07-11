import Link from "next/link";
import { ArrowRight, ExternalLink, LayoutGrid } from "lucide-react";

import { TechnologyBadge } from "@/components/live-demos/technology-badge";
import type { Demo } from "@/components/live-demos/demos-data";

interface FeaturedDemoProps {
    demo: Demo;
}

/**
 * FeaturedDemo
 *
 * Large-format highlight card for a single premium demo, used on the
 * Featured Demos section above the full marketplace grid.
 */
export function FeaturedDemo({ demo }: FeaturedDemoProps) {
    return (
          <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:flex-row">
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/10 via-fuchsia-500/10 to-cyan-400/10 md:h-auto md:w-2/5">
                        <LayoutGrid className="h-10 w-10 text-muted-foreground" aria-hidden="true" />
                </div>
          
                <div className="flex flex-1 flex-col p-8">
                        <span className="text-xs font-medium text-primary">{demo.categoryLabel}</span>
                        <h3 className="mt-2 text-xl font-semibold text-foreground">{demo.name}</h3>
                        <p className="mt-3 text-sm text-muted-foreground">{demo.description}</p>
                
                        <div className="mt-5 flex flex-wrap gap-2">
                          {demo.technologies.map((tech) => (
                        <TechnologyBadge key={tech} name={tech} />
                      ))}
                        </div>
                
                        <div className="mt-6 flex flex-wrap items-center gap-4">
                                  <a
                                                href={demo.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
                                              >
                                              Live Demo
                                              <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                  </a>
                                  <Link
                                                href={demo.detailsHref}
                                                className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                                              >
                                              View details
                                              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                                  </Link>
                        </div>
                </div>
          </div>
        );
}
