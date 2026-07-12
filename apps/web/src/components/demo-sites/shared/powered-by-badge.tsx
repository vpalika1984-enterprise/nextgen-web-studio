import Link from "next/link";
import { Sparkles } from "lucide-react";

interface PoweredByBadgeProps {
    demoDetailsHref: string;
}

/**
 * PoweredByBadge
 *
 * Small persistent credit link shown on every demo-sites page, pointing
 * back to the demo's marketplace detail page. Reusable across every
 * future demo site (not just restaurants), so a visitor can always find
 * their way back to the NextGen Web Studio marketplace listing.
 */
export function PoweredByBadge({ demoDetailsHref }: PoweredByBadgeProps) {
    return (
          <Link
                  href={demoDetailsHref}
                  className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/80 px-3 py-2 text-xs font-medium text-white shadow-lg backdrop-blur transition-colors hover:bg-black"
                >
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Live Demo by NextGen Web Studio
          </Link>
        );
}
