import Link from "next/link";
import { BadgeCheck, Download, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { candidate } from "@/data/candidate";

export default function FinalStatus() {
  return (
    <section className="glass-panel rounded-3xl p-6">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <div className="grid size-14 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-300"><BadgeCheck className="size-7" /></div>
          <div>
            <p className="text-sm text-emerald-300">Interview completed · Submitted for Review</p>
            <h1 className="text-3xl font-semibold text-white">{candidate.fullName}</h1>
            <p className="mt-1 text-sm text-zinc-400">{candidate.role} · 4 questions attempted · 37m 18s</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="rounded-full border-white/10 bg-white/[0.03] text-zinc-200"><Download className="size-4" /> Export report</Button>
          <Button asChild className="rounded-full bg-blue-500 text-white hover:bg-blue-400">
            <Link href="/candidate"><RotateCcw className="size-4" /> New session</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
