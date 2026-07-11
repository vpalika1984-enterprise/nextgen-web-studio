import Link from "next/link";
import {
    ArrowRight,
    Briefcase,
    Check,
    Home,
    Layers,
    ShoppingCart,
    Sparkles,
    Stethoscope,
    Utensils,
    Workflow,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

interface ServiceCard {
    id: string;
    icon: typeof Briefcase;
    title: string;
    description: string;
    features: string[];
    price: string;
    href: string;
}

const SERVICES: ServiceCard[] = [
  {
        id: "business-websites",
        icon: Briefcase,
        title: "Business Websites",
        description:
                "Polished marketing sites for small businesses and professional services that build instant credibility.",
        features: [
                "Custom design system",
                "Mobile-first & fast",
                "Lead capture forms",
                "On-page SEO foundation",
              ],
        price: "From $2,500",
        href: "/services/business-websites",
  },
  {
        id: "restaurant-websites",
        icon: Utensils,
        title: "Restaurant Websites",
        description:
                "Menu-forward sites with online ordering, reservations, and location details that convert hungry visitors.",
        features: [
                "Online ordering integration",
                "Reservation booking",
                "Menu management",
                "Multi-location support",
              ],
        price: "From $3,200",
        href: "/services/restaurant-websites",
  },
  {
        id: "medical-websites",
        icon: Stethoscope,
        title: "Medical Websites",
        description:
                "HIPAA-aware patient experiences with appointment booking and compliant intake workflows.",
        features: [
                "Patient portal integration",
                "Appointment scheduling",
                "HIPAA-conscious forms",
                "Provider directories",
              ],
        price: "From $4,500",
        href: "/services/medical-websites",
  },
  {
        id: "real-estate-websites",
        icon: Home,
        title: "Real Estate Websites",
        description:
                "IDX-integrated listing sites with mortgage calculators and lead routing built for brokers and agents.",
        features: [
                "IDX/MLS integration",
                "Saved search & alerts",
                "Mortgage calculators",
                "Agent lead routing",
              ],
        price: "From $4,000",
        href: "/services/real-estate-websites",
  },
  {
        id: "ecommerce",
        icon: ShoppingCart,
        title: "E-commerce",
        description:
                "Storefronts with seamless checkout, inventory sync, and payment integrations that scale with demand.",
        features: [
                "Stripe-powered checkout",
                "Inventory management",
                "Subscription support",
                "Abandoned cart recovery",
              ],
        price: "From $6,000",
        href: "/services/ecommerce",
  },
  {
        id: "ai-integrations",
        icon: Sparkles,
        title: "AI Integrations",
        description:
                "Chatbots, content tools, and intelligent search built on modern AI stacks and wired into your workflows.",
        features: [
                "AI chat & support agents",
                "Retrieval-augmented search",
                "Workflow automation",
                "Custom model integration",
              ],
        price: "From $5,000",
        href: "/services/ai-integrations",
  },
  {
        id: "saas-development",
        icon: Layers,
        title: "SaaS Development",
        description:
                "Full-stack subscription products, from auth and billing to dashboards and multi-tenant architecture.",
        features: [
                "Auth & billing (Clerk + Stripe)",
                "Multi-tenant architecture",
                "Usage dashboards",
                "API-first design",
              ],
        price: "From $15,000",
        href: "/services/saas-development",
  },
  {
        id: "automation-solutions",
        icon: Workflow,
        title: "Automation Solutions",
        description:
                "Custom workflow automation that connects your tools and removes manual, repetitive busywork.",
        features: [
                "Process mapping & design",
                "Third-party integrations",
                "Internal tools & dashboards",
                "Ongoing monitoring",
              ],
        price: "From $3,500",
        href: "/services/automation-solutions",
  },
  ];

/**
 * ServiceCards
 *
 * Detailed, individually anchored cards for every service line, grouped
 * implicitly by the categories in ServiceCategories above. Each card links
 * out to its own dedicated service page.
 */
export function ServiceCards() {
    return (
          <Section className="py-24">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <p className="text-sm font-medium text-primary">Our services</p>
                                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                              Every service, scoped and priced
                                  </h2>
                        </div>
                
                        <div className="mt-14 grid gap-6 sm:grid-cols-2">
                          {SERVICES.map((service) => {
                        const Icon = service.icon;
                        return (
                                        <div
                                                          key={service.id}
                                                          id={service.id}
                                                          className="scroll-mt-24 flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
                                                        >
                                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                                          <Icon className="h-5 w-5" />
                                                        </span>
                                                        <h3 className="mt-5 text-lg font-semibold text-foreground">
                                                          {service.title}
                                                        </h3>
                                                        <p className="mt-2 text-sm text-muted-foreground">
                                                          {service.description}
                                                        </p>
                                                        <ul className="mt-6 space-y-3">
                                                          {service.features.map((feature) => (
                                                                              <li
                                                                                                      key={feature}
                                                                                                      className="flex items-start gap-2 text-sm text-foreground"
                                                                                                    >
                                                                                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                                                {feature}
                                                                              </li>
                                                                            ))}
                                                        </ul>
                                                        <div className="mt-8 flex flex-1 items-end justify-between gap-4">
                                                                          <span className="text-sm font-medium text-muted-foreground">
                                                                            {service.price}
                                                                          </span>
                                                                          <Link
                                                                                                href={service.href}
                                                                                                className="group flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                                                                                              >
                                                                                              Learn more
                                                                                              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                                                          </Link>
                                                        </div>
                                        </div>
                                      );
          })}
                        </div>
                </Container>
          </Section>
        );
}
