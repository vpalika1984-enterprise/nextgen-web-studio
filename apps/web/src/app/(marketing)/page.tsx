import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/home/hero-section";
import { TrustBar } from "@/components/home/trust-bar";
import { StatisticsSection } from "@/components/home/statistics-section";
import { LiveDemoShowcase } from "@/components/home/live-demo-showcase";
import { ServicesPreview } from "@/components/home/services-preview";
import { AISolutionsPreview } from "@/components/home/ai-solutions-preview";
import { IndustriesSection } from "@/components/home/industries-section";
import { ProcessSection } from "@/components/home/process-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { PricingPreview } from "@/components/home/pricing-preview";
import { BlogPreview } from "@/components/home/blog-preview";
import { FaqSection } from "@/components/home/faq-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { FinalCta } from "@/components/home/final-cta";

/**
 * Homepage metadata is built with the shared buildMetadata() helper (rather
 * than an ad-hoc object) so it gets the full Open Graph image/canonical URL/
 * Twitter card treatment that every other page receives, instead of only
 * inheriting the generic root-layout values for those fields.
 */
export const metadata = buildMetadata({
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description:
    "NextGen Web Studio designs and engineers premium websites, AI solutions, and digital experiences for businesses across every industry.",
  path: "/",
});

/**
 * Homepage
 *
 * Assembles the full homepage in the order defined by the approved Build
 * Order: Hero, Trust Bar, Statistics, Live Demo Showcase, Services
 * Preview, AI Solutions Preview, Industries, Process, Testimonials,
 * Pricing Preview, Blog Preview, FAQ, Newsletter, and Final CTA.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StatisticsSection />
      <LiveDemoShowcase />
      <ServicesPreview />
      <AISolutionsPreview />
      <IndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingPreview />
      <BlogPreview />
      <FaqSection />
      <NewsletterSection />
      <FinalCta />
    </>
  );
}
