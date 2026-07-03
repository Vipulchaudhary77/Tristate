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
      "We serve New York, New Jersey, and Connecticut — the tri-state area. Our team handles projects from Manhattan penthouses to suburban estates and commercial spaces throughout the region.",
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
    image: "https://images.unsplash.com/photo-1615874959477-df969626fbf0?w=800&q=80",
    content:
      "Marble offers timeless natural beauty with unique veining, while quartz provides consistent patterns and zero maintenance. Both are excellent choices — the right one depends on how you use your space.",
  },
  {
    slug: "luxury-bathroom-design-trends",
    title: "2026 Luxury Bathroom Design Trends",
    excerpt: "Discover the latest trends in premium bathroom stone design for the year ahead.",
    date: "February 10, 2026",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09ae1598?w=800&q=80",
    content:
      "From backlit onyx vanities to full-height marble walls, luxury bathrooms in 2026 embrace dramatic stone features, warm tones, and spa-like serenity.",
  },
];

export const aboutPages = {
  company: {
    title: "Our Company",
    subtitle: "Building excellence in stone since 2010",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa0a82a?w=1200&q=80",
    content: [
      "Tri-State Stone Granite & Cabinets Inc. has been the tri-state area's premier destination for luxury stone fabrication and installation for over 15 years.",
      "Our 30,000 square foot facility houses state-of-the-art Italian CNC machinery, a curated slab gallery featuring materials from the world's finest brands, and a team of master craftsmen dedicated to perfection.",
      "We serve homeowners, interior designers, architects, and commercial clients across New York, New Jersey, and Connecticut — delivering white-glove service from initial consultation to final inspection.",
    ],
  },
  "our-story": {
    title: "Our Story",
    subtitle: "A legacy of craftsmanship and innovation",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    content: [
      "Founded in 2010 by master stone fabricator Antonio Rivera, Tri-State Stone began as a small workshop with a big vision: to bring Italian-level craftsmanship to the American market.",
      "What started as a two-person operation has grown into a team of 50+ artisans, designers, and project managers — yet our core values remain unchanged: quality, integrity, and an obsession with detail.",
      "Today, we're proud to be the trusted stone partner for luxury homes, five-star hotels, and discerning designers throughout the tri-state region.",
    ],
  },
  machinery: {
    title: "Our Machinery",
    subtitle: "Precision technology meets artisan skill",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    content: [
      "Our fabrication facility features the latest Breton and Intermac CNC bridge saws, enabling precision cuts to within 0.1mm tolerance.",
      "Digital laser templating eliminates guesswork, while our automated polishing lines deliver consistent, mirror-finish edges on every piece.",
      "We invest continuously in technology because precision at the fabrication stage means perfection at installation.",
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
