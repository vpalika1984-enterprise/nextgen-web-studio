import type { ReactNode } from "react";

import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/footer/footer";
import { PageWrapper } from "@/components/shared/page-wrapper";

/**
 * (marketing) route group layout
 *
 * Wraps every public marketing page (home, services, industries, live
 * demos, portfolio, pricing, blog, about, contact, etc.) with the shared
 * Navbar and Footer, plus the PageWrapper enter transition.
 */
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <PageWrapper>{children}</PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
