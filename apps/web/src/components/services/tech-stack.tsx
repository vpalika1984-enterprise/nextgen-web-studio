import {
    Atom,
    Cloud,
    Code2,
    CreditCard,
    Database,
    FileCode,
    LayoutTemplate,
    LineChart,
    Palette,
    RefreshCw,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const STACK = [
  { name: "Next.js 15", icon: Code2 },
  { name: "React 19", icon: Atom },
  { name: "TypeScript", icon: FileCode },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Shadcn UI", icon: LayoutTemplate },
  { name: "Framer Motion", icon: Sparkles },
  { name: "Supabase", icon: Database },
  { name: "Clerk Auth", icon: ShieldCheck },
  { name: "Stripe", icon: CreditCard },
  { name: "React Query", icon: RefreshCw },
  { name: "Recharts", icon: LineChart },
  { name: "Vercel", icon: Cloud },
  ];
/**
 * TechStack
 *
 * Grid of the core technologies every project is built on, reinforcing
 * that services are delivered on a consistent, production-grade stack.
 */
export function TechStack() {
    return (
          <Section className="py-24">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <p className="text-sm font-medium text-primary">Technology</p>
                                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                              A modern, production-grade stack
                                  </h2>
                                  <p className="mt-4 text-muted-foreground">
                                              Every project is built on the same battle-tested tools our
                                              engineering team trusts for enterprise clients — no experimental
                                              dependencies, no shortcuts.
                                  </p>
                        </div>
                
                        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                          {STACK.map((tech) => {
                        const Icon = tech.icon;
                        return (
                                        <div
                                                          key={tech.name}
                                                          className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
                                                        >
                                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                                          <Icon className="h-5 w-5" />
                                                        </span>
                                                        <span className="text-sm font-medium text-foreground">
                                                          {tech.name}
                                                        </span>
                                        </div>
                                      );
          })}
                        </div>
                </Container>
          </Section>
        );
}
