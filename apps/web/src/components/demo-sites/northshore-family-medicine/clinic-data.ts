/**
 * Northshore Family Medicine - demo clinic content.
 *
 * Structured content for the "Northshore Family Medicine" live demo site.
 * Kept as a plain data module (rather than hard-coding copy inside
 * components) so every section stays a thin presentational layer - the
 * same pattern used by restaurant-data.ts for the Ember & Oak demo and
 * demos-data.ts for the marketplace catalog. This is the seam where a
 * future demo-sites CMS could supply this content instead, without any
 * component needing to change.
 */

export interface Doctor {
    name: string;
    credentials: string;
    specialty: string;
    bio: string;
    yearsExperience: number;
    languages: string[];
}

export interface ServiceItem {
    name: string;
    description: string;
}

export interface HealthPackage {
    name: string;
    price: string;
    cadence: string;
    includes: string[];
}

export interface Facility {
    title: string;
    description: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role?: string;
    rating: number;
}

export interface OpeningHoursRow {
    days: string;
    hours: string;
}

export const CLINIC_INFO = {
    name: "Northshore Family Medicine",
    tagline: "Compassionate Care, Modern Medicine.",
    summary:
          "A patient-first family medicine clinic pairing board-certified physicians with modern, self-serve care: book online, message your provider, and manage your health without the hold music.",
    address: "1275 Harbor View Drive, Suite 200, Seattle, WA 98101",
    phone: "+1 (206) 555-0198",
    phoneHref: "tel:+12065550198",
    emergencyPhone: "+1 (206) 555-0199",
    emergencyPhoneHref: "tel:+12065550199",
    email: "care@northshorefamilymedicine.demo",
    whatsappHref: "https://wa.me/12065550198",
    instagramHref: "https://instagram.com/northshorefamilymedicine.demo",
    facebookHref: "https://facebook.com/northshorefamilymedicine.demo",
    mapQuery: "1275 Harbor View Drive, Seattle, WA 98101",
};

export const DOCTORS: Doctor[] = [
  {
        name: "Dr. Elena Marsh",
        credentials: "MD, Board-Certified in Family Medicine",
        specialty: "Family Medicine",
        bio: "Elena has spent 15 years building long-term relationships with patients of every age, from newborn checkups to senior wellness visits.",
        yearsExperience: 15,
        languages: ["English", "Spanish"],
  },
  {
        name: "Dr. Samuel Okafor",
        credentials: "MD, Board-Certified in Internal Medicine",
        specialty: "Internal Medicine",
        bio: "Samuel focuses on chronic disease management, helping patients manage diabetes, hypertension, and heart health with clear, unhurried guidance.",
        yearsExperience: 12,
        languages: ["English", "French"],
  },
  {
        name: "Dr. Priya Nandan",
        credentials: "DO, Board-Certified in Pediatrics",
        specialty: "Pediatrics",
        bio: "Priya brings a calm, playful bedside manner to newborn care, childhood immunizations, and developmental checkups.",
        yearsExperience: 9,
        languages: ["English", "Hindi"],
  },
  {
        name: "Dr. Michael Chen",
        credentials: "MD, Board-Certified in Sports Medicine",
        specialty: "Preventive & Sports Medicine",
        bio: "Michael works with active patients on injury prevention, recovery, and the annual physicals that keep them moving.",
        yearsExperience: 11,
        languages: ["English", "Mandarin"],
  },
  ];

