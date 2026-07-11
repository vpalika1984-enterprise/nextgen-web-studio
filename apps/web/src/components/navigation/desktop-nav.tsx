"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_GROUPS, type NavGroup } from "./nav-config";

/**
 * DesktopNav
 *
 * Horizontal primary navigation with mega menus for groups that define
 * `items`. Menus open on hover (mouse convenience) as well as on focus and
 * click (keyboard + assistive technology), and close on Escape or when a
 * click lands outside the open group, so every menu is fully operable
 * without a mouse per WCAG 2.1 SC 2.1.1 (Keyboard).
 */
export function DesktopNav() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const containerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenGroup(null);
    }

    function handleClickOutside(event: MouseEvent) {
      setOpenGroup((current) => {
        if (!current) return current;
        const node = containerRefs.current[current];
        if (node && !node.contains(event.target as Node)) {
          return null;
        }
        return current;
      });
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
      {NAV_GROUPS.map((group) => {
        const isOpen = openGroup === group.label;
        const menuId = `mega-menu-${group.label.toLowerCase().replace(/\s+/g, "-")}`;

        return (
          <div
            key={group.label}
            ref={(node) => {
              containerRefs.current[group.label] = node;
            }}
            className="relative"
            onMouseEnter={() => group.items && setOpenGroup(group.label)}
            onMouseLeave={() => group.items && setOpenGroup(null)}
            onFocus={() => group.items && setOpenGroup(group.label)}
          >
            {group.items ? (
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isOpen && "text-foreground"
                )}
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-controls={menuId}
                onClick={() => setOpenGroup(isOpen ? null : group.label)}
              >
                {group.label}
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
            ) : (
              <Link
                href={group.href ?? "#"}
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {group.label}
              </Link>
            )}

            <AnimatePresence>
              {group.items && isOpen && <MegaMenu group={group} menuId={menuId} />}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}

function MegaMenu({ group, menuId }: { group: NavGroup; menuId: string }) {
  return (
    <motion.div
      id={menuId}
      role="menu"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-0 top-full z-50 mt-2 w-[22rem] rounded-xl border border-border bg-popover/95 p-2 shadow-xl backdrop-blur-md"
    >
      <ul className="grid gap-1">
        {group.items?.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-accent focus-visible:bg-accent focus-visible:outline-none"
              >
                {Icon && (
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                )}
                <span>
                  <span className="block text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                  {item.description && (
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  )}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
