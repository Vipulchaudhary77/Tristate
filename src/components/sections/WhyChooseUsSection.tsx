import { whyChooseUs } from "@/lib/data/navigation";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { Hammer, Gem, HeartHandshake, ShieldCheck, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Hammer,
  Gem,
  HeartHandshake,
  ShieldCheck,
};

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-black text-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Why Choose Us"
          title="The Tri-State Difference"
          subtitle="What sets us apart in stone fabrication and installation across NJ, NY, and PA."
          className="[&_h2]:text-white [&_p]:text-white/60"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] ?? Gem;
            return (
              <GlassCard key={item.title} className="border-white/10 bg-white/5 text-white">
                <Icon className="mb-4 size-8 text-gold" />
                <h3 className="font-heading text-xl font-light">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{item.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
