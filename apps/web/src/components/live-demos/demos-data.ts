export type DemoStatus = "featured" | "new" | "coming-soon" | "live" | "production-ready";

export interface DemoMediaItem {
  type: "image" | "video";
  caption: string;
  src?: string;
}

export interface DemoTestimonial {
  quote: string;
  author: string;
  role?: string;
}

export interface DemoPricing {
  startingAt: number;
  currency?: string;
  note?: string;
}

/**
 * Demo
 *
 * Core catalog record for a single live demo. Required fields cover what
 * every current marketplace and detail-page primitive needs. Optional
 * fields are extension points reserved for future milestones (richer
 * media, testimonials, pricing, source/brochure links, search tags, demo
 * status, and category hierarchy) so those features can be added purely
 * as data, without changing this shape or any component that already
 * consumes it. This keeps the catalog ready to grow from a handful of
 * demos to hundreds, and ready to be backed by a CMS instead of this
 * static array, without breaking changes.
 */
export interface Demo {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  description: string;
  features: string[];
  technologies: string[];
  liveUrl: string;
  detailsHref: string;
  featured?: boolean;
  status?: DemoStatus[];
  businessBenefits?: string[];
  targetIndustries?: string[];
  media?: DemoMediaItem[];
  testimonials?: DemoTestimonial[];
  pricing?: DemoPricing;
  repositoryUrl?: string;
  brochureUrl?: string;
  tags?: string[];
  categoryPath?: string[];
}

export interface DemoCategory {
  id: string;
  label: string;
  parentId?: string;
}

export const DEMO_CATEGORIES: DemoCategory[] = [
  { id: "all", label: "All Demos" },
  { id: "restaurant", label: "Restaurant" },
  { id: "medical", label: "Medical" },
  { id: "hotel", label: "Hotel" },
  { id: "real-estate", label: "Real Estate" },
  { id: "education", label: "Education" },
  { id: "construction", label: "Construction" },
  { id: "corporate", label: "Corporate" },
  { id: "ai-consulting", label: "AI Consulting" },
  { id: "ai-saas", label: "AI SaaS" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "dashboard", label: "Dashboard" },
];

