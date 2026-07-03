import { GoldButton } from "@/components/shared/GoldButton";
import { siteConfig } from "@/lib/data/navigation";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1920&q=80')] bg-cover bg-center"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85"
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0 h-px gold-gradient-bg opacity-60" aria-hidden />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p
          className="text-sm font-medium uppercase tracking-[0.3em] text-gold"
          data-animate="fade-up"
        >
          Get Started
        </p>
        <h2
          className="mt-4 font-heading text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl"
          data-animate="fade-up"
        >
          Ready to Transform Your Space?
        </h2>
        <p
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
          data-animate="fade-up"
        >
          Call us at{" "}
          <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-gold hover:underline">
            {siteConfig.phone}
          </a>{" "}
          for a free estimate. Stone fabrication and installation serving New Jersey, New York, and
          Pennsylvania.
        </p>
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          data-animate="fade-up"
        >
          <GoldButton href="/contact?intent=estimate">Request Free Estimate</GoldButton>
          <GoldButton
            href="/contact?intent=showroom"
            variant="outline"
            className="border-white/40 text-white hover:border-gold hover:text-gold"
          >
            Book Showroom Visit
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
