import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our new site paid for itself within two months. Bookings are up and the site finally feels like us.",
    name: "Maria Chen",
    role: "Owner, Ember & Oak Steakhouse",
  },
  {
    quote:
      "They understood healthcare compliance without us having to explain it twice. The patient portal just works.",
    name: "Dr. James Whitfield",
    role: "Medical Director, Northshore Family Medicine",
  },
  {
    quote:
      "Listings load instantly and the mortgage calculator is the most-used feature on our site now.",
    name: "Priya Anand",
    role: "Broker, Summit Realty Group",
  },
];

/**
 * TestimonialsSection
 *
 * Three-column testimonial cards with a five-star rating indicator. Static
 * placeholder copy until real client quotes are collected.
 */
export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Client stories</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Loved by teams who need results, not just a pretty site
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
