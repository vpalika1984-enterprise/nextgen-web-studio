"use client";

import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export interface BookingInquiryField {
  key: string;
  label: string;
  type: "text" | "tel" | "email" | "date" | "number" | "select";
  placeholder?: string;
  options?: { value: string; label: string }[];
}

interface BookingInquiryProps {
  id?: string;
  title?: string;
  description?: string;
  fields: BookingInquiryField[];
  whatsappHref?: string;
  whatsappLabel?: string;
  submitLabel?: string;
  note?: string;
}

/**
 * BookingInquiry
 *
 * Generic, industry-agnostic booking/inquiry form plus an optional
 * WhatsApp shortcut. Entirely configured through the fields prop, so
 * the same component can power hotel room bookings, vehicle rental
 * requests, event venue inquiries, medical appointments, property
 * inspections, or consultation requests - only the configuration
 * changes, never the component itself. Decorative only (no booking
 * system is wired up); mirrors the AppointmentBooking pattern from the
 * healthcare demos but generalizes the field set instead of hardcoding
 * it, so it belongs in shared/ rather than any single industry folder.
 */
export function BookingInquiry({
  id = "booking",
  title = "Request a Booking",
  description = "Tell us what you are looking for and our team will confirm availability.",
  fields,
  whatsappHref,
  whatsappLabel = "Message us on WhatsApp",
  submitLabel = "Submit Request",
  note = "Demo form only, no booking will actually be submitted.",
}: BookingInquiryProps) {
  return (
    <Section id={id}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 text-muted-foreground">{description}</p>
            {whatsappHref && (
              <Button size="lg" variant="outline" className="mt-6" asChild>
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {whatsappLabel}
                </a>
              </Button>
            )}
          </div>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2"
          >
            {fields.map((field) => (
              <label key={field.key} className="flex flex-col gap-1 text-sm sm:col-span-2">
                {field.label}
                {field.type === "select" ? (
                  <select
                    name={field.key}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:border-slate-400 focus:outline-none"
                  >
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.key}
                    placeholder={field.placeholder}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                  />
                )}
              </label>
            ))}
            <Button type="submit" className="mt-2 sm:col-span-2">
              {submitLabel}
            </Button>
            <p className="text-xs text-muted-foreground sm:col-span-2">{note}</p>
          </form>
        </div>
      </Container>
    </Section>
  );
}
