import { cn } from "@/lib/utils";

export function StatusBadge({ status }: { status: "Completed" | "Ongoing" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em]",
        status === "Completed"
          ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
          : "border-amber-300/20 bg-amber-300/10 text-amber-100"
      )}
    >
      {status}
    </span>
  );
}
