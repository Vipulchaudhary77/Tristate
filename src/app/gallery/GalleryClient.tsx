"use client";

import { useState } from "react";
import { galleryItems, galleryCategories } from "@/lib/data/gallery";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MasonryGallery } from "@/components/shared/MasonryGallery";
import { cn } from "@/lib/utils";

export default function GalleryClient() {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);

  return (
    <main>
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Gallery"
            title="Our Portfolio"
            subtitle="Explore our collection of luxury stone installations across residential and commercial projects."
          />
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {galleryCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setCategory(cat.slug)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm uppercase tracking-wider transition-all",
                  category === cat.slug
                    ? "gold-gradient-bg border-transparent text-black"
                    : "border-gold/20 hover:border-gold/50"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <MasonryGallery items={filtered} />
        </div>
      </section>
    </main>
  );
}
