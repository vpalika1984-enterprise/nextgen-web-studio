"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0 },
};

/**
 * PageWrapper
 *
 * Wraps route-level content with a consistent enter transition. Used inside
 * the (marketing) layout so navigating between pages feels smooth without
 * relying on a global route-change listener.
 */
export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      variants={variants}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
