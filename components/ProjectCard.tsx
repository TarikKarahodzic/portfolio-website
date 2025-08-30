import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group block rounded-xl overflow-hidden border border-moss bg-moss hover:shadow-lg transition"
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
          <h3 className="text-lg font-semibold text-primary">{p.title}</h3>
          <span className="text-xs text-accent">{p.year}</span>
        </div>
        <p className="mt-2 text-sm text-primary/90 line-clamp-2">
          {p.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-accent text-charcoal">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
