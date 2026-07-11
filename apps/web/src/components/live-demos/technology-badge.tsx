interface TechnologyBadgeProps {
    name: string;
}

/**
 * TechnologyBadge
 *
 * Small pill used to label the technologies powering a live demo. Shared
 * across DemoCard, FeaturedDemo, and any future marketplace surfaces.
 */
export function TechnologyBadge({ name }: TechnologyBadgeProps) {
    return (
          <span className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {name}
          </span>
        );
}
