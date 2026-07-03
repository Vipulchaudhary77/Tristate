"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function BeforeAfterSlider({
  before,
  after,
  className,
}: {
  before: string;
  after: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl",
        className
      )}
      onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      data-animate="fade-up"
    >
      <Image src={after} alt="After" fill className="object-cover" sizes="(max-width: 768px) 100vw, 80vw" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={before} alt="Before" fill className="object-cover" sizes="(max-width: 768px) 100vw, 80vw" />
      </div>
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-gold shadow-[0_0_20px_rgba(212,175,55,0.6)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-black/80">
          <span className="text-xs text-gold">⟷</span>
        </div>
      </div>
      <span className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-wider text-white">
        Before
      </span>
      <span className="absolute top-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-wider text-white">
        After
      </span>
    </div>
  );
}
