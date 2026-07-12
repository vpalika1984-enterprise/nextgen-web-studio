"use client";

import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { RESTAURANT_INFO } from "./restaurant-data";

/**
 * ReservationCta
 *
 * On-page reservation form (decorative in this demo, no booking system
 * is wired up) plus a WhatsApp booking shortcut, covering both the
 * "online reservations" and "WhatsApp booking" business features.
 */
export function ReservationCta() {
    return (
          <Section id="reserve" className="bg-amber-500 text-neutral-950">
                <Container>
                        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                                  <div>
                                              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Reserve a Table</h2>
                                              <p className="mt-4 text-neutral-900/80">
                                                            Tell us when you would like to come in and we will hold your table. For
                                                            parties larger than eight, please call us directly.
                                              </p>
                                              <Button
                                                              size="lg"
                                                              variant="outline"
                                                              className="mt-6 border-neutral-950/20 bg-neutral-950 text-white hover:bg-neutral-900"
                                                              asChild
                                                            >
                                                            <a href={RESTAURANT_INFO.whatsappHref} target="_blank" rel="noreferrer">
                                                                            <MessageCircle className="h-4 w-4" aria-hidden="true" />
                                                                            Book via WhatsApp
                                                            </a>
                                              </Button>
                                  </div>
                                  <form
                                                onSubmit={(event) => event.preventDefault()}
                                                className="grid gap-4 rounded-2xl bg-neutral-950 p-6 text-white sm:grid-cols-2"
                                              >
                                              <label className="flex flex-col gap-1 text-sm sm:col-span-2">
                                                            Full Name
                                                            <input
                                                                              type="text"
                                                                              name="name"
                                                                              placeholder="Jane Doe"
                                                                              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm placeholder:text-white/30 focus:border-amber-400 focus:outline-none"
                                                                            />
                                              </label>
                                              <label className="flex flex-col gap-1 text-sm">
                                                            Date
                                                            <input
                                                                              type="date"
                                                                              name="date"
                                                                              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm focus:border-amber-400 focus:outline-none"
                                                                            />
                                              </label>
                                              <label className="flex flex-col gap-1 text-sm">
                                                            Time
                                                            <input
                                                                              type="time"
                                                                              name="time"
                                                                              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm focus:border-amber-400 focus:outline-none"
                                                                            />
                                              </label>
                                              <label className="flex flex-col gap-1 text-sm">
                                                            Party Size
                                                            <input
                                                                              type="number"
                                                                              name="partySize"
                                                                              min={1}
                                                                              max={8}
                                                                              placeholder="2"
                                                                              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm placeholder:text-white/30 focus:border-amber-400 focus:outline-none"
                                                                            />
                                              </label>
                                              <label className="flex flex-col gap-1 text-sm">
                                                            Phone
                                                            <input
                                                                              type="tel"
                                                                              name="phone"
                                                                              placeholder="(503) 555-0100"
                                                                              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm placeholder:text-white/30 focus:border-amber-400 focus:outline-none"
                                                                            />
                                              </label>
                                              <Button
                                                              type="submit"
                                                              className="mt-2 bg-amber-500 text-neutral-950 hover:bg-amber-400 sm:col-span-2"
                                                            >
                                                            Request Reservation
                                              </Button>
                                              <p className="text-xs text-white/40 sm:col-span-2">
                                                            Demo form only, no reservation will actually be submitted.
                                              </p>
                                  </form>
                        </div>
                </Container>
          </Section>
        );
}
