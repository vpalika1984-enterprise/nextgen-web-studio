import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { AgentProfiles } from "@/components/demo-sites/shared/agent-profiles";
import { AGENTS } from "./realty-data";

/**
 * FeaturedAgents
 *
 * Real Estate-specific presentation wrapper around the shared
 * AgentProfiles component.
 */
export function FeaturedAgents() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Meet Our Agents
          </h2>
          <p className="mt-4 text-slate-600">
            Experienced professionals dedicated to guiding you home.
          </p>
        </div>
        <div className="mt-12">
          <AgentProfiles agents={AGENTS} />
        </div>
      </Container>
    </Section>
  );
}
