import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { PropertyCard } from "@/components/demo-sites/shared/property-card";
import { PROPERTIES } from "./realty-data";

/**
 * FeaturedProperties
 *
 * Highlights the agency's featured listings using the shared PropertyCard
 * primitive, reusable across future real-estate-style demo sites.
 */
export function FeaturedProperties() {
  const featured = PROPERTIES.filter((property) => property.featured);

  return (
    <Section id="properties" className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Featured Properties
          </h2>
          <p className="mt-4 text-slate-600">
            A curated selection of our most sought-after current listings.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
