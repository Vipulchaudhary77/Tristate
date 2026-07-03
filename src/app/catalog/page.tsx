import { Suspense } from "react";
import { createMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/shared/SectionHeading";
import CatalogClient from "./CatalogClient";

export const metadata = createMetadata({
  title: "Stone Catalog",
  description:
    "Browse our interactive stone catalog. Filter by material, color, finish, and application to find your perfect surface.",
  path: "/catalog",
});

export default function CatalogPage() {
  return (
    <main>
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Stone Catalog"
            title="Curated Slab Collection"
            subtitle="Explore premium natural and engineered stones. Filter by material, color, finish, and application."
          />
          <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Loading catalog...</div>}>
            <CatalogClient />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
