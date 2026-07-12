import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { IndustriesHero } from "@/components/industries/industries-hero";
import { IndustryCategories } from "@/components/industries/industry-categories";
import { IndustryCards } from "@/components/industries/industry-cards";
import { IndustryComparison } from "@/components/industries/industry-comparison";
import { FrequentlyRequestedFeatures } from "@/components/industries/frequently-requested-features";
import { IndustriesFaq } from "@/components/industries/industries-faq";
import { FinalCta } from "@/components/home/final-cta";
import { INDUSTRIES } from "@/components/industries/industries-data";

export const metadata = buildMetadata({
    title: "Industries",
    description:
          "Websites built for how your industry actually works: restaurants, medical, real estate, hospitality, education, fitness, legal, finance, retail, and travel.",
    path: "/industries",
});

const INDUSTRIES_COLLECTION_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Industries | ${SITE_NAME}`,
    url: `${SITE_URL}/industries`,
    description:
          "Industry-specific web design and development solutions across restaurants, medical, real estate, hospitality, education, fitness, legal, finance, retail, and travel.",
    mainEntity: {
          "@type": "ItemList",
          itemListElement: INDUSTRIES.map((industry, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  item: {
                            "@type": "Service",
                            name: industry.label,
                            description: industry.summary,
                            url: `${SITE_URL}/industries#${industry.id}`,
                            provider: {
                                        "@type": "Organization",
                                        name: SITE_NAME,
                            },
                  },
          })),
    },
};

/**
 * Industries page
 *
 * Strategic navigation hub into Services, Live Demos, and future Case
 * Studies/Templates/AI Solutions, organized around the challenges each
 * industry actually faces. Hero, quick-jump Categories, detailed Cards,
 * a Comparison table, cross-industry Frequently Requested Features, FAQ,
 * and a shared Final CTA, all on the standard Section/Container system
 * with a CollectionPage JSON-LD block for search engines.
 */
export default function IndustriesPage() {
    return (
          <>
                <script
                          type="application/ld+json"
                          dangerouslySetInnerHTML={{
                                      __html: JSON.stringify(INDUSTRIES_COLLECTION_JSON_LD),
                          }}
                        />
                <IndustriesHero />
                <IndustryCategories />
                <IndustryCards />
                <IndustryComparison />
                <FrequentlyRequestedFeatures />
                <IndustriesFaq />
                <FinalCta />
          </>
        );
}
