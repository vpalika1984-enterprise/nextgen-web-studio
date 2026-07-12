import type { Metadata } from "next";

import { AppointmentBooking } from "@/components/demo-sites/shared/appointment-booking";
import { DoctorProfiles } from "@/components/demo-sites/shared/doctor-profiles";
import { InsurancePartners } from "@/components/demo-sites/shared/insurance-partners";
import { PoweredByBadge } from "@/components/demo-sites/shared/powered-by-badge";
import {
    CLINIC_INFO,
    DOCTORS,
    INSURANCE_PARTNERS,
} from "@/components/demo-sites/northshore-family-medicine/clinic-data";
import { ClinicFaq } from "@/components/demo-sites/northshore-family-medicine/clinic-faq";
import { ContactSection } from "@/components/demo-sites/northshore-family-medicine/contact-section";
import { Facilities } from "@/components/demo-sites/northshore-family-medicine/facilities";
import { Footer } from "@/components/demo-sites/northshore-family-medicine/footer";
import { Hero } from "@/components/demo-sites/northshore-family-medicine/hero";
import { MapSection } from "@/components/demo-sites/northshore-family-medicine/map-section";
import { Services } from "@/components/demo-sites/northshore-family-medicine/services";
import { Testimonials } from "@/components/demo-sites/northshore-family-medicine/testimonials";
import { SITE_URL } from "@/lib/constants";

const DEMO_PATH = "/demo-sites/northshore-family-medicine";
const DEMO_URL = new URL(DEMO_PATH, SITE_URL).toString();

/**
 * Metadata for the Northshore Family Medicine demo site itself.
 *
 * Marked noindex: this page is a sales demo, not a real business, and
 * its canonical, indexable marketing-site listing lives at
 * /live-demos/northshore-family-medicine. Title and description describe
 * the clinic rather than NextGen Web Studio, since visitors land here
 * expecting a real clinic's own site.
 */
export const metadata: Metadata = {
    title: `${CLINIC_INFO.name} | Live Demo by NextGen Web Studio`,
    description: CLINIC_INFO.summary,
    alternates: { canonical: DEMO_URL },
    robots: { index: false, follow: false },
    openGraph: {
    title: CLINIC_INFO.name,
          description: CLINIC_INFO.summary,
          url: DEMO_URL,
          siteName: CLINIC_INFO.name,
          type: "website",
    },
    twitter: {
          card: "summary_large_image",
          title: CLINIC_INFO.name,
          description: CLINIC_INFO.summary,
    },
};

/**
 * Northshore Family Medicine - flagship medical clinic live demo site.
 *
 * Standalone single-page clinic site rendered under /demo-sites, outside
 * the NextGen Web Studio marketing shell (see the demo-sites route
 * layout). Assembles the clinic's own Hero through Footer, plus a
 * PoweredByBadge linking back to its marketplace detail page.
 */
export default function NorthshoreFamilyMedicineDemoPage() {
    const jsonLd = {
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: CLINIC_INFO.name,
          description: CLINIC_INFO.summary,
          address: CLINIC_INFO.address,
          telephone: CLINIC_INFO.phone,
          medicalSpecialty: ["Family Medicine", "Internal Medicine", "Pediatrics"],
          url: DEMO_URL,
    };

  return (
        <>
              <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                      />
              <Hero />
              <DoctorProfiles doctors={DOCTORS} />
              <Services />
              <AppointmentBooking whatsappHref={CLINIC_INFO.whatsappHref} />
              <Facilities />
              <Testimonials />
              <InsurancePartners insurers={INSURANCE_PARTNERS} />
              <ClinicFaq />
              <ContactSection />
              <MapSection />
              <Footer />
              <PoweredByBadge demoDetailsHref="/live-demos/northshore-family-medicine" />
        </>
      );
}
