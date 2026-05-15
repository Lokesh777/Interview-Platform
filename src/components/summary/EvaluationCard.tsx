import { CheckCircle2, TriangleAlert } from "lucide-react";

const strengths = ["Strong product framing with clear metrics", "Confident React and TypeScript architecture choices", "Calm communication under follow-up pressure"];
const improvements = ["Could quantify accessibility impact more clearly", "System design answer needed deeper failure-mode discussion"];

export default function EvaluationCard() {
  return (
    <section className="glass-panel rounded-3xl p-6">
      <h2 className="text-2xl font-semibold text-white">AI evaluation</h2>
      <p className="mt-3 leading-7 text-zinc-400">The candidate shows senior-level frontend judgment, especially around component systems, product measurement, and collaboration. Recommended for recruiter debrief with a focused architecture follow-up.</p>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Strengths</h3>
          <div className="space-y-3">
            {strengths.map((item) => <p key={item} className="flex gap-3 text-sm text-zinc-300"><CheckCircle2 className="size-4 shrink-0 text-emerald-400" /> {item}</p>)}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">Areas to improve</h3>
          <div className="space-y-3">
            {improvements.map((item) => <p key={item} className="flex gap-3 text-sm text-zinc-300"><TriangleAlert className="size-4 shrink-0 text-amber-300" /> {item}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
