"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getFeaturedProjects } from "@/lib/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GoldButton } from "@/components/shared/GoldButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectShowcaseSection() {
  const projects = getFeaturedProjects();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % projects.length);
  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);

  return (
    <section className="section-padding bg-black text-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Featured Projects"
          title="Signature Installations"
          subtitle="A curated selection of our most exceptional stone transformations."
          className="[&_h2]:text-white [&_p]:text-white/60"
        />
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="grid items-center gap-12 lg:grid-cols-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={projects[current].image}
                  alt={projects[current].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gold">
                  {projects[current].category}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light md:text-5xl">
                  {projects[current].title}
                </h3>
                <p className="mt-4 text-white/60 leading-relaxed">{projects[current].description}</p>
                <div className="mt-6 flex gap-8 text-sm">
                  <div>
                    <p className="text-white/40">Stone Used</p>
                    <p className="mt-1 text-gold">{projects[current].stoneUsed}</p>
                  </div>
                  <div>
                    <p className="text-white/40">Location</p>
                    <p className="mt-1">{projects[current].location}</p>
                  </div>
                </div>
                <GoldButton href={`/projects/${projects[current].slug}`} className="mt-8">
                  View Project
                </GoldButton>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all ${
                    i === current ? "w-8 gold-gradient-bg" : "w-4 bg-white/20"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="flex size-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-gold hover:text-gold"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={next}
                className="flex size-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-gold hover:text-gold"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link href="/projects" className="text-sm uppercase tracking-[0.2em] text-gold hover:underline">
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
