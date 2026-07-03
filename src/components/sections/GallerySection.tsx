import Link from "next/link";
import { galleryItems } from "@/lib/data/gallery";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MasonryGallery } from "@/components/shared/MasonryGallery";
import { GoldButton } from "@/components/shared/GoldButton";

export function GallerySection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Gallery"
          title="Our Finest Work"
          subtitle="Browse our portfolio of luxury stone installations across kitchens, bathrooms, and commercial spaces."
        />
        <MasonryGallery items={galleryItems.slice(0, 8)} />
        <div className="mt-12 text-center">
          <GoldButton href="/gallery">View Full Gallery</GoldButton>
        </div>
      </div>
    </section>
  );
}
