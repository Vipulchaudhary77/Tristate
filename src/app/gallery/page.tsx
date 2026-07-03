import { Suspense } from "react";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = createMetadata({
  title: "Gallery",
  description: "Browse our portfolio of luxury stone installations.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="py-32 text-center text-muted-foreground">Loading gallery...</div>}>
      <GalleryClient />
    </Suspense>
  );
}
