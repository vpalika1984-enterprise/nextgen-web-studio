import Link from "next/link";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { CONSULTING_INFO } from "./consulting-data";

const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
];

const DEMO_NAV_LINKS = [
  { label: "Live Demo Marketplace", href: "/live-demos" },
  { label: "Request a Similar Website", href: "/book-consultation" },
];

/**
 * Footer
 *
 * Consulting-specific site footer: a closing consultation CTA banner
 * (the page's third and final lead-capture touchpoint, after the Hero
 * and the dedicated Book Consultation section), quick links, contact
 * details, social icons, and a small credit bar linking back to the
 * NextGen Web Studio demo listing.
 */
export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <Container className="py-14 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Ready to transform your business?
        </h2>
        <div className="mt-6">
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-500" asChild>
            <Link href="#consultation">
              Book Your Free AI Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>

      <Container className="border-t border-white/10 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-xl font-semibold">{CONSULTING_INFO.name}</p>
            <p className="mt-2 text-sm text-white/60">
              {CONSULTING_INFO.address.street}, {CONSULTING_INFO.address.city},{" "}
              {CONSULTING_INFO.address.state}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
              Quick Links
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <a href={`tel:${CONSULTING_INFO.phone}`} className="hover:text-white">
                  {CONSULTING_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONSULTING_INFO.email}`} className="hover:text-white">
                  {CONSULTING_INFO.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href={CONSULTING_INFO.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-white/60 hover:text-white"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={CONSULTING_INFO.social.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="text-white/60 hover:text-white"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {CONSULTING_INFO.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href="/live-demos/meridian-ai-consulting" className="text-white/60 hover:text-white">
              A live demo by NextGen Web Studio
            </Link>
            {DEMO_NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/60 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
