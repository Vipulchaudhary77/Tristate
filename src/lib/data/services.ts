export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  process: { title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "kitchen-countertops",
    name: "Kitchen Countertops",
    tagline: "The heart of your home, elevated",
    description:
      "Transform your kitchen into a culinary masterpiece with custom-fabricated countertops that blend beauty, durability, and functionality.",
    features: ["Custom edge profiles", "Waterfall islands", "Seamless integration", "Premium undermount sinks"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    process: [
      { title: "Design Consultation", description: "Collaborate with our designers to select materials and layout." },
      { title: "Template & Fabrication", description: "Digital templating ensures a perfect fit every time." },
      { title: "Installation", description: "White-glove installation with minimal disruption to your home." },
    ],
  },
  {
    slug: "bathroom-vanities",
    name: "Bathroom Vanities",
    tagline: "Spa-like serenity in every detail",
    description:
      "Create a personal sanctuary with luxurious stone vanities crafted to complement your bathroom's unique aesthetic.",
    features: ["Custom sizing", "Integrated sinks", "Backsplash coordination", "Premium finishes"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09ae1598?w=1200&q=80",
    process: [
      { title: "Space Assessment", description: "We measure and evaluate your bathroom layout for optimal design." },
      { title: "Material Selection", description: "Choose from our curated collection of premium stones." },
      { title: "Precision Install", description: "Expert installation with waterproof sealing." },
    ],
  },
  {
    slug: "fireplace",
    name: "Fireplace Surrounds",
    tagline: "Dramatic focal points in natural stone",
    description:
      "Elevate your living space with a stunning stone fireplace surround that becomes the centerpiece of your home.",
    features: ["Floor-to-ceiling designs", "Mantel fabrication", "Hearth extensions", "Custom hearths"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    process: [
      { title: "Concept Design", description: "Visualize your fireplace with 3D renderings and material samples." },
      { title: "Fabrication", description: "Each piece is cut and finished to exact specifications." },
      { title: "Installation", description: "Structural mounting and finishing for a flawless result." },
    ],
  },
  {
    slug: "outdoor-kitchen",
    name: "Outdoor Kitchen",
    tagline: "Luxury entertaining under the open sky",
    description:
      "Extend your living space outdoors with weather-resistant stone surfaces built for al fresco entertaining.",
    features: ["Weather-resistant materials", "BBQ surrounds", "Bar tops", "Fire pit surrounds"],
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80",
    process: [
      { title: "Site Planning", description: "Assess your outdoor space and entertainment needs." },
      { title: "Material Selection", description: "Choose UV-resistant stones rated for outdoor use." },
      { title: "Installation", description: "Weatherproof installation built to last decades." },
    ],
  },
  {
    slug: "commercial-projects",
    name: "Commercial Projects",
    tagline: "Scale, precision, and on-time delivery",
    description:
      "From luxury hotels to corporate headquarters, we deliver large-scale stone fabrication with uncompromising quality.",
    features: ["Volume fabrication", "Project management", "Tight timelines", "Commercial warranties"],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    process: [
      { title: "Project Scope", description: "Detailed planning and scheduling for commercial timelines." },
      { title: "Batch Fabrication", description: "Consistent quality across every piece in the project." },
      { title: "Phased Installation", description: "Coordinated installation to minimize business disruption." },
    ],
  },
  {
    slug: "fabrication",
    name: "Fabrication",
    tagline: "Where raw stone becomes art",
    description:
      "Our state-of-the-art fabrication facility combines Italian CNC technology with master stone artisans.",
    features: ["CNC precision cutting", "Custom edge profiles", "Digital templating", "Quality inspection"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa0a82a?w=1200&q=80",
    process: [
      { title: "Digital Templating", description: "Laser-accurate measurements for perfect fit." },
      { title: "CNC Fabrication", description: "Computer-controlled cutting and polishing." },
      { title: "Quality Control", description: "Every piece inspected before leaving our facility." },
    ],
  },
  {
    slug: "installation",
    name: "Installation",
    tagline: "The final touch of perfection",
    description:
      "Our certified installation team ensures every surface is set with precision, sealed, and finished to perfection.",
    features: ["Certified installers", "Clean job sites", "Same-day completion", "Final walkthrough"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    process: [
      { title: "Preparation", description: "Protect your home and prepare the installation area." },
      { title: "Setting & Seaming", description: "Invisible seams and perfect leveling." },
      { title: "Finishing", description: "Sealing, cleanup, and final inspection with you." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs() {
  return services.map((s) => s.slug);
}
