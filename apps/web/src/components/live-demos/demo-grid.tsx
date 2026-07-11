"use client";

import { useMemo, useState } from "react";
import { SearchX } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { DEMOS, DEMO_CATEGORIES } from "@/components/live-demos/demos-data";
import { DemoCard } from "@/components/live-demos/demo-card";
import { SearchBar } from "@/components/live-demos/search-bar";
import { CategoryFilter } from "@/components/live-demos/category-filter";

/**
 * DemoGrid
 *
 * Interactive marketplace core: combines SearchBar and CategoryFilter to
 * filter the full DEMOS catalog client-side, rendering matches as DemoCard
 * grid items. Serves as both the Category Filters and Demo Grid sections
 * of the Live Demo Marketplace page.
 */
export function DemoGrid() {
    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

  const filteredDemos = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        return DEMOS.filter((demo) => {
                const matchesCategory = activeCategory === "all" || demo.category === activeCategory;
                const matchesQuery =
                          normalizedQuery.length === 0 ||
                          demo.name.toLowerCase().includes(normalizedQuery) ||
                          demo.categoryLabel.toLowerCase().includes(normalizedQuery) ||
                          demo.description.toLowerCase().includes(normalizedQuery);
                return matchesCategory && matchesQuery;
        });
  }, [query, activeCategory]);

  return (
        <Section id="demo-grid" className="scroll-mt-24 py-24">
              <Container>
                      <div className="mx-auto max-w-2xl text-center">
                                <p className="text-sm font-medium text-primary">Browse the marketplace</p>
                                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                            Find a live demo for your industry
                                </h2>
                                <p className="mt-4 text-muted-foreground">
                                            Filter by industry or search by name to explore fully interactive,
                                            production-quality demos.
                                </p>
                      </div>
              
                      <div className="mt-10 flex flex-col items-center gap-6">
                                <SearchBar
                                              value={query}
                                              onChange={setQuery}
                                              placeholder="Search live demos by name or industry..."
                                              className="w-full max-w-xl"
                                            />
                                <CategoryFilter
                                              categories={DEMO_CATEGORIES}
                                              active={activeCategory}
                                              onSelect={setActiveCategory}
                                            />
                      </div>
              
                {filteredDemos.length > 0 ? (
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {filteredDemos.map((demo) => (
                                    <DemoCard key={demo.id} demo={demo} />
                                  ))}
                    </div>
                  ) : (
                    <div className="mt-16 flex flex-col items-center gap-3 text-center">
                                <SearchX className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
                                <p className="text-sm font-medium text-foreground">No demos match your search</p>
                                <p className="text-sm text-muted-foreground">
                                              Try a different keyword or choose another category.
                                </p>
                    </div>
                      )}
              </Container>
        </Section>
      );
}
