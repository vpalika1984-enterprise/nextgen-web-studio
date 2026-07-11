"use client";

import { cn } from "@/lib/utils";
import type { DemoCategory } from "@/components/live-demos/demos-data";

interface CategoryFilterProps {
    categories: DemoCategory[];
    active: string;
    onSelect: (id: string) => void;
}

/**
 * CategoryFilter
 *
 * Row of pill buttons for filtering the Demo Grid by industry category.
 */
export function CategoryFilter({ categories, active, onSelect }: CategoryFilterProps) {
    return (
          <div
                  className="flex flex-wrap items-center justify-center gap-2"
                  role="group"
                  aria-label="Filter demos by category"
                >
            {categories.map((category) => {
                          const isActive = category.id === active;
                          return (
                                      <button
                                                    key={category.id}
                                                    type="button"
                                                    onClick={() => onSelect(category.id)}
                                                    aria-pressed={isActive}
                                                    className={cn(
                                                                    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                                                                    isActive
                                                                      ? "border-primary bg-primary text-primary-foreground"
                                                                      : "border-border bg-card text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                                                                  )}
                                                  >
                                        {category.label}
                                      </button>
                                    );
                })}
          </div>
        );
}
