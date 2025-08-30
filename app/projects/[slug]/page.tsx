import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

// ---- helpers to support both Promise and non-Promise params ----
type Params = { slug: string };
type ParamsArg = { params: Params } | { params: Promise<Params> };

async function resolveParams(arg: ParamsArg): Promise<Params> {
  const p: any = (arg as any).params;
  return typeof p?.then === "function" ? await p : (p as Params);
}
// ----------------------------------------------------------------

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Works whether your framework passes a Promise or a plain object
export async function generateMetadata(arg: ParamsArg) {
  const { slug } = await resolveParams(arg);
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

// Works with both Promise and non-Promise params
export default async function Page(arg: ParamsArg) {
  const { slug } = await resolveParams(arg);
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="px-6 pt-24 pb-10 md:pt-28 lg:pt-32">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-moss">{project.title}</h1>
        <p className="mt-2 text-charcoal">{project.description}</p>

        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 900px, 1000px"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {project.links?.demo && (
            <a
              className="px-4 py-2 rounded bg-moss text-white hover:bg-moss/90 transition"
              href={project.links.demo}
              target="_blank"
              rel="noreferrer noopener"
            >
              Live Demo
            </a>
          )}
          {project.links?.repo && (
            <a
              className="px-4 py-2 rounded border border-gray-300 text-gray-800 hover:bg-gray-50 transition"
              href={project.links.repo}
              target="_blank"
              rel="noreferrer noopener"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
