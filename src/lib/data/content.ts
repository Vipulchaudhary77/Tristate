export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  project?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    location: "Greenwich, CT",
    rating: 5,
    text: "Tri-State Stone transformed our kitchen beyond our wildest dreams. The Calacatta marble waterfall island is absolutely stunning. Their attention to detail is unmatched.",
    date: "2 weeks ago",
    project: "Kitchen Renovation",
  },
  {
    id: "2",
    name: "Michael Chen",
    location: "Manhattan, NY",
    rating: 5,
    text: "From consultation to installation, the entire experience felt premium. The team was professional, punctual, and the finished product is flawless. Highly recommend.",
    date: "1 month ago",
    project: "Penthouse Kitchen",
  },
  {
    id: "3",
    name: "Jennifer Walsh",
    location: "Princeton, NJ",
    rating: 5,
    text: "We had our master bath completely redone with onyx and marble. The backlit vanity is a showstopper. Worth every penny for the quality and craftsmanship.",
    date: "3 weeks ago",
    project: "Master Bath",
  },
  {
    id: "4",
    name: "Robert Hayes",
    location: "Hudson Valley, NY",
    rating: 5,
    text: "Used Tri-State for our entire estate — kitchen, 4 baths, fireplace, and outdoor kitchen. Consistent quality across every surface. True artisans.",
    date: "2 months ago",
    project: "Full Estate",
  },
  {
    id: "5",
    name: "Amanda Torres",
    location: "Jersey City, NJ",
    rating: 5,
    text: "The Caesarstone waterfall island in our loft is perfect. Clean lines, invisible seams, and they left our space spotless. Exceptional service.",
    date: "1 month ago",
    project: "Loft Kitchen",
  },
  {
    id: "6",
    name: "David Park",
    location: "Philadelphia, PA",
    rating: 5,
    text: "We hired them for our hotel lobby renovation. They handled a complex commercial project on time and on budget. The marble work is breathtaking.",
    date: "2 months ago",
    project: "Hotel Lobby",
  },
  {
    id: "7",
    name: "Lisa Anderson",
    location: "Westchester, NY",
    rating: 5,
    text: "Third project with Tri-State and they never disappoint. Their showroom makes material selection easy, and the installation team is the best in the business.",
    date: "3 weeks ago",
    project: "Colonial Kitchen",
  },
  {
    id: "8",
    name: "James O'Brien",
    location: "Southampton, NY",
    rating: 5,
    text: "Our outdoor kitchen has survived two Hamptons winters looking brand new. The Dekton surfaces are incredibly durable and beautiful.",
    date: "1 month ago",
    project: "Outdoor Kitchen",
  },
];

export const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve New Jersey, New York, and Pennsylvania. Our team handles residential and commercial stone projects throughout the tri-state region — from kitchen countertops to full-scale fabrication and installation.",
  },
  {
    question: "How long does a typical kitchen countertop project take?",
    answer:
      "From template to installation, most kitchen projects take 2–3 weeks. Complex projects with custom edge profiles or book-matched slabs may take slightly longer. We provide a detailed timeline during your consultation.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes, we offer complimentary in-home consultations and estimates. Our design team will visit your space, discuss your vision, and provide a detailed quote with no obligation.",
  },
  {
    question: "Can I visit your showroom to see stone samples?",
    answer:
      "Absolutely. Our showroom features hundreds of full-size slabs from premium brands including Caesarstone, Cosentino, Dekton, and more. Walk-ins are welcome, but appointments are recommended for personalized service.",
  },
  {
    question: "What warranty do you offer?",
    answer:
      "We provide a comprehensive warranty covering fabrication and installation. Specific terms vary by material and project type — your project manager will review all warranty details during consultation.",
  },
  {
    question: "Do you handle commercial projects?",
    answer:
      "Yes, we specialize in commercial stone fabrication for hotels, restaurants, corporate offices, and retail spaces. Our project management team ensures on-time delivery for large-scale installations.",
  },
];

