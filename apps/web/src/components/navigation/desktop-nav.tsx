"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_GROUPS, type NavGroup } from "./nav-config";

/**
 * DesktopNav
 *
 * Horizontal primary navigation with hover-activated mega menus for groups
 * that define `items`. Simple links render as plain anchors. Built for
 * pointer devices; MobileNav covers touch/small-viewport navigation.
 */
export function DesktopNav() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
      {NAV_GROUPS.map((group) => (
        <div
          key={group.label}
          className="relative"
          onMouseEnter={() => group.items && setOpenGroup(group.label)}
          onMouseLeave={() => group.items && setOpenGroup(null)}
        >
          {group.items ? (
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                openGroup === group.label && "text-foreground"
              )}
              aria-expanded={openGroup === group.label}
            >
              {group.label}
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  openGroup === group.label && "rotate-180"
                )}
              />
            </button>
          ) : (
            <Link
              href={group.href ?? "#"}
              className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {group.label}
            </Link>
          )}

          <AnimatePresence>
            {group.items && openGroup === group.label && (
              <MegaMenu group={group} />
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
}

function MegaMenu({ group }: { group: NavGroup }) {
  return (
    <motion.div
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
                className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-accent"
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
