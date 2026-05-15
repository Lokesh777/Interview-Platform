import { memo } from "react";
import { transcript } from "@/data/questions";

function TranscriptPanel() {
  return (
    <div className="glass-panel rounded-3xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Transcript</h2>
        <span className="text-xs text-emerald-300">Auto-saved 8s ago</span>
      </div>
      <div className="max-h-72 space-y-3 overflow-auto pr-1">
        {transcript.map((line) => (
          <div key={`${line.time}-${line.message}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <div className="mb-1 flex justify-between text-xs">
              <span className={line.speaker === "AI" ? "text-blue-300" : "text-emerald-300"}>{line.speaker}</span>
              <span className="text-zinc-500">{line.time}</span>
            </div>
            <p className="text-sm leading-6 text-zinc-300">{line.message}</p>
          </div>
        ))}
        <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-3 text-sm text-blue-100">Streaming candidate response...</div>
      </div>
    </div>
  );
}

export default memo(TranscriptPanel);
