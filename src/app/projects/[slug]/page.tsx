import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs, projects } from "@/lib/data/projects";
import { createMetadata } from "@/lib/seo/metadata";
import { GoldButton } from "@/components/shared/GoldButton";
import { LuxuryBadge } from "@/components/shared/SectionHeading";
import { MasonryGallery } from "@/components/shared/MasonryGallery";

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return createMetadata({ title: project.title, description: project.description, path: `/projects/${slug}` });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 3);

  return (
    <main>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-12">
          <LuxuryBadge className="mb-4 text-gold">{project.category}</LuxuryBadge>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-white md:text-7xl">
            {project.title}
          </h1>
          <div className="mt-6 flex gap-8 text-white/70">
            <div>
              <p className="text-xs uppercase tracking-wider text-gold">Stone Used</p>
              <p className="mt-1">{project.stoneUsed}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gold">Location</p>
              <p className="mt-1">{project.location}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <MasonryGallery
            items={project.gallery.map((src, i) => ({
              id: `${project.slug}-gallery-${i}`,
              title: `${project.title} - Image ${i + 1}`,
              image: src,
              height: i % 3 === 0 ? "tall" : "medium",
            }))}
          />
          {related.length > 0 && (
            <div className="mt-24">
              <h2 className="mb-8 text-center font-[family-name:var(--font-cormorant)] text-3xl font-light">
                Related Projects
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {related.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="33vw"
                      />
                    </div>
                    <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-xl">{p.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div className="mt-16 text-center">
            <GoldButton href="/contact?intent=estimate">Start Your Project</GoldButton>
          </div>
        </div>
      </section>
    </main>
  );
}
