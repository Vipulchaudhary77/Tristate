import { createMetadata } from "@/lib/seo/metadata";
import ContactClient from "./ContactClient";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with Tri-State Stone for a free estimate or showroom visit.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactClient />;
}
