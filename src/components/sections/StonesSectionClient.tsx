"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { TiltCard } from "@/components/shared/TiltCard";
import type { Stone } from "@/lib/data/stones";

export function StonesSectionClient({ stones }: { stones: Stone[] }) {
  const [isTouch, setIsTouch] = useState(false);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stones.map((stone) => (
        <TiltCard key={stone.slug} disabled={isTouch} className="h-full">
          <Link
            href={`/stone/${stone.slug}`}
            onTouchStart={() => setIsTouch(true)}
            className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
            data-animate="fade-up"
          >
            <Image
              src={stone.image}
              alt={stone.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-heading text-2xl text-white">{stone.name}</h3>
              <p className="mt-1 text-sm text-white/70">{stone.tagline}</p>
            </div>
          </Link>
        </TiltCard>
      ))}
    </div>
  );
}
