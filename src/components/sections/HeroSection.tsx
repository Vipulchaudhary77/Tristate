"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig, brandPartners } from "@/lib/data/navigation";
import { GoldButton } from "@/components/shared/GoldButton";
import { AnimatedCounter } from "@/components/animations/Reveal";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/Cabinate.jpg"
        alt="Luxury kitchen with custom cabinets and stone countertops by Tri-State Stone"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/75"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-20 text-center lg:px-12">
        <motion.p
          className="text-sm font-medium uppercase tracking-[0.3em] text-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Proudly Serving {siteConfig.serviceAreas}
        </motion.p>

        <motion.h1
          className="mt-5 font-heading text-4xl leading-[1.15] font-light tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We Are Tri-State Stone
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          Stone fabrication & installation — premium granite, marble, quartz, and custom cabinets
          across New Jersey, New York, and Pennsylvania.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          <GoldButton href="/contact?intent=estimate">Request Free Estimate</GoldButton>
          <GoldButton
            href="/catalog"
            variant="outline"
            className="border-white/40 text-white hover:border-gold hover:text-gold"
          >
            Explore Catalog
          </GoldButton>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-3 gap-6 border-t border-white/15 pt-12 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          {siteConfig.stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              labelClassName="text-white/60"
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          {brandPartners.slice(0, 6).map((brand) => (
            <span
              key={brand}
              className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.2em] text-white/75"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
