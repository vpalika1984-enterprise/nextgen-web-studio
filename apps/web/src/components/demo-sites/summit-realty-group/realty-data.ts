/**
 * Summit Realty Group - Demo Site Data
 *
 * Central data source for the Summit Realty Group real estate demo website.
 * This file contains all business information, property listings, agent
 * profiles, neighborhood highlights, testimonials, and FAQ content used
 * throughout the demo site's components.
 */

export const AGENCY_INFO = {
    name: "Summit Realty Group",
    tagline: "Elevated Living, Expertly Guided",
    description:
          "Summit Realty Group is a premier real estate agency specializing in luxury and residential properties. Our team of experienced agents combines local market expertise with a personalized, client-first approach to help you find the perfect home or sell your property for top value.",
    phone: "(555) 412-8890",
    email: "hello@summitrealtygroup.demo",
    address: {
          street: "482 Alpine Ridge Drive, Suite 300",
          city: "Denver",
          state: "CO",
          zip: "80202",
    },
    hours: {
          weekday: "Monday - Friday: 8:00 AM - 7:00 PM",
          saturday: "Saturday: 9:00 AM - 5:00 PM",
          sunday: "Sunday: 11:00 AM - 4:00 PM",
    },
    social: {
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          linkedin: "https://linkedin.com",
    },
    mapEmbedQuery: "Denver, CO",
} as const;

export type PropertyCategorySlug =
    | "single-family"
  | "condo"
  | "luxury"
  | "townhouse"
  | "land"
  | "multi-family";

export interface Property {
    id: string;
    slug: string;
    title: string;
    listingType: "For Sale" | "For Rent";
    status: "Active" | "Pending" | "New Listing";
    price: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    beds: number;
    baths: number;
    sqft: number;
    category: PropertyCategorySlug;
    imageAlt: string;
    description: string;
    featured: boolean;
}
  featured: boolean;
}

export const PROPERTIES: Property[] = [
  {
        id: "prop-1",
        slug: "alpine-ridge-estate",
        title: "Alpine Ridge Estate",
        listingType: "For Sale",
        status: "New Listing",
        price: "$2,450,000",
        address: "128 Alpine Ridge Drive",
        city: "Denver",
        state: "CO",
        zip: "80202",
        beds: 5,
        baths: 5,
        sqft: 5200,
        category: "luxury",
        imageAlt: "Modern luxury estate with mountain views and infinity pool",
        description:
                "A stunning mountain-view estate featuring an open-concept great room, chef's kitchen, and resort-style backyard with infinity pool.",
        featured: true,
  },
  {
        id: "prop-2",
        slug: "maple-grove-family-home",
        title: "Maple Grove Family Home",
        listingType: "For Sale",
        status: "Active",
        price: "$685,000",
        address: "215 Maple Grove Lane",
        city: "Lakewood",
        state: "CO",
        zip: "80215",
        beds: 4,
        baths: 3,
        sqft: 2850,
        category: "single-family",
        imageAlt: "Traditional family home with landscaped front yard",
        description:
                "A move-in ready family home with a finished basement, updated kitchen, and a large fenced backyard perfect for entertaining.",
        featured: true,
  },
  {
        id: "prop-3",
        slug: "the-metro-loft",
        title: "The Metro Loft",
        listingType: "For Sale",
        status: "Active",
        price: "$412,000",
        address: "900 Union Station Plaza, Unit 14B",
        city: "Denver",
        state: "CO",
        zip: "80205",
        beds: 2,
        baths: 2,
        sqft: 1180,
        category: "condo",
        imageAlt: "Modern downtown loft with floor-to-ceiling windows",
        description:
                "A sleek downtown loft with exposed brick, floor-to-ceiling windows, and walking distance to shops, dining, and transit.",
        featured: true,
  },
  {
        id: "prop-4",
        slug: "willowbrook-townhome",
        title: "Willowbrook Townhome",
        listingType: "For Sale",
        status: "Active",
        price: "$525,000",
        address: "38 Willowbrook Court",
        city: "Aurora",
        state: "CO",
        zip: "80016",
        beds: 3,
        baths: 3,
        sqft: 1950,
        category: "townhouse",
        imageAlt: "Contemporary townhome with attached two-car garage",
        description:
                "A contemporary townhome with an attached garage, private patio, and low-maintenance HOA-covered exterior upkeep.",
        featured: false,
  },
  {
        id: "prop-5",
        slug: "cedar-hills-vista-lot",
        title: "Cedar Hills Vista Lot",
        listingType: "For Sale",
        status: "Active",
        price: "$298,000",
        address: "Lot 12, Cedar Hills Vista",
        city: "Golden",
        state: "CO",
        zip: "80401",
        beds: 0,
        baths: 0,
        sqft: 43560,
        category: "land",
        imageAlt: "Vacant hillside lot with panoramic mountain views",
        description:
                "A one-acre buildable lot with panoramic mountain views, utilities at the street, and no HOA restrictions.",
        featured: false,
  },
  {
        id: "prop-6",
        slug: "birchwood-duplex-income-property",
        title: "Birchwood Duplex Income Property",
        listingType: "For Sale",
        status: "Pending",
        price: "$749,000",
        address: "1420-1422 Birchwood Avenue",
        city: "Denver",
        state: "CO",
        zip: "80207",
        beds: 6,
        baths: 4,
        sqft: 3400,
        category: "multi-family",
        imageAlt: "Two-unit duplex investment property with separate entrances",
        description:
                "A fully leased duplex with separate entrances and utilities, ideal for investors seeking stable rental income.",
        featured: false,
  },
  {
        id: "prop-7",
        slug: "skyline-penthouse-retreat",
        title: "Skyline Penthouse Retreat",
        listingType: "For Rent",
        status: "Active",
        price: "$6,200/mo",
        address: "1 Skyline Tower, Penthouse 2",
        city: "Denver",
        state: "CO",
        zip: "80202",
        beds: 3,
        baths: 3,
        sqft: 2600,
        category: "luxury",
        imageAlt: "Penthouse rooftop terrace overlooking the city skyline",
        description:
                "A furnished penthouse with a private rooftop terrace, concierge service, and unobstructed skyline views.",
        featured: true,
  },
  ];
