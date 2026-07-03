import Link from "next/link";
import Image from "next/image";
import { stones } from "@/lib/data/stones";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function StonesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Stone Collections"
          title="Curated Materials From the World's Finest Quarries"
          subtitle="Explore our extensive collection of premium natural and engineered stone surfaces."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stones.map((stone) => (
            <Link
              key={stone.slug}
              href={`/stone/${stone.slug}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
              data-animate="fade-up"
            >
              <Image
                src={stone.image}
                alt={stone.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-white">
                  {stone.name}
                </h3>
                <p className="mt-1 text-sm text-white/70">{stone.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
