import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import type { Demo } from "@/components/live-demos/demos-data";

interface TargetIndustriesProps {
    demo: Demo;
}

/**
 * TargetIndustries
 *
 * Lists the closely related business types this demo template fits,
 * helping visitors from adjacent industries see themselves in the build.
 * Renders nothing if a catalog entry has not supplied target industries
 * yet, so partially-populated demos never show a broken section.
 */
export function TargetIndustries({ demo }: TargetIndustriesProps) {
    if (!demo.targetIndustries || demo.targetIndustries.length === 0) {
          return null;
    }

  return (
        <Section className="py-24">
              <Container className="max-w-4xl">
                      <div className="text-center">
                                <p className="text-sm font-medium text-primary">Target Industries</p>
                                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                            Who this build is a great fit for
                                </h2>
                      </div>
              
                      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                        {demo.targetIndustries.map((industry) => (
                      <span
                                      key={industry}
                                      className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground"
                                    >
                        {industry}
                      </span>
                    ))}
                      </div>
              </Container>
        </Section>
      );
}
