import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { EventsStrip } from "@/components/demo-sites/shared/events-strip";
import { HOTEL_EXPERIENCES } from "./hotel-data";

/**
 * Experiences
 *
 * Curated guest experiences and events, reusing the shared EventsStrip
 * primitive from the restaurant demos (dark card treatment, so this
 * section keeps the same dark background). Covers the Conference &
 * Events business feature alongside leisure experiences like the
 * harbor cruise and spa journey.
 */
export function Experiences() {
  return (
    <Section id="experiences" className="bg-slate-900 text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Experiences &amp; Events
          </h2>
          <p className="mt-4 text-slate-300">
            Curated experiences for guests, plus flexible space for conferences and private events.
          </p>
        </div>
        <div className="mt-12">
          <EventsStrip heading="Guest Experiences" events={HOTEL_EXPERIENCES} />
        </div>
      </Container>
    </Section>
  );
}
