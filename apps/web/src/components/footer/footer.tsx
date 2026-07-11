import Link from "next/link";
import { Github, Instagram, Linkedin, Sparkles, Twitter } from "lucide-react";

import { SITE_NAME, SITE_TAGLINE, SOCIAL_LINKS } from "@/lib/constants";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "AI Solutions", href: "/ai-solutions" },
      { label: "E-commerce", href: "/services/ecommerce" },
      { label: "Branding & UI/UX", href: "/services/branding" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Live Demo Marketplace", href: "/live-demos" },
      { label: "Templates", href: "/templates" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Industries", href: "/industries" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Learning Center", href: "/resources/learning-center" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Book a Consultation", href: "/book-consultation" },
    ],
  },
];

/**
 * Social icon links pull from the canonical SOCIAL_LINKS constants (rather
 * than hardcoding generic platform homepages) so they always point at the
 * studio's real profiles.
 */
const SOCIAL_ICONS = [
  { label: "Twitter", href: SOCIAL_LINKS.twitter, icon: Twitter },
  { label: "GitHub", href: SOCIAL_LINKS.github, icon: Github },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: Linkedin },
  { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: Instagram },
];

/**
 * Footer
 *
 * Site-wide footer with sitemap columns, social links, and legal row.
 * Rendered once inside the (marketing) route group layout.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-fuchsia-500 text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-base font-semibold text-foreground">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{SITE_TAGLINE}</p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_ICONS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-foreground">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
