"use client";

import { memo } from "react";
import { Mic, Volume2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

function AnswerComposer({
  answer,
  onAnswerChange,
  listening,
  aiPrompt,
}: {
  answer: string;
  onAnswerChange: (value: string) => void;
  listening: boolean;
  aiPrompt: string;
}) {
  return (
    <div className="glass-panel rounded-3xl p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
          <Mic className={`size-5 ${listening ? "text-emerald-300" : "text-zinc-500"}`} />
          Candidate answer
        </h2>
        <span className={`rounded-full px-3 py-1 text-xs ${listening ? "bg-emerald-500/10 text-emerald-300" : "bg-zinc-800 text-zinc-400"}`}>
          {listening ? "Listening through microphone" : "Editable text answer"}
        </span>
      </div>
      {aiPrompt && (
        <div className="mb-4 flex gap-2 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-3 text-sm text-blue-100">
          <Volume2 className="mt-0.5 size-4 shrink-0" />
          {aiPrompt}
        </div>
      )}
      <Textarea
        data-answer-textarea
        value={answer}
        onChange={(event) => onAnswerChange(event.target.value)}
        placeholder="Speak after pressing Start Answer, or type your answer here..."
        className="min-h-32 rounded-2xl border-white/10 bg-zinc-950/70 text-white placeholder:text-zinc-600"
      />
    </div>
  );
}

export default memo(AnswerComposer);
