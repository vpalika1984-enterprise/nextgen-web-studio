import { TrendingUp } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import type { Demo } from "@/components/live-demos/demos-data";

interface BusinessBenefitsProps {
    demo: Demo;
}

/**
 * BusinessBenefits
 *
 * Translates a demo's technical features into the business outcomes a
 * prospective client actually cares about. Renders nothing if a catalog
 * entry has not supplied benefits yet, so partially-populated demos never
 * show a broken section.
 */
export function BusinessBenefits({ demo }: BusinessBenefitsProps) {
    if (!demo.businessBenefits || demo.businessBenefits.length === 0) {
          return null;
    }

  return (
        <Section className="bg-muted/20 py-24">
              <Container className="max-w-4xl">
                      <div className="text-center">
                                <p className="text-sm font-medium text-primary">Business Benefits</p>
                                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                            Why this build pays for itself
                                </h2>
                      </div>
              
                      <div className="mt-12 grid gap-6 sm:grid-cols-3">
                        {demo.businessBenefits.map((benefit) => (
                      <div key={benefit} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                    <TrendingUp className="h-5 w-5 text-primary" aria-hidden="true" />
                                    <p className="mt-4 text-sm text-foreground">{benefit}</p>
                      </div>
                    ))}
                      </div>
              </Container>
        </Section>
      );
}
