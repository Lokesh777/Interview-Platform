import type { CodingQuestion } from "@/types/coding";

export const codingQuestion: CodingQuestion = {
  title: "Rank Candidate Signals",
  difficulty: "Medium",
  description:
    "Given interview signal scores from multiple competencies, return the top K competencies by weighted score. Ties should keep the original order.",
  constraints: ["1 <= signals.length <= 100", "0 <= score <= 100", "1 <= k <= signals.length"],
  examples: [
    {
      input: "signals = [{name:'React', score:92, weight:0.4}, {name:'System Design', score:85, weight:0.7}], k = 1",
      output: "['System Design']",
      explanation: "System Design has the higher weighted score.",
    },
    {
      input: "signals = [{name:'UX', score:80, weight:1}, {name:'API', score:80, weight:1}], k = 2",
      output: "['UX', 'API']",
      explanation: "The tie preserves input order.",
    },
  ],
  starterCode: {
    TypeScript: `type Signal = { name: string; score: number; weight: number };

export function topSignals(signals: Signal[], k: number): string[] {
  return signals
    .map((signal, index) => ({ ...signal, index, weighted: signal.score * signal.weight }))
    .sort((a, b) => b.weighted - a.weighted || a.index - b.index)
    .slice(0, k)
    .map((signal) => signal.name);
}`,
    JavaScript: `function topSignals(signals, k) {
  // Write your solution here.
  return [];
}`,
    Python: `def top_signals(signals, k):
    ranked = sorted(
        enumerate(signals),
        key=lambda item: (-(item[1]["score"] * item[1]["weight"]), item[0])
    )
    return [signal["name"] for _, signal in ranked[:k]]`,
  },
};
