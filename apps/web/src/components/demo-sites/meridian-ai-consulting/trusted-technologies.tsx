import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { TRUSTED_TECHNOLOGIES } from "./consulting-data";

/**
 * TrustedTechnologies
 *
 * Technology-stack credibility strip shown directly beneath the hero.
 * Lists the real platforms and providers engagements are built on,
 * rather than client logos, so the section reads as a factual "built
 * with" disclosure rather than an implied client/partnership claim.
 */
export function TrustedTechnologies() {
  return (
    <Section className="border-y border-white/10 bg-slate-950 py-10">
      <Container>
        <p className="text-center text-xs font-medium uppercase tracking-wide text-slate-400">
          Built With Enterprise-Grade Technology
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {TRUSTED_TECHNOLOGIES.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center text-sm font-semibold tracking-tight text-slate-400 transition-colors hover:text-white"
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
