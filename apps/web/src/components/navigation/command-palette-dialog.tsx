"use client";

import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { FileText, Rocket, Sparkles, Tag, Briefcase } from "lucide-react";

import { useCommandPalette } from "./command-palette-context";

interface QuickLink {
  label: string;
  href: string;
  icon: typeof Rocket;
  group: string;
}

const QUICK_LINKS: QuickLink[] = [
  { label: "Live Demo Marketplace", href: "/live-demos", icon: Rocket, group: "Explore" },
  { label: "AI Solutions", href: "/ai-solutions", icon: Sparkles, group: "Explore" },
  { label: "Pricing", href: "/pricing", icon: Tag, group: "Explore" },
  { label: "Portfolio", href: "/portfolio", icon: Briefcase, group: "Explore" },
  { label: "Blog", href: "/blog", icon: FileText, group: "Resources" },
  { label: "Book a Consultation", href: "/book-consultation", icon: Sparkles, group: "Get Started" },
];

/**
 * CommandPaletteDialog
 *
 * Global ⌘K command palette built on cmdk. Provides quick navigation to key
 * marketing pages; can be extended later with live search results once the
 * search architecture (Phase 10) is implemented.
 */
export function CommandPaletteDialog() {
  const { isOpen, close } = useCommandPalette();
  const router = useRouter();

  function go(href: string) {
    close();
    router.push(href);
  }

  const groups = Array.from(new Set(QUICK_LINKS.map((link) => link.group)));

  return (
    <Command.Dialog
      open={isOpen}
      onOpenChange={(open) => !open && close()}
      label="Command palette"
      className="fixed left-1/2 top-24 z-[100] w-full max-w-lg -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-popover shadow-2xl"
    >
      <div className="flex items-center border-b border-border px-3">
        <Command.Input
          placeholder="Search pages, services, industries..."
          className="h-12 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>
      <Command.List className="max-h-80 overflow-y-auto p-2">
        <Command.Empty className="p-4 text-center text-sm text-muted-foreground">
          No results found.
        </Command.Empty>
        {groups.map((group) => (
          <Command.Group
            key={group}
            heading={group}
            className="px-2 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5"
          >
            {QUICK_LINKS.filter((link) => link.group === group).map((link) => {
              const Icon = link.icon;
              return (
                <Command.Item
                  key={link.href}
                  onSelect={() => go(link.href)}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-foreground data-[selected=true]:bg-accent"
                >
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  {link.label}
                </Command.Item>
              );
            })}
          </Command.Group>
        ))}
      </Command.List>
    </Command.Dialog>
  );
}
