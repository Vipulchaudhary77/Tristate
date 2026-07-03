export type Stone = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  image: string;
  gallery: string[];
};

export const stones: Stone[] = [
  {
    slug: "granite",
    name: "Granite",
    tagline: "Timeless strength, natural beauty",
    description:
      "Granite remains the gold standard for luxury countertops. Each slab is a unique work of art forged over millions of years, offering unmatched durability and distinctive character for kitchens and baths.",
    benefits: ["Heat & scratch resistant", "Unique natural patterns", "Low maintenance", "Adds property value"],
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
  },
  {
    slug: "marble",
    name: "Marble",
    tagline: "Sculptural elegance for refined spaces",
    description:
      "Marble has adorned the world's most prestigious interiors for centuries. Its luminous veining and cool touch create an atmosphere of pure sophistication.",
    benefits: ["Iconic veining patterns", "Cool to the touch", "Timeless luxury appeal", "Ideal for statement pieces"],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    ],
  },
  {
    slug: "quartz",
    name: "Quartz",
    tagline: "Engineered perfection, zero compromise",
    description:
      "Quartz surfaces combine natural quartz crystals with advanced polymers for a non-porous, maintenance-free luxury surface available in endless colors and patterns.",
    benefits: ["Non-porous surface", "Consistent patterns", "No sealing required", "Wide color range"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    ],
  },
  {
    slug: "quartzite",
    name: "Quartzite",
    tagline: "Nature's hardest luxury surface",
    description:
      "Quartzite offers the beauty of marble with the durability of granite. Its crystalline structure creates stunning depth and movement.",
    benefits: ["Extreme hardness", "Marble-like aesthetics", "UV resistant", "Heat resistant"],
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    ],
  },
  {
    slug: "porcelain",
    name: "Porcelain",
    tagline: "Ultra-slim, ultra-modern surfaces",
    description:
      "Large-format porcelain slabs deliver contemporary aesthetics with exceptional resistance to stains, scratches, and UV fading.",
    benefits: ["Large format slabs", "UV & stain resistant", "Thin profile options", "Indoor/outdoor use"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
    ],
  },
  {
    slug: "dekton",
    name: "Dekton",
    tagline: "Cosentino's ultra-compact revolution",
    description:
      "Dekton by Cosentino is an ultra-compact surface created through sinterized particle technology, offering extreme performance for demanding applications.",
    benefits: ["Scratch proof", "Zero porosity", "Large format", "Indoor & outdoor rated"],
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    ],
  },
  {
    slug: "onyx",
    name: "Onyx",
    tagline: "Translucent artistry in stone",
    description:
      "Onyx creates breathtaking backlit features with its natural translucency. A true statement material for luxury interiors.",
    benefits: ["Backlit capability", "Dramatic color bands", "One-of-a-kind slabs", "Luxury statement piece"],
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    ],
  },
  {
    slug: "travertine",
    name: "Travertine",
    tagline: "Old-world charm, modern applications",
    description:
      "Travertine brings warmth and texture to floors, walls, and outdoor spaces with its distinctive porous character and earthy tones.",
    benefits: ["Natural texture", "Warm earthy tones", "Indoor/outdoor versatility", "Classic appeal"],
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
  },
];

export function getStoneBySlug(slug: string) {
  return stones.find((s) => s.slug === slug);
}

export function getStoneSlugs() {
  return stones.map((s) => s.slug);
}
