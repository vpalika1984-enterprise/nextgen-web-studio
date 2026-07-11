import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

interface CaseStudy {
    client: string;
    industry: string;
    metric: string;
    metricLabel: string;
    summary: string;
    href: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
        client: "Ember & Oak Steakhouse",
        industry: "Restaurants",
        metric: "+64%",
        metricLabel: "online reservations",
        summary:
                "A menu-forward redesign with integrated ordering and reservations lifted bookings within the first quarter.",
        href: "/case-studies/ember-and-oak",
  },
  {
        client: "Northshore Family Medicine",
        industry: "Healthcare",
        metric: "-38%",
        metricLabel: "phone hold times",
        summary:
                "Self-serve appointment booking and a patient portal cut front-desk call volume dramatically.",
        href: "/case-studies/northshore-family-medicine",
  },
  {
        client: "Summit Realty Group",
        industry: "Real Estate",
        metric: "3.1x",
        metricLabel: "qualified leads",
        summary:
                "IDX-integrated listings and a mortgage calculator turned the site into the brokerage's top lead source.",
        href: "/case-studies/summit-realty-group",
  },
  ];
/**
 * FeaturedCaseStudies
 *
 * Three-card results showcase linking into full case study write-ups,
 * reinforcing the Services page with concrete client outcomes.
 */
export function FeaturedCaseStudies() {
    return (
          <Section className="py-24">
                <Container>
                        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                                  <div>
                                              <p className="text-sm font-medium text-primary">Results</p>
                                              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                                            Featured case studies
                                              </h2>
                                  </div>
                                  <Link
                                                href="/case-studies"
                                                className="group flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                                              >
                                              View all case studies
                                              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                  </Link>
                        </div>
                
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                          {CASE_STUDIES.map((study) => (
                        <Link
                                        key={study.href}
                                        href={study.href}
                                        className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                                      >
                                      <span className="text-xs font-medium text-primary">
                                        {study.industry}
                                      </span>
                                      <div className="mt-4 flex items-center gap-2 text-2xl font-semibold tracking-tight text-foreground">
                                                      <TrendingUp className="h-5 w-5 text-primary" aria-hidden="true" />
                                        {study.metric}
                                      </div>
                                      <p className="text-xs text-muted-foreground">
                                        {study.metricLabel}
                                      </p>
                                      <p className="mt-4 flex-1 text-sm text-muted-foreground">
                                        {study.summary}
                                      </p>
                                      <p className="mt-6 text-sm font-semibold text-foreground">
                                        {study.client}
                                      </p>
                        </Link>
                      ))}
                        </div>
                </Container>
          </Section>
        );
}
