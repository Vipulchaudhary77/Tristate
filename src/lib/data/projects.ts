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
  challenge?: string;
  solution?: string;
  specs?: { label: string; value: string }[];
  timeline?: string;
  testimonial?: { quote: string; author: string };
  videoUrl?: string;
};

export const projectCategories = [
  { slug: "all", label: "All" },
  { slug: "kitchens", label: "Kitchens" },
  { slug: "bathrooms", label: "Bathrooms" },
  { slug: "commercial", label: "Commercial" },
  { slug: "luxury-homes", label: "Luxury Homes" },
];

export const projects: Project[] = [
  {
    slug: "manhattan-penthouse-kitchen",
    title: "Manhattan Penthouse Kitchen",
    category: "kitchens",
    location: "New York, NY",
    stoneUsed: "Calacatta Gold Marble",
    description:
      "A breathtaking penthouse kitchen featuring book-matched Calacatta Gold marble with a dramatic waterfall island and integrated gold hardware.",
    challenge:
      "The client envisioned a kitchen that would serve as the centerpiece of their 4,200 sq ft penthouse — a space where entertaining and daily life converge. The challenge was sourcing slabs large enough for book-matched waterfall edges on a 14-foot island while coordinating with imported Italian cabinetry and concealed appliance panels.",
    solution:
      "We hand-selected four consecutive slabs from a single block in Carrara, ensuring perfect vein continuity across the island waterfall and perimeter counters. Our CNC team fabricated mitered waterfall edges with hairline seams, and master installers completed the installation in a single day to minimize disruption in the occupied residence.",
    specs: [
      { label: "Square Footage", value: "180 sq ft" },
      { label: "Stone", value: "Calacatta Gold Marble" },
      { label: "Edge Profile", value: "Mitered Waterfall" },
      { label: "Timeline", value: "6 weeks" },
    ],
    timeline: "6 weeks from slab selection to installation",
    testimonial: {
      quote: "The book-matched veining on our island is absolutely breathtaking. Tri-State Stone delivered beyond our highest expectations.",
      author: "Sarah & Michael Chen, Penthouse Owners",
    },
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
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
    challenge:
      "Creating a spa-like retreat required translucent onyx backlit to dramatic effect, while ensuring the stone's natural fragility was properly supported. The 10-foot vanity wall demanded seamless slab continuity with integrated backlighting channels.",
    solution:
      "We engineered a steel support framework behind the onyx panels and installed LED backlighting with dimmer controls. Floor-to-ceiling Calacatta marble in the shower was book-matched for visual flow, and the freestanding tub surround was carved from a single block of honed marble.",
    specs: [
      { label: "Square Footage", value: "95 sq ft" },
      { label: "Stone", value: "White Onyx + Calacatta Marble" },
      { label: "Feature", value: "Backlit Onyx Vanity" },
      { label: "Timeline", value: "8 weeks" },
    ],
    timeline: "8 weeks including custom backlighting fabrication",
    testimonial: {
      quote: "Walking into our bathroom feels like entering a five-star spa. The backlit onyx is the crown jewel.",
      author: "Elizabeth Hartwell, Homeowner",
    },
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
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
    challenge:
      "A comprehensive stone program spanning kitchen, four bathrooms, two fireplaces, an outdoor kitchen, and entryway flooring — all requiring material consistency across 12,000 square feet while coordinating with multiple trades over a four-month build schedule.",
    solution:
      "We developed a unified material palette anchored by Titanium Granite for high-traffic areas and Calacatta marble for formal spaces. A dedicated project manager coordinated fabrication sequencing with the general contractor, delivering and installing each phase on a precise timeline.",
    specs: [
      { label: "Square Footage", value: "620 sq ft total" },
      { label: "Stone", value: "Titanium Granite + Calacatta Marble" },
      { label: "Scope", value: "Full-home package" },
      { label: "Timeline", value: "4 months" },
    ],
    timeline: "4 months phased installation",
    testimonial: {
      quote: "Tri-State managed our entire stone program flawlessly. Every room feels cohesive and impeccably crafted.",
      author: "Robert & Diana Ashford, Estate Owners",
    },
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
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
    challenge:
      "The hotel required a show-stopping reception desk and 40-foot feature wall installed during ongoing operations, with zero tolerance for visible seams and a mandatory 48-hour installation window between guest check-out and grand reopening.",
    solution:
      "We pre-fabricated the reception desk in our shop as a single unit and crane-lifted it through a temporarily removed window. The feature wall used vein-matched slabs installed overnight by a team of six master craftsmen, polished on-site to a mirror finish.",
    specs: [
      { label: "Square Footage", value: "340 sq ft" },
      { label: "Stone", value: "Nero Marquina Marble" },
      { label: "Scope", value: "Reception + Feature Wall" },
      { label: "Timeline", value: "10 weeks" },
    ],
    timeline: "10 weeks fabrication, 48-hour installation",
    testimonial: {
      quote: "Guests consistently comment on the lobby's dramatic marble features. It sets the tone for the entire property.",
      author: "James Whitmore, Hotel General Manager",
    },
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
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
    challenge:
      "Salt air, UV exposure, and temperature swings from -10°F to 95°F demanded a surface that wouldn't fade, stain, or crack. The L-shaped bar required precise mitered corners and an integrated sink cutout rated for outdoor use.",
    solution:
      "Dekton Trilium was selected for its UV stability and zero porosity. We fabricated the entire outdoor kitchen in our climate-controlled shop, including integrated drainage channels in the bar top, and installed with marine-grade adhesives rated for coastal environments.",
    specs: [
      { label: "Square Footage", value: "65 sq ft" },
      { label: "Stone", value: "Dekton Trilium" },
      { label: "Rating", value: "UV & Frost Resistant" },
      { label: "Timeline", value: "5 weeks" },
    ],
    timeline: "5 weeks from design to installation",
    testimonial: {
      quote: "Three summers later and our outdoor kitchen still looks brand new. The Dekton has been absolutely bulletproof.",
      author: "Thomas & Catherine Reed, Homeowners",
    },
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
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
    challenge:
      "A 1,800 sq ft industrial loft conversion needed a kitchen island that doubled as a dining bar, with waterfall edges on three sides and precise cutouts for integrated cooktop and pop-up outlets — all within a tight 4-week renovation timeline.",
    solution:
      "Caesarstone Empira White provided the clean, consistent aesthetic the designer envisioned. Our team templated with 3D laser scanning for sub-millimeter accuracy around the cooktop and outlet channels, delivering a flawless waterfall island that anchors the open-plan living space.",
    specs: [
      { label: "Square Footage", value: "72 sq ft" },
      { label: "Stone", value: "Caesarstone Empira White" },
      { label: "Edge Profile", value: "Triple Waterfall" },
      { label: "Timeline", value: "4 weeks" },
    ],
    timeline: "4 weeks end-to-end",
    testimonial: {
      quote: "The island is the heart of our loft. Clean lines, perfect seams — exactly what we envisioned.",
      author: "Alex & Jordan Park, Loft Owners",
    },
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
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
    challenge:
      "The Fortune 500 client required a 22-foot boardroom conference table and reception desk from rare Taj Mahal quartzite — a material with limited availability. The table needed to seat 16 executives with integrated power and data ports, all while maintaining a seamless stone surface.",
    solution:
      "We secured three book-matched slabs from an exclusive quarry partnership in Brazil. The boardroom table was engineered with a steel subframe concealed within the stone, and power/data ports were core-drilled and fitted with brushed brass covers that blend with the quartzite's warm gold veining.",
    specs: [
      { label: "Square Footage", value: "110 sq ft" },
      { label: "Stone", value: "Taj Mahal Quartzite" },
      { label: "Feature", value: "22-ft Boardroom Table" },
      { label: "Timeline", value: "12 weeks" },
    ],
    timeline: "12 weeks including quarry sourcing",
    testimonial: {
      quote: "The boardroom table makes a statement the moment you walk in. Our executives are proud to meet there.",
      author: "Victoria Lang, VP of Facilities",
    },
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
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
    challenge:
      "Preserving the home's 1920s colonial character while modernizing the kitchen required a stone that complemented original moldings and brass hardware. The oversized farm sink needed a custom undermount cutout in 3cm Blue Pearl with a laminated edge profile.",
    solution:
      "Blue Pearl Granite's iridescent blue crystals echo the home's existing glass cabinet knobs. We fabricated a custom farm sink cutout with a laminated 6cm edge for visual weight, and installed full-height backsplashes with mitered returns at the window casings.",
    specs: [
      { label: "Square Footage", value: "58 sq ft" },
      { label: "Stone", value: "Blue Pearl Granite" },
      { label: "Edge Profile", value: "Laminated 6cm" },
      { label: "Timeline", value: "3 weeks" },
    ],
    timeline: "3 weeks from template to install",
    testimonial: {
      quote: "They understood our vision for a kitchen that honors the home's history while feeling completely fresh.",
      author: "Margaret & William Doyle, Homeowners",
    },
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
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