export interface PropertyCategory {
    slug: PropertyCategorySlug;
    label: string;
    description: string;
}

export const PROPERTY_CATEGORIES: PropertyCategory[] = [
  {
        slug: "single-family",
        label: "Single-Family Homes",
        description: "Spacious homes ideal for growing families.",
  },
  {
        slug: "condo",
        label: "Condos & Lofts",
        description: "Low-maintenance urban living in the heart of the city.",
  },
  {
        slug: "luxury",
        label: "Luxury Estates",
        description: "Premium properties with elevated finishes and views.",
  },
  {
        slug: "townhouse",
        label: "Townhouses",
        description: "Modern townhomes with private garages and patios.",
  },
  {
        slug: "land",
        label: "Land & Lots",
        description: "Buildable lots ready for your custom home.",
  },
  {
        slug: "multi-family",
        label: "Multi-Family",
        description: "Income properties suited for long-term investors.",
  },
  ];

export function getPropertyCountByCategory(category: PropertyCategorySlug): number {
    return PROPERTIES.filter((property) => property.category === category).length;
}

export interface Agent {
    id: string;
    name: string;
    title: string;
    phone: string;
    email: string;
    imageAlt: string;
    specialties: string[];
    bio: string;
    listingsSold: number;
}
export const AGENTS: Agent[] = [
  {
        id: "agent-1",
        name: "Rachel Donovan",
        title: "Principal Broker",
        phone: "(555) 412-8891",
        email: "rachel@summitrealtygroup.demo",
        imageAlt: "Portrait of Rachel Donovan, Principal Broker",
        specialties: ["Luxury Estates", "New Construction"],
        bio: "With over 18 years in Denver real estate, Rachel leads Summit Realty Group's luxury division and has closed over $300M in career sales.",
        listingsSold: 214,
  },
  {
        id: "agent-2",
        name: "Marcus Webb",
        title: "Senior Agent",
        phone: "(555) 412-8892",
        email: "marcus@summitrealtygroup.demo",
        imageAlt: "Portrait of Marcus Webb, Senior Agent",
        specialties: ["Single-Family Homes", "First-Time Buyers"],
        bio: "Marcus specializes in guiding first-time buyers through every step of the process with clear communication and patient negotiation.",
        listingsSold: 156,
  },
  {
        id: "agent-3",
        name: "Priya Nair",
        title: "Investment Property Specialist",
        phone: "(555) 412-8893",
        email: "priya@summitrealtygroup.demo",
        imageAlt: "Portrait of Priya Nair, Investment Property Specialist",
        specialties: ["Multi-Family", "Land & Development"],
        bio: "Priya works with investors and developers to identify high-yield opportunities across the greater Denver metro area.",
        listingsSold: 98,
  },
  {
        id: "agent-4",
        name: "Diego Fuentes",
        title: "Relocation Specialist",
        phone: "(555) 412-8894",
        email: "diego@summitrealtygroup.demo",
        imageAlt: "Portrait of Diego Fuentes, Relocation Specialist",
        specialties: ["Condos & Lofts", "Corporate Relocation"],
        bio: "Diego helps individuals and families relocating to Denver find the right neighborhood and home for their lifestyle.",
        listingsSold: 132,
  },
  ];
