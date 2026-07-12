import { Flame, Wheat, Wine } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const ABOUT_HIGHLIGHTS = [
  {
        icon: Flame,
        title: "Live-Fire Kitchen",
        description: "Every entree passes over an open oak hearth before it reaches the table.",
  },
  {
        icon: Wheat,
        title: "45-Day Dry-Aged Beef",
        description: "Aged in-house for a depth of flavor that can't be rushed.",
  },
  {
        icon: Wine,
        title: "300+ Bottle Reserve List",
        description: "A cellar built around the same live-fire, oak-forward philosophy.",
  },
  ];

/**
 * About
 *
 * Restaurant story section with a supporting highlight grid.
 */
export function About() {
    return (
          <Section id="about" className="bg-neutral-950 text-white">
                <Container>
                        <div className="mx-auto max-w-3xl text-center">
                                  <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Our Story</h2>
                                  <p className="mt-4 text-white/70">
                                              Ember &amp; Oak opened with a simple premise: strip away the distractions of
                                              fine dining and let live fire, dry-aged beef, and an oak-lined room do the
                                              work. No trend-chasing plating, no unnecessary flourishes, just precise,
                                              confident cooking served in a room built for long, unhurried nights out.
                                  </p>
                        </div>
                        <div className="mt-14 grid gap-6 sm:grid-cols-3">
                          {ABOUT_HIGHLIGHTS.map((highlight) => (
                        <div
                                        key={highlight.title}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-6"
                                      >
                                      <highlight.icon className="h-6 w-6 text-amber-400" aria-hidden="true" />
                                      <h3 className="mt-4 text-lg font-semibold">{highlight.title}</h3>
                                      <p className="mt-2 text-sm text-white/60">{highlight.description}</p>
                        </div>
                      ))}
                        </div>
                </Container>
          </Section>
        );
}
