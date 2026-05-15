"use client";

import { Clock } from "lucide-react";
import { useTimer } from "@/hooks/useTimer";

export default function Timer() {
  const { formatted } = useTimer(428);
  return <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-200"><Clock className="size-4 text-blue-300" /> {formatted}</span>;
}
