import { codingQuestion } from "@/data/codingQuestions";

export default function ProblemStatement() {
  return (
    <section className="glass-panel rounded-3xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">{codingQuestion.title}</h1>
        <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-200">{codingQuestion.difficulty}</span>
      </div>
      <p className="leading-7 text-zinc-300">{codingQuestion.description}</p>
      <h2 className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">Examples</h2>
      <div className="mt-3 space-y-3">
        {codingQuestion.examples.map((example, index) => (
          <div key={example.input} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
            <p className="text-sm font-medium text-white">Example {index + 1}</p>
            <pre className="mt-3 overflow-auto text-xs leading-6 text-zinc-300">{`Input: ${example.input}\nOutput: ${example.output}\n${example.explanation}`}</pre>
          </div>
        ))}
      </div>
      <h2 className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">Constraints</h2>
      <ul className="mt-3 space-y-2 text-sm text-zinc-400">
        {codingQuestion.constraints.map((constraint) => <li key={constraint}>{constraint}</li>)}
      </ul>
    </section>
  );
}
