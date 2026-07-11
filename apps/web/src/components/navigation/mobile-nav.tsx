"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NAV_CTA, NAV_GROUPS } from "./nav-config";

/**
 * MobileNav
 *
 * Slide-in drawer navigation for small viewports. Groups with sub-items
 * expand in place (accordion-style) rather than opening a mega menu, since
 * hover states don't apply on touch devices.
 */
export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  function close() {
    setIsOpen(false);
    setExpanded(null);
  }

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={close}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto border-l border-border bg-background p-6"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold text-muted-foreground">
                  Menu
                </span>
                <Button variant="ghost" size="icon" aria-label="Close menu" onClick={close}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="flex flex-1 flex-col gap-1">
                {NAV_GROUPS.map((group) => (
                  <div key={group.label} className="border-b border-border/60 py-1">
                    {group.items ? (
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-md px-2 py-3 text-left text-base font-medium text-foreground"
                        onClick={() =>
                          setExpanded((prev) => (prev === group.label ? null : group.label))
                        }
                        aria-expanded={expanded === group.label}
                      >
                        {group.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            expanded === group.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={group.href ?? "#"}
                        className="block rounded-md px-2 py-3 text-base font-medium text-foreground"
                        onClick={close}
                      >
                        {group.label}
                      </Link>
                    )}

                    <AnimatePresence>
                      {group.items && expanded === group.label && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-2"
                        >
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="block rounded-md px-2 py-2 text-sm text-muted-foreground"
                                onClick={close}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              <Button asChild size="lg" className="mt-6 w-full">
                <Link href={NAV_CTA.href} onClick={close}>
                  {NAV_CTA.label}
                </Link>
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
