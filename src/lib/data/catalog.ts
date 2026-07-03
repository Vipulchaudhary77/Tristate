export type Material =
  | "granite"
  | "marble"
  | "quartz"
  | "quartzite"
  | "porcelain"
  | "dekton"
  | "onyx"
  | "travertine";

export type StoneColor =
  | "white"
  | "black"
  | "gray"
  | "gold"
  | "blue"
  | "green"
  | "brown"
  | "multicolor";

export type Finish = "polished" | "honed" | "leathered" | "brushed";

export type Application =
  | "kitchen"
  | "bathroom"
  | "flooring"
  | "wall"
  | "outdoor"
  | "commercial";

export type CatalogStone = {
  id: string;
  name: string;
  material: Material;
  color: StoneColor;
  finish: Finish;
  application: Application[];
  image: string;
  brand?: string;
  origin?: string;
};

export const catalogMaterials: { value: Material; label: string }[] = [
  { value: "granite", label: "Granite" },
  { value: "marble", label: "Marble" },
  { value: "quartz", label: "Quartz" },
  { value: "quartzite", label: "Quartzite" },
  { value: "porcelain", label: "Porcelain" },
  { value: "dekton", label: "Dekton" },
  { value: "onyx", label: "Onyx" },
  { value: "travertine", label: "Travertine" },
];

export const catalogColors: { value: StoneColor; label: string }[] = [
  { value: "white", label: "White" },
  { value: "black", label: "Black" },
  { value: "gray", label: "Gray" },
  { value: "gold", label: "Gold" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "brown", label: "Brown" },
  { value: "multicolor", label: "Multicolor" },
];

export const catalogFinishes: { value: Finish; label: string }[] = [
  { value: "polished", label: "Polished" },
  { value: "honed", label: "Honed" },
  { value: "leathered", label: "Leathered" },
  { value: "brushed", label: "Brushed" },
];

export const catalogApplications: { value: Application; label: string }[] = [
  { value: "kitchen", label: "Kitchen" },
  { value: "bathroom", label: "Bathroom" },
  { value: "flooring", label: "Flooring" },
  { value: "wall", label: "Wall" },
  { value: "outdoor", label: "Outdoor" },
  { value: "commercial", label: "Commercial" },
];

