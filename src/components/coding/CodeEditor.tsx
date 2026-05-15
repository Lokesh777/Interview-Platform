"use client";

import { Play, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";

export default function CodeEditor({
  language,
  onLanguageChange,
  code,
  onCodeChange,
  onRun,
}: {
  language: string;
  onLanguageChange: (value: string) => void;
  code: string;
  onCodeChange: (value: string) => void;
  onRun: () => void;
}) {
  const lineCount = code.split("\n").length;

  return (
    <section className="glass-panel overflow-hidden rounded-3xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-4">
        <div>
          <p className="text-sm font-medium text-white">Solution editor</p>
          <p className="text-xs text-zinc-500">JavaScript runs locally in your browser against real test cases.</p>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSelector value={language} onChange={onLanguageChange} />
          <Button onClick={onRun} variant="outline" className="rounded-xl border-white/10 bg-white/[0.03] text-zinc-200"><Play className="size-4" /> Run</Button>
          <Button className="rounded-xl bg-blue-500 text-white hover:bg-blue-400"><Send className="size-4" /> Submit</Button>
        </div>
      </div>
      <div className="grid grid-cols-[52px_1fr] bg-[#0d1117] font-mono text-sm">
        <div className="select-none border-r border-white/10 py-5 text-right text-zinc-600">
          {Array.from({ length: lineCount }).map((_, index) => <div key={index} className="px-3 leading-6">{index + 1}</div>)}
        </div>
        <textarea
          value={code}
          onChange={(event) => onCodeChange(event.target.value)}
          spellCheck={false}
          className="min-h-[430px] resize-y bg-transparent p-5 font-mono leading-6 text-zinc-200 outline-none"
        />
      </div>
    </section>
  );
}
