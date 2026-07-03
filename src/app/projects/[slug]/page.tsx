import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs, projects } from "@/lib/data/projects";
import { createMetadata } from "@/lib/seo/metadata";
import { ProjectCaseStudy } from "@/components/shared/ProjectCaseStudy";

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return createMetadata({ title: project.title, description: project.description, path: `/projects/${slug}` });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 3);

  return <ProjectCaseStudy project={project} related={related} />;
}
