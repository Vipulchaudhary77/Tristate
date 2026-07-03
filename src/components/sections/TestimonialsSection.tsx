"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/lib/data/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by homeowners, designers, and architects across the tri-state area."
        />
        <GlassCard className="mx-auto max-w-3xl text-center" hover={false}>
          <div className="mb-4 flex justify-center gap-1">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="size-5 fill-gold text-gold" />
            ))}
          </div>
          <blockquote className="font-[family-name:var(--font-cormorant)] text-2xl font-light leading-relaxed md:text-3xl">
            &ldquo;{t.text}&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-medium">{t.name}</p>
            <p className="text-sm text-muted-foreground">
              {t.location} • {t.date}
            </p>
            {t.project && (
              <p className="mt-1 text-xs uppercase tracking-wider text-gold">{t.project}</p>
            )}
          </div>
        </GlassCard>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`size-2 rounded-full transition-all ${
                i === current ? "w-6 gold-gradient-bg" : "bg-muted-foreground/30"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
