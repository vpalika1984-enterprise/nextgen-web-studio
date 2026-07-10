import "./globals.css";
import { geistSans, geistMono } from "@/lib/fonts";
import { Providers } from "./providers";
import { defaultMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
