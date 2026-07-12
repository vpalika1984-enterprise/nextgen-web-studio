import type { Metadata } from "next";

import { EventsStrip } from "@/components/demo-sites/shared/events-strip";
import { PoweredByBadge } from "@/components/demo-sites/shared/powered-by-badge";
import { PromoBanner } from "@/components/demo-sites/shared/promo-banner";
import { About } from "@/components/demo-sites/ember-and-oak/about";
import { ChefSection } from "@/components/demo-sites/ember-and-oak/chef-section";
import { ContactSection } from "@/components/demo-sites/ember-and-oak/contact-section";
import { Footer } from "@/components/demo-sites/ember-and-oak/footer";
import { FullMenu } from "@/components/demo-sites/ember-and-oak/full-menu";
import { Gallery } from "@/components/demo-sites/ember-and-oak/gallery";
import { Hero } from "@/components/demo-sites/ember-and-oak/hero";
import { MapSection } from "@/components/demo-sites/ember-and-oak/map-section";
import { ReservationCta } from "@/components/demo-sites/ember-and-oak/reservation-cta";
import {
    PROMOTIONS,
    RESTAURANT_INFO,
    UPCOMING_EVENTS,
} from "@/components/demo-sites/ember-and-oak/restaurant-data";
import { SignatureDishes } from "@/components/demo-sites/ember-and-oak/signature-dishes";
import { Testimonials } from "@/components/demo-sites/ember-and-oak/testimonials";
import { SITE_URL } from "@/lib/constants";

const DEMO_PATH = "/demo-sites/ember-and-oak";
const DEMO_URL = new URL(DEMO_PATH, SITE_URL).toString();

/**
 * Metadata for the Ember & Oak demo site itself.
 *
 * Marked noindex: this page is a sales demo, not a real business, and
 * its canonical, indexable marketing-site listing lives at
 * /live-demos/ember-and-oak. Title and description describe the
 * restaurant rather than NextGen Web Studio, since visitors land here
 * expecting a real restaurant's own site.
 */
export const metadata: Metadata = {
    title: `${RESTAURANT_INFO.name} | Live Demo by NextGen Web Studio`,
    description: RESTAURANT_INFO.summary,
    alternates: { canonical: DEMO_URL },
    robots: { index: false, follow: false },
    openGraph: {
          title: RESTAURANT_INFO.name,
          description: RESTAURANT_INFO.summary,
          url: DEMO_URL,
          siteName: RESTAURANT_INFO.name,
          type: "website",
    },
    twitter: {
          card: "summary_large_image",
          title: RESTAURANT_INFO.name,
          description: RESTAURANT_INFO.summary,
    },
};

/**
 * Ember & Oak Steakhouse — flagship live demo site.
 *
 * Standalone single-page restaurant site rendered under /demo-sites,
 * outside the NextGen Web Studio marketing shell (see the demo-sites
 * route layout). Assembles the restaurant's own Hero through Footer,
 * plus a PoweredByBadge linking back to its marketplace detail page.
 */
export default function EmberAndOakDemoPage() {
    const jsonLd = {
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: RESTAURANT_INFO.name,
          description: RESTAURANT_INFO.summary,
          address: RESTAURANT_INFO.address,
          telephone: RESTAURANT_INFO.phone,
          servesCuisine: "Steakhouse",
          url: DEMO_URL,
    };

  return (
        <>
              <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                      />
              <Hero />
              <PromoBanner promotions={PROMOTIONS} />
              <About />
              <SignatureDishes />
              <FullMenu />
              <ChefSection />
              <Gallery />
              <div className="bg-neutral-900 py-16">
                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <EventsStrip events={UPCOMING_EVENTS} />
                      </div>
              </div>
              <Testimonials />
              <ReservationCta />
              <ContactSection />
              <MapSection />
              <Footer />
              <PoweredByBadge demoDetailsHref="/live-demos/ember-and-oak" />
        </>
      );
}
