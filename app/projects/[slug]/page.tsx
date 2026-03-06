import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getCompletedProjects, getProjectBySlug } from "@/lib/projects";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getCompletedProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const meta = [
    project.language,
    project.stars > 0 ? `${project.stars} stars` : null,
    project.updatedAt ? `Updated ${formatDate(project.updatedAt)}` : null,
  ].filter(Boolean);

  return (
    <div className="px-6 pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
        >
          <span className="font-mono text-xs uppercase tracking-[0.24em]">
            Back
          </span>
          <span>Projects</span>
        </Link>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_320px]">
          <article>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-sky-100/70">
                {project.category}
              </span>
              <StatusBadge status={project.status} />
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {project.summary}
            </p>

            {meta.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                {meta.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/8 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-10 space-y-4">
              <section className="panel rounded-[28px] p-7">
                <p className="eyebrow mb-4">Challenge</p>
                <p className="text-sm leading-7 text-slate-300">
                  {project.narrative.challenge}
                </p>
              </section>
              <section className="panel rounded-[28px] p-7">
                <p className="eyebrow mb-4">Implementation</p>
                <p className="text-sm leading-7 text-slate-300">
                  {project.narrative.build}
                </p>
              </section>
              <section className="panel rounded-[28px] p-7">
                <p className="eyebrow mb-4">Result</p>
                <p className="text-sm leading-7 text-slate-300">
                  {project.narrative.outcome}
                </p>
              </section>
            </div>

            {project.repositorySummary && (
              <section className="panel-soft mt-4 rounded-[28px] p-7">
                <p className="eyebrow mb-4">Repository Snapshot</p>
                <p className="text-sm leading-7 text-slate-300">
                  {project.repositorySummary}
                </p>
              </section>
            )}
          </article>

          <aside className="space-y-4">
            <div className="panel rounded-[28px] p-6">
              <p className="eyebrow mb-5">Links</p>
              <div className="flex flex-col gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-sky-200 px-5 text-sm font-medium text-slate-950 transition hover:bg-sky-100"
                >
                  View on GitHub
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-5 text-sm font-medium text-white transition hover:border-sky-200/20 hover:bg-white/[0.06]"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="panel-soft rounded-[28px] p-6">
              <p className="eyebrow mb-5">Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/8 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.topics.length > 0 && (
              <div className="panel-soft rounded-[28px] p-6">
                <p className="eyebrow mb-5">Topics</p>
                <div className="flex flex-wrap gap-2">
                  {project.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-white/8 px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
