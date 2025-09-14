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
    <main className="min-h-[calc(100vh-64px)] mx-auto max-w-7xl pt-25 px-5 pb-20">
      <h1 className="text-6xl font-bold text-moss">Projects</h1>
      <p className="mt-2 text-charcoal">
        A selection of my work across web and mobile.
      </p>

      <FilterBar allTags={allTags} />
    </main>
  );
}
