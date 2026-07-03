import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GoldButton } from "@/components/shared/GoldButton";
import { Reveal } from "@/components/animations/Reveal";

export function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal animation="slide-right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600566753190-17f0baa0a82a?w=800&q=80"
                alt="Stone fabrication workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 rounded-2xl border border-gold/20" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              badge="About Us"
              title="Where Artistry Meets Precision"
              subtitle="For over 15 years, Tri-State Stone has been the tri-state area's premier destination for luxury stone fabrication and installation."
              align="left"
            />
            <Reveal animation="fade-up">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Our master craftsmen combine generations of stone expertise with state-of-the-art Italian
                CNC technology to create surfaces of unparalleled beauty and durability.
              </p>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                From Manhattan penthouses to suburban estates, we deliver white-glove service that
                transforms your vision into timeless stone masterpieces.
              </p>
              <GoldButton href="/about/company">Discover Our Story</GoldButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
