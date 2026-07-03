export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  stoneUsed: string;
  description: string;
  image: string;
  gallery: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "manhattan-penthouse-kitchen",
    title: "Manhattan Penthouse Kitchen",
    category: "kitchens",
    location: "New York, NY",
    stoneUsed: "Calacatta Gold Marble",
    description:
      "A breathtaking penthouse kitchen featuring book-matched Calacatta Gold marble with a dramatic waterfall island and integrated gold hardware.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa0a82a?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    featured: true,
  },
  {
    slug: "greenwich-spa-bathroom",
    title: "Greenwich Spa Bathroom",
    category: "bathrooms",
    location: "Greenwich, CT",
    stoneUsed: "White Onyx",
    description:
      "A spa-inspired master bath with backlit onyx vanity, floor-to-ceiling marble walls, and a freestanding tub surround.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09ae1598?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09ae1598?w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6981c75d56?w=800&q=80",
    ],
    featured: true,
  },
  {
    slug: "hudson-valley-estate",
    title: "Hudson Valley Estate",
    category: "luxury-homes",
    location: "Hudson Valley, NY",
    stoneUsed: "Titanium Granite",
    description:
      "Full-home stone package including kitchen, baths, fireplace, and outdoor kitchen for a 12,000 sq ft estate.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    ],
    featured: true,
  },
  {
    slug: "luxury-hotel-lobby",
    title: "Luxury Hotel Lobby",
    category: "commercial",
    location: "Philadelphia, PA",
    stoneUsed: "Nero Marquina Marble",
    description:
      "Grand lobby reception desk and feature walls in polished Nero Marquina marble for a five-star hotel renovation.",
    image: "https://images.unsplash.com/photo-1600585154363-67eb9e258213?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154363-67eb9e258213?w=800&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    ],
  },
  {
    slug: "hamptons-outdoor-kitchen",
    title: "Hamptons Outdoor Kitchen",
    category: "luxury-homes",
    location: "Southampton, NY",
    stoneUsed: "Dekton Trilium",
    description:
      "Weather-resistant outdoor kitchen and bar with Dekton surfaces, built for year-round Hamptons entertaining.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa0a82a?w=800&q=80",
    ],
  },
  {
    slug: "modern-loft-renovation",
    title: "Modern Loft Renovation",
    category: "kitchens",
    location: "Jersey City, NJ",
    stoneUsed: "Caesarstone Empira White",
    description:
      "Minimalist loft kitchen with waterfall Caesarstone island, handleless cabinets, and integrated appliances.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646079?w=800&q=80",
      "https://images.unsplash.com/photo-1615874959477-df969626fbf0?w=800&q=80",
    ],
  },
  {
    slug: "corporate-headquarters",
    title: "Corporate Headquarters",
    category: "commercial",
    location: "Princeton, NJ",
    stoneUsed: "Quartzite Taj Mahal",
    description:
      "Executive boardroom table and reception surfaces in rare Taj Mahal quartzite for a Fortune 500 headquarters.",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e258213?w=800&q=80",
    ],
  },
  {
    slug: "classic-colonial-kitchen",
    title: "Classic Colonial Kitchen",
    category: "kitchens",
    location: "Westchester, NY",
    stoneUsed: "Blue Pearl Granite",
    description:
      "Traditional colonial kitchen updated with Blue Pearl granite countertops and a custom farm sink cutout.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((p) => p.slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
