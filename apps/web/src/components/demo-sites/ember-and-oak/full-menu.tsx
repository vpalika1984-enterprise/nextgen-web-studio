"use client";

import { useState } from "react";
import { QrCode } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { DAILY_SPECIALS, MENU_CATEGORIES } from "./restaurant-data";

/**
 * FullMenu
 *
 * Tabbed category menu with a daily specials strip and a QR-menu
 * placeholder for the "scan at the table" business feature.
 */
export function FullMenu() {
    const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]?.id);
    const activeItems =
          MENU_CATEGORIES.find((category) => category.id === activeCategory)?.items ?? [];

  return (
        <Section id="full-menu" className="bg-neutral-950 text-white">
              <Container>
                      <div className="mx-auto max-w-2xl text-center">
                                <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Full Menu</h2>
                                <p className="mt-4 text-white/70">
                                            Seasonal, and subject to change with what the fire and the market give us that
                                            day.
                                </p>
                      </div>
              
                      <div className="mt-10 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
                                <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-400">
                                            Today's Specials
                                </h3>
                                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                                  {DAILY_SPECIALS.map((special) => (
                        <div key={special.name}>
                                        <div className="flex items-baseline justify-between gap-2">
                                                          <p className="text-sm font-medium">{special.name}</p>
                                                          <span className="text-sm text-amber-400">{special.price}</span>
                                        </div>
                                        <p className="mt-1 text-xs text-white/60">{special.description}</p>
                        </div>
                      ))}
                                </div>
                      </div>
              
                      <div className="mt-12 flex flex-wrap justify-center gap-2">
                        {MENU_CATEGORIES.map((category) => (
                      <button
                                      key={category.id}
                                      type="button"
                                      onClick={() => setActiveCategory(category.id)}
                                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                                        activeCategory === category.id
                                                          ? "bg-amber-500 text-neutral-950"
                                                          : "border border-white/15 text-white/70 hover:bg-white/10"
                                      }`}
                                    >
                        {category.label}
                      </button>
                    ))}
                      </div>
              
                      <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        {activeItems.map((item) => (
                      <div key={item.name} className="border-b border-white/10 pb-4">
                                    <div className="flex items-baseline justify-between gap-3">
                                                    <h4 className="font-medium">{item.name}</h4>
                                                    <span className="shrink-0 text-amber-400">{item.price}</span>
                                    </div>
                                    <p className="mt-1 text-sm text-white/60">{item.description}</p>
                        {item.dietary && item.dietary.length > 0 && (
                                        <p className="mt-1 text-xs uppercase tracking-wide text-white/40">
                                          {item.dietary.join(" \u00b7 ")}
                                        </p>
                                    )}
                      </div>
                    ))}
                      </div>
              
                      <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
                                <div className="flex items-center gap-3">
                                            <QrCode className="h-8 w-8 text-amber-400" aria-hidden="true" />
                                            <div>
                                                          <p className="font-medium">Prefer to browse at the table?</p>
                                                          <p className="text-sm text-white/60">
                                                                          Scan the QR code on your table for the digital menu.
                                                          </p>
                                            </div>
                                </div>
                                <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-dashed border-white/30 text-[10px] uppercase tracking-wide text-white/40">
                                            QR Code
                                </div>
                      </div>
              </Container>
        </Section>
      );
}
