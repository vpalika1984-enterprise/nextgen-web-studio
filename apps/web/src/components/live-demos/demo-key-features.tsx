import { Check } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import type { Demo } from "@/components/live-demos/demos-data";

interface DemoKeyFeaturesProps {
    demo: Demo;
}

/**
 * DemoKeyFeatures
 *
 * Expanded, standalone presentation of a demo's key features on its detail
 * page (the same feature list DemoCard shows in condensed form on the
 * marketplace grid).
 */
export function DemoKeyFeatures({ demo }: DemoKeyFeaturesProps) {
    return (
          <Section className="py-24">
                <Container className="max-w-4xl">
                        <div className="text-center">
                                  <p className="text-sm font-medium text-primary">Key Features</p>
                                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                              What makes this build work
                                  </h2>
                        </div>
                
                        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
                          {demo.features.map((feature) => (
                        <li
                                        key={feature}
                                        className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
                                      >
                                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                                      <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                        </ul>
                </Container>
          </Section>
        );
}
