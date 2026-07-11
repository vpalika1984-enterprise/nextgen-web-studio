import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesOverview } from "@/components/services/services-overview";
import { ServiceCategories } from "@/components/services/service-categories";
import { ServiceCards } from "@/components/services/service-cards";
import { ProcessSection } from "@/components/home/process-section";
import { TechStack } from "@/components/services/tech-stack";
import { FeaturedCaseStudies } from "@/components/services/featured-case-studies";
import { IndustriesSection } from "@/components/home/industries-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ServicesFaq } from "@/components/services/services-faq";
import { FinalCta } from "@/components/home/final-cta";

export const metadata = buildMetadata({
    title: "Services",
    description:
          "Business websites, restaurant and medical websites, e-commerce, AI integrations, SaaS development, and automation, full-stack digital services from NextGen Web Studio.",
    path: "/services",
});

const SERVICE_NAMES = [
    "Business Websites",
    "Restaurant Websites",
    "Medical Websites",
    "Real Estate Websites",
    "E-commerce",
    "AI Integrations",
    "SaaS Development",
    "Automation Solutions",
  ];

const PROFESSIONAL_SERVICE_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: `${SITE_URL}/services`,
    description:
          "Business websites, restaurant and medical websites, e-commerce, AI integrations, SaaS development, and automation services for businesses across every industry.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: SERVICE_NAMES.map((name) => ({
                  "@type": "Offer",
                  itemOffered: {
                            "@type": "Service",
                            name,
                  },
          })),
    },
};
/**
 * Services page
 *
 * Reference implementation for every future service page: Hero, Overview,
 * Categories, individual Service Cards, Process, Technology Stack,
 * Featured Case Studies, Industries Served, Testimonials, FAQ, and Final
 * CTA, all built on the shared Section/Container design system with a
 * ProfessionalService JSON-LD block for search engines.
 */
export default function ServicesPage() {
    return (
          <>
                <script
                          type="application/ld+json"
                          dangerouslySetInnerHTML={{
                                      __html: JSON.stringify(PROFESSIONAL_SERVICE_JSON_LD),
                          }}
                        />
                <ServicesHero />
                <ServicesOverview />
                <ServiceCategories />
                <ServiceCards />
                <ProcessSection />
                <TechStack />
                <FeaturedCaseStudies />
                <IndustriesSection />
                <TestimonialsSection />
                <ServicesFaq />
                <FinalCta />
          </>
        );
}
