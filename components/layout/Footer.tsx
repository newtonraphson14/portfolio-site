import { siteIdentity } from "@/data/site";

export function Footer() {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&to=${siteIdentity.email}`;

  return (
    <footer className="border-t border-white/8 bg-[#040812]/90">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          <div className="space-y-4">
            <p className="text-lg font-semibold tracking-tight text-white">
              {siteIdentity.name}
            </p>
            <p className="max-w-lg text-sm leading-7 text-slate-400">
              Curated completed projects from GitHub, ongoing work tracked
              manually — a portfolio structure designed to keep research and
              engineering work readable.
            </p>
            <p className="text-sm leading-7 text-slate-500">
              {siteIdentity.availability}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:items-end md:justify-end">
            <div className="flex items-center gap-6">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
              >
                Email
              </a>
              <a
                href={siteIdentity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
              >
                GitHub
              </a>
              <a
                href={siteIdentity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
