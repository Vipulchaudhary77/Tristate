import { GoldButton } from "@/components/shared/GoldButton";
import { siteConfig } from "@/lib/data/navigation";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 gold-gradient-bg opacity-90" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1920&q=80')] bg-cover bg-center mix-blend-multiply" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2
          className="font-heading text-4xl font-light text-black md:text-6xl"
          data-animate="fade-up"
        >
          Ready to Transform Your Space?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-black/70" data-animate="fade-up">
          Call us at {siteConfig.phone} for a free estimate. Stone fabrication and installation
          serving New Jersey, New York, and Pennsylvania.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4" data-animate="fade-up">
          <GoldButton href="/contact?intent=estimate" className="bg-black text-white hover:bg-black/90">
            Request Free Estimate
          </GoldButton>
          <GoldButton href="/contact?intent=showroom" variant="outline" className="border-black/30 text-black">
            Book Showroom Visit
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
