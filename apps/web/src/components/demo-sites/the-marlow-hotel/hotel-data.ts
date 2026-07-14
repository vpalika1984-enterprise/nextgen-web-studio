/**
 * The Marlow Hotel - Demo Site Data
 *
 * Central data source for The Marlow Hotel boutique hospitality demo
 * website. Contains business information, room inventory, amenities,
 * dining, experiences, gallery, testimonials, and FAQ content, plus
 * architecture placeholders for packages, loyalty, gift vouchers, and
 * awards so those business conversion features can be added purely as
 * data without new components.
 */

import type { LucideIcon } from "lucide-react";
import {
    Car,
    Dumbbell,
    ShieldCheck,
    Sparkles,
    UtensilsCrossed,
    Wifi,
    Wine,
    Coffee,
} from "lucide-react";

import type { ListingSearchConfig } from "@/lib/listing-search";

export const HOTEL_INFO = {
    name: "The Marlow Hotel",
    tagline: "Boutique Comfort, Timeless Hospitality",
    description:
          "The Marlow Hotel is a boutique property offering elevated rooms, a signature restaurant, and a full-service spa in the heart of the city. Book direct for the best rate, complimentary breakfast, and flexible cancellation.",
    phone: "(555) 782-3300",
    email: "reservations@themarlowhotel.demo",
    whatsapp: "https://wa.me/15557823300",
    address: {
          street: "210 Harbor View Promenade",
          city: "Charleston",
          state: "SC",
          zip: "29401",
    },
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    social: {
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          linkedin: "https://linkedin.com",
    },
    mapEmbedQuery: "Charleston, SC",
} as const;

export type RoomCategorySlug = "standard" | "deluxe" | "suite" | "family" | "villa";

export interface Room {
    id: string;
    slug: string;
    name: string;
    category: RoomCategorySlug;
    status: "Available" | "Limited Availability" | "Sold Out";
    pricePerNight: string;
    maxOccupancy: number;
    bedType: string;
    sizeSqft: number;
    view: string;
    imageAlt: string;
    description: string;
    featured: boolean;
    [key: string]: unknown;
}

export const ROOMS: Room[] = [
  {
        id: "room-1",
        slug: "harbor-view-king",
        name: "Harbor View King",
        category: "deluxe",
        status: "Available",
        pricePerNight: "$289/night",
        maxOccupancy: 2,
        bedType: "1 King Bed",
        sizeSqft: 380,
        view: "Harbor View",
        imageAlt: "Deluxe king room with harbor view and modern furnishings",
        description:
                "A bright deluxe room with a plush king bed, sitting area, and floor-to-ceiling windows overlooking the harbor.",
        featured: true,
  },
  {
        id: "room-2",
        slug: "marlow-suite",
        name: "Marlow Suite",
        category: "suite",
        status: "Available",
        pricePerNight: "$459/night",
        maxOccupancy: 3,
        bedType: "1 King Bed + Sofa Bed",
        sizeSqft: 620,
        view: "City Skyline View",
        imageAlt: "Spacious suite with separate living area and skyline view",
        description:
                "Our signature suite with a separate living area, marble bathroom, and panoramic skyline views.",
        featured: true,
  },
  {
        id: "room-3",
        slug: "garden-terrace-room",
        name: "Garden Terrace Room",
        category: "standard",
        status: "Available",
        pricePerNight: "$219/night",
        maxOccupancy: 2,
        bedType: "1 Queen Bed",
        sizeSqft: 320,
        view: "Garden View",
        imageAlt: "Cozy queen room with private garden terrace access",
        description:
                "A quiet, comfortably appointed room with direct access to our landscaped garden terrace.",
        featured: true,
  },
  {
        id: "room-4",
        slug: "family-loft",
        name: "Family Loft",
        category: "family",
        status: "Limited Availability",
        pricePerNight: "$389/night",
        maxOccupancy: 4,
        bedType: "2 Queen Beds",
        sizeSqft: 540,
        view: "Courtyard View",
        imageAlt: "Two-level family loft room with two queen beds",
        description:
                "A two-level loft with two queen beds, ideal for families, with a courtyard view and extra closet space.",
        featured: false,
  },
  {
        id: "room-5",
        slug: "penthouse-villa",
        name: "Penthouse Villa",
        category: "villa",
        status: "Limited Availability",
        pricePerNight: "$895/night",
        maxOccupancy: 2,
        bedType: "1 King Bed",
        sizeSqft: 950,
        view: "Panoramic Harbor View",
        imageAlt: "Penthouse villa with private terrace and panoramic harbor view",
        description:
                "Our most exclusive accommodation, featuring a private terrace, soaking tub, and unobstructed harbor views.",
        featured: true,
  },
  {
        id: "room-6",
        slug: "classic-double-room",
        name: "Classic Double Room",
        category: "standard",
        status: "Available",
        pricePerNight: "$199/night",
        maxOccupancy: 4,
        bedType: "2 Double Beds",
        sizeSqft: 300,
        view: "City View",
        imageAlt: "Classic room with two double beds and city view",
        description:
                "A well-appointed room with two double beds, perfect for friends or families traveling together.",
        featured: false,
  },
  {
        id: "room-7",
        slug: "honeymoon-suite",
        name: "Honeymoon Suite",
        category: "suite",
        status: "Available",
        pricePerNight: "$529/night",
        maxOccupancy: 2,
        bedType: "1 King Bed",
        sizeSqft: 580,
        view: "Rooftop Access",
        imageAlt: "Romantic honeymoon suite with private rooftop access",
        description:
                "A romantic retreat with private rooftop access, in-room champagne service, and a deep soaking tub.",
        featured: false,
  },
  ];

