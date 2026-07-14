import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import { Container } from "@/components/shared/container";
import { AGENCY_INFO } from "./realty-data";

const FOOTER_LINKS = [
  { label: "Properties", href: "#properties" },
  { label: "Agents", href: "#agents" },
  { label: "Contact", href: "#contact" },
];

const DEMO_NAV_LINKS = [
  { label: "Live Demo Marketplace", href: "/live-demos" },
  { label: "Request a Similar Website", href: "/book-consultation" },
];

/**
 * Footer
 *
 * Agency-specific site footer: quick links, hours summary, social
 * icons, and a small credit bar linking back to the NextGen Web Studio
 * demo listing, the wider Live Demo Marketplace, and consultation
 * booking.
 */
export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-12 text-white">
      <Container>
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-xl font-semibold">{AGENCY_INFO.name}</p>
            <p className="mt-2 text-sm text-white/60">
              {AGENCY_INFO.address.street}, {AGENCY_INFO.address.city}, {AGENCY_INFO.address.state}
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
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Hours</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>{AGENCY_INFO.hours.weekday}</li>
              <li>{AGENCY_INFO.hours.saturday}</li>
              <li>{AGENCY_INFO.hours.sunday}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href={AGENCY_INFO.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-white/60 hover:text-white"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={AGENCY_INFO.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-white/60 hover:text-white"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={AGENCY_INFO.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-white/60 hover:text-white"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {AGENCY_INFO.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href="/live-demos/summit-realty-group" className="text-white/60 hover:text-white">
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