export const catalogStones: CatalogStone[] = [
  { id: "calacatta-gold", name: "Calacatta Gold", material: "marble", color: "white", finish: "polished", application: ["kitchen", "bathroom", "wall"], image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", brand: "MSI", origin: "Italy" },
  { id: "statuario", name: "Statuario", material: "marble", color: "white", finish: "polished", application: ["kitchen", "bathroom", "wall"], image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", brand: "Carrara", origin: "Italy" },
  { id: "nero-marquina", name: "Nero Marquina", material: "marble", color: "black", finish: "polished", application: ["wall", "commercial", "bathroom"], image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80", origin: "Spain" },
  { id: "emperador-dark", name: "Emperador Dark", material: "marble", color: "brown", finish: "polished", application: ["flooring", "wall", "bathroom"], image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80", origin: "Spain" },
  { id: "blue-pearl", name: "Blue Pearl", material: "granite", color: "blue", finish: "polished", application: ["kitchen", "bathroom"], image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&q=80", origin: "Norway" },
  { id: "titanium-granite", name: "Titanium", material: "granite", color: "gray", finish: "polished", application: ["kitchen", "outdoor", "commercial"], image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80", origin: "Brazil" },
  { id: "absolute-black", name: "Absolute Black", material: "granite", color: "black", finish: "polished", application: ["kitchen", "commercial", "flooring"], image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", origin: "India" },
  { id: "kashmir-white", name: "Kashmir White", material: "granite", color: "white", finish: "polished", application: ["kitchen", "bathroom"], image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80", origin: "India" },
  { id: "taj-mahal", name: "Taj Mahal", material: "quartzite", color: "gold", finish: "polished", application: ["kitchen", "bathroom", "wall"], image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80", origin: "Brazil" },
  { id: "white-macubas", name: "White Macaubas", material: "quartzite", color: "white", finish: "polished", application: ["kitchen", "wall"], image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", origin: "Brazil" },
  { id: "mont-blanc", name: "Mont Blanc", material: "quartzite", color: "gray", finish: "honed", application: ["kitchen", "bathroom"], image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", origin: "Brazil" },
  { id: "empira-white", name: "Empira White", material: "quartz", color: "white", finish: "polished", application: ["kitchen", "bathroom", "commercial"], image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", brand: "Caesarstone" },
  { id: "calacatta-nuvo", name: "Calacatta Nuvo", material: "quartz", color: "white", finish: "polished", application: ["kitchen", "bathroom"], image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80", brand: "Caesarstone" },
  { id: "eternal-statuario", name: "Eternal Statuario", material: "quartz", color: "white", finish: "polished", application: ["kitchen", "wall"], image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", brand: "Silestone" },
  { id: "pietra-grey", name: "Pietra Grey", material: "quartz", color: "gray", finish: "honed", application: ["kitchen", "commercial"], image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", brand: "Caesarstone" },
  { id: "dekton-trilium", name: "Dekton Trilium", material: "dekton", color: "gray", finish: "brushed", application: ["outdoor", "kitchen", "commercial"], image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80", brand: "Cosentino" },
  { id: "dekton-zenith", name: "Dekton Zenith", material: "dekton", color: "white", finish: "polished", application: ["kitchen", "bathroom", "outdoor"], image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80", brand: "Cosentino" },
  { id: "dekton-khalo", name: "Dekton Khalo", material: "dekton", color: "black", finish: "polished", application: ["kitchen", "commercial"], image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", brand: "Cosentino" },
  { id: "neolith-iron-copper", name: "Iron Copper", material: "porcelain", color: "multicolor", finish: "polished", application: ["wall", "commercial", "kitchen"], image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80", brand: "Neolith" },
  { id: "neolith-etruscan", name: "Etruscan", material: "porcelain", color: "brown", finish: "honed", application: ["flooring", "wall", "outdoor"], image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", brand: "Neolith" },
  { id: "white-onyx", name: "White Onyx", material: "onyx", color: "white", finish: "polished", application: ["bathroom", "wall", "commercial"], image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80", origin: "Iran" },
  { id: "honey-onyx", name: "Honey Onyx", material: "onyx", color: "gold", finish: "polished", application: ["wall", "bathroom"], image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80", origin: "Pakistan" },
  { id: "green-onyx", name: "Green Onyx", material: "onyx", color: "green", finish: "polished", application: ["wall", "bathroom"], image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", origin: "Pakistan" },
  { id: "silver-travertine", name: "Silver Travertine", material: "travertine", color: "gray", finish: "honed", application: ["flooring", "outdoor", "wall"], image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", origin: "Turkey" },
  { id: "noce-travertine", name: "Noce Travertine", material: "travertine", color: "brown", finish: "brushed", application: ["flooring", "outdoor"], image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80", origin: "Turkey" },
  { id: "classic-travertine", name: "Classic Travertine", material: "travertine", color: "gold", finish: "honed", application: ["flooring", "wall", "outdoor"], image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&q=80", origin: "Italy" },
  { id: "leathered-granite", name: "Leathered Granite", material: "granite", color: "multicolor", finish: "leathered", application: ["kitchen", "outdoor"], image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", origin: "Brazil" },
  { id: "honed-marble", name: "Honed Carrara", material: "marble", color: "gray", finish: "honed", application: ["bathroom", "flooring", "wall"], image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", origin: "Italy" },
];

export function filterCatalogStones(
  stones: CatalogStone[],
  filters: {
    material?: Material[];
    color?: StoneColor[];
    finish?: Finish[];
    application?: Application[];
  }
): CatalogStone[] {
  return stones.filter((stone) => {
    if (filters.material?.length && !filters.material.includes(stone.material)) return false;
    if (filters.color?.length && !filters.color.includes(stone.color)) return false;
    if (filters.finish?.length && !filters.finish.includes(stone.finish)) return false;
    if (filters.application?.length && !filters.application.some((a) => stone.application.includes(a)))
      return false;
    return true;
  });
}

export function getCatalogStoneById(id: string) {
  return catalogStones.find((s) => s.id === id);
}
