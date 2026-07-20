import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { INDUSTRIES_SERVED } from "./consulting-data";

/**
 * IndustriesWeServe
 *
 * Lets a prospective client self-identify quickly by industry, which
 * shortens the path to booking a consultation compared to generic
 * capability messaging alone.
 */
export function IndustriesWeServe() {
  return (
    <Section id="industries" className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-blue-600">Who We Work With</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-slate-600">
            AI systems tailored to the workflows and compliance needs of your industry.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES_SERVED.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.id}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-slate-900">{industry.label}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{industry.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="#consultation"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Don&apos;t see your industry? Let&apos;s talk anyway &rarr;
          </Link>
        </div>
      </Container>
    </Section>
  );
}
