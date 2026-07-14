import { MapPin } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { NEIGHBORHOODS } from "./realty-data";

/**
 * Neighborhoods
 *
 * Neighborhood highlight cards showcasing average price and lifestyle
 * highlights across the agency's core service areas.
 */
export function Neighborhoods() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Neighborhood Highlights
          </h2>
          <p className="mt-4 text-slate-600">
            Get to know the Denver metro communities where we work every day.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {NEIGHBORHOODS.map((neighborhood) => (
            <div
              key={neighborhood.id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div
                role="img"
                aria-label={neighborhood.imageAlt}
                className="flex h-40 w-full items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200"
              >
                <MapPin className="h-8 w-8 text-slate-400" aria-hidden="true" />
              </div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900">{neighborhood.name}</h3>
                <p className="whitespace-nowrap text-sm font-semibold text-amber-600">
                  Avg. {neighborhood.avgPrice}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                {neighborhood.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {neighborhood.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
