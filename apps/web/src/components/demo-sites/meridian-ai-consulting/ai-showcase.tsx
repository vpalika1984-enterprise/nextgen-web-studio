import { Check } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { AI_SHOWCASE } from "./consulting-data";

/**
 * AiShowcase
 *
 * The signature section: interactive AI solution cards illustrating the
 * kinds of products Meridian builds for clients. "View Demo" buttons are
 * intentionally disabled (native `disabled` attribute, not a dead link)
 * since no interactive demo is wired up behind them.
 */
export function AiShowcase() {
  return (
    <Section id="ai-showcase" className="bg-slate-950 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-cyan-400">Signature Capability</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Interactive AI Solutions
          </h2>
          <p className="mt-4 text-slate-300">
            A preview of the AI products and agents we design, build, and deploy for clients.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AI_SHOWCASE.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="glass flex flex-col gap-4 rounded-2xl p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>
                <ul className="flex flex-1 flex-col gap-2">
                  {item.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="mt-2 border-white/20 bg-white/5 text-white"
                  disabled
                  aria-label={`View demo for ${item.title} (coming soon)`}
                >
                  View Demo
                </Button>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
