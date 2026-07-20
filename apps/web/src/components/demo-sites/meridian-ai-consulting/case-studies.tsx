import { ChevronDown } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { CASE_STUDIES } from "./consulting-data";

/**
 * CaseStudies
 *
 * Each case study is presented as an explicit Problem -> Solution ->
 * Results sequence rather than a single description paragraph, so it
 * can be scanned in seconds.
 */
export function CaseStudies() {
  return (
    <Section id="case-studies" className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-blue-600">Proven Results</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Case Studies
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {study.industry}
                </p>
                <h3 className="mt-1 text-base font-semibold text-slate-900">{study.client}</h3>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Problem
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{study.problem}</p>
                </div>
                <ChevronDown className="h-4 w-4 text-slate-300" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Solution
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{study.solution}</p>
                </div>
                <ChevronDown className="h-4 w-4 text-slate-300" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Results
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{study.results}</p>
                </div>
              </div>

              <div className="mt-auto rounded-xl bg-blue-600/10 p-4 text-center">
                <p className="text-2xl font-semibold text-blue-700">{study.metricValue}</p>
                <p className="text-xs text-blue-700/80">{study.metricLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
