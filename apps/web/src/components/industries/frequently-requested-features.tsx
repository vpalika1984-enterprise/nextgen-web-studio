import {
    Bot,
    CalendarClock,
    CreditCard,
    LineChart,
    MapPin,
    Search,
    ShieldCheck,
    SquarePen,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const REQUESTED_FEATURES = [
  {
        icon: CalendarClock,
        title: "Online booking & scheduling",
        description: "Self-serve appointments, reservations, or bookings, no phone tag required.",
  },
  {
        icon: CreditCard,
        title: "Secure payments & checkout",
        description: "Stripe-powered checkout, deposits, and subscription billing built in.",
  },
  {
        icon: ShieldCheck,
        title: "Client & patient portals",
        description: "Gated dashboards for sensitive documents, records, or account activity.",
  },
  {
        icon: Bot,
        title: "AI chat & support",
        description: "Retrieval-augmented chat that answers questions and routes real leads.",
  },
  {
        icon: SquarePen,
        title: "Content & catalog management",
        description: "Menus, programs, and listings your team can update without a developer.",
  },
  {
        icon: MapPin,
        title: "Multi-location support",
        description: "One site, many locations, each with its own hours, staff, and details.",
  },
  {
        icon: Search,
        title: "Local SEO & search",
        description: "Structured data and location schema that win local search results.",
  },
  {
        icon: LineChart,
        title: "Analytics dashboards",
        description: "Real-time visibility into bookings, orders, and traffic that matters.",
  },
  ];

/**
 * FrequentlyRequestedFeatures
 *
 * Cross-industry feature grid, the capabilities most clients ask for
 * regardless of vertical, reinforcing that every industry package pulls
 * from the same production-grade feature set.
 */
export function FrequentlyRequestedFeatures() {
    return (
          <Section className="py-24">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <p className="text-sm font-medium text-primary">Across every industry</p>
                                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                              Frequently requested features
                                  </h2>
                                  <p className="mt-4 text-muted-foreground">
                                              Whatever your industry, these are the capabilities clients ask
                                              for most, and every one of them ships as a standard building
                                              block, not a custom project.
                                  </p>
                        </div>
                
                        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                          {REQUESTED_FEATURES.map((feature) => {
                        const Icon = feature.icon;
                        return (
                                        <div
                                                          key={feature.title}
                                                          className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
                                                        >
                                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                                          <Icon className="h-5 w-5" />
                                                        </span>
                                                        <h3 className="mt-5 text-base font-semibold text-foreground">
                                                          {feature.title}
                                                        </h3>
                                                        <p className="mt-2 text-sm text-muted-foreground">
                                                          {feature.description}
                                                        </p>
                                        </div>
                                      );
          })}
                        </div>
                </Container>
          </Section>
        );
}
