import { SectionTitle } from "@/components/ui/SectionTitle";
import { formatDate } from "@/lib/utils";
import type { GitHubHighlight } from "@/types/project";

export function GitHubHighlights({ items }: { items: GitHubHighlight[] }) {
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Activity Layer"
        title="GitHub Highlights"
        subtitle="A compact view of recent repository activity. Useful as supporting evidence, but intentionally secondary to the curated project section."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {items.map((repo) => (
          <a
            key={repo.name + repo.updatedAt}
            href={repo.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="panel-soft group rounded-[24px] p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-200/20"
          >
            <div className="flex h-full flex-col justify-between gap-4">
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sky-100/65">
                    Repository
                  </p>
                  <span className="text-xs text-slate-500">
                    Updated {formatDate(repo.updatedAt)}
                  </span>
                </div>
                <p className="text-lg font-medium text-white group-hover:text-sky-100">
                  {repo.name}
                </p>
                {repo.description && (
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {repo.description}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                {repo.language && <span>{repo.language}</span>}
                {repo.stars > 0 && <span>{repo.stars} stars</span>}
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/8 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-400"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
