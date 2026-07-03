"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  disabled?: boolean;
};

export function TiltCard({
  children,
  className,
  maxTilt = 8,
  scale = 1.02,
  disabled = false,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
      );
    },
    [disabled, maxTilt, scale]
  );

  const handleLeave = useCallback(() => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setIsHovering(false);
  }, []);

  const handleEnter = useCallback(() => {
    if (!disabled) setIsHovering(true);
  }, [disabled]);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
      className={cn("relative transition-transform duration-300 ease-out", className)}
      style={{ transform: transform || undefined, transformStyle: "preserve-3d" }}
    >
      {isHovering && !disabled && (
        <div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] tilt-card-shine" />
      )}
      {children}
    </div>
  );
}
