"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

export default function ScoreCard({ label, value, tone = "blue" }: { label: string; value: number; tone?: "blue" | "emerald" | "red" }) {
  const color = tone === "emerald" ? "text-emerald-300" : tone === "red" ? "text-red-300" : "text-blue-300";
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="glass-panel rounded-2xl p-5">
      <p className="text-sm text-zinc-400">{label}</p>
      <p className={`mt-3 text-3xl font-semibold ${color}`}>{value}%</p>
      <Progress value={value} className="mt-4 h-2 bg-zinc-800" />
    </motion.div>
  );
}
