import { Tag } from "lucide-react";

interface PromoBannerProps {
    promotions: string[];
}

/**
 * PromoBanner
 *
 * Thin promotional strip for current offers and daily happy-hour style
 * deals. Reusable across future restaurant demos: any demo can pass its
 * own promotions array without changing this component. Renders nothing
 * when there are no active promotions.
 */
export function PromoBanner({ promotions }: PromoBannerProps) {
    if (promotions.length === 0) {
          return null;
    }

  return (
        <div className="border-y border-amber-500/20 bg-amber-500/10">
              <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-2.5 text-center text-sm font-medium text-amber-200 sm:px-6 lg:px-8">
                {promotions.map((promotion) => (
                    <span key={promotion} className="inline-flex items-center gap-2">
                                <Tag className="h-3.5 w-3.5" aria-hidden="true" />
                      {promotion}
                    </span>
                  ))}
              </div>
        </div>
      );
}
