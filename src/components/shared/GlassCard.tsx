import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass-card luxury-shadow rounded-2xl p-6 md:p-8",
        hover && "gold-glow-hover transition-all duration-500 hover:-translate-y-1",
        className
      )}
      data-animate="fade-up"
    >
      {children}
    </div>
  );
}
