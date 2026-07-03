import Image from "next/image";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServiceSlugs } from "@/lib/data/services";
import { createMetadata } from "@/lib/seo/metadata";
import { GoldButton } from "@/components/shared/GoldButton";
import { LuxuryBadge } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({ title: service.name, description: service.description, path: `/services/${slug}` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image src={service.image} alt={service.name} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-12">
          <LuxuryBadge className="mb-4 text-gold">Services</LuxuryBadge>
          <h1 className="font-heading text-5xl font-light text-white md:text-7xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">{service.tagline}</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            {service.description}
          </p>
          <div className="mb-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.features.map((feature) => (
              <GlassCard key={feature} hover={false} className="text-center">
                <p className="text-sm font-medium">{feature}</p>
              </GlassCard>
            ))}
          </div>
          <h2 className="mb-8 text-center font-heading text-3xl font-light">
            Our Process
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {service.process.map((step, i) => (
              <GlassCard key={step.title}>
                <span className="text-sm text-gold">Step {i + 1}</span>
                <h3 className="mt-2 font-heading text-xl">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </GlassCard>
            ))}
          </div>
          <div className="mt-16 text-center">
            <GoldButton href="/contact?intent=estimate">Request Free Estimate</GoldButton>
          </div>
        </div>
      </section>
    </main>
  );
}
