import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import { Container } from "@/components/shared/container";
import { HOTEL_INFO } from "./hotel-data";

const FOOTER_LINKS = [
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Contact", href: "#contact" },
];

const DEMO_NAV_LINKS = [
  { label: "Live Demo Marketplace", href: "/live-demos" },
  { label: "Request a Similar Website", href: "/book-consultation" },
];

/**
 * Footer
 *
 * Hotel-specific site footer: quick links, check-in/check-out summary,
 * social icons, and a small credit bar linking back to the NextGen Web
 * Studio demo listing, the wider Live Demo Marketplace, and
 * consultation booking.
 */
export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-12 text-white">
      <Container>
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-xl font-semibold">{HOTEL_INFO.name}</p>
            <p className="mt-2 text-sm text-white/60">
              {HOTEL_INFO.address.street}, {HOTEL_INFO.address.city}, {HOTEL_INFO.address.state}
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
              Check-In / Check-Out
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Check-In: {HOTEL_INFO.checkIn}</li>
              <li>Check-Out: {HOTEL_INFO.checkOut}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href={HOTEL_INFO.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-white/60 hover:text-white"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={HOTEL_INFO.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-white/60 hover:text-white"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={HOTEL_INFO.social.linkedin}
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
            &copy; {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href="/live-demos/the-marlow-hotel" className="text-white/60 hover:text-white">
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
