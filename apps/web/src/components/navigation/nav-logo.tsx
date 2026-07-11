import Link from "next/link";
import { Sparkles } from "lucide-react";

import { SITE_NAME } from "@/lib/constants";

/**
 * NavLogo
 *
 * Wordmark + icon lockup used in the desktop and mobile navigation. Kept as
 * a standalone component so the logo treatment stays consistent across the
 * header, footer, and command palette.
 */
export function NavLogo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`${SITE_NAME} — Home`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-fuchsia-500 text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105">
        <Sparkles className="h-4 w-4" />
      </span>
      <span className="text-base font-semibold tracking-tight text-foreground">
        {SITE_NAME}
      </span>
    </Link>
  );
}
