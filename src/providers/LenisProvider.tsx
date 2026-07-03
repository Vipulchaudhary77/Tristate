"use client";

import { useEffect, useRef } from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let destroyed = false;

    Promise.all([import("lenis"), import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([LenisMod, gsapMod, stMod]) => {
        if (destroyed) return;

        const Lenis = LenisMod.default;
        const gsap = gsapMod.gsap;
        const ScrollTrigger = stMod.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        lenisRef.current = lenis;
      }
    );

    return () => {
      destroyed = true;
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
