import Link from "next/link";
import { Boxes, Globe2, LayoutTemplate, Sparkles } from "lucide-react";

const SERVICES = [
  {
    icon: Globe2,
    title: "Web Design & Development",
    description:
      "Custom, high-performance websites engineered for speed, SEO, and conversion.",
    href: "/services/web-development",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    description:
      "Chatbots, automation workflows, and intelligent tooling built on modern AI stacks.",
    href: "/ai-solutions",
  },
  {
    icon: Boxes,
    title: "E-commerce",
    description:
      "Storefronts with seamless checkout, inventory, and payment integrations.",
    href: "/services/ecommerce",
  },
  {
    icon: LayoutTemplate,
    title: "Branding & UI/UX",
    description:
      "Identity systems and interface design that make products feel premium.",
    href: "/services/branding",
  },
];

/**
 * ServicesPreview
 *
 * Four-card overview of core service lines, each linking to a dedicated
 * services page for a deeper breakdown.
 */
export function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">What we do</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Full-stack digital services, under one roof
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
