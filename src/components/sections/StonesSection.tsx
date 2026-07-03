import { stones } from "@/lib/data/stones";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GoldButton } from "@/components/shared/GoldButton";
import { StonesSectionClient } from "./StonesSectionClient";

export function StonesSection() {
  return (
    <section className="section-padding bg-background" data-animate="scale-in">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Stone Collections"
          title="Curated Materials From the World's Finest Quarries"
          subtitle="Explore our extensive collection of premium natural and engineered stone surfaces."
        />
        <StonesSectionClient stones={stones} />
        <div className="mt-12 text-center">
          <GoldButton href="/catalog">Browse Full Catalog</GoldButton>
        </div>
      </div>
    </section>
  );
}
