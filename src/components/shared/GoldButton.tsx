"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GoldButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function GoldButton({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: GoldButtonProps) {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-wider transition-all duration-500",
    "font-[family-name:var(--font-space-grotesk)]",
    variant === "primary" && "gold-gradient-bg text-black gold-glow-hover",
    variant === "outline" &&
      "border bg-transparent text-foreground hover:border-gold hover:text-gold",
    variant === "ghost" && "bg-transparent text-foreground hover:text-gold",
    className
  );

  const content = (
    <motion.span
      className="relative z-10 flex items-center gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
