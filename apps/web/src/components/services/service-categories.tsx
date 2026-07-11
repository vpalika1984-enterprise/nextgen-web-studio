import Link from "next/link";
import { Bot, ShoppingCart, Stethoscope, Store } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const CATEGORIES = [
  {
        icon: Store,
        title: "Local & Regional Business",
        description:
                "Business and restaurant websites built to bring in local customers and online orders.",
        anchor: "#business-websites",
  },
  {
        icon: Stethoscope,
        title: "Specialized Industry Sites",
        description:
                "Medical and real estate websites with the booking, IDX, and compliance features each field needs.",
        anchor: "#medical-websites",
  },
  {
        icon: ShoppingCart,
        title: "Commerce & Platforms",
        description:
                "E-commerce storefronts and full SaaS products engineered to handle real revenue.",
        anchor: "#ecommerce",
  },
  {
        icon: Bot,
        title: "AI & Automation",
        description:
                "AI integrations and workflow automation that remove manual busywork from your business.",
        anchor: "#ai-integrations",
  },
  ];
/**
 * ServiceCategories
 *
 * Four top-level service categories, each linking down to its related
 * cards in the ServiceCards grid below.
 */
export function ServiceCategories() {
    return (
          <Section spacing="sm">
                <Container>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                          {CATEGORIES.map((category) => {
                        const Icon = category.icon;
                        return (
                                        <Link
                                                          key={category.title}
                                                          href={category.anchor}
                                                          className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                                                        >
                                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                                          <Icon className="h-5 w-5" />
                                                        </span>
                                                        <h3 className="mt-5 text-base font-semibold text-foreground">
                                                          {category.title}
                                                        </h3>
                                                        <p className="mt-2 text-sm text-muted-foreground">
                                                          {category.description}
                                                        </p>
                                        </Link>
                                      );
          })}
                        </div>
                </Container>
          </Section>
        );
}
