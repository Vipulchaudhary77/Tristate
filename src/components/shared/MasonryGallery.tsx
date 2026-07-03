"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export type LightboxImage = {
  src: string;
  alt: string;
  title?: string;
};

export function Lightbox({
  images,
  initialIndex = 0,
  open,
  onOpenChange,
}: {
  images: LightboxImage[];
  initialIndex?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [index, setIndex] = useState(initialIndex);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl border-none bg-black/95 p-0 sm:max-w-5xl">
        <DialogTitle className="sr-only">{images[index]?.alt}</DialogTitle>
        <div className="relative aspect-[16/10] w-full">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative h-full w-full"
          >
            <Image
              src={images[index]?.src ?? ""}
              alt={images[index]?.alt ?? ""}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </motion.div>
        </div>
        {images.length > 1 && (
          <div className="flex justify-center gap-4 pb-4">
            <button
              onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
              className="rounded-full border border-gold/30 px-4 py-2 text-sm text-gold hover:bg-gold/10"
            >
              Previous
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % images.length)}
              className="rounded-full border border-gold/30 px-4 py-2 text-sm text-gold hover:bg-gold/10"
            >
              Next
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function MasonryGallery({
  items,
  className,
}: {
  items: { id: string; title: string; image: string; height?: string }[];
  className?: string;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const heightMap: Record<string, string> = {
    short: "h-48",
    medium: "h-64",
    tall: "h-80",
  };

  return (
    <>
      <div className={cn("masonry-grid", className)}>
        {items.map((item, i) => (
          <button
            key={item.id}
            className="masonry-item group relative w-full overflow-hidden rounded-xl"
            onClick={() => {
              setSelectedIndex(i);
              setLightboxOpen(true);
            }}
            data-animate="fade-up"
          >
            <div
              className={cn(
                "relative w-full overflow-hidden",
                heightMap[item.height ?? "medium"] ?? "h-64"
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-white">
                  {item.title}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
      <Lightbox
        images={items.map((item) => ({ src: item.image, alt: item.title, title: item.title }))}
        initialIndex={selectedIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </>
  );
}
