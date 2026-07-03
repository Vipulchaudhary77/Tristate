import { brandPartners } from "@/lib/data/navigation";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function BrandsSection() {
  return (
    <section className="section-padding overflow-hidden bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Partners"
          title="Brands We Work With"
          subtitle="Authorized fabricator for the world's leading stone and surface manufacturers."
        />
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-16">
            {[...brandPartners, ...brandPartners].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="shrink-0 font-[family-name:var(--font-space-grotesk)] text-lg uppercase tracking-[0.3em] text-muted-foreground/60"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
