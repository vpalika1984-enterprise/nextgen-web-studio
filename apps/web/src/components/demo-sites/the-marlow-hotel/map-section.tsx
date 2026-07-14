import { MapPin, Navigation } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { HOTEL_INFO } from "./hotel-data";

/**
 * MapSection
 *
 * Styled map placeholder with a "Get Directions" link, also useful for
 * planning the Airport Transfers business feature. Swap the placeholder
 * tile for a real embedded map provider when an API key is available.
 */
export function MapSection() {
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    HOTEL_INFO.mapEmbedQuery
  )}`;

  return (
    <Section spacing="sm" className="bg-slate-50">
      <Container>
        <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-slate-200 bg-white p-10 text-center sm:aspect-[21/9] sm:p-16">
          <MapPin className="h-10 w-10 text-amber-600" aria-hidden="true" />
          <div>
            <p className="text-sm uppercase tracking-wide text-slate-400">Map Placeholder</p>
            <p className="mt-2 text-slate-600">
              {HOTEL_INFO.address.street}, {HOTEL_INFO.address.city}, {HOTEL_INFO.address.state}{" "}
              {HOTEL_INFO.address.zip}
            </p>
          </div>
          <a
            href={directionsHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-amber-600/30 bg-amber-600/10 px-4 py-2 text-sm font-medium text-amber-700 hover:bg-amber-600/20"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Get Directions
          </a>
        </div>
      </Container>
    </Section>
  );
}
