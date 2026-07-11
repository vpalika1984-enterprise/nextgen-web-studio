import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { DemoCard } from "@/components/live-demos/demo-card";
import type { Demo } from "@/components/live-demos/demos-data";

interface RelatedDemosProps {
    demos: Demo[];
}

/**
 * RelatedDemos
 *
 * Surfaces a handful of related demos (same category first, then a
 * marketplace-wide fallback, computed by getRelatedDemos) using the same
 * DemoCard primitive as the main marketplace grid, keeping visitors
 * exploring after they view one demo.
 */
export function RelatedDemos({ demos }: RelatedDemosProps) {
    if (demos.length === 0) {
          return null;
    }

  return (
        <Section className="py-24">
              <Container>
                      <div className="text-center">
                                <p className="text-sm font-medium text-primary">Related Demos</p>
                                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                            Explore more live demos
                                </h2>
                      </div>
              
                      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {demos.map((demo) => (
                      <DemoCard key={demo.id} demo={demo} />
                    ))}
                      </div>
              </Container>
        </Section>
      );
}
