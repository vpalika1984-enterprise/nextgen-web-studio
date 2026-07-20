/**
 * Meridian AI Consulting - Demo Site Data
 *
 * Central data source for the Meridian AI Consulting demo: a premium AI
 * consulting and digital transformation agency targeting enterprise and
 * SME buyers. Every section on the page reads from this file so content
 * can change without touching component code, matching the pattern used
 * by every other demo site's `<slug>-data.ts`.
 */

import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Building2,
  Compass,
  Database,
  FileSearch,
  Gauge,
  Globe,
  HeartPulse,
  Hotel,
  Landmark,
  Mic,
  Plug,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Users,
  Workflow,
} from "lucide-react";

export const CONSULTING_INFO = {
  name: "Meridian AI Consulting",
  tagline: "Enterprise AI Strategy, Built to Ship",
  description:
    "Meridian AI Consulting helps enterprise and mid-market teams design, build, and scale production AI systems — from strategy and readiness through deployment and ongoing support.",
  phone: "(555) 410-8890",
  email: "hello@meridianai.demo",
  whatsapp: "https://wa.me/15554108890",
  address: {
    street: "500 Innovation Way, Suite 300",
    city: "Austin",
    state: "TX",
    zip: "78701",
  },
  foundedYear: 2019,
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  mapEmbedQuery: "Austin, TX",
} as const;

export const TRUSTED_TECHNOLOGIES: string[] = [
  "OpenAI",
  "Anthropic",
  "Google Cloud",
  "Microsoft Azure",
  "AWS",
  "Stripe",
  "Supabase",
  "Next.js",
];

