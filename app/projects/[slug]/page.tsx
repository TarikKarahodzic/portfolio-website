import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-[calc(100vh-64px)] pt-6 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>

        <div className="relative mt-6 aspect-[16/9] rounded-xl overflow-hidden">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">{t}</span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {project.links?.demo && (
            <a className="px-4 py-2 rounded bg-blue-600 text-white" href={project.links.demo} target="_blank">Live Demo</a>
          )}
          {project.links?.repo && (
            <a className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700" href={project.links.repo} target="_blank">Source</a>
          )}
        </div>
      </div>
    </main>
  );
}
