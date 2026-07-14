import type { Metadata } from "next";

import { PoweredByBadge } from "@/components/demo-sites/shared/powered-by-badge";
import { AGENCY_INFO } from "@/components/demo-sites/summit-realty-group/realty-data";
import { ContactSection } from "@/components/demo-sites/summit-realty-group/contact-section";
import { FeaturedAgents } from "@/components/demo-sites/summit-realty-group/featured-agents";
import { FeaturedProperties } from "@/components/demo-sites/summit-realty-group/featured-properties";
import { Footer } from "@/components/demo-sites/summit-realty-group/footer";
import { Hero } from "@/components/demo-sites/summit-realty-group/hero";
import { MapSection } from "@/components/demo-sites/summit-realty-group/map-section";
import { MortgageCalculatorSection } from "@/components/demo-sites/summit-realty-group/mortgage-calculator-section";
import { Neighborhoods } from "@/components/demo-sites/summit-realty-group/neighborhoods";
import { PropertyCategories } from "@/components/demo-sites/summit-realty-group/property-categories";
import { PropertySearchSection } from "@/components/demo-sites/summit-realty-group/property-search-section";
import { RealtyFaq } from "@/components/demo-sites/summit-realty-group/realty-faq";
import { Testimonials } from "@/components/demo-sites/summit-realty-group/testimonials";
import { WhyChooseUs } from "@/components/demo-sites/summit-realty-group/why-choose-us";
import { SITE_URL } from "@/lib/constants";

const DEMO_PATH = "/demo-sites/summit-realty-group";
const DEMO_URL = new URL(DEMO_PATH, SITE_URL).toString();

/**
 * Metadata for the Summit Realty Group demo site itself.
 *
 * Marked noindex: this page is a sales demo, not a real business, and
 * its canonical, indexable marketing-site listing lives at
 * /live-demos/summit-realty-group. Title and description describe the
 * agency rather than NextGen Web Studio, since visitors land here
 * expecting a real agency's own site.
 */
export const metadata: Metadata = {
  title: `${AGENCY_INFO.name} | Live Demo by NextGen Web Studio`,
  description: AGENCY_INFO.description,
  alternates: { canonical: DEMO_URL },
  robots: { index: false, follow: false },
  openGraph: {
    title: AGENCY_INFO.name,
    description: AGENCY_INFO.description,
    url: DEMO_URL,
    siteName: AGENCY_INFO.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: AGENCY_INFO.name,
    description: AGENCY_INFO.description,
  },
};

/**
 * Summit Realty Group - flagship real estate agency live demo site.
 *
 * Standalone single-page real estate site rendered under /demo-sites,
 * outside the NextGen Web Studio marketing shell (see the demo-sites
 * route layout). Assembles the agency's own Hero through Footer, plus a
 * PoweredByBadge linking back to its marketplace detail page.
 */
export default function SummitRealtyGroupDemoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: AGENCY_INFO.name,
    description: AGENCY_INFO.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: AGENCY_INFO.address.street,
      addressLocality: AGENCY_INFO.address.city,
      addressRegion: AGENCY_INFO.address.state,
      postalCode: AGENCY_INFO.address.zip,
    },
    telephone: AGENCY_INFO.phone,
    email: AGENCY_INFO.email,
    url: DEMO_URL,
    areaServed: AGENCY_INFO.mapEmbedQuery,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <FeaturedProperties />
      <PropertyCategories />
      <PropertySearchSection />
      <FeaturedAgents />
      <Neighborhoods />
      <WhyChooseUs />
      <MortgageCalculatorSection />
      <Testimonials />
      <RealtyFaq />
      <ContactSection />
      <MapSection />
      <Footer />
      <PoweredByBadge demoDetailsHref="/live-demos/summit-realty-group" />
    </>
  );
}
