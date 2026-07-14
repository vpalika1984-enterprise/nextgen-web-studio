import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { RoomCard } from "@/components/demo-sites/shared/room-card";
import { ROOMS } from "./hotel-data";

/**
 * RoomShowcase
 *
 * Highlights the hotel featured rooms using the shared RoomCard
 * primitive, reusable across future hospitality-style demo sites.
 */
export function RoomShowcase() {
  const featured = ROOMS.filter((room) => room.featured);

  return (
    <Section id="rooms" className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Featured Rooms &amp; Suites
          </h2>
          <p className="mt-4 text-slate-600">
            Each room is thoughtfully appointed for comfort, with rates that beat third-party booking sites when you book direct.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
