"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";
import { GoldButton } from "@/components/shared/GoldButton";
import { LuxuryBadge } from "@/components/shared/SectionHeading";
import { VideoHero } from "@/components/shared/VideoHero";
import { TiltCard } from "@/components/shared/TiltCard";
import { cn } from "@/lib/utils";

type ProjectCaseStudyProps = {
  project: Project;
  related: Project[];
};

export function ProjectCaseStudy({ project, related }: ProjectCaseStudyProps) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapMod, stMod]) => {
      const gsap = gsapMod.gsap;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const sidebar = document.querySelector("[data-case-study-sidebar]");
      const content = document.querySelector("[data-case-study-content]");

      if (sidebar && content && window.innerWidth >= 1024) {
        ScrollTrigger.create({
          trigger: content,
          start: "top 120px",
          end: "bottom bottom",
          pin: sidebar,
          pinSpacing: false,
        });
      }
    });
  }, []);

  return (
    <main>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        {project.videoUrl ? (
          <VideoHero videoSrc={project.videoUrl} posterSrc={project.image} />
        ) : (
          <>
            <Image src={project.image} alt={project.title} fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </>
        )}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-12">
          <LuxuryBadge className="mb-4 text-gold">{project.category}</LuxuryBadge>
          <h1 className="font-heading text-5xl font-light text-white md:text-7xl">{project.title}</h1>
          <div className="mt-6 flex flex-wrap gap-8 text-white/70">
            <div>
              <p className="text-xs uppercase tracking-wider text-gold">Stone Used</p>
              <p className="mt-1">{project.stoneUsed}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gold">Location</p>
              <p className="mt-1">{project.location}</p>
            </div>
            {project.timeline && (
              <div>
                <p className="text-xs uppercase tracking-wider text-gold">Timeline</p>
                <p className="mt-1">{project.timeline}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[280px_1fr]" data-case-study-content>
            <aside data-case-study-sidebar className="h-fit">
              <div className="glass-card p-6">
                <h2 className="font-heading text-xl font-light">Project Specs</h2>
                <dl className="mt-6 space-y-4">
                  {project.specs?.map((spec) => (
                    <div key={spec.label}>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">{spec.label}</dt>
                      <dd className="mt-1 text-sm font-medium">{spec.value}</dd>
                    </div>
                  ))}
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">Location</dt>
                    <dd className="mt-1 text-sm font-medium">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">Stone</dt>
                    <dd className="mt-1 text-sm font-medium text-gold">{project.stoneUsed}</dd>
                  </div>
                </dl>
                <GoldButton href="/contact?intent=estimate" className="mt-8 w-full">
                  Start Your Project
                </GoldButton>
              </div>
            </aside>

            <div className="space-y-20">
              <div data-animate="text-reveal">
                <h2 className="font-heading text-3xl font-light md:text-4xl">Overview</h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{project.description}</p>
              </div>

              {project.challenge && (
                <div className="grid items-center gap-10 lg:grid-cols-2" data-animate="fade-up">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={project.gallery[0]}
                      alt={`${project.title} detail`}
                      fill
                      className="object-cover"
                      data-parallax
                      sizes="50vw"
                    />
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl font-light">The Challenge</h2>
                    <p className="mt-6 leading-relaxed text-muted-foreground">{project.challenge}</p>
                  </div>
                </div>
              )}

              {project.solution && (
                <div className="grid items-center gap-10 lg:grid-cols-2" data-animate="fade-up">
                  <div className="lg:order-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={project.gallery[1] ?? project.gallery[0]}
                        alt={`${project.title} solution`}
                        fill
                        className="object-cover"
                        data-parallax
                        sizes="50vw"
                      />
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <h2 className="font-heading text-3xl font-light">Our Solution</h2>
                    <p className="mt-6 leading-relaxed text-muted-foreground">{project.solution}</p>
                  </div>
                </div>
              )}

              {project.gallery.length > 2 && (
                <div className="space-y-6" data-animate="stagger-parent">
                  {project.gallery.slice(2).map((src, i) => (
                    <div
                      key={src}
                      className="relative overflow-hidden rounded-2xl"
                      data-animate="fade-up"
                      data-stagger-child
                    >
                      <div className={cn("relative", i % 2 === 0 ? "aspect-[21/9]" : "aspect-[16/9]")}>
                        <Image
                          src={src}
                          alt={`${project.title} - ${i + 3}`}
                          fill
                          className="object-cover"
                          sizes="100vw"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {project.testimonial && (
                <blockquote
                  className="relative border-l-4 border-gold py-4 pl-8"
                  data-animate="text-reveal"
                >
                  <p className="font-heading text-2xl font-light leading-relaxed md:text-3xl">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-6 text-sm text-muted-foreground">
                    — {project.testimonial.author}
                  </footer>
                </blockquote>
              )}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-charcoal text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center font-heading text-3xl font-light">Related Projects</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
                  <TiltCard>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="33vw"
                      />
                    </div>
                    <h3 className="mt-4 font-heading text-xl">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/50">{p.location}</p>
                  </TiltCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
