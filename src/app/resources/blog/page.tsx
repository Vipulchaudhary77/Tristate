import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data/content";
import { createMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata = createMetadata({
  title: "Blog",
  description: "Design inspiration and stone care tips from Tri-State Stone.",
  path: "/resources/blog",
});

export default function BlogPage() {
  return (
    <main>
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Blog"
            title="Design Inspiration & Insights"
            subtitle="Expert advice on stone selection, care, and the latest design trends."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-gold/20 bg-card"
                data-animate="fade-up"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-gold">{post.date}</p>
                  <h3 className="mt-2 font-heading text-xl font-light group-hover:text-gold">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