export const DEMOS: Demo[] = [
  {
    id: "ember-and-oak",
    name: "Ember & Oak Steakhouse",
    category: "restaurant",
    categoryLabel: "Restaurant",
    description:
      "A menu-forward fine dining site with real-time reservations and online ordering built in.",
    features: ["Live table reservations", "Online ordering", "Seasonal menu CMS"],
    technologies: ["Next.js", "Stripe", "Supabase"],
    liveUrl: "/demo-sites/ember-and-oak",
    detailsHref: "/live-demos/ember-and-oak",
    featured: true,
    status: ["featured", "live", "production-ready"],
    businessBenefits: [
      "Reduce phone-in reservation workload",
      "Increase average order value with online upsells",
      "Turn first-time diners into repeat guests with seasonal promotions",
    ],
    targetIndustries: [
      "Fine Dining Restaurants",
      "Bistros & Gastropubs",
      "Hotel Restaurants",
      "Catering Companies",
    ],
  },
  {
    id: "northshore-family-medicine",
    name: "Northshore Family Medicine",
    category: "medical",
    categoryLabel: "Medical",
    description:
      "A patient-first clinic site with self-serve appointment booking and provider directories.",
    features: ["Appointment scheduling", "Provider directory", "HIPAA-conscious intake forms"],
    technologies: ["Next.js", "Clerk", "Supabase"],
    liveUrl: "/demo-sites/northshore-family-medicine",
    detailsHref: "/live-demos/northshore-family-medicine",
    status: ["live", "production-ready"],
    businessBenefits: [
      "Cut no-show rates with automated appointment reminders",
      "Reduce front-desk call volume with self-serve booking",
      "Build patient trust with clear provider credentials",
    ],
    targetIndustries: [
      "Family Medicine Clinics",
      "Dental Practices",
      "Urgent Care Centers",
      "Specialty Medical Groups",
    ],
  },
  {
    id: "the-marlow-hotel",
    name: "The Marlow Hotel",
    category: "hotel",
    categoryLabel: "Hotel",
    description:
      "A boutique hotel experience with room booking, rate calendars, and a virtual property tour.",
    features: ["Real-time room availability", "Rate calendar", "Virtual tour gallery"],
    technologies: ["Next.js", "Stripe", "Framer Motion"],
    liveUrl: "/demo-sites/the-marlow-hotel",
    detailsHref: "/live-demos/the-marlow-hotel",
    featured: true,
    status: ["featured", "live", "production-ready"],
    businessBenefits: [
      "Capture direct bookings without OTA commission fees",
      "Showcase rooms and amenities with an immersive virtual tour",
      "Upsell packages and experiences at the point of booking",
    ],
    targetIndustries: [
      "Boutique Hotels",
      "Bed & Breakfasts",
      "Resorts",
      "Vacation Rental Portfolios",
    ],
  },
  {
    id: "summit-realty-group",
    name: "Summit Realty Group",
    category: "real-estate",
    categoryLabel: "Real Estate",
    description:
      "An IDX-integrated brokerage site with saved searches, mortgage tools, and agent lead routing.",
    features: ["IDX/MLS listings", "Mortgage calculator", "Agent lead routing"],
    technologies: ["Next.js", "React Query", "Supabase"],
    liveUrl: "/demo-sites/summit-realty-group",
    detailsHref: "/live-demos/summit-realty-group",
    featured: true,
    status: ["featured", "live", "production-ready"],
    businessBenefits: [
      "Generate qualified buyer leads around the clock",
      "Keep agents focused on hot leads with automated routing",
      "Help buyers self-qualify with an embedded mortgage calculator",
    ],
    targetIndustries: [
      "Residential Brokerages",
      "Commercial Real Estate Firms",
      "Property Management Companies",
      "Independent Agents",
    ],
  },
  {
    id: "brightpath-college-prep",
    name: "BrightPath College Prep",
    category: "education",
    categoryLabel: "Education",
    description:
      "An admissions-focused school site with virtual tours, application tracking, and event calendars.",
    features: ["Online applications", "Program directory", "Event calendar"],
    technologies: ["Next.js", "Supabase", "Zod"],
    liveUrl: "https://demo.nextgenwebstudio.com/brightpath-college-prep",
    detailsHref: "/live-demos/brightpath-college-prep",
    businessBenefits: [
      "Streamline admissions with a fully online application",
      "Reduce inbound calls with a searchable program directory",
      "Keep families engaged with a live event calendar",
    ],
    targetIndustries: [
      "Private Schools",
      "Colleges & Universities",
      "Tutoring Centers",
      "Vocational Training Programs",
    ],
  },
  {
    id: "granite-and-beam-construction",
    name: "Granite & Beam Construction",
    category: "construction",
    categoryLabel: "Construction",
    description:
      "A project-showcase site for a commercial contractor with quote requests and crew scheduling.",
    features: ["Project portfolio", "Instant quote requests", "Crew scheduling dashboard"],
    technologies: ["Next.js", "React Hook Form", "Supabase"],
    liveUrl: "https://demo.nextgenwebstudio.com/granite-and-beam-construction",
    detailsHref: "/live-demos/granite-and-beam-construction",
    businessBenefits: [
      "Win more bids with instant, structured quote requests",
      "Showcase completed projects to build credibility",
      "Coordinate crews efficiently with a shared scheduling dashboard",
    ],
    targetIndustries: [
      "General Contractors",
      "Remodeling Companies",
      "Commercial Builders",
      "Specialty Trade Contractors",
    ],
  },
  {
    id: "vantage-corporate-group",
    name: "Vantage Corporate Group",
    category: "corporate",
    categoryLabel: "Corporate",
    description:
      "A polished corporate site with investor relations, leadership profiles, and press coverage.",
    features: ["Investor relations hub", "Leadership profiles", "Press & media kit"],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://demo.nextgenwebstudio.com/vantage-corporate-group",
    detailsHref: "/live-demos/vantage-corporate-group",
    businessBenefits: [
      "Build investor confidence with a dedicated relations hub",
      "Strengthen employer brand with leadership visibility",
      "Centralize press coverage for easy media access",
    ],
    targetIndustries: [
      "Publicly Traded Companies",
      "Private Equity Firms",
      "Corporate Holding Groups",
      "Professional Services Firms",
    ],
  },
  {
    id: "meridian-ai-consulting",
    name: "Meridian AI Consulting",
    category: "ai-consulting",
    categoryLabel: "AI Consulting",
    description:
      "A premium AI consulting and digital transformation site with an interactive solutions showcase, case studies, and a free discovery call booking flow.",
    features: ["Interactive AI solutions showcase", "AI readiness assessment", "Free consultation booking"],
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "/demo-sites/meridian-ai-consulting",
    detailsHref: "/live-demos/meridian-ai-consulting",
    featured: true,
    status: ["featured", "live", "production-ready"],
    businessBenefits: [
      "Turn high-intent visitors into booked discovery calls",
      "Showcase AI capabilities with an interactive solutions gallery",
      "Build credibility with enterprise and SME buyers through concrete case studies",
    ],
    targetIndustries: [
      "AI Consulting Firms",
      "Digital Transformation Agencies",
      "Enterprise Technology Advisories",
      "Automation & Workflow Consultancies",
    ],
  },
  {
    id: "askher-ai-copilot",
    name: "AskHer AI Copilot",
    category: "ai-saas",
    categoryLabel: "AI SaaS",
    description:
      "A retrieval-augmented AI assistant product with usage dashboards and subscription billing.",
    features: ["AI chat copilot", "Usage analytics dashboard", "Subscription billing"],
    technologies: ["Next.js", "Clerk", "Stripe", "Recharts"],
    liveUrl: "https://demo.nextgenwebstudio.com/askher-ai-copilot",
    detailsHref: "/live-demos/askher-ai-copilot",
    featured: true,
    status: ["featured"],
    businessBenefits: [
      "Convert trial users with transparent usage dashboards",
      "Automate recurring revenue with built-in subscription billing",
      "Reduce churn with clear, real-time usage visibility",
    ],
    targetIndustries: [
      "AI Startups",
      "SaaS Companies",
      "Developer Tools",
      "B2B Software Products",
    ],
  },
  {
    id: "fieldnote-workflow-ai",
    name: "Fieldnote Workflow AI",
    category: "ai-saas",
    categoryLabel: "AI SaaS",
    description:
      "An internal automation tool that routes support tickets using an AI-assisted triage workflow.",
    features: ["AI-assisted triage", "Workflow automation", "Team analytics"],
    technologies: ["Next.js", "Supabase", "React Query"],
    liveUrl: "https://demo.nextgenwebstudio.com/fieldnote-workflow-ai",
    detailsHref: "/live-demos/fieldnote-workflow-ai",
    status: ["new"],
    businessBenefits: [
      "Cut manual ticket triage time with AI-assisted routing",
      "Improve team throughput with workflow automation",
      "Identify bottlenecks with built-in team analytics",
    ],
    targetIndustries: [
      "Internal Operations Teams",
      "Customer Support Organizations",
      "IT Service Providers",
      "AI Startups",
    ],
  },
  {
    id: "cedarline-supply-co",
    name: "Cedarline Supply Co.",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    description:
      "A direct-to-consumer storefront with Stripe checkout, inventory sync, and subscription boxes.",
    features: ["Stripe-powered checkout", "Inventory sync", "Subscription boxes"],
    technologies: ["Next.js", "Stripe", "Supabase"],
    liveUrl: "https://demo.nextgenwebstudio.com/cedarline-supply-co",
    detailsHref: "/live-demos/cedarline-supply-co",
    businessBenefits: [
      "Increase repeat purchases with subscription box offerings",
      "Prevent overselling with real-time inventory sync",
      "Convert more visitors with a streamlined Stripe checkout",
    ],
    targetIndustries: [
      "Direct-to-Consumer Brands",
      "Specialty Retailers",
      "Subscription Box Businesses",
      "Wholesale Suppliers",
    ],
  },
  {
    id: "haven-athletics",
    name: "Haven Athletics",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    description:
      "A performance apparel storefront with size-matching, bundles, and abandoned cart recovery.",
    features: ["Size-match quiz", "Product bundles", "Abandoned cart recovery"],
    technologies: ["Next.js", "Stripe", "Tailwind CSS"],
    liveUrl: "https://demo.nextgenwebstudio.com/haven-athletics",
    detailsHref: "/live-demos/haven-athletics",
    businessBenefits: [
      "Reduce returns with a guided size-match quiz",
      "Increase average order value with curated bundles",
      "Recover lost revenue with abandoned cart automation",
    ],
    targetIndustries: [
      "Apparel Brands",
      "Athletic & Fitness Retailers",
      "D2C Consumer Brands",
      "Multi-brand Storefronts",
    ],
  },
  {
    id: "pulsemetrics-dashboard",
    name: "PulseMetrics Dashboard",
    category: "dashboard",
    categoryLabel: "Dashboard",
    description:
      "A multi-tenant analytics dashboard with live charts, saved reports, and role-based access.",
    features: ["Live analytics charts", "Saved reports", "Role-based access control"],
    technologies: ["Next.js", "Recharts", "Clerk", "React Query"],
    liveUrl: "https://demo.nextgenwebstudio.com/pulsemetrics-dashboard",
    detailsHref: "/live-demos/pulsemetrics-dashboard",
    businessBenefits: [
      "Give every tenant a live, real-time view of their data",
      "Reduce support requests with self-serve saved reports",
      "Protect sensitive data with role-based access control",
    ],
    targetIndustries: [
      "SaaS Platforms",
      "Enterprise Operations Teams",
      "Data & Analytics Providers",
      "Multi-tenant Software Products",
    ],
  },
];

/**
 * getDemoBySlug
 *
 * Resolves a single demo from its details-page slug. Centralizing lookup
 * here (rather than in the route component) is the seam where this could
 * later call a CMS or database instead of scanning a static array, without
 * any consuming component needing to change.
 */
export function getDemoBySlug(slug: string): Demo | undefined {
  return DEMOS.find((demo) => demo.detailsHref === `/live-demos/${slug}`);
}

/**
 * getRelatedDemos
 *
 * Returns up to `limit` demos related to the given demo: same-category
 * demos first, then other demos as a fallback so the section never
 * renders empty even for a category with only one entry.
 */
export function getRelatedDemos(demo: Demo, limit = 3): Demo[] {
  const sameCategory = DEMOS.filter(
    (candidate) => candidate.id !== demo.id && candidate.category === demo.category
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const fallback = DEMOS.filter(
    (candidate) => candidate.id !== demo.id && !sameCategory.includes(candidate)
  );

  return [...sameCategory, ...fallback].slice(0, limit);
}
