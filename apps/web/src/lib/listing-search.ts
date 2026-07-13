/**
 * Generic Listing Search & Filter Engine
 *
 * Powers every searchable-listing feature across the platform (Real Estate
 * properties today; Hotels, Vehicles, Jobs, Courses, Medical Specialists,
 * and Marketplace Products in future demos). It knows nothing about any
 * specific industry - it simply filters an array of records by a
 * free-text query and a set of configured filter fields.
 */

export type ListingFilterType = "select" | "range" | "text";

export interface ListingFilterOption {
    value: string;
    label: string;
}

export interface ListingFilterConfig {
    key: string;
    label: string;
    type: ListingFilterType;
    options?: ListingFilterOption[];
    placeholder?: string;
}

export interface ListingSearchConfig<T> {
    searchPlaceholder: string;
    searchKeys: (keyof T)[];
    filters: ListingFilterConfig[];
}

function matchesQuery<T extends Record<string, unknown>>(
    item: T,
    query: string,
    searchKeys: (keyof T)[]
  ): boolean {
    if (!query.trim()) {
          return true;
    }

  const normalizedQuery = query.trim().toLowerCase();

  return searchKeys.some((key) => {
        const value = item[key];
        return typeof value === "string" && value.toLowerCase().includes(normalizedQuery);
  });
}

function matchesFilters<T extends Record<string, unknown>>(
    item: T,
    activeFilters: Record<string, string>
  ): boolean {
    return Object.entries(activeFilters).every(([key, filterValue]) => {
          if (!filterValue || filterValue === "all") {
                  return true;
          }

                                                   const itemValue = item[key];

                                                   if (typeof itemValue === "number") {
                                                           return itemValue >= Number(filterValue);
                                                   }

                                                   return String(itemValue) === filterValue;
    });
}

export function filterListings<T extends Record<string, unknown>>(
    items: T[],
    query: string,
    activeFilters: Record<string, string>,
    config: ListingSearchConfig<T>
  ): T[] {
    return items.filter(
          (item) =>
                  matchesQuery(item, query, config.searchKeys) && matchesFilters(item, activeFilters)
        );
}
