import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { MarketplaceHero } from "@/components/live-demos/marketplace-hero";
import { FeaturedDemos } from "@/components/live-demos/featured-demos";
import { DemoGrid } from "@/components/live-demos/demo-grid";
import { TechStack } from "@/components/services/tech-stack";
import { StatisticsSection } from "@/components/home/statistics-section";
import { MarketplaceFaq } from "@/components/live-demos/marketplace-faq";
import { FinalCta } from "@/components/home/final-cta";
import { DEMOS } from "@/components/live-demos/demos-data";

export const metadata = buildMetadata({
    title: "Live Demo Marketplace",
    description:
          "Browse real, fully interactive live demos across restaurants, medical, hotels, real estate, education, construction, corporate, AI SaaS, e-commerce, and dashboards.",
    path: "/live-demos",
});

const COLLECTION_PAGE_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Live Demo Marketplace",
    url: `${SITE_URL}/live-demos`,
    description:
          "A browsable marketplace of real, interactive live website demos built by NextGen Web Studio across every industry we serve.",
    isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
    },
    hasPart: DEMOS.map((demo) => ({
          "@type": "CreativeWork",
          name: demo.name,
          url: `${SITE_URL}${demo.detailsHref}`,
          about: demo.categoryLabel,
    })),
};

/**
 * Live Demo Marketplace page
 *
 * The strongest conversion asset on the site: a searchable, filterable
 * catalog of real interactive demos, backed by the DemoCard, DemoGrid,
 * CategoryFilter, SearchBar, FeaturedDemo, and TechnologyBadge primitives,
 * all built on the shared Section/Container design system.
 */
export default function LiveDemosPage() {
    return (
          <>
                <script
                          type="application/ld+json"
                          dangerouslySetInnerHTML={{
                                      __html: JSON.stringify(COLLECTION_PAGE_JSON_LD),
                          }}
                        />
                <MarketplaceHero />
                <FeaturedDemos />
                <DemoGrid />
                <TechStack />
                <StatisticsSection />
                <MarketplaceFaq />
                <FinalCta />
          </>
        );
}
