"use client";

import { useEffect } from "react";

export function ScrollAnimationsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx: { revert: () => void } | null = null;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapMod, stMod]) => {
      const gsap = gsapMod.gsap;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        document.querySelectorAll("[data-animate]").forEach((el) => {
          if (el.closest("[data-animate-handled]")) return;
          if (el.hasAttribute("data-stagger-child")) return;

          const animateType = el.getAttribute("data-animate");

          if (animateType === "stagger-parent") {
            const children = el.querySelectorAll("[data-stagger-child]");
            gsap.from(children, {
              opacity: 0,
              y: 40,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            });
            return;
          }

          if (animateType === "text-reveal") {
            gsap.from(el, {
              clipPath: "inset(0 100% 0 0)",
              opacity: 0,
              duration: 1.2,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            });
            return;
          }

          if (animateType === "scale-in") {
            gsap.from(el, {
              opacity: 0,
              scale: 0.95,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            });
            return;
          }

          gsap.from(el, {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        });

        document.querySelectorAll("[data-parallax]").forEach((el) => {
          gsap.to(el, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      });
    });

    return () => {
      ctx?.revert();
    };
  }, []);

  return <>{children}</>;
}