export interface ServiceLine {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: ServiceLine[] = [
  {
    id: "service-1",
    icon: Compass,
    title: "AI Strategy & Roadmapping",
    description:
      "A prioritized, business-aligned roadmap that identifies where AI creates the most value in your organization first.",
  },
  {
    id: "service-2",
    icon: Bot,
    title: "Custom AI & LLM Development",
    description:
      "Bespoke AI applications and LLM integrations built on your data, your workflows, and your compliance requirements.",
  },
  {
    id: "service-3",
    icon: Database,
    title: "Data Engineering & MLOps",
    description:
      "Reliable data pipelines and deployment infrastructure so AI systems stay accurate, observable, and easy to maintain.",
  },
  {
    id: "service-4",
    icon: Workflow,
    title: "Intelligent Process Automation",
    description:
      "Automate repetitive, high-volume workflows with AI agents that hand off to your team exactly when judgment is needed.",
  },
  {
    id: "service-5",
    icon: Building2,
    title: "Digital Transformation Advisory",
    description:
      "Organization-wide modernization guidance that pairs AI adoption with the process and change-management work it requires.",
  },
  {
    id: "service-6",
    icon: ShieldCheck,
    title: "AI Governance & Security",
    description:
      "Policy, access control, and monitoring frameworks that keep AI adoption safe, auditable, and compliant as it scales.",
  },
];

export interface AiShowcaseItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

export const AI_SHOWCASE: AiShowcaseItem[] = [
  {
    id: "showcase-1",
    icon: Bot,
    title: "AI Customer Support",
    description:
      "A always-on support agent that resolves common tickets instantly and hands off complex cases to your team with full context.",
    benefits: [
      "Cuts first-response time from hours to seconds",
      "Resolves routine tickets without human involvement",
      "Learns from your existing help center and past tickets",
    ],
  },
  {
    id: "showcase-2",
    icon: BarChart3,
    title: "AI Sales Assistant",
    description:
      "Qualifies inbound leads, answers product questions, and books meetings directly on your sales team's calendar.",
    benefits: [
      "Responds to new leads within seconds, day or night",
      "Pre-qualifies prospects before a rep ever gets involved",
      "Books meetings automatically into existing calendars",
    ],
  },
  {
    id: "showcase-3",
    icon: FileSearch,
    title: "AI Knowledge Base",
    description:
      "Turns scattered internal docs, wikis, and PDFs into a single searchable assistant your whole team can ask questions.",
    benefits: [
      "Cuts time spent searching for internal information",
      "Keeps answers grounded in your actual source documents",
      "Onboards new hires faster with instant, accurate answers",
    ],
  },
  {
    id: "showcase-4",
    icon: Gauge,
    title: "AI Document Analysis",
    description:
      "Extracts structured data from invoices, contracts, and forms automatically, replacing manual data entry.",
    benefits: [
      "Reduces manual processing time by more than half",
      "Flags anomalies and missing fields for human review",
      "Integrates directly with existing document workflows",
    ],
  },
  {
    id: "showcase-5",
    icon: Mic,
    title: "AI Voice Agent",
    description:
      "Handles inbound calls, answers common questions, and routes callers to the right person or team automatically.",
    benefits: [
      "Answers every call, even outside business hours",
      "Reduces load on front-desk and support staff",
      "Captures structured call summaries automatically",
    ],
  },
  {
    id: "showcase-6",
    icon: Globe,
    title: "AI Website Consultant",
    description:
      "An embedded assistant that guides visitors to the right page, service, or answer instead of leaving them to browse alone.",
    benefits: [
      "Keeps visitors engaged instead of bouncing",
      "Surfaces the right service or page for each visitor",
      "Captures qualified leads directly from the conversation",
    ],
  },
];

export interface IndustryCard {
  id: string;
  icon: LucideIcon;
  label: string;
  description: string;
}

export const INDUSTRIES_SERVED: IndustryCard[] = [
  {
    id: "industry-1",
    icon: HeartPulse,
    label: "Healthcare",
    description: "Patient intake automation, clinical documentation support, and HIPAA-conscious AI workflows.",
  },
  {
    id: "industry-2",
    icon: Building2,
    label: "Manufacturing",
    description: "Predictive maintenance, quality inspection, and supply chain forecasting built on plant data.",
  },
  {
    id: "industry-3",
    icon: Landmark,
    label: "Finance",
    description: "Document processing, fraud pattern detection, and client-facing AI assistants for regulated teams.",
  },
  {
    id: "industry-4",
    icon: ShoppingCart,
    label: "Retail",
    description: "Personalized recommendations, inventory forecasting, and AI-assisted customer service at scale.",
  },
  {
    id: "industry-5",
    icon: Truck,
    label: "Logistics",
    description: "Route optimization, demand forecasting, and automated exception handling across the supply chain.",
  },
  {
    id: "industry-6",
    icon: Hotel,
    label: "Hospitality",
    description: "Guest service automation, dynamic pricing insights, and AI-assisted booking and concierge tools.",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover & Assess",
    description: "We audit your data, systems, and workflows to find where AI creates real, measurable value.",
  },
  {
    number: "02",
    title: "Strategize & Roadmap",
    description: "A prioritized roadmap with clear milestones, so investment lines up with business impact.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description: "Production-grade AI systems built into your existing tools, not bolted on as a separate app.",
  },
  {
    number: "04",
    title: "Scale & Optimize",
    description: "We monitor, retrain, and expand what works, with governance in place from day one.",
  },
];

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  results: string;
  metricLabel: string;
  metricValue: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    client: "Northfield Logistics",
    industry: "Logistics",
    problem: "Manual invoice processing was consuming over 30 hours of staff time every week.",
    solution: "Meridian deployed an AI document extraction pipeline integrated directly into the existing ERP.",
    results: "Invoices are now processed automatically, with staff only reviewing flagged exceptions.",
    metricLabel: "Faster invoice processing",
    metricValue: "65%",
  },
  {
    id: "case-2",
    client: "Harborline Financial Group",
    industry: "Finance",
    problem: "Support teams were overwhelmed by routine account and policy questions during peak hours.",
    solution: "An AI customer support agent was trained on internal policy docs and connected to the ticketing system.",
    results: "Routine tickets are resolved instantly, freeing the team to focus on complex client cases.",
    metricLabel: "Tickets resolved without a human",
    metricValue: "58%",
  },
  {
    id: "case-3",
    client: "Beacon Retail Collective",
    industry: "Retail",
    problem: "Sales reps spent most of their day qualifying leads instead of closing deals.",
    solution: "Meridian built an AI sales assistant that pre-qualifies inbound leads and books meetings automatically.",
    results: "Reps now spend the majority of their time with pre-qualified, sales-ready prospects.",
    metricLabel: "Increase in qualified meetings booked",
    metricValue: "3.2x",
  },
];

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export const COMPANY_STATS: Stat[] = [
  { label: "Hours Saved for Clients", value: 48000, suffix: "+" },
  { label: "Processes Automated", value: 210, suffix: "+" },
  { label: "AI Workflows Built", value: 90, suffix: "+" },
  { label: "Customer Satisfaction", value: 97, suffix: "%" },
  { label: "Average ROI", value: 4, suffix: "x" },
  { label: "Response Time Improvement", value: 80, suffix: "%" },
];