export const SERVICES: ServiceItem[] = [
  {
        name: "Primary & Family Care",
        description: "Ongoing care for every family member, from infants to grandparents.",
  },
  {
        name: "Pediatrics",
        description: "Well-child visits, immunizations, and developmental screenings.",
  },
  {
        name: "Preventive Care & Annual Physicals",
        description: "Routine screenings and physicals that catch issues early.",
  },
  {
        name: "Chronic Disease Management",
        description: "Ongoing support for diabetes, hypertension, asthma, and more.",
  },
  {
        name: "Women's Health",
        description: "Wellness exams, prenatal referrals, and preventive screenings.",
  },
  {
        name: "Vaccinations & Immunizations",
        description: "Full childhood and adult immunization schedules, plus travel vaccines.",
  },
  {
        name: "Lab & Diagnostic Testing",
        description: "On-site bloodwork and diagnostics with fast turnaround.",
  },
  {
        name: "Telehealth Visits",
        description: "Secure video visits for follow-ups and minor concerns.",
  },
  ];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
        name: "Annual Wellness Package",
        price: "$149",
        cadence: "per year",
        includes: ["Full physical exam", "Bloodwork panel", "Personalized wellness plan"],
  },
  {
        name: "Executive Health Screening",
        price: "$349",
        cadence: "per screening",
        includes: ["Extended diagnostics", "Cardiac risk assessment", "Same-week specialist referrals"],
  },
  {
        name: "Family Care Plan",
        price: "$89",
        cadence: "per month, per family",
        includes: ["Unlimited primary care visits", "Priority scheduling", "Telehealth included"],
  },
  ];

export const FACILITIES: Facility[] = [
  { title: "Modern Exam Rooms", description: "Bright, private rooms designed to put patients at ease." },
  { title: "On-Site Lab", description: "Bloodwork and diagnostics processed without an extra trip." },
  { title: "Digital X-Ray", description: "Same-day imaging with results reviewed by your provider." },
  { title: "Patient Lounge", description: "A comfortable waiting area with complimentary WiFi and refreshments." },
  { title: "Pediatric Play Area", description: "A dedicated, sanitized space to keep younger patients at ease." },
  { title: "Free On-Site Parking", description: "Reserved patient parking steps from the front entrance." },
  ];

export const TESTIMONIALS: Testimonial[] = [
  {
        quote: "I booked an appointment online in under a minute and was seen the same week.",
        author: "Rebecca T.",
        role: "Google Review",
        rating: 5,
  },
  {
        quote: "Dr. Marsh actually listens. First doctor in years who didn't rush me out the door.",
        author: "Anthony D.",
        role: "Healthgrades Review",
        rating: 5,
  },
  {
        quote: "The pediatric team made my daughter's first checkup genuinely stress-free.",
        author: "Kimberly S.",
        role: "Google Review",
        rating: 5,
  },
  ];

export const INSURANCE_PARTNERS: string[] = [
    "Aetna",
    "Blue Cross Blue Shield",
    "Cigna",
    "UnitedHealthcare",
    "Kaiser Permanente",
    "Humana",
    "Medicare",
    "Medicaid",
  ];

export const OPENING_HOURS: OpeningHoursRow[] = [
  { days: "Monday - Friday", hours: "7:30 AM - 6:00 PM" },
  { days: "Saturday", hours: "8:00 AM - 1:00 PM" },
  { days: "Sunday", hours: "Closed - Emergency Line Available" },
  ];

export const CLINIC_FAQS = [
  {
        question: "Do you accept walk-in patients?",
        answer:
                "We prioritize scheduled visits to keep wait times low, but same-day appointments are often available for urgent, non-emergency concerns. Call or book online to check availability.",
  },
  {
        question: "Is my insurance accepted?",
        answer:
                "We're in-network with most major insurers, including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Kaiser Permanente, Humana, Medicare, and Medicaid. Contact us to confirm your specific plan.",
  },
  {
        question: "Can I book a telehealth visit?",
        answer:
                "Yes. Telehealth is available for follow-ups, medication reviews, and many minor concerns. Select the telehealth option when booking online.",
  },
  {
        question: "Are you accepting new patients?",
        answer:
                "We are currently welcoming new patients across all four providers. New patient visits include an extended appointment to review your full health history.",
  },
  {
        question: "What should I do in a medical emergency?",
        answer:
                "For life-threatening emergencies, call 911. For urgent same-day concerns during clinic hours, call our emergency line and our on-call team will guide you on next steps.",
  },
  ];
