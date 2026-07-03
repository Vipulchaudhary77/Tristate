import { beforeAfter } from "@/lib/data/gallery";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";

export function BeforeAfterSection() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Transformations"
          title={beforeAfter.title}
          subtitle={beforeAfter.description}
        />
        <BeforeAfterSlider before={beforeAfter.before} after={beforeAfter.after} />
      </div>
    </section>
  );
}
