import { CalendarDays } from "lucide-react";

interface EventStripItem {
    title: string;
    description: string;
    schedule: string;
}

interface EventsStripProps {
    heading?: string;
    events: EventStripItem[];
}

/**
 * EventsStrip
 *
 * Compact grid of upcoming events, specials, or recurring nights out.
 * Reusable across future demo sites: any demo can pass its own events
 * array and heading without changing this component. Renders nothing
 * when there are no events.
 */
export function EventsStrip({ heading = "Upcoming Events", events }: EventsStripProps) {
    if (events.length === 0) {
          return null;
    }

  return (
        <div className="grid gap-4 sm:grid-cols-3">
              <div className="sm:col-span-3">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-500">
                        {heading}
                      </h3>
              </div>
          {events.map((event) => (
                  <div key={event.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="mb-2 flex items-center gap-2 text-amber-400">
                                        <CalendarDays className="h-4 w-4" aria-hidden="true" />
                                        <span className="text-xs font-medium">{event.schedule}</span>
                            </div>
                            <h4 className="text-base font-semibold text-white">{event.title}</h4>
                            <p className="mt-1 text-sm text-white/70">{event.description}</p>
                  </div>
                ))}
        </div>
      );
}
