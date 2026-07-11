"use client";

import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

/**
 * SearchBar
 *
 * Controlled text input used to filter the Live Demo Marketplace grid by
 * name, industry, or description.
 */
export function SearchBar({ value, onChange, placeholder, className }: SearchBarProps) {
    return (
          <label
                  className={cn(
                            "flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-sm focus-within:ring-2 focus-within:ring-ring",
                            className
                          )}
                >
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <span className="sr-only">Search live demos</span>
                <input
                          type="text"
                          value={value}
                          onChange={(event) => onChange(event.target.value)}
                          placeholder={placeholder ?? "Search live demos..."}
                          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                        />
          </label>
        );
}
