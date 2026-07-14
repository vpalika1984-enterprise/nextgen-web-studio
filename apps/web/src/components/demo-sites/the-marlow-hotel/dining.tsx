import { Clock, UtensilsCrossed } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { DINING_VENUES, HOTEL_INFO } from "./hotel-data";

/**
 * Dining
 *
 * Showcases the hotel dining venues and backs the Restaurant
 * Reservations business feature via a WhatsApp/contact shortcut.
 */
export function Dining() {
  return (
    <Section id="dining" className="bg-slate-900 text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Dining &amp; Drinks</h2>
          <p className="mt-4 text-slate-300">
            From fine dining to rooftop cocktails, every venue is open to guests and the public alike.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {DINING_VENUES.map((venue) => (
            <div key={venue.id} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-amber-300">
                <UtensilsCrossed className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">{venue.name}</h3>
              <p className="text-sm text-amber-300">{venue.cuisine}</p>
              <p className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {venue.hours}
              </p>
              <p className="text-sm text-slate-300">{venue.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-400">
          Reserve a table by calling {HOTEL_INFO.phone} or through our{" "}
          <a href="#contact" className="font-medium text-amber-300 underline underline-offset-4">
            Contact section
          </a>
          .
        </p>
      </Container>
    </Section>
  );
}
