/**
 * Ember & Oak Steakhouse — demo restaurant content.
 *
 * Structured content for the flagship "Ember & Oak Steakhouse" live demo
 * site. Kept as a plain data module (rather than hard-coding copy inside
 * components) so every section stays a thin presentational layer — the
 * same pattern used by demos-data.ts for the marketplace catalog. This is
 * the seam where a future demo-sites CMS could supply this content
 * instead, without any component needing to change.
 */

export interface MenuItem {
    name: string;
    description: string;
    price: string;
    dietary?: string[];
}

export interface MenuCategory {
    id: string;
    label: string;
    items: MenuItem[];
}

export interface GalleryImage {
    caption: string;
    category: "Ambiance" | "Dishes" | "Events";
}

export interface Testimonial {
    quote: string;
    author: string;
    role?: string;
    rating: number;
}

export interface EventItem {
    title: string;
    description: string;
    schedule: string;
}

export interface OpeningHoursRow {
    days: string;
    hours: string;
}

export const RESTAURANT_INFO = {
    name: "Ember & Oak Steakhouse",
    tagline: "Fire-Kissed. Oak-Aged. Unforgettable.",
    summary:
          "A menu-forward fine dining steakhouse pairing live-fire cooking with an oak-lined dining room, built for guests who want a memorable night out and a reservation experience that never feels like a hassle.",
    address: "482 Copper Lane, Portland, OR 97205",
    phone: "+1 (503) 555-0142",
    phoneHref: "tel:+15035550142",
    email: "reservations@emberandoak.demo",
    whatsappHref: "https://wa.me/15035550142",
    instagramHref: "https://instagram.com/emberandoak.demo",
    facebookHref: "https://facebook.com/emberandoak.demo",
    mapQuery: "482 Copper Lane, Portland, OR 97205",
};

export const PROMOTIONS: string[] = [
    "Happy Hour — 4:00–6:00 PM Daily — $6 Oysters & Half-Price Reserve Pours",
    "Sunday Supper — Complimentary Dessert with Any Chef's Tasting Menu",
  ];

export const SIGNATURE_DISHES: MenuItem[] = [
  {
        name: "Dry-Aged Porterhouse",
        description: "45-day dry-aged, finished over live oak embers, bone marrow butter.",
        price: "$68",
        dietary: ["Gluten-Free"],
  },
  {
        name: "Charred Octopus",
        description: "Smoked paprika, fingerling potatoes, black garlic aioli.",
        price: "$24",
  },
  {
        name: "Oak-Roasted Half Chicken",
        description: "Brined 24 hours, roasted over oak, calabrian chile jus.",
        price: "$32",
        dietary: ["Gluten-Free"],
  },
  {
        name: "Burnt Honey Cheesecake",
        description: "Torched honey, brown butter crumble, sea salt.",
        price: "$14",
        dietary: ["Vegetarian"],
  },
  ];

