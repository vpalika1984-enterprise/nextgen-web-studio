import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { INDUSTRIES } from "./industries-data";

/**
 * IndustryComparison
 *
 * At-a-glance table comparing every industry's most-requested feature
 * and typical starting investment, with a direct link into that
 * industry's card. Complements the detailed IndustryCards grid above
 * with a scannable summary for visitors comparing multiple verticals.
 */
export function IndustryComparison() {
    return (
          <Section className="py-24">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <p className="text-sm font-medium text-primary">At a glance</p>
                                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                              Compare industries side by side
                                  </h2>
                        </div>
                
                        <div className="mt-12 overflow-x-auto rounded-2xl border border-border">
                                  <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                                              <thead>
                                                            <tr className="border-b border-border bg-muted/40">
                                                                            <th className="px-6 py-4 font-semibold text-foreground">Industry</th>
                                                                            <th className="px-6 py-4 font-semibold text-foreground">
                                                                                              Most-requested feature
                                                                            </th>
                                                                            <th className="px-6 py-4 font-semibold text-foreground">
                                                                                              Starting investment
                                                                            </th>
                                                                            <th className="px-6 py-4 font-semibold text-foreground">
                                                                                              <span className="sr-only">Link</span>
                                                                            </th>
                                                            </tr>
                                              </thead>
                                              <tbody>
                                                {INDUSTRIES.map((industry) => (
                            <tr
                                                key={industry.id}
                                                className="border-b border-border last:border-b-0"
                                              >
                                              <td className="px-6 py-4 font-medium text-foreground">
                                                {industry.label}
                                              </td>
                                              <td className="px-6 py-4 text-muted-foreground">
                                                {industry.features[0]}
                                              </td>
                                              <td className="px-6 py-4 text-muted-foreground">
                                                {industry.startingAt}
                                              </td>
                                              <td className="px-6 py-4">
                                                                  <Link
                                                                                          href={`#${industry.id}`}
                                                                                          className="group flex items-center gap-1.5 font-medium text-primary hover:underline"
                                                                                        >
                                                                                        Details
                                                                                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                                                  </Link>
                                              </td>
                            </tr>
                          ))}
                                              </tbody>
                                  </table>
                        </div>
                </Container>
          </Section>
        );
}
