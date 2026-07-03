"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { siteConfig } from "@/lib/data/navigation";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GoldButton } from "@/components/shared/GoldButton";
import { GlassCard } from "@/components/shared/GlassCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Phone number required"),
  message: z.string().min(10, "Please provide project details"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <main>
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Contact"
            title="Let's Create Something Extraordinary"
            subtitle="Schedule a consultation or visit our showroom to explore premium stone surfaces."
          />
          <div className="grid gap-12 lg:grid-cols-2">
            <GlassCard hover={false}>
              {submitted ? (
                <div className="py-12 text-center">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-gold">
                    Thank You!
                  </h3>
                  <p className="mt-4 text-muted-foreground">
                    We&apos;ve received your message and will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" {...register("name")} className="mt-2" placeholder="John Smith" />
                    {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" {...register("email")} className="mt-2" placeholder="john@email.com" />
                      {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" {...register("phone")} className="mt-2" placeholder="(555) 123-4567" />
                      {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      className="mt-2 min-h-32"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
                  </div>
                  <GoldButton type="submit" className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </GoldButton>
                </form>
              )}
            </GlassCard>

            <div className="space-y-8">
              <GlassCard hover={false}>
                <h3 className="mb-6 font-[family-name:var(--font-cormorant)] text-2xl">Visit Our Showroom</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
                    <span>
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="size-5 text-gold" />
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-gold">{siteConfig.phone}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="size-5 text-gold" />
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">{siteConfig.email}</a>
                  </li>
                </ul>
              </GlassCard>

              <GlassCard hover={false}>
                <h3 className="mb-6 flex items-center gap-2 font-[family-name:var(--font-cormorant)] text-2xl">
                  <Clock className="size-5 text-gold" />
                  Business Hours
                </h3>
                <ul className="space-y-3">
                  {siteConfig.hours.map((h) => (
                    <li key={h.days} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.days}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <div className="overflow-hidden rounded-2xl border border-gold/20">
                <iframe
                  title="Tri-State Stone Location"
                  src="https://maps.google.com/maps?q=Edison+NJ&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
