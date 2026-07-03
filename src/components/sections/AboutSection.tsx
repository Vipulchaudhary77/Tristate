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
            <div className="relative px-2 pt-6 pb-10 sm:px-0 sm:pb-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-black/10">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90"
                  alt="Luxury marble kitchen countertop installation by Tri-State Stone"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gold/25 ring-inset" />
              </div>
              <div className="absolute -right-4 -bottom-6 hidden w-44 overflow-hidden rounded-xl border border-gold/20 shadow-xl sm:block md:-right-6 md:w-52 lg:-right-8">
                <div className="relative aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=90"
                    alt="Precision stone fabrication machinery"
                    fill
                    className="object-cover"
                    sizes="208px"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 rounded-xl border border-gold/20 bg-background/95 px-5 py-4 shadow-lg backdrop-blur-sm">
                <p className="font-heading text-3xl font-light text-gold">15+</p>
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  Years of Excellence
                </p>
              </div>
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
