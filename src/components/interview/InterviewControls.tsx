"use client";

import { memo } from "react";
import Link from "next/link";
import { Mic, Send, SkipForward, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

function InterviewControls({ onNext, onStartAnswer, listening }: { onNext: () => void; onStartAnswer: () => void; listening: boolean }) {
  return (
    <div className="glass-panel fixed inset-x-4 bottom-4 z-30 mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3 rounded-3xl p-3">
      <Button onClick={onStartAnswer} className="rounded-full bg-emerald-500 px-5 text-white hover:bg-emerald-400"><Mic className="size-4" /> {listening ? "Listening" : "Start Answer"}</Button>
      <Button onClick={onNext} className="rounded-full bg-blue-500 px-5 text-white hover:bg-blue-400"><Send className="size-4" /> Submit Answer</Button>
      <Button onClick={onNext} variant="outline" className="rounded-full border-white/10 bg-white/[0.03] text-zinc-200 hover:bg-white/10"><SkipForward className="size-4" /> Skip Question</Button>
      <Button asChild variant="destructive" className="rounded-full px-5">
        <Link href="/coding"><Square className="size-4" /> End Interview</Link>
      </Button>
    </div>
  );
}

export default memo(InterviewControls);
