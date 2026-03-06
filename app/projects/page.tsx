import type { Metadata } from "next";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getCompletedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Curated completed projects across astrophysics, scientific computing, and cloud infrastructure.",
};

export default async function ProjectsPage() {
  const projects = await getCompletedProjects();

  return (
    <div className="px-6 pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_260px] lg:items-end">
          <SectionTitle
            eyebrow="Archive"
            title="Projects"
            subtitle="Completed work curated from GitHub, then rewritten locally so the portfolio reflects the project itself instead of raw repository metadata."
          />
          <div className="panel rounded-[28px] p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-sky-100/70">
              Curated Set
            </p>
            <p className="mt-3 text-4xl font-semibold text-white">
              {projects.length.toString().padStart(2, "0")}
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              completed projects currently surfaced in the site.
            </p>
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="panel-soft rounded-[28px] p-8">
            <p className="text-sm leading-7 text-slate-300">
              No completed projects are available yet. Add a curated repository
              to `data/featured-repos.ts` and define its portfolio copy in
              `data/project-overrides.ts`.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
