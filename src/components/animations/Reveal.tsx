"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  animation = "fade-up",
}: {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const fromVars: gsap.TweenVars = { opacity: 0, duration: 1, ease: "power3.out" };
        if (animation === "fade-up") fromVars.y = 60;
        if (animation === "slide-left") fromVars.x = -60;
        if (animation === "slide-right") fromVars.x = 60;

        gsap.from(el, {
          ...fromVars,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    });
  }, [animation]);

  return (
    <div ref={ref} className={cn("opacity-0", className)} data-animate={animation}>
      {children}
    </div>
  );
}

export function AnimatedCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.textContent = `${value}${suffix}`;
      return;
    }

    import("gsap").then(({ gsap }) => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = `${Math.round(obj.val)}${suffix}`;
        },
      });
    });
  }, [value, suffix]);

  return (
    <div className="text-center" data-animate="fade-up">
      <span
        ref={ref}
        className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-gold md:text-6xl"
      >
        0{suffix}
      </span>
      <p className="mt-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">{label}</p>
    </div>
  );
}

export function ParallaxImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(el.querySelector("img"), {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });
  }, []);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-[120%] w-full object-cover" />
    </div>
  );
}
