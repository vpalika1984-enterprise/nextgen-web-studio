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
}

export interface DemoCategory {
    id: string;
    label: string;
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
        liveUrl: "https://demo.nextgenwebstudio.com/ember-and-oak",
        detailsHref: "/live-demos/ember-and-oak",
        featured: true,
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
        liveUrl: "https://demo.nextgenwebstudio.com/northshore-family-medicine",
        detailsHref: "/live-demos/northshore-family-medicine",
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
        liveUrl: "https://demo.nextgenwebstudio.com/the-marlow-hotel",
        detailsHref: "/live-demos/the-marlow-hotel",
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
        liveUrl: "https://demo.nextgenwebstudio.com/summit-realty-group",
        detailsHref: "/live-demos/summit-realty-group",
        featured: true,
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
  },
  ];
