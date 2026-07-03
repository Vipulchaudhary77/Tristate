import { processSteps } from "@/lib/data/navigation";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ProcessSection() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Our Process"
          title="From Vision to Perfection"
          subtitle="A refined five-step process ensuring every detail exceeds your expectations."
        />
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-8 hidden w-px gold-gradient-bg md:block" />
          <div className="space-y-12">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                className="relative flex gap-8 md:gap-16"
                data-animate="fade-up"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-background">
                  <span className="font-[family-name:var(--font-cormorant)] text-2xl text-gold">
                    {step.step}
                  </span>
                </div>
                <div className="pt-3">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
