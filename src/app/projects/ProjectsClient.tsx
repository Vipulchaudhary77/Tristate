"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, projectCategories } from "@/lib/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";
import { cn } from "@/lib/utils";

export default function ProjectsClient() {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all" ? projects : projects.filter((p) => p.category === category);

  return (
    <main>
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Projects"
            title="Signature Installations"
            subtitle="Editorial case studies of our finest residential and commercial stone transformations."
          />

          <div className="mb-16 flex flex-wrap justify-center gap-3">
            {projectCategories.map((cat) => (
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

          <div className="space-y-24">
            {filtered.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
                data-animate="fade-up"
              >
                <TiltCard className="overflow-hidden rounded-2xl">
                  <div
                    className={cn(
                      "grid items-center gap-0 lg:grid-cols-2",
                      index % 2 === 1 && "lg:[&>*:first-child]:order-2"
                    )}
                  >
                    <div className="relative min-h-[50vh] lg:min-h-[60vh]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/40" />
                    </div>
                    <div className="bg-charcoal p-8 text-white lg:p-14">
                      <p className="text-xs uppercase tracking-[0.2em] text-gold">{project.category}</p>
                      <h2 className="mt-4 font-heading text-4xl font-light md:text-5xl">{project.title}</h2>
                      <p className="mt-4 text-white/60 leading-relaxed">{project.description}</p>
                      <div className="mt-8 flex gap-8 text-sm">
                        <div>
                          <p className="text-white/40">Stone</p>
                          <p className="mt-1 text-gold">{project.stoneUsed}</p>
                        </div>
                        <div>
                          <p className="text-white/40">Location</p>
                          <p className="mt-1">{project.location}</p>
                        </div>
                      </div>
                      <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-wider text-gold transition-colors group-hover:gap-3">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
