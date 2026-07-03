"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";
import {
  catalogStones,
  catalogMaterials,
  catalogColors,
  catalogFinishes,
  catalogApplications,
  filterCatalogStones,
  type CatalogStone,
  type Material,
  type StoneColor,
  type Finish,
  type Application,
} from "@/lib/data/catalog";
import { TiltCard } from "@/components/shared/TiltCard";
import { GoldButton } from "@/components/shared/GoldButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type FilterKey = "material" | "color" | "finish" | "application";

function parseList<T extends string>(value: string | null): T[] {
  if (!value) return [];
  return value.split(",").filter(Boolean) as T[];
}

function FilterGroup<T extends string>({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: { value: T; label: string }[];
  selected: T[];
  onToggle: (value: T) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
        {selected.length > 0 && (
          <span className="ml-2 rounded-full bg-gold/15 px-2 py-0.5 text-gold">
            {selected.length}
          </span>
        )}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onToggle(opt.value)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs uppercase tracking-wider transition-all",
              selected.includes(opt.value)
                ? "gold-gradient-bg border-transparent text-black"
                : "border-gold/20 hover:border-gold/50"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function FilterPanel({
  filters,
  onToggle,
  onClear,
}: {
  filters: {
    material: Material[];
    color: StoneColor[];
    finish: Finish[];
    application: Application[];
  };
  onToggle: (key: FilterKey, value: string) => void;
  onClear: () => void;
}) {
  const activeCount =
    filters.material.length +
    filters.color.length +
    filters.finish.length +
    filters.application.length;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <p className="font-heading text-xl">Filters</p>
        {activeCount > 0 && (
          <button onClick={onClear} className="text-xs uppercase tracking-wider text-gold hover:underline">
            Clear all ({activeCount})
          </button>
        )}
      </div>
      <FilterGroup
        label="Material"
        options={catalogMaterials}
        selected={filters.material}
        onToggle={(v) => onToggle("material", v)}
      />
      <FilterGroup
        label="Color"
        options={catalogColors}
        selected={filters.color}
        onToggle={(v) => onToggle("color", v)}
      />
      <FilterGroup
        label="Finish"
        options={catalogFinishes}
        selected={filters.finish}
        onToggle={(v) => onToggle("finish", v)}
      />
      <FilterGroup
        label="Application"
        options={catalogApplications}
        selected={filters.application}
        onToggle={(v) => onToggle("application", v)}
      />
    </div>
  );
}

function StoneDetailModal({
  stone,
  open,
  onClose,
}: {
  stone: CatalogStone | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!stone) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl gap-0 overflow-hidden p-0">
        <div className="relative aspect-[4/3]">
          <Image src={stone.image} alt={stone.name} fill className="object-cover" sizes="672px" />
        </div>
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="font-heading text-3xl font-light">{stone.name}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Material</p>
              <p className="mt-1 capitalize">{stone.material}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Color</p>
              <p className="mt-1 capitalize">{stone.color}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Finish</p>
              <p className="mt-1 capitalize">{stone.finish}</p>
            </div>
            {stone.brand && (
              <div>
                <p className="text-muted-foreground">Brand</p>
                <p className="mt-1">{stone.brand}</p>
              </div>
            )}
            {stone.origin && (
              <div>
                <p className="text-muted-foreground">Origin</p>
                <p className="mt-1">{stone.origin}</p>
              </div>
            )}
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">Applications</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {stone.application.map((app) => (
                <span key={app} className="rounded-full border border-gold/20 px-3 py-1 text-xs capitalize">
                  {app}
                </span>
              ))}
            </div>
          </div>
          <GoldButton href="/contact?intent=sample" className="mt-6 w-full">
            Request Sample
          </GoldButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function StoneCatalog() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedStone, setSelectedStone] = useState<CatalogStone | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  const filters = useMemo(
    () => ({
      material: parseList<Material>(searchParams.get("material")),
      color: parseList<StoneColor>(searchParams.get("color")),
      finish: parseList<Finish>(searchParams.get("finish")),
      application: parseList<Application>(searchParams.get("application")),
    }),
    [searchParams]
  );

  const filtered = useMemo(() => filterCatalogStones(catalogStones, filters), [filters]);

  const updateFilters = useCallback(
    (key: FilterKey, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const current = parseList(params.get(key));
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];

      if (next.length) params.set(key, next.join(","));
      else params.delete(key);

      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const clearFilters = useCallback(() => {
    router.replace("/catalog", { scroll: false });
  }, [router]);

  const activeCount =
    filters.material.length +
    filters.color.length +
    filters.finish.length +
    filters.application.length;

  return (
    <>
      <div className="flex flex-col gap-10 lg:flex-row">
        <aside className="hidden w-72 shrink-0 lg:block">
          <div className="sticky top-32 glass-card p-6">
            <FilterPanel filters={filters} onToggle={updateFilters} onClear={clearFilters} />
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">{filtered.length}</span> of{" "}
              {catalogStones.length} stones
            </p>
            <Sheet>
              <SheetTrigger className="flex items-center gap-2 rounded-full border border-gold/20 px-4 py-2 text-sm uppercase tracking-wider lg:hidden">
                <Filter className="size-4" />
                Filters
                {activeCount > 0 && (
                  <span className="rounded-full bg-gold/15 px-2 py-0.5 text-xs text-gold">
                    {activeCount}
                  </span>
                )}
              </SheetTrigger>
              <SheetContent side="left" className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="font-heading text-2xl font-light">Filter Stones</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterPanel filters={filters} onToggle={updateFilters} onClear={clearFilters} />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((stone) => (
                <motion.div
                  key={stone.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <TiltCard disabled={isTouch} className="h-full">
                    <button
                      onClick={() => setSelectedStone(stone)}
                      onTouchStart={() => setIsTouch(true)}
                      className="group w-full overflow-hidden rounded-2xl border border-gold/15 bg-card text-left transition-colors hover:border-gold/40"
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={stone.image}
                          alt={stone.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading text-xl font-light">{stone.name}</h3>
                        <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                          {stone.material} · {stone.finish}
                        </p>
                      </div>
                    </button>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-heading text-2xl text-muted-foreground">No stones match your filters</p>
              <button onClick={clearFilters} className="mt-4 text-sm text-gold hover:underline">
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      <StoneDetailModal
        stone={selectedStone}
        open={!!selectedStone}
        onClose={() => setSelectedStone(null)}
      />
    </>
  );
}
