"use client";



import { motion } from "framer-motion";

import { siteConfig, brandPartners } from "@/lib/data/navigation";

import { GoldButton } from "@/components/shared/GoldButton";

import { AnimatedCounter } from "@/components/animations/Reveal";

import { VideoHero } from "@/components/shared/VideoHero";



export function HeroSection() {

  return (

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      <VideoHero />



      {/* Gold accent lines */}

      <motion.div

        className="absolute top-1/4 left-0 z-10 h-px w-32 gold-gradient-bg"

        initial={{ scaleX: 0, opacity: 0 }}

        animate={{ scaleX: 1, opacity: 1 }}

        transition={{ duration: 1.2, delay: 0.8 }}

      />

      <motion.div

        className="absolute right-0 bottom-1/3 z-10 h-px w-48 gold-gradient-bg"

        initial={{ scaleX: 0, opacity: 0 }}

        animate={{ scaleX: 1, opacity: 1 }}

        transition={{ duration: 1.2, delay: 1 }}

      />



      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center lg:px-12">

        <motion.p

          className="mb-6 text-sm uppercase tracking-[0.3em] text-gold"

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, delay: 0.3 }}

        >

          Proudly Serving {siteConfig.serviceAreas}

        </motion.p>

        <motion.h1

          className="mx-auto max-w-5xl font-heading text-5xl leading-[1.1] font-light tracking-tight text-white md:text-7xl lg:text-8xl"

          initial={{ opacity: 0, y: 40 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1, delay: 0.5 }}

        >

          We Are Tri-State Stone

        </motion.h1>

        <motion.p

          className="mx-auto mt-4 max-w-2xl text-base uppercase tracking-[0.25em] text-gold/90 md:text-lg"

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, delay: 0.6 }}

        >

          {siteConfig.tagline}

        </motion.p>

        <motion.p

          className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl"

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, delay: 0.7 }}

        >

          Stone Fabrication & Installation — Premium Granite, Marble, Quartz & Custom Stone

        </motion.p>

        <motion.div

          className="mt-10 flex flex-wrap items-center justify-center gap-4"

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, delay: 0.9 }}

        >

          <GoldButton href="/contact?intent=estimate">Request Free Estimate</GoldButton>

          <GoldButton href="/catalog" variant="outline" className="border-white/30 text-white hover:border-gold hover:text-gold">

            Explore Catalog

          </GoldButton>

        </motion.div>



        {/* Stats */}

        <motion.div

          className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-12 md:gap-16"

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ duration: 1, delay: 1.2 }}

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



        {/* Brand logos strip */}

        <motion.div

          className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60"

          initial={{ opacity: 0 }}

          animate={{ opacity: 0.6 }}

          transition={{ duration: 1, delay: 1.4 }}

        >

          {brandPartners.slice(0, 6).map((brand) => (

            <span

              key={brand}

              className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.2em] text-white/80"

            >

              {brand}

            </span>

          ))}

        </motion.div>

      </div>

    </section>

  );

}

