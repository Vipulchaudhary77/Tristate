import Image from "next/image";
import Link from "next/link";
import { instagramPosts } from "@/lib/data/gallery";
import { siteConfig } from "@/lib/data/navigation";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Instagram } from "lucide-react";

export function InstagramSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Instagram"
          title="Follow Our Journey"
          subtitle="Daily inspiration from our showroom, fabrication floor, and latest installations."
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((src, i) => (
            <Link
              key={i}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
              data-animate="fade-up"
            >
              <Image
                src={src}
                alt={`Instagram post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 16vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                <Instagram className="size-6 text-white opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
