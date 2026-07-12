import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { CHEF } from "./restaurant-data";

/**
 * ChefSection
 *
 * Introduces the executive chef with a short bio and philosophy quote.
 */
export function ChefSection() {
    return (
          <Section className="bg-neutral-900 text-white">
                <Container>
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-center">
                                  <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm uppercase tracking-wide text-white/40 lg:mx-0">
                                              Chef Portrait
                                  </div>
                                  <div>
                                              <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">
                                                            Meet the Chef
                                              </p>
                                              <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">{CHEF.name}</h2>
                                              <p className="mt-1 text-sm text-white/50">{CHEF.title}</p>
                                              <p className="mt-4 text-white/70">{CHEF.bio}</p>
                                              <blockquote className="mt-6 border-l-2 border-amber-500 pl-4 font-serif text-lg italic text-amber-200">
                                                {CHEF.philosophy}
                                              </blockquote>
                                  </div>
                        </div>
                </Container>
          </Section>
        );
}
