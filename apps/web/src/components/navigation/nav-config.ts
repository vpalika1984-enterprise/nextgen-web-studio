import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Boxes,
  Briefcase,
  FileText,
  Globe2,
  LayoutTemplate,
  Newspaper,
  Rocket,
  Sparkles,
  Tag,
  Users,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

export interface NavGroup {
  label: string;
  href?: string;
  description?: string;
  items?: NavLink[];
}

/**
 * Primary navigation structure for the marketing site header, mobile
 * drawer, and command palette. Kept in one place so all three surfaces
 * stay in sync with the approved site map.
 */
export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    description: "Full-stack web design, engineering, and growth services.",
    items: [
      {
        label: "Web Design & Development",
        href: "/services/web-development",
        description: "Custom, high-performance websites built to convert.",
        icon: Globe2,
      },
      {
        label: "AI Solutions",
        href: "/ai-solutions",
        description: "AI chatbots, automation, and intelligent tooling.",
        icon: Sparkles,
      },
      {
        label: "E-commerce",
        href: "/services/ecommerce",
        description: "Storefronts engineered for revenue.",
        icon: Boxes,
      },
      {
        label: "Branding & UI/UX",
        href: "/services/branding",
        description: "Identity systems and interface design.",
        icon: LayoutTemplate,
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Solutions tailored to your industry.",
  },
  {
    label: "Live Demos",
    href: "/live-demos",
    description: "Explore interactive live project demos.",
    items: [
      {
        label: "Demo Marketplace",
        href: "/live-demos",
        description: "Browse live, interactive project demos by industry.",
        icon: Rocket,
      },
      {
        label: "Templates",
        href: "/templates",
        description: "Ready-to-launch website templates.",
        icon: LayoutTemplate,
      },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    description: "Selected work across industries.",
    icon: Briefcase,
  },
  {
    label: "Pricing",
    href: "/pricing",
    description: "Transparent packages for every stage.",
    icon: Tag,
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Guides, case studies, and the blog.",
    items: [
      {
        label: "Blog",
        href: "/blog",
        description: "Insights on web strategy and engineering.",
        icon: Newspaper,
      },
      {
        label: "Case Studies",
        href: "/case-studies",
        description: "In-depth breakdowns of client results.",
        icon: FileText,
      },
      {
        label: "Learning Center",
        href: "/resources/learning-center",
        description: "Guides for founders and marketing teams.",
        icon: Blocks,
      },
    ],
  },
  {
    label: "Company",
    href: "/about",
    items: [
      {
        label: "About",
        href: "/about",
        description: "Our mission, team, and story.",
        icon: Users,
      },
      {
        label: "Careers",
        href: "/careers",
        description: "Join the NextGen Web Studio team.",
        icon: Briefcase,
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Get in touch with our team.",
      },
    ],
  },
];

export const NAV_CTA = {
  label: "Book a Consultation",
  href: "/book-consultation",
};
