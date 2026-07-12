import Link from "next/link";
import { AlertCircle, ArrowRight, Check, Rocket } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { INDUSTRIES } from "./industries-data";

/**
 * IndustryCards
 *
 * Detailed, individually anchored cards for every industry: the
 * challenges that industry faces, our solution, core features,
 * technologies used, and a CTA that links to a real live demo when one
 * exists, otherwise to the matching Demo Detail page or Services page so
 * every card resolves to a real destination.
 */
export function IndustryCards() {
    return (
          <Section className="py-24">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <p className="text-sm font-medium text-primary">Industry solutions</p>
                                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                              Built around your industry&apos;s real challenges
                                  </h2>
                        </div>
                
                        <div className="mt-14 grid gap-6 lg:grid-cols-2">
                          {INDUSTRIES.map((industry) => {
                        const Icon = industry.icon;
                        return (
                                        <div
                                                          key={industry.id}
                                                          id={industry.id}
                                                          className="scroll-mt-24 flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
                                                        >
                                                        <div className="flex items-center gap-3">
                                                                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                                                              <Icon className="h-5 w-5" />
                                                                          </span>
                                                                          <h3 className="text-lg font-semibold text-foreground">
                                                                            {industry.label}
                                                                          </h3>
                                                        </div>
                                        
                                                        <p className="mt-4 text-sm text-muted-foreground">
                                                          {industry.summary}
                                                        </p>
                                        
                                                        <div className="mt-6">
                                                                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                                                                              Business challenges
                                                                          </p>
                                                                          <ul className="mt-3 space-y-2">
                                                                            {industry.challenges.map((challenge) => (
                                                                                <li
                                                                                                          key={challenge}
                                                                                                          className="flex items-start gap-2 text-sm text-foreground"
                                                                                                        >
                                                                                                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                                                                                  {challenge}
                                                                                  </li>
                                                                              ))}
                                                                          </ul>
                                                        </div>
                                        
                                                        <div className="mt-6">
                                                                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                                                                              Our solution
                                                                          </p>
                                                                          <p className="mt-3 text-sm text-foreground">{industry.solution}</p>
                                                        </div>
                                        
                                                        <div className="mt-6">
                                                                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                                                                              Core features
                                                                          </p>
                                                                          <ul className="mt-3 space-y-2">
                                                                            {industry.features.map((feature) => (
                                                                                <li
                                                                                                          key={feature}
                                                                                                          className="flex items-start gap-2 text-sm text-foreground"
                                                                                                        >
                                                                                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                                                  {feature}
                                                                                  </li>
                                                                              ))}
                                                                          </ul>
                                                        </div>
                                        
                                                        <div className="mt-6">
                                                                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                                                                              Technologies
                                                                          </p>
                                                                          <div className="mt-3 flex flex-wrap gap-2">
                                                                            {industry.technologies.map((tech) => (
                                                                                <span
                                                                                                          key={tech}
                                                                                                          className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground"
                                                                                                        >
                                                                                  {tech}
                                                                                  </span>
                                                                              ))}
                                                                          </div>
                                                        </div>
                                        
                                                        <div className="mt-8 flex flex-1 items-end justify-between gap-4">
                                                                          <span className="text-sm font-medium text-muted-foreground">
                                                                                              From {industry.startingAt}
                                                                          </span>
                                                                          <Link
                                                                                                href={industry.cta.href}
                                                                                                className="group flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                                                                                              >
                                                                            {industry.cta.isLiveDemo ? (
                                                                                                                      <Rocket className="h-4 w-4" />
                                                                                                                    ) : null}
                                                                            {industry.cta.label}
                                                                                              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                                                          </Link>
                                                        </div>
                                        </div>
                                      );
          })}
                        </div>
                </Container>
          </Section>
        );
}
