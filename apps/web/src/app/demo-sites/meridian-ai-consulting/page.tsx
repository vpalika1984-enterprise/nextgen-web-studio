import type { Metadata } from "next";

import { PoweredByBadge } from "@/components/demo-sites/shared/powered-by-badge";
import { CONSULTING_INFO } from "@/components/demo-sites/meridian-ai-consulting/consulting-data";
import { Hero } from "@/components/demo-sites/meridian-ai-consulting/hero";
import { TrustedTechnologies } from "@/components/demo-sites/meridian-ai-consulting/trusted-technologies";
import { Services } from "@/components/demo-sites/meridian-ai-consulting/services";
import { AiShowcase } from "@/components/demo-sites/meridian-ai-consulting/ai-showcase";
import { IndustriesWeServe } from "@/components/demo-sites/meridian-ai-consulting/industries-we-serve";
import { OurProcess } from "@/components/demo-sites/meridian-ai-consulting/our-process";
import { CaseStudies } from "@/components/demo-sites/meridian-ai-consulting/case-studies";
import { CompanyStats } from "@/components/demo-sites/meridian-ai-consulting/company-stats";
import { Testimonials } from "@/components/demo-sites/meridian-ai-consulting/testimonials";
import { WhyChooseUs } from "@/components/demo-sites/meridian-ai-consulting/why-choose-us";
import { ConsultingFaq } from "@/components/demo-sites/meridian-ai-consulting/consulting-faq";
import { ReadinessAssessment } from "@/components/demo-sites/meridian-ai-consulting/readiness-assessment";
import { BookConsultation } from "@/components/demo-sites/meridian-ai-consulting/book-consultation";
import { MapSection } from "@/components/demo-sites/meridian-ai-consulting/map-section";
import { Footer } from "@/components/demo-sites/meridian-ai-consulting/footer";
import { SITE_URL } from "@/lib/constants";

const DEMO_PATH = "/demo-sites/meridian-ai-consulting";
const DEMO_URL = new URL(DEMO_PATH, SITE_URL).toString();

/**
 * Metadata for the Meridian AI Consulting demo site itself.
 *
 * Marked noindex: this page is a sales demo, not a real company, and
 * its canonical, indexable marketplace listing lives at
 * /live-demos/meridian-ai-consulting. Title and description describe
 * the consulting firm rather than NextGen Web Studio, since visitors
 * land here expecting a real company's own site.
 */
export const metadata: Metadata = {
  title: `${CONSULTING_INFO.name} | Live Demo by NextGen Web Studio`,
  description: CONSULTING_INFO.description,
  alternates: { canonical: DEMO_URL },
  robots: { index: false, follow: false },
  openGraph: {
    title: CONSULTING_INFO.name,
    description: CONSULTING_INFO.description,
    url: DEMO_URL,
    siteName: CONSULTING_INFO.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: CONSULTING_INFO.name,
    description: CONSULTING_INFO.description,
  },
};

/**
 * Meridian AI Consulting - flagship AI consulting & digital
 * transformation live demo site.
 *
 * Standalone single-page site rendered under /demo-sites, outside the
 * NextGen Web Studio marketing shell (see the demo-sites route
 * layout). Assembles Hero through Footer, plus a PoweredByBadge
 * linking back to its marketplace detail page.
 */
export default function MeridianAiConsultingDemoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: CONSULTING_INFO.name,
    description: CONSULTING_INFO.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONSULTING_INFO.address.street,
      addressLocality: CONSULTING_INFO.address.city,
      addressRegion: CONSULTING_INFO.address.state,
      postalCode: CONSULTING_INFO.address.zip,
    },
    telephone: CONSULTING_INFO.phone,
    email: CONSULTING_INFO.email,
    url: DEMO_URL,
    foundingDate: String(CONSULTING_INFO.foundedYear),
    areaServed: "Enterprise and SME clients",
    sameAs: [CONSULTING_INFO.social.linkedin, CONSULTING_INFO.social.twitter],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustedTechnologies />
      <Services />
      <AiShowcase />
      <IndustriesWeServe />
      <OurProcess />
      <CaseStudies />
      <CompanyStats />
      <Testimonials />
      <WhyChooseUs />
      <ConsultingFaq />
      <ReadinessAssessment />
      <BookConsultation />
      <MapSection />
      <Footer />
      <PoweredByBadge demoDetailsHref="/live-demos/meridian-ai-consulting" />
    </>
  );
}
