import type { ReactNode } from "react";

/**
 * demo-sites route segment layout
 *
 * Live demo sites showcased inside the marketplace get their own
 * namespace (/demo-sites/*) with no NextGen Web Studio navigation or
 * footer, so each demo reads as its own standalone site rather than a
 * page of the agency's marketing site. Individual demo pages own their
 * full page chrome (hero through footer).
 */
export default function DemoSitesLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
