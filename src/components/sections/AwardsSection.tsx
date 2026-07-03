import { awards } from "@/lib/data/navigation";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Award } from "lucide-react";

export function AwardsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Recognition"
          title="Awards & Certifications"
          subtitle="Industry recognition for excellence in craftsmanship and service."
        />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {awards.map((award) => (
            <div
              key={award}
              className="flex flex-col items-center rounded-2xl border border-gold/20 bg-card p-6 text-center transition-all hover:border-gold/50 hover:shadow-lg"
              data-animate="fade-up"
            >
              <Award className="mb-3 size-8 text-gold" />
              <p className="text-xs font-medium uppercase tracking-wider">{award}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
