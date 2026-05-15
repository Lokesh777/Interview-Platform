"use client";

import { memo, useCallback } from "react";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { InterviewQuestion } from "@/types/interview";

function QuestionCard({ question }: { question: InterviewQuestion }) {
  const speakQuestion = useCallback(() => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(question.prompt);
    utterance.rate = 0.92;
    utterance.pitch = 0.95;
    window.speechSynthesis.speak(utterance);
  }, [question.prompt]);

  return (
    <div className="glass-panel rounded-3xl p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-200">{question.competency}</span>
          <span className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-zinc-400">{question.difficulty}</span>
        </div>
        <Button onClick={speakQuestion} variant="outline" className="rounded-full border-white/10 bg-white/[0.03] text-zinc-200 hover:bg-white/10">
          <Volume2 className="size-4" /> Play voice
        </Button>
      </div>
      <h2 className="text-2xl font-semibold leading-9 text-white">{question.prompt}</h2>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{question.intent}</p>
    </div>
  );
}

export default memo(QuestionCard);
