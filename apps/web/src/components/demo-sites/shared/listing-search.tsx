"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Search } from "lucide-react";

import {
    filterListings,
    ListingSearchConfig,
} from "@/lib/listing-search";

interface ListingSearchProps<T> {
    items: T[];
    config: ListingSearchConfig<T>;
    renderItem: (item: T) => ReactNode;
    getItemKey?: (item: T, index: number) => string;
    accentClassName?: string;
    emptyStateMessage?: string;
}

export function ListingSearch<T extends Record<string, unknown>>({
    items,
    config,
    renderItem,
    getItemKey,
    accentClassName = "text-amber-600",
    emptyStateMessage = "No results match your search. Try adjusting your filters.",
}: ListingSearchProps<T>) {
    const [query, setQuery] = useState("");
    const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});

  const results = useMemo(
        () => filterListings(items, query, activeFilters, config),
        [items, query, activeFilters, config]
      );

  function handleFilterChange(key: string, value: string) {
        setActiveFilters((prev) => ({ ...prev, [key]: value }));
  }

return (
      <div>
              <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
            <div className="relative flex-1">
                        <Search
                                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                                      aria-hidden="true"
                                    />
                        <input
                                      type="text"
                                      value={query}
                                      onChange={(event) => setQuery(event.target.value)}
                                      placeholder={config.searchPlaceholder}
                                      className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                                    />
              
                </div>

                {config.filters.map((filter) => (
                  <select
                                key={filter.key}
                                value={activeFilters[filter.key] ?? "all"}
                                onChange={(event) => handleFilterChange(filter.key, event.target.value)}
                                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:border-slate-400 focus:outline-none"
                              >
                                <option value="all">{filter.label}: All</option>
                    {filter.options?.map((option) => (

                                              <option key={option.value} value={option.value}>
                                                {option.label}
                                              </option>
                                            ))}
                  </select>
                ))}
              </div>

              <p className={`mt-4 text-sm font-medium ${accentClassName}`}>
                {results.length} {results.length === 1 ? "result" : "results"} found
              </p>

        {results.length > 0 ? (
                <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {results.map((item, index) => (
                              <div key={getItemKey ? getItemKey(item, index) : index}>{renderItem(item)}</div>
                            ))}
                </div>
              ) : (
                <p className="mt-8 rounded-xl border border-dashed border-slate-200 p-8 text-center text-sm text-slate-500">
                  {emptyStateMessage}
                </p>
            )}
                      </div>
    );
}
