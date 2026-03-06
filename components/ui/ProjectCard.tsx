import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { formatDate } from "@/lib/utils";
import type { CompletedProject } from "@/types/project";

export function ProjectCard({ project }: { project: CompletedProject }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="panel-soft group block rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200/20 hover:bg-white/[0.06]"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-sky-100/65">
            {project.repo}
          </p>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
            {project.category}
          </span>
        </div>
        <StatusBadge status={project.status} />
      </div>
      <h3 className="mb-3 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-sky-100">
        {project.title}
      </h3>
      <p className="text-sm leading-7 text-slate-300">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {project.language && <span>{project.language}</span>}
          {project.stars > 0 && <span>{project.stars} stars</span>}
          {project.updatedAt && (
            <span>Updated {formatDate(project.updatedAt)}</span>
          )}
        </div>
        <span className="font-mono uppercase tracking-[0.2em] text-slate-200 transition-transform group-hover:translate-x-1">
          Open
        </span>
      </div>
    </Link>
  );
}
