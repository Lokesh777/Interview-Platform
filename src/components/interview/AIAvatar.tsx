"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import Waveform from "./Waveform";

function AIAvatar() {
  return (
    <div className="glass-panel rounded-3xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">AI interviewer</h2>
        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-200">Speaking</span>
      </div>
      <div className="grid min-h-[330px] place-items-center rounded-2xl border border-white/10 bg-zinc-950/70">
        <div className="relative grid size-48 place-items-center rounded-full bg-blue-500/10">
          <motion.div animate={{ scale: [1, 1.14, 1], opacity: [0.55, 0.1, 0.55] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 rounded-full border border-blue-300/40" />
          <div className="grid size-28 place-items-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-200 text-zinc-950">
            <BrainCircuit className="size-12" />
          </div>
        </div>
      </div>
      <Waveform compact />
    </div>
  );
}

export default memo(AIAvatar);
