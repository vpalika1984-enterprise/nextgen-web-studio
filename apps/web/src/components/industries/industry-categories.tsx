import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { INDUSTRIES } from "./industries-data";

/**
 * IndustryCategories
 *
 * Quick-jump grid of every industry the page covers. Each tile anchors
 * down to its matching IndustryCard section below, mirroring the
 * ServiceCategories pattern on the Services page.
 */
export function IndustryCategories() {
    return (
          <Section spacing="sm">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <p className="text-sm font-medium text-primary">Jump to your industry</p>
                                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                                              Ten industries, one proven process
                                  </h2>
                        </div>
                
                        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                          {INDUSTRIES.map((industry) => {
                        const Icon = industry.icon;
                        return (
                                        <Link
                                                          key={industry.id}
                                                          href={`#${industry.id}`}
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
