import { MapPin, Navigation } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { CLINIC_INFO } from "./clinic-data";

/**
 * MapSection
 *
 * Styled map placeholder with a "Get Directions" link. Swap the
 * placeholder tile for a real embedded map provider when an API key is
 * available.
 */
export function MapSection() {
    const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          CLINIC_INFO.mapQuery
        )}`;

  return (
        <Section spacing="sm" className="bg-slate-50">
              <Container>
                      <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-slate-200 bg-white p-10 text-center sm:aspect-[21/9] sm:p-16">
                                <MapPin className="h-10 w-10 text-teal-600" aria-hidden="true" />
                                <div>
                                            <p className="text-sm uppercase tracking-wide text-slate-400">Map Placeholder</p>
                                            <p className="mt-2 text-slate-600">{CLINIC_INFO.address}</p>
                                </div>
                                <a
                                              href={directionsHref}
                                              target="_blank"
                                              rel="noreferrer"
                                              className="inline-flex items-center gap-2 rounded-full border border-teal-600/30 bg-teal-600/10 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-600/20"
                                            >
                                            <Navigation className="h-4 w-4" aria-hidden="true" />
                                            Get Directions
                                </a>
                      </div>
              </Container>
        </Section>
      );
}
