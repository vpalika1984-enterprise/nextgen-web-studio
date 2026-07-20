import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SERVICES } from "./consulting-data";

/**
 * Services
 *
 * Core consulting engagement types, each mapped to a business outcome
 * rather than a technology buzzword.
 */
export function Services() {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-blue-600">What We Do</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-slate-600">
            End-to-end AI consulting, from first roadmap to production support.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-slate-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
