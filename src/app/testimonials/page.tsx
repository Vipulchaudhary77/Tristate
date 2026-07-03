import { testimonials } from "@/lib/data/content";
import { createMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { Star } from "lucide-react";
import { GoldButton } from "@/components/shared/GoldButton";

export const metadata = createMetadata({
  title: "Testimonials",
  description: "Read what our clients say about Tri-State Stone.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <main>
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Testimonials"
            title="Client Stories"
            subtitle="Hear from homeowners, designers, and commercial clients who trust Tri-State Stone."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((review) => (
              <GlassCard key={review.id} hover={false}>
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="size-5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="font-[family-name:var(--font-cormorant)] text-xl font-light leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                  {review.project && (
                    <span className="text-xs uppercase tracking-wider text-gold">{review.project}</span>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
          <div className="mt-16 rounded-2xl border border-gold/20 bg-muted/30 p-12 text-center">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light">
              Video Testimonials Coming Soon
            </h3>
            <p className="mt-2 text-muted-foreground">
              Watch our clients share their experience in their own words.
            </p>
          </div>
          <div className="mt-12 text-center">
            <GoldButton href="/contact?intent=estimate">Become Our Next Success Story</GoldButton>
          </div>
        </div>
      </section>
    </main>
  );
}
