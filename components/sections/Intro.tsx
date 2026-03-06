import { siteIdentity } from "@/data/site";

export function Intro() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-6 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_340px]">
        <div className="panel rounded-[30px] p-8 sm:p-10">
          <p className="eyebrow mb-5">Introduction</p>
          <div className="space-y-5 text-base leading-8 text-slate-300">
            {siteIdentity.introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="panel-soft rounded-[30px] p-8">
          <p className="eyebrow mb-5">Working Model</p>
          <div className="space-y-5 text-sm leading-7 text-slate-300">
            <p>
              Completed projects come from a curated GitHub allowlist and use
              local copy overrides so each card reads like portfolio material,
              not raw repository metadata.
            </p>
            <p>
              Ongoing work stays manual inside the site repo, which keeps
              unfinished research visible without pretending it is complete.
            </p>
            <p>
              Technical focus stays fixed around astrophysics, scientific
              computing, and infrastructure, so the identity of the site remains
              stable as repositories change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
