"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Menu,
  ChevronDown,
  ArrowRight,
  Building2,
  BookOpen,
  Cog,
  Award,
  Gem,
  Sparkles,
  Diamond,
  Layers,
  Square,
  Shield,
  Mountain,
  ChefHat,
  Bath,
  Flame,
  Trees,
  Building,
  Hammer,
  Wrench,
  Home,
  HelpCircle,
  Newspaper,
  Sun,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { navigation, siteConfig, type NavItem } from "@/lib/data/navigation";
import { GoldButton } from "@/components/shared/GoldButton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  BookOpen,
  Cog,
  Award,
  Gem,
  Sparkles,
  Diamond,
  Layers,
  Square,
  Shield,
  Mountain,
  ChefHat,
  Bath,
  Flame,
  Trees,
  Building,
  Hammer,
  Wrench,
  Home,
  HelpCircle,
  Newspaper,
  Sun,
};

function NavIcon({ name }: { name?: string }) {
  const Icon = name ? iconMap[name] : null;
  if (!Icon) return null;
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 transition-colors group-hover:bg-gold/20">
      <Icon className="size-4 text-gold" />
    </span>
  );
}

function MegaMenuPanel({ item }: { item: NavItem }) {
  if (!item.children) return null;

  const childCount = item.children.length;
  const gridCols =
    childCount >= 7 ? "sm:grid-cols-2 lg:grid-cols-3" : childCount >= 4 ? "sm:grid-cols-2" : "grid-cols-1";

  return (
    <div className="mega-menu-panel animate-mega-menu-in absolute top-full right-0 left-0">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <div className="border-border hidden border-r pr-8 lg:block">
            <p className="font-heading text-2xl font-light tracking-tight">
              {item.label}
            </p>
            {item.description && (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            )}
            <Link
              href={item.href}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold/80"
            >
              View All {item.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            {item.label === "Stone" && (
              <Link
                href="/catalog"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-xs font-medium uppercase tracking-wider text-gold transition-colors hover:bg-gold/10"
              >
                Browse Full Catalog
                <ArrowRight className="size-3.5" />
              </Link>
            )}
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                Need Help?
              </p>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="mt-2 flex items-center gap-2 text-sm transition-colors hover:text-gold"
              >
                <Phone className="size-3.5 text-gold" />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Items grid */}
          <div className={cn("grid gap-2", gridCols)}>
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-gold/5"
              >
                {item.showThumbnail && child.image ? (
                  <span className="relative size-14 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={child.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="56px"
                    />
                  </span>
                ) : (
                  <NavIcon name={child.icon} />
                )}
                <div className="min-w-0 pt-0.5">
                  <p className="text-sm font-medium transition-colors group-hover:text-gold">
                    {child.label}
                  </p>
                  {child.description && (
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {child.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const activeItem = navigation.find((item) => item.label === activeMenu && item.children);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 glass-nav transition-all duration-500",
        scrolled || activeMenu ? "shadow-sm" : ""
      )}
      onMouseLeave={closeMenu}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-12">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src="/brand/logo.png"
            alt="Tri-State Stone"
            width={180}
            height={64}
            className="h-10 w-auto object-contain md:h-12"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center xl:flex">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  cancelClose();
                  openMenu(item.label);
                }}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2.5 text-[13px] font-medium tracking-wide uppercase transition-colors",
                    activeMenu === item.label
                      ? "text-gold"
                      : "text-foreground/80 hover:text-gold"
                  )}
                  aria-expanded={activeMenu === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-3 transition-transform duration-200",
                      activeMenu === item.label && "rotate-180"
                    )}
                  />
                </button>
                {activeMenu === item.label && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-gold" />
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2.5 text-[13px] font-medium tracking-wide text-foreground/80 uppercase transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <GoldButton
            href="/contact?intent=estimate"
            className="hidden px-5 py-2.5 text-xs md:inline-flex"
          >
            Request Estimate
          </GoldButton>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="rounded-lg p-2 xl:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-full flex-col gap-0 overflow-hidden p-0 sm:max-w-[22rem]"
            >
              <div className="flex flex-1 flex-col overflow-y-auto overscroll-contain px-6 pt-16 pb-10">
                <SheetHeader className="space-y-1 border-b border-border p-0 pb-6">
                  <SheetTitle className="font-heading text-2xl font-light">
                    Navigation
                  </SheetTitle>
                  <p className="text-sm text-muted-foreground">
                    Explore our stone services and resources
                  </p>
                </SheetHeader>

                <nav className="mt-6 flex flex-col" aria-label="Mobile navigation">
                  {navigation.map((item) =>
                    item.children ? (
                      <Accordion
                        key={item.label}
                        type="single"
                        collapsible
                        className="border-b border-border"
                      >
                        <AccordionItem value={item.label} className="border-none">
                          <AccordionTrigger className="py-5 font-heading text-lg font-light hover:no-underline hover:text-gold [&[data-state=open]]:pb-3">
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent className="pb-5">
                            {item.description && (
                              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                                {item.description}
                              </p>
                            )}
                            <div className="flex flex-col gap-1.5">
                              {item.children.map((child) => {
                                const Icon = child.icon ? iconMap[child.icon] : null;
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="flex items-center gap-3 rounded-xl px-3 py-3.5 text-sm transition-colors hover:bg-gold/5 hover:text-gold"
                                  >
                                    {Icon && (
                                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                                        <Icon className="size-4 text-gold" />
                                      </span>
                                    )}
                                    <span className="leading-snug">{child.label}</span>
                                  </Link>
                                );
                              })}
                            </div>
                            <Link
                              href={item.href}
                              className="mt-5 inline-flex items-center gap-2 py-1 text-sm font-medium text-gold"
                            >
                              View All {item.label}
                              <ArrowRight className="size-3.5" />
                            </Link>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="border-b border-border py-5 font-heading text-lg font-light transition-colors hover:text-gold"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </nav>

                <div className="mt-10 space-y-5 border-t border-border pt-8">
                  <GoldButton href="/contact?intent=estimate" className="w-full py-3.5">
                    Request Free Estimate
                  </GoldButton>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                    className="flex items-center justify-center gap-2 py-2 text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    <Phone className="size-4 text-gold" />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Mega menu panel — full width below nav */}
      {activeItem && (
        <div onMouseEnter={cancelClose} onMouseLeave={closeMenu}>
          <MegaMenuPanel item={activeItem} />
        </div>
      )}
    </header>
  );
}
