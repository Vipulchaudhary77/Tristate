"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data/navigation";
import { GoldButton } from "@/components/shared/GoldButton";

export function FloatingActions() {
  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col items-end gap-3">
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
        className="flex size-12 items-center justify-center rounded-full border border-gold/30 bg-black/80 text-gold backdrop-blur-sm transition-transform hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="size-5" />
      </a>
      <GoldButton href="/contact?intent=estimate" className="hidden px-5 py-3 text-xs shadow-xl sm:inline-flex">
        Free Estimate
      </GoldButton>
    </div>
  );
}
