import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { ChefHat, Bath, Flame, Trees, Building, Hammer } from "lucide-react";

const icons = [ChefHat, Bath, Flame, Trees, Building, Hammer];

export function ServicesSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Our Services"
          title="Premium Stone Solutions"
          subtitle="From concept to installation, we deliver comprehensive stone services for residential and commercial projects."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => {
            const Icon = icons[i] ?? ChefHat;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <GlassCard className="group h-full">
                  <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <Icon className="mb-4 size-6 text-gold" />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.tagline}</p>
                </GlassCard>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
