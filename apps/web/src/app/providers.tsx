"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { createQueryClient } from "@/lib/query/query-client";
import { CommandPaletteProvider } from "@/components/shared/command-palette/command-palette-context";

interface ProvidersProps {
  children: React.ReactNode;
}

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
        <CommandPaletteProvider>{children}</CommandPaletteProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
