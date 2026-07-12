import { ShieldCheck } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

interface InsurancePartnersProps {
    id?: string;
    title?: string;
    subtitle?: string;
    insurers: string[];
}

/**
 * InsurancePartners
 *
 * Reusable "accepted insurance" badge grid for healthcare demo sites.
 * Accepts its insurer list and copy via props (rather than hard-coding a
 * single clinic's accepted plans) so this same component can support
 * this clinic demo today and a future hospital demo later without
 * changes.
 */
export function InsurancePartners({
    id = "insurance",
    title = "Insurance We Accept",
    subtitle = "In-network with most major insurers. Contact us to confirm your specific plan.",
    insurers,
}: InsurancePartnersProps) {
    return (
          <Section id={id} className="bg-slate-50">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                                    {title}
                                  </h2>
                                  <p className="mt-4 text-slate-600">{subtitle}</p>
                        </div>
                        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                          {insurers.map((insurer) => (
                        <div
                                        key={insurer}
                                        className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-5 text-center"
                                      >
                                      <ShieldCheck className="h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                                      <span className="text-sm font-medium text-slate-700">{insurer}</span>
                        </div>
                      ))}
                        </div>
                </Container>
          </Section>
        );
}
