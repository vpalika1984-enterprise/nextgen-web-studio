import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  href: string;
  featured?: boolean;
}

const TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "$2,500",
    description: "A polished launch site for small businesses.",
    features: ["Up to 5 pages", "Responsive design", "Basic SEO setup", "2 weeks delivery"],
    href: "/pricing#starter",
  },
  {
    name: "Growth",
    price: "$8,500",
    description: "Custom design and CMS for scaling businesses.",
    features: [
      "Up to 15 pages",
      "Custom design system",
      "CMS integration",
      "Advanced SEO & analytics",
      "4-6 weeks delivery",
    ],
    href: "/pricing#growth",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full platforms, AI features, and dedicated support.",
    features: [
      "Unlimited pages",
      "AI-powered features",
      "Client portal / CRM",
      "Dedicated engineering team",
      "SLA & ongoing support",
    ],
    href: "/pricing#enterprise",
  },
];

/**
 * PricingPreview
 *
 * Three-tier pricing summary on the homepage, linking through to the full
 * /pricing page for detailed comparisons and add-ons.
 */
export function PricingPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Pricing</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Transparent packages for every stage
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "flex flex-col rounded-2xl border p-8 shadow-sm",
                tier.featured
                  ? "border-primary bg-card ring-1 ring-primary"
                  : "border-border bg-card"
              )}
            >
              {tier.featured && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground">
                {tier.price}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="mt-8"
                variant={tier.featured ? "default" : "outline"}
              >
                <Link href={tier.href}>Get started</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
