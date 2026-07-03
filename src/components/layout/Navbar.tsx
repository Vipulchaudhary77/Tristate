"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Menu,
  Moon,
  Sun,
  ChevronDown,
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
  type LucideIcon,
} from "lucide-react";
import { navigation } from "@/lib/data/navigation";
import { GoldButton } from "@/components/shared/GoldButton";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0.5 right-0 left-0 z-50 transition-all duration-500",
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src="/brand/logo.png"
            alt="Tri-State Stone"
            width={140}
            height={50}
            className="h-10 w-auto object-contain md:h-12"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold">
                  {item.label}
                  <ChevronDown className="size-3" />
                </button>
                {activeMenu === item.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="glass-card grid min-w-[280px] gap-1 rounded-xl p-3 shadow-xl">
                      {item.children.map((child) => {
                        const Icon = child.icon ? iconMap[child.icon] : null;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-gold/10 hover:text-gold"
                          >
                            {Icon && <Icon className="size-4 text-gold" />}
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 transition-colors hover:text-gold"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
          )}
          <GoldButton href="/contact?intent=estimate" className="hidden px-5 py-2.5 text-xs md:inline-flex">
            Request Estimate
          </GoldButton>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="rounded-lg p-2 xl:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
              <SheetHeader>
                <SheetTitle className="font-[family-name:var(--font-cormorant)] text-2xl">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-6">
                {navigation.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="font-[family-name:var(--font-cormorant)] text-xl font-light"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="mt-2 ml-4 flex flex-col gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-sm text-muted-foreground hover:text-gold"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <GoldButton href="/contact?intent=estimate" className="mt-4 w-full">
                  Request Free Estimate
                </GoldButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
