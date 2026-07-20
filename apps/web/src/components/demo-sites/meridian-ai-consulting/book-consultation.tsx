import type { CSSProperties } from "react";

import { BookingInquiry } from "@/components/demo-sites/shared/booking-inquiry";
import { CONSULTING_INFO } from "./consulting-data";

/**
 * BookConsultation
 *
 * Calls the shared, industry-agnostic BookingInquiry component directly
 * with consulting-specific fields, the same reuse pattern the hotel
 * demo already uses for its own booking form (see
 * demo-sites/the-marlow-hotel/booking-cta.tsx). No changes to the
 * shared component itself.
 *
 * BookingInquiry has no style-override props, and its section and
 * submit button both use the site's global theme tokens (--background,
 * --primary). Those tokens are dark/violet by default, which doesn't
 * match this demo's navy/blue identity, so they're pinned to this
 * demo's own values on a wrapping element instead - CSS custom
 * properties cascade to the shared component's classes without
 * touching the component itself.
 */
export function BookConsultation() {
  return (
    <div
      className="bg-slate-950"
      style={
        {
          "--background": "222 47% 6%",
          "--primary": "217 91% 60%",
          "--primary-foreground": "0 0% 100%",
        } as CSSProperties
      }
    >
      <BookingInquiry
        id="consultation"
        title="Book Your Free AI Discovery Call"
        description="Tell us about your goals and current systems. Our team will follow up with a same-week summary of where AI is likely to create the most value for you."
        whatsappHref={CONSULTING_INFO.whatsapp}
        whatsappLabel="Message us on WhatsApp"
        submitLabel="Request Discovery Call"
        fields={[
          { key: "name", label: "Full Name", type: "text", placeholder: "Jane Doe" },
          { key: "workEmail", label: "Work Email", type: "email", placeholder: "jane@company.com" },
          { key: "company", label: "Company Name", type: "text", placeholder: "Acme Corp" },
          {
            key: "projectType",
            label: "Project Type",
            type: "select",
            options: [
              { value: "ai-strategy", label: "AI Strategy & Roadmapping" },
              { value: "custom-ai", label: "Custom AI & LLM Development" },
              { value: "automation", label: "Process Automation" },
              { value: "digital-transformation", label: "Digital Transformation" },
              { value: "other", label: "Other" },
            ],
          },
          {
            key: "budgetRange",
            label: "Budget Range",
            type: "select",
            options: [
              { value: "under-25k", label: "Under $25,000" },
              { value: "25k-100k", label: "$25,000 - $100,000" },
              { value: "100k-plus", label: "$100,000+" },
              { value: "not-sure", label: "Not Sure Yet" },
            ],
          },
          { key: "message", label: "Project Details", type: "text", placeholder: "A brief summary of what you're looking to achieve" },
        ]}
      />
    </div>
  );
}
