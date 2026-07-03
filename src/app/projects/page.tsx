import { createMetadata } from "@/lib/seo/metadata";
import ProjectsClient from "./ProjectsClient";

export const metadata = createMetadata({
  title: "Projects",
  description: "Explore our signature stone installation case studies.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsClient />;
}
