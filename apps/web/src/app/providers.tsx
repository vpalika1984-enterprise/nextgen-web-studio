"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { createQueryClient } from "@/lib/query/query-client";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Providers
 *
 * Root client-side provider tree: React Query, theme (dark/light), and the
 * global command palette. The command palette provider itself lives inside
 * Navbar (components/navigation/navbar.tsx) since it is the only consumer,
 * so it is intentionally not duplicated here.
 */
export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
