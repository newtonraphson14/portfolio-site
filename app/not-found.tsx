import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-6 pb-24 pt-32">
      <div className="panel mx-auto max-w-3xl rounded-[32px] p-10 text-center">
        <p className="eyebrow mb-4">Not Found</p>
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          That project page does not exist.
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Return to the project archive to browse the completed work currently
          surfaced in the portfolio.
        </p>
        <Link
          href="/projects"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-sky-200 px-6 text-sm font-medium text-slate-950 transition hover:bg-sky-100"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
