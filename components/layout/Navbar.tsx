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
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            GitHub
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
