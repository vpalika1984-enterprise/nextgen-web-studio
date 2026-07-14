import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { AMENITIES } from "./hotel-data";

/**
 * Amenities
 *
 * Grid of hotel amenities, including the spa and airport transfer
 * services that back the Spa Reservations and Airport Transfers
 * business features (requested via the Contact section or WhatsApp).
 */
export function Amenities() {
  return (
    <Section id="amenities" className="bg-slate-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Hotel Amenities
          </h2>
          <p className="mt-4 text-slate-600">
            Everything you need for a seamless stay, from arrival to check-out.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map((amenity) => {
            const Icon = amenity.icon;
            return (
              <div
                key={amenity.id}
                className="flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-slate-900">{amenity.title}</h3>
                <p className="text-sm text-slate-600">{amenity.description}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Spa treatments and airport transfers can be reserved in advance through our{" "}
          <a href="#contact" className="font-medium text-amber-700 underline underline-offset-4">
            Contact section
          </a>{" "}
          or by WhatsApp.
        </p>
      </Container>
    </Section>
  );
}
