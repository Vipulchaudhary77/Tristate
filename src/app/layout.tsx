import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Space_Grotesk } from "next/font/google";
import { Providers } from "@/providers/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollAnimationsProvider } from "@/providers/ScrollAnimationsProvider";
import { createMetadata, localBusinessSchema } from "@/lib/seo/metadata";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = createMetadata({});

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
        className={`${cormorant.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
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
