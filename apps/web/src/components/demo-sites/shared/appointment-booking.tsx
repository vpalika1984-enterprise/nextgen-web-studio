"use client";

import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

interface AppointmentBookingProps {
    id?: string;
    title?: string;
    description?: string;
    whatsappHref: string;
    whatsappLabel?: string;
    submitLabel?: string;
    note?: string;
}

/**
 * AppointmentBooking
 *
 * Reusable online appointment request form plus a WhatsApp consultation
 * shortcut, covering both the "online appointment booking" and
 * "WhatsApp consultation" business features shared by healthcare demo
 * sites. Decorative only (no booking system is wired up), mirroring the
 * ReservationCta pattern from the Ember & Oak demo. Accepts its copy and
 * WhatsApp link via props so it can support this clinic demo today and a
 * future hospital demo later without changes.
 */
export function AppointmentBooking({
    id = "appointment",
    title = "Book an Appointment",
    description = "Tell us what you need and we'll confirm a time that works. For same-day urgent concerns, please call us directly.",
    whatsappHref,
    whatsappLabel = "Book via WhatsApp",
    submitLabel = "Request Appointment",
    note = "Demo form only, no appointment will actually be submitted.",
}: AppointmentBookingProps) {
    return (
          <Section id={id} className="bg-teal-600 text-white">
                <Container>
                        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                                  <div>
                                              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
                                              <p className="mt-4 text-teal-50">{description}</p>
                                              <Button
                                                              size="lg"
                                                              variant="outline"
                                                              className="mt-6 border-white/30 bg-white text-teal-700 hover:bg-teal-50"
                                                              asChild
                                                            >
                                                            <a href={whatsappHref} target="_blank" rel="noreferrer">
                                                                            <MessageCircle className="h-4 w-4" aria-hidden="true" />
                                                              {whatsappLabel}
                                                            </a>
                                              </Button>
                                  </div>
                                  <form
                                                onSubmit={(event) => event.preventDefault()}
                                                className="grid gap-4 rounded-2xl bg-white p-6 text-slate-900 sm:grid-cols-2"
                                              >
                                              <label className="flex flex-col gap-1 text-sm sm:col-span-2">
                                                            Full Name
                                                            <input
                                                                              type="text"
                                                                              name="name"
                                                                              placeholder="Jane Doe"
                                                                              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                                                                            />
                                              </label>
                                              <label className="flex flex-col gap-1 text-sm sm:col-span-2">
                                                            Reason for Visit
                                                            <input
                                                                              type="text"
                                                                              name="reason"
                                                                              placeholder="Annual physical, follow-up, etc."
                                                                              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                                                                            />
                                              </label>
                                              <label className="flex flex-col gap-1 text-sm">
                                                            Date
                                                            <input
                                                                              type="date"
                                                                              name="date"
                                                                              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none"
                                                                            />
                                                          </label>
                                              <label className="flex flex-col gap-1 text-sm">
                                                            Time
                                                            <input
                                                                              type="time"
                                                                              name="time"
                                                                              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none"
                                                                            />
                                              </label>
                                              <label className="flex flex-col gap-1 text-sm sm:col-span-2">
                                                            Phone
                                                            <input
                                                                              type="tel"
                                                                              name="phone"
                                                                              placeholder="(206) 555-0100"
                                                                              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                                                                            />
                                              </label>
                                              <Button
                                                              type="submit"
                                                              className="mt-2 bg-teal-600 text-white hover:bg-teal-500 sm:col-span-2"
                                                            >
                                                {submitLabel}
                                              </Button>
                                              <p className="text-xs text-slate-400 sm:col-span-2">{note}</p>
                                  </form>
                        </div>
                </Container>
          </Section>
        );
}
