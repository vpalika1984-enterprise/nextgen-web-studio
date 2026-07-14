import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { PROPERTY_CATEGORIES, getPropertyCountByCategory } from "./realty-data";

/**
 * PropertyCategories
 *
 * Browse-by-category grid, linking each property type to its listing
 * count so visitors can quickly gauge inventory before searching.
 */
export function PropertyCategories() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-4 text-slate-600">
            Explore our inventory across every property type we represent.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTY_CATEGORIES.map((category) => (
            <div
              key={category.slug}
              className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-amber-600/40"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{category.label}</h3>
                <span className="rounded-full bg-amber-600/10 px-3 py-1 text-xs font-semibold text-amber-700">
                  {getPropertyCountByCategory(category.slug)} listings
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{category.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
