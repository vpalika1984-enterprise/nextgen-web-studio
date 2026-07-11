import { Compass, PenTool, Code2, Rocket } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const TIMELINE_STAGES = [
  {
        icon: Compass,
        title: "Discovery & Planning",
        duration: "Week 1",
        description:
                "We map your goals, users, and content into a clear technical and design plan.",
  },
  {
        icon: PenTool,
        title: "Design",
        duration: "Weeks 2-3",
        description:
                "High-fidelity designs are built around your brand, then refined with your feedback.",
  },
  {
        icon: Code2,
        title: "Development & Integration",
        duration: "Weeks 4-6",
        description:
                "The approved design is engineered on the same production-grade stack shown above.",
  },
  {
        icon: Rocket,
        title: "Launch & Support",
        duration: "Week 7+",
        description:
                "We launch, monitor performance, and stay on to support and extend the build.",
  },
  ] as const;

/**
 * DevelopmentTimeline
 *
 * Generic, reusable four-stage engagement timeline shown on every demo
 * detail page to set expectations for how a similar project would be
 * delivered. Not tied to any single Demo record.
 */
export function DevelopmentTimeline() {
    return (
          <Section className="bg-muted/20 py-24">
                <Container className="max-w-5xl">
                        <div className="text-center">
                                  <p className="text-sm font-medium text-primary">Development Timeline</p>
                                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                              How we would build yours
                                  </h2>
                        </div>
                
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                          {TIMELINE_STAGES.map((stage) => (
                        <div key={stage.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                      <stage.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                                      <p className="mt-4 text-xs font-medium text-muted-foreground">{stage.duration}</p>
                                      <h3 className="mt-1 text-base font-semibold text-foreground">{stage.title}</h3>
                                      <p className="mt-2 text-sm text-muted-foreground">{stage.description}</p>
                        </div>
                      ))}
                        </div>
                </Container>
          </Section>
        );
}