export const blogPosts = [
  {
    slug: "choosing-perfect-kitchen-countertop",
    title: "How to Choose the Perfect Kitchen Countertop",
    excerpt: "A comprehensive guide to selecting the ideal stone surface for your kitchen renovation.",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    content:
      "Selecting the perfect countertop is one of the most important decisions in any kitchen renovation. Consider your lifestyle, maintenance preferences, and design aesthetic when choosing between granite, marble, quartz, and quartzite.",
  },
  {
    slug: "marble-vs-quartz-guide",
    title: "Marble vs. Quartz: The Ultimate Comparison Guide",
    excerpt: "Understanding the key differences between natural marble and engineered quartz surfaces.",
    date: "February 28, 2026",
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&q=80",
    content:
      "Marble offers timeless natural beauty with unique veining, while quartz provides consistent patterns and zero maintenance. Both are excellent choices — the right one depends on how you use your space.",
  },
  {
    slug: "luxury-bathroom-design-trends",
    title: "2026 Luxury Bathroom Design Trends",
    excerpt: "Discover the latest trends in premium bathroom stone design for the year ahead.",
    date: "February 10, 2026",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    content:
      "From backlit onyx vanities to full-height marble walls, luxury bathrooms in 2026 embrace dramatic stone features, warm tones, and spa-like serenity.",
  },
];

export const aboutPages = {
  company: {
    title: "We Are Tri-State Stone",
    subtitle: "Driven by Success",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&q=80",
    content: [
      "Tri-State Stone Granite & Cabinets Inc. has been in business for 15 years, proudly serving New Jersey, New York, and Pennsylvania with premium stone fabrication and installation.",
      "We invest in the most up-to-date machinery — including laser-guided cutting for all types of stone — combined with competitive pricing and a sales-savvy team that puts your project first.",
      "Our clientele includes homeowners, architects, and contractors who appreciate fine craftsmanship, quick turnaround on fabrication and installation, and ongoing stone service long after the job is done.",
    ],
  },
  "our-story": {
    title: "Our Story",
    subtitle: "15 years of stone excellence",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    content: [
      "What began as a focused stone fabrication shop has grown into a trusted name across the tri-state region. For over 15 years, Tri-State Stone has delivered quality countertops, vanities, and custom stone work that stands the test of time.",
      "Our growth has been driven by one simple commitment: treat every project — whether a single kitchen countertop or a full commercial installation — with the same level of care, precision, and attention to detail.",
      "Today, we operate from our main office and showroom in Fair Lawn and our fabrication shop in Paterson, serving clients who value craftsmanship, reliability, and results they can be proud of.",
    ],
  },
  machinery: {
    title: "Our Machinery",
    subtitle: "Cutting-edge production technology",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    content: [
      "At Tri-State Stone, we continuously invest in the most up-to-date fabrication equipment to ensure every cut, edge, and finish meets the highest standards.",
      "Our facility includes laser-guided cutting technology for precise fabrication of granite, marble, quartz, and all types of natural and engineered stone.",
      "Top-of-the-line materials paired with cutting-edge production technology and a highly qualified team guarantee complete satisfaction — from template to final installation.",
    ],
  },
  certifications: {
    title: "Certifications & Awards",
    subtitle: "Recognized excellence in the industry",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
    content: [
      "Tri-State Stone maintains certifications from the Marble Institute of America (MIA+BSI), NKBA, and ISO 9001 quality management standards.",
      "We've been honored with the Best of Houzz Design and Service awards for five consecutive years, and maintain an A+ rating with the Better Business Bureau.",
      "Our installers are certified by major surface manufacturers including Cosentino, Caesarstone, and Cambria.",
    ],
  },
};

export type AboutSlug = keyof typeof aboutPages;

export function getAboutPage(slug: string) {
  return aboutPages[slug as AboutSlug];
}

export function getAboutSlugs() {
  return Object.keys(aboutPages);
}
