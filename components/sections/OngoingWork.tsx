import { SectionTitle } from "@/components/ui/SectionTitle";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { OngoingProject } from "@/types/project";

export function OngoingWork({ items }: { items: OngoingProject[] }) {
  if (items.length === 0) return null;

  return (
    <section id="ongoing" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="In Progress"
        title="Ongoing Work"
        subtitle="Manual entries for the research and infrastructure work that is active now, without labeling it as completed just because a repository exists."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {items.map((item) => (
          <div key={item.slug} className="panel-soft rounded-[26px] p-6">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <StatusBadge status={item.status} />
            </div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
              Current Focus
            </p>
            <p className="text-sm leading-7 text-slate-300">
              {item.currentFocus}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