export interface RoomCategory {
    slug: RoomCategorySlug;
    label: string;
    description: string;
}

export const ROOM_CATEGORIES: RoomCategory[] = [
  { slug: "standard", label: "Standard Rooms", description: "Comfortable, well-appointed rooms for every stay." },
  { slug: "deluxe", label: "Deluxe Rooms", description: "Elevated rooms with premium views and finishes." },
  { slug: "suite", label: "Suites", description: "Spacious suites with separate living areas." },
  { slug: "family", label: "Family Rooms", description: "Extra space and bedding configurations for families." },
  { slug: "villa", label: "Villas", description: "Our most exclusive, private accommodations." },
  ];

export function getRoomCountByCategory(category: RoomCategorySlug): number {
    return ROOMS.filter((room) => room.category === category).length;
}

export interface Amenity {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const AMENITIES: Amenity[] = [
  { id: "amenity-1", icon: Wifi, title: "Complimentary Wi-Fi", description: "High-speed wireless internet throughout the property." },
  { id: "amenity-2", icon: Dumbbell, title: "24-Hour Fitness Center", description: "Fully equipped gym open around the clock." },
  { id: "amenity-3", icon: Wine, title: "Rooftop Bar & Lounge", description: "Craft cocktails and skyline views every evening." },
  { id: "amenity-4", icon: UtensilsCrossed, title: "Signature Restaurant", description: "Locally sourced seasonal menus, breakfast through dinner." },
  { id: "amenity-5", icon: Sparkles, title: "Full-Service Spa", description: "Massage, facials, and wellness treatments by reservation." },
  { id: "amenity-6", icon: Car, title: "Airport Transfer Service", description: "Private transfers arranged on request at booking or check-in." },
  { id: "amenity-7", icon: ShieldCheck, title: "Contactless Check-In", description: "Skip the front desk line with mobile check-in." },
  { id: "amenity-8", icon: Coffee, title: "In-Room Coffee & Tea", description: "Premium coffee and tea service in every room." },
  ];

export interface DiningVenue {
  id: string;
  name: string;
  cuisine: string;
  hours: string;
  description: string;
  imageAlt: string;
}

export const DINING_VENUES: DiningVenue[] = [
  {
    id: "dining-1",
    name: "The Harborview Room",
    cuisine: "Modern Coastal",
    hours: "Dinner: 5:30 PM - 10:00 PM",
    description: "Our signature fine-dining restaurant featuring seasonal, locally sourced coastal cuisine and an award-winning wine list.",
    imageAlt: "Elegant restaurant dining room with harbor views",
  },
  {
    id: "dining-2",
    name: "Marlow Rooftop Bar",
    cuisine: "Small Plates & Cocktails",
    hours: "Daily: 4:00 PM - Midnight",
    description: "Handcrafted cocktails, small plates, and panoramic skyline views on our rooftop terrace.",
    imageAlt: "Rooftop bar terrace at sunset with skyline views",
  },
  {
    id: "dining-3",
    name: "The Terrace Cafe",
    cuisine: "Breakfast & Light Fare",
    hours: "Daily: 6:30 AM - 2:00 PM",
    description: "Casual all-day breakfast and light lunch fare served on our garden terrace, complimentary for direct bookings.",
    imageAlt: "Casual cafe terrace seating surrounded by gardens",
  },
  ];

export interface HotelExperience {
  title: string;
  description: string;
  schedule: string;
}

export const HOTEL_EXPERIENCES: HotelExperience[] = [
  { title: "Sunset Harbor Cruise", description: "A guided evening cruise along the harbor with champagne service.", schedule: "Daily at 6:00 PM" },
  { title: "Spa Wellness Journey", description: "A curated half-day spa package including massage and facial treatments.", schedule: "By Reservation" },
  { title: "Conference & Private Events", description: "Flexible meeting and event space for gatherings of 10 to 200 guests.", schedule: "Year-Round" },
  { title: "Guided Historic District Tour", description: "A walking tour of the historic district led by a local guide.", schedule: "Tue, Thu, Sat at 10:00 AM" },
  ];

export interface GalleryImage {
  id: string;
  imageAlt: string;
  category: "Rooms" | "Dining" | "Amenities" | "Exterior";
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "gallery-1", imageAlt: "Deluxe king room interior", category: "Rooms" },
  { id: "gallery-2", imageAlt: "Suite living area", category: "Rooms" },
  { id: "gallery-3", imageAlt: "Signature restaurant interior", category: "Dining" },
  { id: "gallery-4", imageAlt: "Rooftop bar at night", category: "Dining" },
  { id: "gallery-5", imageAlt: "Spa treatment room", category: "Amenities" },
  { id: "gallery-6", imageAlt: "Fitness center", category: "Amenities" },
  { id: "gallery-7", imageAlt: "Hotel exterior facade at dusk", category: "Exterior" },
  { id: "gallery-8", imageAlt: "Garden terrace and pool area", category: "Exterior" },
  ];

