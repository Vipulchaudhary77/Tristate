import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StonesSection } from "@/components/sections/StonesSection";
import { ProjectShowcaseSection } from "@/components/sections/ProjectShowcaseSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { faqSchema } from "@/lib/seo/metadata";
import { faqs } from "@/lib/data/content";

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StonesSection />
      <ProjectShowcaseSection />
      <BeforeAfterSection />
      <GallerySection />
      <ProcessSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <BrandsSection />
      <AwardsSection />
      <InstagramSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
