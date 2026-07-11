"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface BackgroundGridProps {
  className?: string;
  fadeOut?: boolean;
}

/**
 * BackgroundGrid
 *
 * Subtle animated grid + aurora backdrop used behind hero and section
 * surfaces across the marketing site. Purely decorative and marked
 * aria-hidden so it never interferes with assistive technology.
 */
export function BackgroundGrid({ className, fadeOut = true }: BackgroundGridProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    node.style.setProperty("--grid-opacity", "1");
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className ?? ""}`}
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.15]"
      />

      {!shouldReduceMotion && (
        <motion.div
          className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {fadeOut && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      )}
    </div>
  );
}
