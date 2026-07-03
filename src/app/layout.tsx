import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Providers } from "@/providers/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollAnimationsProvider } from "@/providers/ScrollAnimationsProvider";
import { createMetadata, localBusinessSchema } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/navigation";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({}),
  metadataBase: new URL(siteConfig.url),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <Providers>
          <ScrollAnimationsProvider>
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Footer />
            <FloatingActions />
          </ScrollAnimationsProvider>
        </Providers>
      </body>
    </html>
  );
}
