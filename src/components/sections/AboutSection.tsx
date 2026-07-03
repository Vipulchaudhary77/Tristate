import Image from "next/image";
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
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80"
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
              title="We Are Tri-State Stone"
              subtitle="Driven by Success — proudly serving New Jersey, New York, and Pennsylvania for over 15 years."
              align="left"
            />
            <Reveal animation="fade-up">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Tri-State Stone Granite & Cabinets Inc. invests in the most up-to-date machinery,
                including laser-guided cutting for all types of stone. With competitive pricing and a
                highly qualified team, we deliver fine craftsmanship and quick turnaround on every project.
              </p>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Homeowners, architects, and contractors trust us for stone fabrication, installation,
                and ongoing stone service. Call us at (862) 588-1920 for a free estimate today.
              </p>
              <GoldButton href="/about/company">Discover Our Story</GoldButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
