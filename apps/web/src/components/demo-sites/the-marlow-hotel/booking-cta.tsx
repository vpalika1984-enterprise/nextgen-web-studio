import { BadgeCheck } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { PromoBanner } from "@/components/demo-sites/shared/promo-banner";
import { BookingInquiry } from "@/components/demo-sites/shared/booking-inquiry";
import { HOTEL_INFO, PROMOTIONS, PACKAGES, ROOM_CATEGORIES } from "./hotel-data";

/**
 * BookingCta
 *
 * The hotel primary conversion section. Leads with the "Book Direct &
 * Save" value proposition (reused PromoBanner), presents packages
 * (Weekend, Family, Honeymoon, Conference & Events) that map to the
 * seasonal-offer business features, and ends with the generic
 * BookingInquiry module configured for a hotel stay so the same
 * component can later serve vehicle rentals, event venues, or
 * consultation requests with only its field config changing.
 */
export function BookingCta() {
  return (
    <>
      <PromoBanner promotions={PROMOTIONS} />
      <Section id="booking" className="bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-600/20 bg-amber-600/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-amber-700">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Book Direct &amp; Save
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Packages &amp; Offers
            </h2>
            <p className="mt-4 text-slate-600">
              Booking direct always beats third-party rates, and unlocks these curated packages.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((pkg) => (
              <div key={pkg.id} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-base font-semibold text-slate-900">{pkg.title}</h3>
                <p className="flex-1 text-sm text-slate-600">{pkg.description}</p>
                <p className="text-sm font-semibold text-amber-700">{pkg.priceNote}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <BookingInquiry
        id="book-now"
        title="Request Your Stay"
        description="Tell us your dates and preferences and our reservations team will confirm availability and the best direct rate."
        whatsappHref={HOTEL_INFO.whatsapp}
        whatsappLabel="Book via WhatsApp"
        submitLabel="Request Reservation"
        fields={[
          { key: "name", label: "Full Name", type: "text", placeholder: "Jane Doe" },
          { key: "email", label: "Email", type: "email", placeholder: "jane@example.com" },
          { key: "checkIn", label: "Check-In Date", type: "date" },
          { key: "checkOut", label: "Check-Out Date", type: "date" },
          { key: "guests", label: "Guests", type: "number", placeholder: "2" },
          {
            key: "roomType",
            label: "Room Type",
            type: "select",
            options: ROOM_CATEGORIES.map((category) => ({ value: category.slug, label: category.label })),
          },
        ]}
      />
    </>
  );
}
