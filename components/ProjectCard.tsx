import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group block rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg transition"
    >
      <div className="relative aspect-[16/9]">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover group-hover:scale-[1.03] transition"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <span className="text-xs text-gray-500">{p.year}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {p.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
