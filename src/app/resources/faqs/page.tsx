import { faqs } from "@/lib/data/content";
import { createMetadata, faqSchema } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GoldButton } from "@/components/shared/GoldButton";

export const metadata = createMetadata({
  title: "FAQs",
  description: "Frequently asked questions about Tri-State Stone services.",
  path: "/resources/faqs",
});

export default function FAQsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            badge="Resources"
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services, process, and materials."
          />
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="font-heading text-lg font-light hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">Still have questions?</p>
            <GoldButton href="/contact">Contact Us</GoldButton>
          </div>
        </div>
      </section>
    </main>
  );
}
