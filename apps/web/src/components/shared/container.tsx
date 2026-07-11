import * as React from "react";

import { cn } from "@/lib/utils";

type ContainerElement =
    | "div"
  | "section"
  | "article"
  | "main"
  | "header"
  | "footer"
  | "nav";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: ContainerElement;
}

/**
 * Container
 *
 * Polymorphic layout wrapper. The `as` prop is intentionally restricted to
 * a small set of block-level HTML tag names (rather than the full
 * `JSX.IntrinsicElements` union) so its props stay compatible with
 * `HTMLAttributes<HTMLDivElement>` — the full union includes SVG elements
 * with incompatible prop shapes.
 *
 * Default className renders the site's standard content measure: centered,
 * capped at `max-w-7xl`, with responsive horizontal padding, matching the
 * wrapper every marketing section already uses. This intentionally does not
 * reuse Tailwind's `container` theme utility (configured for a 1360px 2xl
 * breakpoint with fixed 1.5rem padding), which does not match that pattern.
 * Pass a `className` with a different `max-w-*` to override per section.
 */
export function Container({ as: Tag = "div", className, children, ...props }: ContainerProps) {
    const Component = Tag as React.ElementType;
    return (
          <Component className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props}>
            {children}
          </Component>
        );
}