export interface HotelTestimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: HotelTestimonial[] = [
  { id: "testimonial-1", name: "Laura Bennett", role: "Leisure Traveler", quote: "Booking direct saved us money and the upgrade to a harbor view room made the trip unforgettable.", rating: 5 },
  { id: "testimonial-2", name: "David Chen", role: "Business Traveler", quote: "Seamless contactless check-in and a fantastic rooftop bar for unwinding after meetings.", rating: 5 },
  { id: "testimonial-3", name: "The Alvarez Family", role: "Family Vacation", quote: "The Family Loft was perfect for us and the kids loved the pool. We are already planning our return.", rating: 5 },
  ];

export interface HotelFaq {
  id: string;
  question: string;
  answer: string;
}

export const HOTEL_FAQS: HotelFaq[] = [
  { id: "faq-1", question: "What time is check-in and check-out?", answer: "Check-in begins at 3:00 PM and check-out is by 11:00 AM. Early check-in and late check-out can be requested based on availability." },
  { id: "faq-2", question: "Why should I book direct instead of through an OTA?", answer: "Booking direct guarantees our best available rate, includes complimentary breakfast, and gives you free cancellation up to 48 hours before arrival." },
  { id: "faq-3", question: "Do you offer airport transfers?", answer: "Yes, private airport transfers can be arranged at the time of booking or at check-in for an additional fee." },
  { id: "faq-4", question: "Can I book the spa or restaurant in advance?", answer: "Yes, both spa treatments and restaurant tables can be reserved in advance through our contact form or by WhatsApp." },
  { id: "faq-5", question: "Is the hotel suitable for families and events?", answer: "Yes, we offer Family Rooms with flexible bedding, and our event space accommodates conferences and private celebrations of up to 200 guests." },
  ];

export const PROMOTIONS: string[] = [
  "Book Direct & Save 15%",
  "Free Cancellation up to 48 Hours",
  "Complimentary Breakfast on Direct Bookings",
  ];

export interface HotelPackage {
  id: string;
  title: string;
  description: string;
  priceNote: string;
}

export const PACKAGES: HotelPackage[] = [
  { id: "package-1", title: "Weekend Getaway Package", description: "Two-night stay with late checkout and a bottle of local wine on arrival.", priceNote: "From $259/night" },
  { id: "package-2", title: "Family Package", description: "Family Loft stay with kids-stay-free and complimentary breakfast for up to four guests.", priceNote: "From $359/night" },
  { id: "package-3", title: "Honeymoon Package", description: "Honeymoon Suite stay with champagne, rose petal turndown, and a couples spa treatment.", priceNote: "From $599/night" },
  { id: "package-4", title: "Conference & Events Package", description: "Meeting space, AV equipment, and catering for corporate gatherings and private events.", priceNote: "Custom Quote" },
  ];

export const LOYALTY_PROGRAM = {
  name: "Marlow Rewards",
  description: "Earn points on every direct booking and unlock room upgrades, late checkout, and exclusive member rates.",
  benefits: ["Earn points on every stay", "Complimentary room upgrades when available", "Member-only rates and early access to offers"],
};

export const GIFT_VOUCHER = {
  title: "Gift Vouchers",
  description: "Give the gift of a getaway. Vouchers can be redeemed toward any room, package, or spa treatment.",
  ctaLabel: "Purchase a Gift Voucher",
};

export interface HotelAward {
  id: string;
  title: string;
  issuer: string;
  year: number;
}

export const AWARDS: HotelAward[] = [
  { id: "award-1", title: "Best Boutique Hotel", issuer: "Coastal Travel Awards", year: 2025 },
  { id: "award-2", title: "Certificate of Excellence", issuer: "Traveler Review Board", year: 2025 },
  { id: "award-3", title: "Top Rooftop Bar", issuer: "City Dining Guide", year: 2024 },
  ];

export const ROOM_SEARCH_CONFIG: ListingSearchConfig<Room> = {
  searchPlaceholder: "Search by room name or view...",
  searchKeys: ["name", "description", "view"],
  filters: [
    {
      key: "category",
      label: "Room Type",
      type: "select",
      options: ROOM_CATEGORIES.map((category) => ({ value: category.slug, label: category.label })),
    },
    {
      key: "status",
      label: "Availability",
      type: "select",
      options: [
        { value: "Available", label: "Available" },
        { value: "Limited Availability", label: "Limited Availability" },
        ],
    },
    {
      key: "maxOccupancy",
      label: "Guests",
      type: "select",
      options: [
        { value: "1", label: "1+ Guests" },
        { value: "2", label: "2+ Guests" },
        { value: "3", label: "3+ Guests" },
        { value: "4", label: "4+ Guests" },
        ],
    },
    ],
};
