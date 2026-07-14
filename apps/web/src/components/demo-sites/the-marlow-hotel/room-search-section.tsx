"use client";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { ListingSearch } from "@/components/demo-sites/shared/listing-search";
import { RoomCard } from "@/components/demo-sites/shared/room-card";
import { ROOMS, ROOM_SEARCH_CONFIG, type Room } from "./hotel-data";

/**
 * RoomSearchSection
 *
 * Hospitality-specific presentation wrapper around the generic,
 * industry-agnostic ListingSearch engine (see lib/listing-search.ts).
 * The same engine already powers Real Estate property search and can
 * later power Vehicle, Job, Course, and Marketplace Product search
 * experiences by swapping config and renderItem.
 */
export function RoomSearchSection() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Search All Rooms
          </h2>
          <p className="mt-4 text-slate-600">
            Filter by room type, availability, and guest count to find your perfect stay.
          </p>
        </div>
        <div className="mt-12">
          <ListingSearch<Room>
            items={ROOMS}
            config={ROOM_SEARCH_CONFIG}
            renderItem={(room) => <RoomCard room={room} />}
            getItemKey={(room) => room.id}
          />
        </div>
      </Container>
    </Section>
  );
}
