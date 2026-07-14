"use client";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { ListingSearch } from "@/components/demo-sites/shared/listing-search";
import { PropertyCard } from "@/components/demo-sites/shared/property-card";
import { PROPERTIES, PROPERTY_SEARCH_CONFIG, type Property } from "./realty-data";

/**
 * PropertySearchSection
 *
 * Real Estate-specific presentation wrapper around the generic,
 * industry-agnostic ListingSearch engine (see lib/listing-search.ts).
 * The same engine can later power Hotel, Vehicle, Job, Course, and
 * Marketplace Product search experiences by swapping config and
 * renderItem.
 */
export function PropertySearchSection() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Search All Listings
          </h2>
          <p className="mt-4 text-slate-600">
            Filter by property type, listing type, and bedrooms to find your next home.
          </p>
        </div>
        <div className="mt-12">
          <ListingSearch<Property>
            items={PROPERTIES}
            config={PROPERTY_SEARCH_CONFIG}
            renderItem={(property) => <PropertyCard property={property} />}
            getItemKey={(property) => property.id}
          />
        </div>
      </Container>
    </Section>
  );
}
