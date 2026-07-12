import { MapPin, Navigation } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { RESTAURANT_INFO } from "./restaurant-data";

/**
 * MapSection
 *
 * Styled map placeholder with a "Get Directions" link. Swap the
 * placeholder tile for a real embedded map provider when an API key is
 * available.
 */
export function MapSection() {
    const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          RESTAURANT_INFO.mapQuery
        )}`;

  return (
        <Section spacing="sm" className="bg-neutral-950 text-white">
              <Container>
                      <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-10 text-center sm:aspect-[21/9] sm:p-16">
                                <MapPin className="h-10 w-10 text-amber-400" aria-hidden="true" />
                                <div>
                                            <p className="text-sm uppercase tracking-wide text-white/40">Map Placeholder</p>
                                            <p className="mt-2 text-white/70">{RESTAURANT_INFO.address}</p>
                                </div>
                                <a
                                              href={directionsHref}
                                              target="_blank"
                                              rel="noreferrer"
                                              className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300 hover:bg-amber-500/20"
                                            >
                                            <Navigation className="h-4 w-4" aria-hidden="true" />
                                            Get Directions
                                </a>
                      </div>
              </Container>
        </Section>
      );
}
