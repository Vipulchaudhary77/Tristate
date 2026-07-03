import { testimonials } from "@/lib/data/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { Star } from "lucide-react";

export function ReviewsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Google Reviews"
          title="Rated 5 Stars by Our Clients"
          subtitle="See why homeowners, architects, and contractors choose Tri-State Stone across NJ, NY, and PA."
        />
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-6 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-lg font-medium">5.0</span>
          <span className="text-muted-foreground">based on 200+ reviews</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((review) => (
            <GlassCard key={review.id} hover={false}>
              <div className="mb-3 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{review.text}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-gold/10 text-sm font-medium text-gold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
