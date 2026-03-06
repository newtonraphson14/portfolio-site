import Link from "next/link";
import { currentDirection, siteIdentity } from "@/data/site";

type HeroProps = {
  completedCount: number;
  ongoingCount: number;
  focusCount: number;
};

export function Hero({
  completedCount,
  ongoingCount,
  focusCount,
}: HeroProps) {
  const stats = [
    {
      label: "Completed",
      value: completedCount.toString().padStart(2, "0"),
    },
    {
      label: "Ongoing",
      value: ongoingCount.toString().padStart(2, "0"),
    },
    {
      label: "Focus Areas",
      value: focusCount.toString().padStart(2, "0"),
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.35fr)_360px] lg:items-start">
        <div>
          <p className="eyebrow mb-5">Portfolio / Research Systems</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {siteIdentity.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {siteIdentity.heroSummary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex h-11 items-center rounded-full bg-sky-500 px-6 text-sm font-medium text-white transition hover:bg-sky-400"
            >
              View Projects
            </Link>
            <a
              href={siteIdentity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-white/12 bg-white/[0.03] px-6 text-sm font-medium text-white transition hover:border-sky-200/25 hover:bg-white/[0.06]"
            >
              GitHub
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="panel-soft rounded-[22px] px-5 py-4"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <aside className="panel rounded-[30px] p-6 sm:p-7">
          <p className="eyebrow mb-4">Current Direction</p>
          <p className="text-sm leading-7 text-slate-300">
            {siteIdentity.availability}
          </p>
          <div className="mt-6 space-y-4">
            {currentDirection.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 border-t border-white/8 pt-4 first:border-t-0 first:pt-0"
              >
                <span className="font-mono text-xs tracking-[0.22em] text-sky-200/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
