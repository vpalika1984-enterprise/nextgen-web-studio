"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import { useCommandPalette } from "./command-palette-context";

/**
 * SearchTrigger
 *
 * Pill-style button shown in the desktop navbar that opens the command
 * palette. Displays the platform-appropriate shortcut hint (⌘K).
 */
export function SearchTrigger() {
  const { open } = useCommandPalette();
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(/Mac|iPod|iPhone|iPad/.test(window.navigator.platform));
  }, []);

  return (
    <button
      type="button"
      onClick={open}
      className="hidden items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted md:flex"
      aria-label="Open search"
    >
      <Search className="h-4 w-4" />
      <span>Search</span>
      <kbd className="ml-2 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
        {isMac ? "⌘K" : "Ctrl K"}
      </kbd>
    </button>
  );
}
