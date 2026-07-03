import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { createMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata = createMetadata({
  title: "Projects",
  description: "Explore our signature stone installation projects.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main>
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Projects"
            title="Signature Installations"
            subtitle="A showcase of our finest work across residential and commercial spaces."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-2xl"
                data-animate="fade-up"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="border-x border-b border-gold/20 bg-card p-6">
                  <p className="text-xs uppercase tracking-wider text-gold">{project.category}</p>
                  <h3 className="mt-2 font-[family-name:var(--font-cormorant)] text-2xl font-light">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
