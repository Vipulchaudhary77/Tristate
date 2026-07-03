export const siteConfig = {
  name: "Tri-State Stone Granite & Cabinets Inc",
  shortName: "Tri-State Stone",
  tagline: "Driven by Success",
  description:
    "Stone fabrication and installation serving New Jersey, New York, and Pennsylvania. 15+ years of craftsmanship, laser-guided precision, and competitive pricing for homeowners, architects, and contractors.",
  url: "https://tristatestone.com",
  phone: "(862) 588-1920",
  officePhone: "(201) 703-4369",
  email: "tristatestonegc@gmail.com",
  whatsapp: "18625881920",
  serviceAreas: "New Jersey · New York · Pennsylvania",
  address: {
    label: "Main Office / Showroom",
    street: "16-23 River Rd",
    city: "Fair Lawn",
    state: "NJ",
    zip: "07410",
    country: "US",
  },
  fabricationShop: {
    label: "Fabrication Shop",
    street: "46 Peel St",
    city: "Paterson",
    state: "NJ",
    zip: "07524",
    country: "US",
  },
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 4:00 PM" },
    { days: "Sunday", time: "By Appointment" },
  ],
  social: {
    instagram: "https://instagram.com/tristatestone",
    facebook: "https://facebook.com/tristatestone",
    pinterest: "https://pinterest.com/tristatestone",
    houzz: "https://houzz.com/tristatestone",
  },
  stats: [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 1000, suffix: "+", label: "Projects Completed" },
    { value: 3, suffix: "", label: "States Served" },
  ],
};

