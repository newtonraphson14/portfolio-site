import Image from "next/image";
import Link from "next/link";
import { siteIdentity } from "@/data/site";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#07101f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
              src="/avatar.jpg"
              alt={siteIdentity.name}
              width={36}
              height={36}
              className="rounded-full border border-white/10"
            />
          <span className="flex flex-col">
            <span className="text-sm font-medium tracking-tight text-white">
              {siteIdentity.name}
            </span>
            <span className="text-xs text-slate-500">{siteIdentity.role}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/#projects"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            Selected Projects
          </Link>
          <Link
            href="/#ongoing"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            Ongoing Work
          </Link>
          <Link
            href="/projects"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            Projects
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={siteIdentity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 sm:hidden"
              aria-label="GitHub"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
            <span className="hidden text-sm sm:inline">GitHub</span>
          </a>
          <a
            href={siteIdentity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-slate-400 transition-colors hover:text-white sm:inline-flex"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
