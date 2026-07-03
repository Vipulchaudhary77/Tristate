export const siteConfig = {
  name: "Tri-State Stone Granite & Cabinets Inc",
  shortName: "Tri-State Stone",
  description:
    "Premium granite, marble, quartz fabrication and installation serving three states. Crafting luxury stone spaces that last generations.",
  url: "https://tristatestone.com",
  phone: "+1 (555) 123-4567",
  email: "info@tristatestone.com",
  whatsapp: "15551234567",
  address: {
    street: "123 Stone Craft Boulevard",
    city: "Edison",
    state: "NJ",
    zip: "08817",
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
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about/company",
    children: [
      { label: "Company", href: "/about/company", icon: "Building2" },
      { label: "Our Story", href: "/about/our-story", icon: "BookOpen" },
      { label: "Machinery", href: "/about/machinery", icon: "Cog" },
      { label: "Certifications", href: "/about/certifications", icon: "Award" },
    ],
  },
  {
    label: "Stone",
    href: "/stone/granite",
    children: [
      { label: "Granite", href: "/stone/granite", icon: "Gem" },
      { label: "Marble", href: "/stone/marble", icon: "Sparkles" },
      { label: "Quartz", href: "/stone/quartz", icon: "Diamond" },
      { label: "Quartzite", href: "/stone/quartzite", icon: "Layers" },
      { label: "Porcelain", href: "/stone/porcelain", icon: "Square" },
      { label: "Dekton", href: "/stone/dekton", icon: "Shield" },
      { label: "Onyx", href: "/stone/onyx", icon: "Sun" },
      { label: "Travertine", href: "/stone/travertine", icon: "Mountain" },
    ],
  },
  {
    label: "Services",
    href: "/services/kitchen-countertops",
    children: [
      { label: "Kitchen Countertops", href: "/services/kitchen-countertops", icon: "ChefHat" },
      { label: "Bathroom Vanities", href: "/services/bathroom-vanities", icon: "Bath" },
      { label: "Fireplace", href: "/services/fireplace", icon: "Flame" },
      { label: "Outdoor Kitchen", href: "/services/outdoor-kitchen", icon: "Trees" },
      { label: "Commercial Projects", href: "/services/commercial-projects", icon: "Building" },
      { label: "Fabrication", href: "/services/fabrication", icon: "Hammer" },
      { label: "Installation", href: "/services/installation", icon: "Wrench" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Kitchens", href: "/gallery?category=kitchens", icon: "ChefHat" },
      { label: "Bathrooms", href: "/gallery?category=bathrooms", icon: "Bath" },
      { label: "Commercial", href: "/gallery?category=commercial", icon: "Building" },
      { label: "Luxury Homes", href: "/gallery?category=luxury-homes", icon: "Home" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  {
    label: "Resources",
    href: "/resources/faqs",
    children: [
      { label: "FAQs", href: "/resources/faqs", icon: "HelpCircle" },
      { label: "Blog", href: "/resources/blog", icon: "Newspaper" },
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
    title: "Master Craftsmanship",
    description: "Generations of stone expertise combined with cutting-edge fabrication technology.",
    icon: "Hammer",
  },
  {
    title: "Premium Materials",
    description: "Exclusive partnerships with the world's finest stone and surface manufacturers.",
    icon: "Gem",
  },
  {
    title: "White-Glove Service",
    description: "From consultation to installation, every touchpoint reflects luxury and care.",
    icon: "HeartHandshake",
  },
  {
    title: "Lifetime Warranty",
    description: "We stand behind our work with comprehensive warranties on fabrication and installation.",
    icon: "ShieldCheck",
  },
];
