import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/content";
import { createMetadata } from "@/lib/seo/metadata";
import { GoldButton } from "@/components/shared/GoldButton";
import { LuxuryBadge } from "@/components/shared/SectionHeading";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return createMetadata({ title: post.title, description: post.excerpt, path: `/resources/blog/${slug}` });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-12">
          <LuxuryBadge className="mb-4 text-gold">{post.date}</LuxuryBadge>
          <h1 className="max-w-4xl font-[family-name:var(--font-cormorant)] text-4xl font-light text-white md:text-6xl">
            {post.title}
          </h1>
        </div>
      </section>
      <section className="section-padding">
        <article className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">{post.content}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Contact our design team for personalized recommendations tailored to your project and lifestyle.
          </p>
          <GoldButton href="/contact" className="mt-8">
            Schedule Consultation
          </GoldButton>
        </article>
      </section>
    </main>
  );
}
