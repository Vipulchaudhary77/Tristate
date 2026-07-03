import Image from "next/image";
import { notFound } from "next/navigation";
import { getAboutPage, getAboutSlugs } from "@/lib/data/content";
import { createMetadata } from "@/lib/seo/metadata";
import { GoldButton } from "@/components/shared/GoldButton";
import { LuxuryBadge } from "@/components/shared/SectionHeading";

export async function generateStaticParams() {
  return getAboutSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getAboutPage(slug);
  if (!page) return {};
  return createMetadata({ title: page.title, description: page.subtitle, path: `/about/${slug}` });
}

export default async function AboutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getAboutPage(slug);
  if (!page) notFound();

  return (
    <main>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image src={page.image} alt={page.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-12">
          <LuxuryBadge className="mb-4 text-gold">About</LuxuryBadge>
          <h1 className="font-heading text-5xl font-light text-white md:text-7xl">
            {page.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">{page.subtitle}</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          {page.content.map((paragraph, i) => (
            <p key={i} className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
          <GoldButton href="/contact" className="mt-8">
            Get in Touch
          </GoldButton>
        </div>
      </section>
    </main>
  );
}