export interface Neighborhood {
    id: string;
    name: string;
    description: string;
    imageAlt: string;
    avgPrice: string;
    highlights: string[];
}

export const NEIGHBORHOODS: Neighborhood[] = [
  {
        id: "neighborhood-1",
        name: "LoDo (Lower Downtown)",
        description:
                "Historic warehouses converted into modern lofts, steps from dining, breweries, and Union Station.",
        imageAlt: "Historic brick buildings in Denver's LoDo district",
        avgPrice: "$495,000",
        highlights: ["Walkable", "Nightlife", "Transit Access"],
  },
  {
        id: "neighborhood-2",
        name: "Cherry Creek",
        description:
                "Upscale shopping, tree-lined streets, and some of the city's most desirable single-family homes.",
        imageAlt: "Tree-lined residential street in Cherry Creek",
        avgPrice: "$1,150,000",
        highlights: ["Shopping", "Top Schools", "Parks"],
  },
  {
        id: "neighborhood-3",
        name: "Highlands",
        description:
                "A trendy mix of historic bungalows and new builds with panoramic downtown skyline views.",
        imageAlt: "Row of colorful bungalow homes in the Highlands neighborhood",
        avgPrice: "$780,000",
        highlights: ["Skyline Views", "Trendy Dining", "Family Friendly"],
  },
  {
        id: "neighborhood-4",
        name: "Golden Foothills",
        description:
                "Quiet, spacious properties nestled against the foothills, ideal for buyers seeking privacy and acreage.",
        imageAlt: "Foothills homes surrounded by mountain scenery",
        avgPrice: "$920,000",
        highlights: ["Mountain Access", "Privacy", "Acreage"],
  },
  ];

export interface WhyChooseUsItem {
    id: string;
    title: string;
    description: string;
}

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
        id: "why-1",
        title: "Local Market Expertise",
        description:
                "Our agents live and work in the neighborhoods we serve, providing insight you won't find in a listing sheet.",
  },
  {
        id: "why-2",
        title: "Full-Service Support",
        description:
                "From first showing to closing day, our team coordinates financing, inspections, and paperwork on your behalf.",
  },
  {
        id: "why-3",
        title: "Data-Driven Pricing",
        description:
                "We use real-time comparable sales data to price your listing competitively and negotiate confidently.",
  },
  {
        id: "why-4",
        title: "Client-First Philosophy",
        description:
                "Nearly all of our business comes from referrals and repeat clients who trust us with their most important decisions.",
  },
  ];
export interface Testimonial {
    id: string;
    name: string;
    role: string;
    quote: string;
    rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
        id: "testimonial-1",
        name: "Jennifer Alvarez",
        role: "First-Time Home Buyer",
        quote:
                "Marcus made the entire process feel manageable. We closed on our first home two weeks ahead of schedule.",
        rating: 5,
  },
  {
        id: "testimonial-2",
        name: "Thomas Reyes",
        role: "Property Investor",
        quote:
                "Priya identified a duplex that cash-flowed from day one. Her market analysis was spot on.",
        rating: 5,
  },
  {
        id: "testimonial-3",
        name: "Michelle Chen",
        role: "Seller, Cherry Creek",
        quote:
                "Rachel priced our home perfectly and we had multiple offers within the first weekend on the market.",
        rating: 5,
  },
  ];

export interface RealtyFaq {
    id: string;
    question: string;
    answer: string;
}

export const REALTY_FAQS: RealtyFaq[] = [
  {
        id: "faq-1",
        question: "How do I schedule a private showing?",
        answer:
                "You can request a showing directly from any property listing page, or contact our office by phone or WhatsApp and an agent will confirm a time within one business day.",
  },
  {
        id: "faq-2",
        question: "Do you work with both buyers and sellers?",
        answer:
                "Yes. Our agents represent buyers and sellers across single-family homes, condos, luxury estates, land, and multi-family investment properties.",
  },
  {
        id: "faq-3",
        question: "What is included in your mortgage calculator estimate?",
        answer:
                "Our estimate includes principal and interest based on the purchase price, down payment, loan term, and interest rate you enter. It does not include taxes, insurance, or HOA dues.",
  },
  {
        id: "faq-4",
        question: "Can you help buyers relocating from out of state?",
        answer:
                "Yes, our relocation specialist coordinates virtual tours, neighborhood guidance, and closing logistics for clients moving to the Denver metro area.",
  },
  {
        id: "faq-5",
        question: "How quickly can I get a listing on the market?",
        answer:
                "Most listings go live within 5-7 days of our initial consultation, once photography, staging recommendations, and pricing analysis are complete.",
  },
  ];