export interface ConsultingTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: ConsultingTestimonial[] = [
  {
    id: "testimonial-1",
    name: "Priya Nathan",
    role: "COO",
    company: "Northfield Logistics",
    quote:
      "Meridian didn't just automate a process, they helped us rethink how the whole team works. The ROI was clear within the first quarter.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Marcus Webb",
    role: "VP of Operations",
    company: "Harborline Financial Group",
    quote:
      "Their team understood our compliance constraints from day one. The AI support agent went live without a single governance concern.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Elena Cho",
    role: "Head of Sales",
    company: "Beacon Retail Collective",
    quote:
      "Our reps finally spend their time closing instead of qualifying. Meridian's roadmap made the whole rollout painless.",
    rating: 5,
  },
];

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
}

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "why-1",
    title: "Strategy Before Software",
    description: "We start with a roadmap tied to business outcomes, not a generic AI feature list.",
  },
  {
    id: "why-2",
    title: "Production-Grade Engineering",
    description: "Every system we build is designed to run reliably in production, not just in a demo.",
  },
  {
    id: "why-3",
    title: "Governance Built In",
    description: "Security, access control, and monitoring are part of the build, not an afterthought.",
  },
  {
    id: "why-4",
    title: "Enterprise & SME Experience",
    description: "We've shipped AI systems for large enterprises and lean teams, and tailor our approach to both.",
  },
];

export interface ConsultingFaq {
  question: string;
  answer: string;
}

export const CONSULTING_FAQS: ConsultingFaq[] = [
  {
    question: "How long does a typical AI engagement take?",
    answer:
      "Most engagements start with a 2-3 week discovery and roadmap phase, followed by an 8-12 week build for the first production workflow.",
  },
  {
    question: "Do we need clean data before starting?",
    answer:
      "No. Data readiness is assessed during discovery, and we frequently build the data pipeline as part of the engagement itself.",
  },
  {
    question: "Can you work with our existing tools and systems?",
    answer:
      "Yes. Our integrations are built to fit into your existing stack rather than requiring you to replace it.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "Every engagement includes a governance framework covering access control, monitoring, and compliance requirements relevant to your industry.",
  },
  {
    question: "What does the free AI discovery call cover?",
    answer:
      "A focused conversation about your goals and current systems, followed by a same-week summary of where AI is likely to create the most value for you.",
  },
];

export interface ReadinessDimension {
  id: string;
  icon: LucideIcon;
  label: string;
  description: string;
  levels: string[];
}

export const READINESS_DIMENSIONS: ReadinessDimension[] = [
  {
    id: "readiness-1",
    icon: Database,
    label: "Data & Infrastructure",
    description: "How accessible and well-organized is your business data today?",
    levels: ["Just Starting", "Building Momentum", "Advanced"],
  },
  {
    id: "readiness-2",
    icon: Workflow,
    label: "Process Automation",
    description: "How much of your day-to-day work already runs on defined, repeatable workflows?",
    levels: ["Just Starting", "Building Momentum", "Advanced"],
  },
  {
    id: "readiness-3",
    icon: Users,
    label: "Team AI Literacy",
    description: "How comfortable is your team with adopting and working alongside AI tools?",
    levels: ["Just Starting", "Building Momentum", "Advanced"],
  },
  {
    id: "readiness-4",
    icon: Plug,
    label: "Tools & Integration",
    description: "How connected are your existing systems, and how easily could AI plug into them?",
    levels: ["Just Starting", "Building Momentum", "Advanced"],
  },
];

export const SAMPLE_READINESS_RESULT = {
  scoreLabel: "Sample AI Readiness Score",
  score: 72,
  maxScore: 100,
  tier: "Growth Stage",
  summary:
    "Organizations in this range typically have solid process foundations but haven't yet connected AI to their highest-impact workflows.",
  recommendation:
    "A focused AI discovery call is the fastest way to turn this into a prioritized, business-specific roadmap.",
} as const;
