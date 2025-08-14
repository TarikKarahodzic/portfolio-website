"use client";

import { useMemo, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function FilterBar({ allTags }: { allTags: string[] }) {
  const [active, setActive] = useState<string | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter(p => p.tags.includes(active));
  }, [active]);

  return (
    <>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActive("All")}
          className={`px-3 py-1 rounded border text-sm ${active === "All" ? "bg-blue-600 text-white border-blue-600" : "border-gray-300 dark:border-gray-700"}`}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={`px-3 py-1 rounded border text-sm ${active === tag ? "bg-blue-600 text-white border-blue-600" : "border-gray-300 dark:border-gray-700"}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Render filtered cards here if you prefer FilterBar to control the list: */}
      {/* Or remove this section and keep rendering in page.tsx */}
      {/* 
      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </section>
      */}
    </>
  );
}
