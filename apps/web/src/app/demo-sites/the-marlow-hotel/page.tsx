import type { Metadata } from "next";

import { PoweredByBadge } from "@/components/demo-sites/shared/powered-by-badge";
import { HOTEL_INFO } from "@/components/demo-sites/the-marlow-hotel/hotel-data";
import { Amenities } from "@/components/demo-sites/the-marlow-hotel/amenities";
import { BookingCta } from "@/components/demo-sites/the-marlow-hotel/booking-cta";
import { ContactSection } from "@/components/demo-sites/the-marlow-hotel/contact-section";
import { Dining } from "@/components/demo-sites/the-marlow-hotel/dining";
import { Experiences } from "@/components/demo-sites/the-marlow-hotel/experiences";
import { Footer } from "@/components/demo-sites/the-marlow-hotel/footer";
import { Gallery } from "@/components/demo-sites/the-marlow-hotel/gallery";
import { Hero } from "@/components/demo-sites/the-marlow-hotel/hero";
import { HotelFaq } from "@/components/demo-sites/the-marlow-hotel/hotel-faq";
import { MapSection } from "@/components/demo-sites/the-marlow-hotel/map-section";
import { RoomSearchSection } from "@/components/demo-sites/the-marlow-hotel/room-search-section";
import { RoomShowcase } from "@/components/demo-sites/the-marlow-hotel/room-showcase";
import { Testimonials } from "@/components/demo-sites/the-marlow-hotel/testimonials";
import { SITE_URL } from "@/lib/constants";

const DEMO_PATH = "/demo-sites/the-marlow-hotel";
const DEMO_URL = new URL(DEMO_PATH, SITE_URL).toString();

/**
 * Metadata for The Marlow Hotel demo site itself.
 *
 * Marked noindex: this page is a sales demo, not a real business, and
 * its canonical, indexable marketing-site listing lives at
 * /live-demos/the-marlow-hotel. Title and description describe the
 * hotel rather than NextGen Web Studio, since visitors land here
 * expecting a real hotel's own site.
 */
export const metadata: Metadata = {
  title: `${HOTEL_INFO.name} | Live Demo by NextGen Web Studio`,
  description: HOTEL_INFO.description,
  alternates: { canonical: DEMO_URL },
  robots: { index: false, follow: false },
  openGraph: {
    title: HOTEL_INFO.name,
    description: HOTEL_INFO.description,
    url: DEMO_URL,
    siteName: HOTEL_INFO.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: HOTEL_INFO.name,
    description: HOTEL_INFO.description,
  },
};

/**
 * The Marlow Hotel - flagship hospitality live demo site.
 *
 * Standalone single-page hotel site rendered under /demo-sites,
 * outside the NextGen Web Studio marketing shell (see the demo-sites
 * route layout). Assembles the hotel's own Hero through Footer, plus a
 * PoweredByBadge linking back to its marketplace detail page.
 */
export default function TheMarlowHotelDemoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: HOTEL_INFO.name,
    description: HOTEL_INFO.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: HOTEL_INFO.address.street,
      addressLocality: HOTEL_INFO.address.city,
      addressRegion: HOTEL_INFO.address.state,
      postalCode: HOTEL_INFO.address.zip,
    },
    telephone: HOTEL_INFO.phone,
    email: HOTEL_INFO.email,
    url: DEMO_URL,
    checkinTime: HOTEL_INFO.checkIn,
    checkoutTime: HOTEL_INFO.checkOut,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <RoomShowcase />
      <RoomSearchSection />
      <Amenities />
      <BookingCta />
      <Dining />
      <Experiences />
      <Gallery />
      <Testimonials />
      <HotelFaq />
      <ContactSection />
      <MapSection />
      <Footer />
      <PoweredByBadge demoDetailsHref="/live-demos/the-marlow-hotel" />
    </>
  );
}
