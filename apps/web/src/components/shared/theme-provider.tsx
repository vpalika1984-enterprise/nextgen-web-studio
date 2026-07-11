"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

/**
 * ThemeProvider
 *
 * Thin wrapper around next-themes. Uses React.ComponentProps instead of a
 * deep import of next-themes' internal type declaration file, since that
 * subpath is not guaranteed to be part of the package's public API surface.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