export const DAILY_SPECIALS: MenuItem[] = [
  {
        name: "Monday — Whole Roasted Fish",
        description: "Market catch, roasted whole over embers, salsa verde.",
        price: "$36",
  },
  {
        name: "Wednesday — Bone-In Ribeye for Two",
        description: "36oz, dry-aged, shared board with two sides.",
        price: "$96",
  },
  {
        name: "Friday — Reserve Wine Pairing Dinner",
        description: "Four courses paired with reserve list selections.",
        price: "$120 per guest",
  },
  ];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
        id: "starters",
        label: "Starters",
        items: [
          {
                    name: "Charred Octopus",
                    description: "Smoked paprika, fingerling potatoes, black garlic aioli.",
                    price: "$24",
          },
          {
                    name: "Tartare of Beef",
                    description: "Hand-cut tenderloin, oak-smoked egg yolk, rye crisps.",
                    price: "$22",
          },
          {
                    name: "Roasted Bone Marrow",
                    description: "Herb gremolata, grilled sourdough.",
                    price: "$19",
                    dietary: ["Contains Nuts"],
          },
              ],
  },
  {
        id: "mains",
        label: "Mains",
        items: [
          {
                    name: "Dry-Aged Porterhouse",
                    description: "45-day dry-aged, finished over live oak embers, bone marrow butter.",
                    price: "$68",
                    dietary: ["Gluten-Free"],
          },
          {
                    name: "Oak-Roasted Half Chicken",
                    description: "Brined 24 hours, roasted over oak, calabrian chile jus.",
                    price: "$32",
                    dietary: ["Gluten-Free"],
          },
          {
                    name: "Pan-Seared Halibut",
                    description: "Charred leeks, brown butter, citrus.",
                    price: "$38",
                    dietary: ["Gluten-Free"],
          },
              ],
  },
  {
        id: "sides",
        label: "Sides",
        items: [
          {
                    name: "Truffle Fingerling Potatoes",
                    description: "Parmesan, herb oil.",
                    price: "$12",
                    dietary: ["Vegetarian", "Gluten-Free"],
          },
          {
                    name: "Charred Broccolini",
                    description: "Chili flake, lemon.",
                    price: "$11",
                    dietary: ["Vegan", "Gluten-Free"],
          },
              ],
  },
  {
        id: "desserts",
        label: "Desserts",
        items: [
          {
                    name: "Burnt Honey Cheesecake",
                    description: "Torched honey, brown butter crumble, sea salt.",
                    price: "$14",
                    dietary: ["Vegetarian"],
          },
          {
                    name: "Dark Chocolate Torte",
                    description: "Espresso cream, candied hazelnut.",
                    price: "$13",
                    dietary: ["Vegetarian"],
          },
              ],
  },
  ];

export const CHEF = {
    name: "Chef Marcus Reyes",
    title: "Executive Chef & Partner",
    bio: "Marcus spent a decade cooking over live fire across Argentina and the Pacific Northwest before opening Ember & Oak, built around a single idea: let the ingredient and the fire do the talking.",
    philosophy: "\u201cWe don't hide behind sauces. Fire is the seasoning.\u201d",
};

export const UPCOMING_EVENTS: EventItem[] = [
  {
        title: "Live Jazz Night",
        description: "A four-piece jazz trio in the dining room.",
        schedule: "Every Thursday, 7:00 PM",
  },
  {
        title: "Reserve Wine Pairing Dinner",
        description: "Four courses paired with our reserve list.",
        schedule: "Fridays, 6:30 PM — Reservation Required",
  },
  {
        title: "Private Dining & Events",
        description: "Buyouts and private rooms available for parties of 10-60.",
        schedule: "By Request",
  },
  ];

export const GALLERY_IMAGES: GalleryImage[] = [
  { caption: "Oak-lined dining room at dusk", category: "Ambiance" },
  { caption: "Dry-aged porterhouse plated tableside", category: "Dishes" },
  { caption: "Live-fire hearth in the open kitchen", category: "Ambiance" },
  { caption: "Charred octopus with black garlic aioli", category: "Dishes" },
  { caption: "Reserve wine pairing dinner", category: "Events" },
  { caption: "Private dining room set for a celebration", category: "Events" },
  ];

export const TESTIMONIALS: Testimonial[] = [
  {
        quote:
                "Best steakhouse we've been to in years — the porterhouse alone is worth the drive.",
        author: "Danielle R.",
        role: "OpenTable Review",
        rating: 5,
  },
  {
        quote: "Booked online in under a minute and the table was ready when we walked in.",
        author: "James K.",
        role: "Google Review",
        rating: 5,
  },
  {
        quote: "The chef's tasting menu on a Friday night is a must. Worth every course.",
        author: "Priya S.",
        role: "Yelp Review",
        rating: 5,
  },
  ];

export const OPENING_HOURS: OpeningHoursRow[] = [
  { days: "Monday – Thursday", hours: "4:00 PM – 10:00 PM" },
  { days: "Friday – Saturday", hours: "4:00 PM – 11:00 PM" },
  { days: "Sunday", hours: "3:00 PM – 9:00 PM" },
  ];
