"use client";

import Link from "next/link";
import Image from "next/image";
import { navigation, siteConfig } from "@/lib/data/navigation";
import { Input } from "@/components/ui/input";
import { GoldButton } from "@/components/shared/GoldButton";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const quickLinks = navigation.filter((n) => !n.children).slice(0, 6);

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto h-px max-w-7xl gold-gradient-bg" />
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/brand/logo.png"
              alt="Tri-State Stone"
              width={200}
              height={72}
              className="mb-6 h-14 w-auto object-contain"
            />
            <p className="text-sm leading-relaxed text-white/60">
              Stone fabrication and installation serving New Jersey, New York, and Pennsylvania.
              Driven by success — 15+ years of craftsmanship you can trust.
            </p>
            <div className="mt-6 flex gap-4">
              <a href={siteConfig.social.instagram} className="text-white/60 transition-colors hover:text-gold">
                <Instagram className="size-5" />
              </a>
              <a href={siteConfig.social.facebook} className="text-white/60 transition-colors hover:text-gold">
                <Facebook className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/gallery" className="text-sm text-white/60 transition-colors hover:text-gold">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-gold">Contact</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>
                  <span className="text-white/80">{siteConfig.address.label}</span>
                  <br />
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>
                  <span className="text-white/80">{siteConfig.fabricationShop.label}</span>
                  <br />
                  {siteConfig.fabricationShop.street}
                  <br />
                  {siteConfig.fabricationShop.city}, {siteConfig.fabricationShop.state}{" "}
                  {siteConfig.fabricationShop.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-gold" />
                <span>
                  Office:{" "}
                  <a href={`tel:${siteConfig.officePhone.replace(/\D/g, "")}`} className="hover:text-gold">
                    {siteConfig.officePhone}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-gold" />
                <span>
                  Cell:{" "}
                  <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-gold">
                    {siteConfig.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-gold" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-gold">Newsletter</h3>
            <p className="mb-4 text-sm text-white/60">
              Subscribe for design inspiration and exclusive offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email"
                className="border-white/20 bg-white/5 text-white placeholder:text-white/40"
              />
              <GoldButton type="submit" className="shrink-0 px-4 py-2 text-xs">
                Join
              </GoldButton>
            </form>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/40 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/resources/faqs" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/resources/faqs" className="hover:text-gold">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
