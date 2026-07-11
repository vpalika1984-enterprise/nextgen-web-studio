import { Layers, ShieldCheck, Zap } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const HIGHLIGHTS = [
  {
        icon: Layers,
        title: "One partner, every layer",
        description:
                "Design, engineering, content, and infrastructure handled by a single accountable team — no handoffs between agencies.",
  },
  {
        icon: Zap,
        title: "Built for performance",
        description:
                "Every engagement ships with Core Web Vitals, accessibility, and SEO fundamentals in place from day one, not bolted on later.",
  },
  {
        icon: ShieldCheck,
        title: "Production-grade from the start",
        description:
                "The same architecture patterns we use for enterprise clients power every tier, so your site scales as your business does.",
  },
  ];

/**
 * ServicesOverview
 *
 * Short framing statement plus three credibility highlights that set up
 * the detailed service categories and cards below.
 */
export function ServicesOverview() {
    return (
          <Section spacing="sm">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <p className="text-sm font-medium text-primary">How we help</p>
                                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                              Full-stack digital services, engineered to convert
                                  </h2>
                                  <p className="mt-4 text-muted-foreground">
                                              Whether you need a five-page brochure site or a custom AI-powered
                                              platform, we scope, design, and build it with the same rigor —
                                              so every engagement holds up under real traffic and real
                                              customers.
                                  </p>
                        </div>
                
                        <div className="mt-14 grid gap-6 sm:grid-cols-3">
                          {HIGHLIGHTS.map((item) => {
                        const Icon = item.icon;
                        return (
                                        <div
                                                          key={item.title}
                                                          className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                                                        >
                                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                                          <Icon className="h-5 w-5" />
                                                        </span>
                                                        <h3 className="mt-5 text-base font-semibold text-foreground">
                                                          {item.title}
                                                        </h3>
                                                        <p className="mt-2 text-sm text-muted-foreground">
                                                          {item.description}
                                                        </p>
                                        </div>
                                      );
                          })}
                        </div>
                </Container>
          </Section>
        );
}
