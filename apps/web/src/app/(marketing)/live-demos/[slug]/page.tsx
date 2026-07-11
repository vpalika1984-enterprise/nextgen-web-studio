import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { DEMOS, getDemoBySlug, getRelatedDemos } from "@/components/live-demos/demos-data";
import { DemoDetailHero } from "@/components/live-demos/demo-detail-hero";
import { PreviewGallery } from "@/components/live-demos/preview-gallery";
import { DemoKeyFeatures } from "@/components/live-demos/demo-key-features";
import { DemoTechStack } from "@/components/live-demos/demo-tech-stack";
import { BusinessBenefits } from "@/components/live-demos/business-benefits";
import { TargetIndustries } from "@/components/live-demos/target-industries";
import { DevelopmentTimeline } from "@/components/live-demos/development-timeline";
import { DemoDetailFaq } from "@/components/live-demos/demo-detail-faq";
import { RelatedDemos } from "@/components/live-demos/related-demos";
import { FinalCta } from "@/components/home/final-cta";

interface DemoPageProps {
    params: Promise<{ slug: string }>;
}

/**
 * Pre-renders every demo in the catalog at build time. New demos only need
 * an entry in DEMOS; this route requires no changes to scale from a
 * handful of demos to hundreds.
 */
export function generateStaticParams() {
    return DEMOS.map((demo) => ({ slug: demo.id }));
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
    const { slug } = await params;
    const demo = getDemoBySlug(slug);

  if (!demo) {
        return buildMetadata({
                title: "Demo Not Found",
                description: "This live demo could not be found.",
                path: `/live-demos/${slug}`,
                noIndex: true,
        });
  }

  return buildMetadata({
        title: demo.name,
        description: demo.description,
        path: demo.detailsHref,
  });
}

/**
 * Individual live demo detail page.
 *
 * Reusable dynamic route rendered for every entry in the demo catalog.
 * Every section below is a thin, composable primitive that reads from a
 * single Demo record and degrades gracefully when optional fields (media,
 * business benefits, target industries, and so on) are not yet supplied,
 * so this same template scales to hundreds of demos, a future template
 * marketplace, or a CMS-backed catalog without structural changes.
 */
export default async function DemoDetailPage({ params }: DemoPageProps) {
    const { slug } = await params;
    const demo = getDemoBySlug(slug);

  if (!demo) {
        notFound();
  }

  const relatedDemos = getRelatedDemos(demo);

  const creativeWorkJsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: demo.name,
        description: demo.description,
        url: `${SITE_URL}${demo.detailsHref}`,
        about: demo.categoryLabel,
        keywords: demo.technologies.join(", "),
        isPartOf: {
                "@type": "CollectionPage",
                name: "Live Demo Marketplace",
                url: `${SITE_URL}/live-demos`,
        },
        publisher: {
                "@type": "Organization",
                name: SITE_NAME,
                url: SITE_URL,
        },
  };

  const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Live Demos", item: `${SITE_URL}/live-demos` },
          { "@type": "ListItem", position: 3, name: demo.name, item: `${SITE_URL}${demo.detailsHref}` },
              ],
  };

  return (
        <>
              <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
                      />
              <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
                      />
              <DemoDetailHero demo={demo} />
              <PreviewGallery demo={demo} />
              <DemoKeyFeatures demo={demo} />
              <DemoTechStack demo={demo} />
              <BusinessBenefits demo={demo} />
              <TargetIndustries demo={demo} />
              <DevelopmentTimeline />
              <DemoDetailFaq />
              <RelatedDemos demos={relatedDemos} />
              <FinalCta />
        </>
      );
}
