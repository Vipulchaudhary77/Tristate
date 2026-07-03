import Image from "next/image";
import { notFound } from "next/navigation";
import { getStoneBySlug, getStoneSlugs } from "@/lib/data/stones";
import { createMetadata } from "@/lib/seo/metadata";
import { GoldButton } from "@/components/shared/GoldButton";
import { LuxuryBadge } from "@/components/shared/SectionHeading";
import { MasonryGallery } from "@/components/shared/MasonryGallery";

export async function generateStaticParams() {
  return getStoneSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stone = getStoneBySlug(slug);
  if (!stone) return {};
  return createMetadata({ title: stone.name, description: stone.description, path: `/stone/${slug}` });
}

export default async function StonePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stone = getStoneBySlug(slug);
  if (!stone) notFound();

  return (
    <main>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image src={stone.image} alt={stone.name} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-12">
          <LuxuryBadge className="mb-4 text-gold">Stone Collection</LuxuryBadge>
          <h1 className="font-heading text-5xl font-light text-white md:text-7xl">
            {stone.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">{stone.tagline}</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground">{stone.description}</p>
              <ul className="mt-8 space-y-3">
                {stone.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-muted-foreground">
                    <span className="size-1.5 rounded-full gold-gradient-bg" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <GoldButton href="/contact?intent=estimate" className="mt-8">
                Request a Quote
              </GoldButton>
            </div>
            <MasonryGallery
              items={stone.gallery.map((src, i) => ({
                id: `${stone.slug}-${i}`,
                title: `${stone.name} Sample ${i + 1}`,
                image: src,
                height: i === 0 ? "tall" : "medium",
              }))}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
