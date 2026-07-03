import { cn } from "@/lib/utils";

export function LuxuryBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold",
        className
      )}
      style={{ borderColor: "var(--border-gold)" }}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
      data-animate="fade-up"
    >
      {badge && <LuxuryBadge className="mb-6">{badge}</LuxuryBadge>}
      <h2 className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight font-light tracking-tight md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
