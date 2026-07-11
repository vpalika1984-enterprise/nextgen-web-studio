import Link from "next/link";
import { ArrowRight, Check, ExternalLink, LayoutGrid } from "lucide-react";

import { TechnologyBadge } from "@/components/live-demos/technology-badge";
import type { Demo } from "@/components/live-demos/demos-data";

interface DemoCardProps {
    demo: Demo;
}

/**
 * DemoCard
 *
 * Core marketplace primitive: a single live demo listing with a preview
 * placeholder, industry label, description, key features, technology
 * badges, and dual Live Demo / View Details actions.
 */
export function DemoCard({ demo }: DemoCardProps) {
    return (
          <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-primary/10 via-fuchsia-500/10 to-cyan-400/10">
                        <LayoutGrid className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
                </div>
          
                <div className="flex flex-1 flex-col p-6">
                        <span className="text-xs font-medium text-primary">{demo.categoryLabel}</span>
                        <h3 className="mt-2 text-lg font-semibold text-foreground">{demo.name}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{demo.description}</p>
                
                        <ul className="mt-4 space-y-2">
                          {demo.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                        </ul>
                
                        <div className="mt-5 flex flex-wrap gap-2">
                          {demo.technologies.map((tech) => (
                        <TechnologyBadge key={tech} name={tech} />
                      ))}
                        </div>
                
                        <div className="mt-6 flex flex-1 items-end gap-3">
                                  <a
                                                href={demo.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
                                              >
                                              Live Demo
                                              <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                  </a>
                                  <Link
                                                href={demo.detailsHref}
                                                className="group inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-accent"
                                              >
                                              View Details
                                              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                                  </Link>
                        </div>
                </div>
          </div>
        );
}
