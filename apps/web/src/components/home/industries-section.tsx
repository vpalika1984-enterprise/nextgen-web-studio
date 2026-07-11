import Link from "next/link";
import {
    Building2,
    Dumbbell,
    GraduationCap,
    Hotel,
    Landmark,
    Plane,
    Scale,
    Stethoscope,
    Store,
    Utensils,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const INDUSTRIES = [
  { label: "Restaurants", icon: Utensils, href: "/industries/restaurants" },
  { label: "Medical & Clinics", icon: Stethoscope, href: "/industries/medical" },
  { label: "Real Estate", icon: Building2, href: "/industries/real-estate" },
  { label: "Hotels & Travel", icon: Hotel, href: "/industries/hospitality" },
  { label: "Education", icon: GraduationCap, href: "/industries/education" },
  { label: "Fitness & Wellness", icon: Dumbbell, href: "/industries/fitness" },
  { label: "Law Firms", icon: Scale, href: "/industries/legal" },
  { label: "Finance & Accounting", icon: Landmark, href: "/industries/finance" },
  { label: "Retail & E-commerce", icon: Store, href: "/industries/retail" },
  { label: "Travel Agencies", icon: Plane, href: "/industries/travel" },
  ];

/**
 * IndustriesSection
 *
 * Grid of industry entry points reflecting the ~35-industry scope defined
 * in the platform brief. Homepage shows a representative subset; the full
 * list lives on /industries.
 */
export function IndustriesSection() {
    return (
          <Section className="py-24">
                <Container>
                        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                                  <div>
                                              <p className="text-sm font-medium text-primary">Industries</p>
                                              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                                            Built for your industry, not a generic template
                                              </h2>
                                  </div>
                                  <Link
                                                href="/industries"
                                                className="text-sm font-medium text-primary hover:underline"
                                              >
                                              View all industries
                                  </Link>
                        </div>
                
                        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                          {INDUSTRIES.map((industry) => {
                        const Icon = industry.icon;
                        return (
                                        <Link
                                                          key={industry.label}
                                                          href={industry.href}
                                                          className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                                                        >
                                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                                          <Icon className="h-5 w-5" />
                                                        </span>
                                                        <span className="text-sm font-medium text-foreground">
                                                          {industry.label}
                                                        </span>
                                        </Link>
                                      );
          })}
                        </div>
                </Container>
          </Section>
        );
}
