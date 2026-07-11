import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { TechnologyBadge } from "@/components/live-demos/technology-badge";
import type { Demo } from "@/components/live-demos/demos-data";

interface DemoTechStackProps {
    demo: Demo;
}

/**
 * DemoTechStack
 *
 * Lists the technologies powering a single demo, reusing the shared
 * TechnologyBadge primitive already used on the marketplace grid.
 */
export function DemoTechStack({ demo }: DemoTechStackProps) {
    return (
          <Section className="py-24">
                <Container className="max-w-4xl">
                        <div className="text-center">
                                  <p className="text-sm font-medium text-primary">Technology Stack</p>
                                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                              Built on a modern, production-grade stack
                                  </h2>
                        </div>
                
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                          {demo.technologies.map((tech) => (
                        <TechnologyBadge key={tech} name={tech} />
                      ))}
                        </div>
                </Container>
          </Section>
        );
}
