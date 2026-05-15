"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="grid min-h-[calc(100vh-96px)] items-center gap-10 py-10 lg:grid-cols-[1.05fr_.95fr]">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-100">
          <Sparkles className="size-4" /> AI hiring simulation for serious teams
        </div>
        <div className="space-y-5">
          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Interview readiness with a{" "}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
              real hiring signal
            </span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-400">
            Run a polished AI-led screening flow with candidate intake, environment checks, behavioral questions, coding review, and recruiter-grade evaluation.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 rounded-full bg-blue-500 px-6 text-white hover:bg-blue-400">
            <Link href="/candidate">Start Interview <ArrowRight className="size-4" /></Link>
          </Button>
          <div className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-zinc-300">
            <Clock className="size-4 text-emerald-400" /> Estimated duration: 38 minutes
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.55 }} className="glass-panel relative overflow-hidden rounded-3xl p-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-emerald-400/10" />
        <div className="relative rounded-2xl border border-white/10 bg-black/30 p-5">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-500">AI Interviewer</p>
              <h2 className="text-xl font-semibold text-white">Live technical screen</h2>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">Calibrated</span>
          </div>
          <div className="grid min-h-[430px] place-items-center rounded-2xl border border-white/10 bg-zinc-950/70">
            <div className="relative grid size-56 place-items-center rounded-full border border-blue-300/20 bg-blue-500/10 shadow-2xl shadow-blue-500/20">
              <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 2.2 }} className="absolute inset-5 rounded-full border border-cyan-300/20" />
              <div className="grid size-28 place-items-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 text-4xl font-semibold text-zinc-950">AI</div>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="typing-text text-sm text-zinc-300">Analyzing communication clarity, examples, and role alignment...</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
