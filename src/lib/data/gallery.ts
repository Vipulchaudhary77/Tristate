export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  height: "short" | "medium" | "tall";
};

export const galleryCategories = [
  { slug: "all", label: "All" },
  { slug: "kitchens", label: "Kitchens" },
  { slug: "bathrooms", label: "Bathrooms" },
  { slug: "commercial", label: "Commercial" },
  { slug: "luxury-homes", label: "Luxury Homes" },
];

export const galleryItems: GalleryItem[] = [
  { id: "1", title: "Marble Island", category: "kitchens", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", height: "tall" },
  { id: "2", title: "Spa Vanity", category: "bathrooms", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80", height: "medium" },
  { id: "3", title: "Hotel Lobby", category: "commercial", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", height: "short" },
  { id: "4", title: "Estate Kitchen", category: "luxury-homes", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", height: "tall" },
  { id: "5", title: "Quartz Countertop", category: "kitchens", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", height: "medium" },
  { id: "6", title: "Onyx Feature Wall", category: "bathrooms", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", height: "tall" },
  { id: "7", title: "Outdoor Bar", category: "luxury-homes", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80", height: "short" },
  { id: "8", title: "Granite Kitchen", category: "kitchens", image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80", height: "medium" },
  { id: "9", title: "Marble Bath", category: "bathrooms", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80", height: "tall" },
  { id: "10", title: "Office Reception", category: "commercial", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80", height: "medium" },
  { id: "11", title: "Fireplace Surround", category: "luxury-homes", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", height: "short" },
  { id: "12", title: "Waterfall Island", category: "kitchens", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80", height: "tall" },
];

export const beforeAfter = {
  before: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=80",
  after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  title: "Kitchen Transformation",
  description: "From dated laminate to Calacatta marble — a complete kitchen reimagined.",
};

export const instagramPosts = [
  "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=600&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
];