export type NavItem = {
  label: string;
  href: string;
  icon?: string;
  description?: string;
  image?: string;
  showThumbnail?: boolean;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about/company",
    description: "Discover our heritage, craftsmanship, and commitment to excellence in stone fabrication.",
    children: [
      { label: "Company", href: "/about/company", icon: "Building2", description: "Who we are and what we stand for" },
      { label: "Our Story", href: "/about/our-story", icon: "BookOpen", description: "A legacy built on precision" },
      { label: "Machinery", href: "/about/machinery", icon: "Cog", description: "State-of-the-art fabrication" },
      { label: "Certifications", href: "/about/certifications", icon: "Award", description: "Industry-recognized standards" },
    ],
  },
  {
    label: "Stone",
    href: "/catalog",
    description: "Explore our curated collection of premium natural and engineered stone surfaces.",
    showThumbnail: true,
    children: [
      { label: "View Full Catalog", href: "/catalog", icon: "Gem", description: "Browse all slabs with filters", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=200&q=80" },
      { label: "Granite", href: "/stone/granite", icon: "Gem", description: "Timeless durability & beauty", image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=200&q=80" },
      { label: "Marble", href: "/stone/marble", icon: "Sparkles", description: "Classic elegance for any space", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=200&q=80" },
      { label: "Quartz", href: "/stone/quartz", icon: "Diamond", description: "Engineered for performance", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&q=80" },
      { label: "Quartzite", href: "/stone/quartzite", icon: "Layers", description: "Natural strength & character", image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=200&q=80" },
      { label: "Porcelain", href: "/stone/porcelain", icon: "Square", description: "Ultra-durable large format", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&q=80" },
      { label: "Dekton", href: "/stone/dekton", icon: "Shield", description: "Ultra-compact sintered surface", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=200&q=80" },
      { label: "Onyx", href: "/stone/onyx", icon: "Sun", description: "Translucent luxury stone", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=200&q=80" },
      { label: "Travertine", href: "/stone/travertine", icon: "Mountain", description: "Warm, earthy textures", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=200&q=80" },
    ],
  },
  {
    label: "Services",
    href: "/services/kitchen-countertops",
    description: "Full-service stone solutions from design consultation through expert installation.",
    children: [
      { label: "Kitchen Countertops", href: "/services/kitchen-countertops", icon: "ChefHat", description: "The heart of your home" },
      { label: "Bathroom Vanities", href: "/services/bathroom-vanities", icon: "Bath", description: "Spa-inspired surfaces" },
      { label: "Fireplace", href: "/services/fireplace", icon: "Flame", description: "Statement surrounds" },
      { label: "Outdoor Kitchen", href: "/services/outdoor-kitchen", icon: "Trees", description: "Weather-resistant stone" },
      { label: "Commercial Projects", href: "/services/commercial-projects", icon: "Building", description: "Scale & precision" },
      { label: "Fabrication", href: "/services/fabrication", icon: "Hammer", description: "CNC precision cutting" },
      { label: "Installation", href: "/services/installation", icon: "Wrench", description: "White-glove fitting" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    description: "Browse our portfolio of completed residential and commercial stone projects.",
    children: [
      { label: "Kitchens", href: "/gallery?category=kitchens", icon: "ChefHat", description: "Countertop transformations" },
      { label: "Bathrooms", href: "/gallery?category=bathrooms", icon: "Bath", description: "Vanity & shower surrounds" },
      { label: "Commercial", href: "/gallery?category=commercial", icon: "Building", description: "Office & retail spaces" },
      { label: "Luxury Homes", href: "/gallery?category=luxury-homes", icon: "Home", description: "High-end residences" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    description: "Signature installations showcasing our finest residential and commercial stone work.",
    showThumbnail: true,
    children: [
      { label: "Manhattan Penthouse Kitchen", href: "/projects/manhattan-penthouse-kitchen", icon: "ChefHat", description: "Calacatta Gold marble penthouse", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&q=80" },
      { label: "Greenwich Spa Bathroom", href: "/projects/greenwich-spa-bathroom", icon: "Bath", description: "Backlit onyx master bath", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=200&q=80" },
      { label: "Hudson Valley Estate", href: "/projects/hudson-valley-estate", icon: "Home", description: "Full-home stone package", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=200&q=80" },
      { label: "Luxury Hotel Lobby", href: "/projects/luxury-hotel-lobby", icon: "Building", description: "Nero Marquina commercial", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&q=80" },
      { label: "Hamptons Outdoor Kitchen", href: "/projects/hamptons-outdoor-kitchen", icon: "Trees", description: "Dekton outdoor entertaining", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=200&q=80" },
      { label: "Modern Loft Renovation", href: "/projects/modern-loft-renovation", icon: "ChefHat", description: "Minimalist Caesarstone island", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&q=80" },
    ],
  },
  { label: "Testimonials", href: "/testimonials" },
  {
    label: "Resources",
    href: "/resources/faqs",
    description: "Guides, answers, and insights to help you plan your stone project.",
    children: [
      { label: "FAQs", href: "/resources/faqs", icon: "HelpCircle", description: "Common questions answered" },
      { label: "Blog", href: "/resources/blog", icon: "Newspaper", description: "Tips, trends & inspiration" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const brandPartners = [
  "Caesarstone",
  "Cosentino",
  "Silestone",
  "Dekton",
  "Neolith",
  "MSI",
  "Cambria",
  "Hanstone",
];

export const awards = [
  "NKBA Member",
  "MIA+BSI Certified",
  "BBB A+ Rating",
  "Best of Houzz",
  "Angi Super Service",
  "ISO 9001 Certified",
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We begin with an in-depth consultation to understand your vision, lifestyle, and design preferences.",
  },
  {
    step: "02",
    title: "Material Selection",
    description: "Tour our showroom and explore premium slabs from world-renowned brands with expert guidance.",
  },
  {
    step: "03",
    title: "Precision Fabrication",
    description: "State-of-the-art CNC machinery crafts your stone with millimeter precision and flawless edges.",
  },
  {
    step: "04",
    title: "Expert Installation",
    description: "Our master installers deliver a seamless fit with meticulous attention to every detail.",
  },
  {
    step: "05",
    title: "Final Inspection",
    description: "We walk through every surface together, ensuring perfection before we consider the project complete.",
  },
];

export const whyChooseUs = [
  {
    title: "Laser-Guided Precision",
    description: "State-of-the-art laser cutting technology for accurate fabrication of all types of stone.",
    icon: "Hammer",
  },
  {
    title: "Competitive Pricing",
    description: "Quality craftsmanship at fair prices — backed by 15+ years of experience and sales expertise.",
    icon: "Gem",
  },
  {
    title: "Quick Turnaround",
    description: "Fast fabrication and installation without compromising on quality or attention to detail.",
    icon: "HeartHandshake",
  },
  {
    title: "Trusted by Professionals",
    description: "Homeowners, architects, and contractors rely on us for fine craftsmanship and ongoing stone service.",
    icon: "ShieldCheck",
  },
];
