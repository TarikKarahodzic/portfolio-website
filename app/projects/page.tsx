import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import FilterBar from "../projects/FilterBar";

export const metadata = {
  title: "Projects | Your Name",
  description: "Selected projects built with Next.js, React Native, and more.",
};

export default function ProjectsPage() {
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();

  return (
    <main className="min-h-[calc(100vh-64px)]  px-6 md:px-12 lg:px-20">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        A selection of my work across web, mobile, and AI.
      </p>

      <FilterBar allTags={allTags} />

      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </section>
    </main>
  );
}
