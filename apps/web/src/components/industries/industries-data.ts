import type { LucideIcon } from "lucide-react";
import {
    Building2,
    Dumbbell,
    GraduationCap,
    Hotel,
    Landmark,
    Plane,
    Scale,
    Stethoscope,
    Store,
    Utensils,
} from "lucide-react";

export interface IndustryCta {
    label: string;
    href: string;
    isLiveDemo?: boolean;
}

/**
 * Industry
 *
 * Core catalog record for a single industry landing card on the
 * Industries page. Mirrors the shape of the Demo/Service catalogs
 * elsewhere in the codebase (a single typed array with a lookup helper)
 * so this can grow into dedicated /industries/[slug] pages later without
 * changing any consuming component.
 */
export interface Industry {
    id: string;
    label: string;
    icon: LucideIcon;
    summary: string;
    challenges: string[];
    solution: string;
    features: string[];
    technologies: string[];
    startingAt: string;
    cta: IndustryCta;
}

export const INDUSTRIES: Industry[] = [
  {
        id: "restaurants",
        label: "Restaurants",
        icon: Utensils,
        summary: "Menu-forward sites with reservations and direct online ordering.",
        challenges: [
                "Manual phone reservations overwhelm staff during peak hours",
                "Third-party delivery apps take 20-30% commission on every online order",
                "Outdated menu PDFs confuse guests and hurt local SEO",
              ],
        solution:
                "A menu-forward site with built-in reservations and direct online ordering, so guests book and order without leaving your brand or paying marketplace commissions.",
        features: [
                "Live table reservations",
                "Direct online ordering, no commission",
                "Seasonal menu CMS",
                "Local SEO & location schema markup",
              ],
        technologies: ["Next.js", "Stripe", "Supabase"],
        startingAt: "$3,200",
        cta: { label: "View Live Demo", href: "/live-demos/ember-and-oak", isLiveDemo: true },
  },
  {
        id: "medical",
        label: "Medical & Clinics",
        icon: Stethoscope,
        summary: "Patient-first clinic sites with self-serve booking and compliant intake.",
        challenges: [
                "Phone-tag for appointment scheduling frustrates patients and staff",
                "Compliance concerns make teams hesitant to add online intake forms",
                "Provider bios are scattered across directories instead of your own site",
              ],
        solution:
                "A patient-first clinic site with self-serve appointment booking and HIPAA-conscious intake forms that keep sensitive data handling on your terms.",
        features: [
                "Self-serve appointment scheduling",
                "Provider directory with credentials",
                "HIPAA-conscious intake forms",
                "Automated appointment reminders",
              ],
        technologies: ["Next.js", "Clerk", "Supabase"],
        startingAt: "$4,500",
        cta: { label: "View Live Demo", href: "/live-demos/northshore-family-medicine", isLiveDemo: true },
  },
  {
        id: "real-estate",
        label: "Real Estate",
        icon: Building2,
        summary: "IDX-integrated brokerage sites that qualify buyers before they call.",
        challenges: [
                "Listings go stale without live MLS/IDX synchronization",
                "Buyers bounce without an easy way to estimate mortgage payments",
                "Leads go to whichever agent answers first, not the best-fit agent",
              ],
        solution:
                "An IDX-integrated brokerage site with saved searches and mortgage tools that qualifies buyers before they ever pick up the phone.",
        features: [
                "IDX/MLS live listings",
                "Mortgage calculator",
                "Saved search & alerts",
                "Automated agent lead routing",
              ],
        technologies: ["Next.js", "React Query", "Supabase"],
        startingAt: "$4,000",
        cta: { label: "View Live Demo", href: "/live-demos/summit-realty-group", isLiveDemo: true },
  },
  {
        id: "hospitality",
        label: "Hotels & Travel",
        icon: Hotel,
        summary: "Boutique booking experiences that convert direct reservations.",
        challenges: [
                "OTAs like Booking.com and Expedia take a large commission on every reservation",
                "Static photo galleries fail to convey the property in person",
                "Rate changes require manual updates across every booking channel",
              ],
        solution:
                "A boutique booking experience with real-time availability and an immersive virtual tour that converts direct bookings and skips the OTA cut.",
        features: [
                "Real-time room availability",
                "Rate calendar",
                "Virtual tour gallery",
                "Package & experience upsells at checkout",
              ],
        technologies: ["Next.js", "Stripe", "Framer Motion"],
        startingAt: "$5,000",
        cta: { label: "View Demo Details", href: "/live-demos/the-marlow-hotel" },
  },
  {
        id: "education",
        label: "Education",
        icon: GraduationCap,
        summary: "Admissions-focused school sites built to fill enrollment pipelines.",
        challenges: [
                "Paper applications slow down every admissions cycle",
                "Families struggle to find the right program among dozens of offerings",
                "Event calendars live in email chains instead of on the website",
              ],
        solution:
                "An admissions-focused site with online applications and a searchable program directory that keeps families engaged from inquiry to enrollment.",
        features: [
                "Online application forms",
                "Searchable program directory",
                "Event calendar",
                "Virtual campus tours",
              ],
        technologies: ["Next.js", "Supabase", "Zod"],
        startingAt: "$4,200",
        cta: { label: "View Demo Details", href: "/live-demos/brightpath-college-prep" },
  },
  {
        id: "fitness",
        label: "Fitness & Wellness",
        icon: Dumbbell,
        summary: "Conversion-focused studio sites that turn visitors into members.",
        challenges: [
                "Class schedules change weekly and are hard to keep current",
                "Membership sign-up friction loses motivated leads at the finish line",
                "No easy way to showcase trainers, classes, and member results",
              ],
        solution:
                "A conversion-focused studio site with a live class schedule and streamlined membership sign-up that turns motivated visitors into paying members.",
        features: [
                "Live class schedule & booking",
                "Membership sign-up flow",
                "Trainer & instructor profiles",
                "Transformation & results galleries",
              ],
        technologies: ["Next.js", "Stripe", "Supabase"],
        startingAt: "$3,000",
        cta: { label: "Explore Services", href: "/services" },
  },
  {
        id: "legal",
        label: "Law Firms",
        icon: Scale,
        summary: "Authority-building sites with smart intake and clear practice areas.",
        challenges: [
                "Prospective clients can't tell attorneys apart from a wall of text",
                "Generic contact forms don't triage urgent matters from general inquiries",
                "Case results and credentials stay buried in PDFs instead of on the site",
              ],
        solution:
                "An authority-building site with clear practice area pages and smart intake forms that route urgent matters straight to the right attorney.",
        features: [
                "Practice area pages",
                "Attorney profiles & credentials",
                "Smart intake & triage forms",
                "Case results showcase",
              ],
        technologies: ["Next.js", "React Hook Form", "Zod"],
        startingAt: "$3,800",
        cta: { label: "Explore Services", href: "/services" },
  },
  {
        id: "finance",
        label: "Finance & Accounting",
        icon: Landmark,
        summary: "Trust-forward sites with secure portals and self-serve scheduling.",
        challenges: [
                "Clients expect bank-level trust signals before sharing financial data",
                "Scheduling consultations requires repeated back-and-forth emails",
                "Service tiers like bookkeeping, tax, and advisory aren't clearly differentiated",
              ],
        solution:
                "A trust-forward site with secure client portal integration and self-serve consultation booking that reflects the credibility your firm has earned.",
        features: [
                "Secure client portal integration",
                "Consultation scheduling",
                "Service tier comparison",
                "Resource & tax-deadline hub",
              ],
        technologies: ["Next.js", "Clerk", "Supabase"],
        startingAt: "$4,200",
        cta: { label: "Explore Services", href: "/services" },
  },
  {
        id: "retail",
        label: "Retail & E-commerce",
        icon: Store,
        summary: "Conversion-tuned storefronts with real-time inventory sync.",
        challenges: [
                "Generic storefronts fail to differentiate from marketplace listings",
                "Cart abandonment quietly erases margin on every campaign",
                "Inventory mismatches between the site and warehouse create refunds",
              ],
        solution:
                "A conversion-tuned storefront with real-time inventory sync and abandoned cart recovery built directly into checkout.",
        features: [
                "Stripe-powered checkout",
                "Real-time inventory sync",
                "Abandoned cart recovery",
                "Product bundles & upsells",
              ],
        technologies: ["Next.js", "Stripe", "Supabase"],
        startingAt: "$6,000",
        cta: { label: "View Demo Details", href: "/live-demos/haven-athletics" },
  },
  {
        id: "travel",
        label: "Travel Agencies",
        icon: Plane,
        summary: "Itinerary-first sites that build confidence before travelers commit.",
        challenges: [
                "Multi-destination itineraries are hard to present clearly online",
                "Booking deposits and flexible payment plans need custom handling",
                "Trust-building content like reviews and trip photos stays scattered across social media",
              ],
        solution:
                "An itinerary-first site with flexible deposit-based booking and integrated trip galleries that builds confidence before travelers commit.",
        features: [
                "Itinerary builder & display",
                "Deposit & payment plan checkout",
                "Trip galleries & reviews",
                "Destination guides",
              ],
        technologies: ["Next.js", "Stripe", "Framer Motion"],
        startingAt: "$4,500",
        cta: { label: "Explore Services", href: "/services" },
  },
  ];

/**
 * getIndustryById
 *
 * Resolves a single industry record by its card id/slug. Centralizing
 * lookup here mirrors getDemoBySlug in the live-demos catalog, keeping a
 * single seam for future dedicated /industries/[slug] pages.
 */
export function getIndustryById(id: string): Industry | undefined {
    return INDUSTRIES.find((industry) => industry.id === id);
}
