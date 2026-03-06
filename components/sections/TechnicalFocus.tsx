import { SectionTitle } from "@/components/ui/SectionTitle";
import type { FocusArea } from "@/types/project";

export function TechnicalFocus({ areas }: { areas: FocusArea[] }) {
  return (
    <section id="focus" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Core Areas"
        title="Technical Focus"
        subtitle="Three domains define the structure of the portfolio and the way projects are grouped throughout the site."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {areas.map((area, index) => (
          <div key={area.title} className="panel rounded-[28px] p-6">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-sky-100/70">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mb-3 text-xl font-semibold tracking-tight text-white">
              {area.title}
            </h3>
            <p className="text-sm leading-7 text-slate-300">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
