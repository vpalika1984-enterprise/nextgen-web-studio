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
 */
export function Container({ as: Tag = "div", className, children, ...props }: ContainerProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component className={cn("container", className)} {...props}>
      {children}
    </Component>
  );
}
