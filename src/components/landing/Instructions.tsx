"use client";

import { motion } from "framer-motion";

const items = ["Complete your candidate profile", "Verify camera, microphone, and connection", "Answer behavioral and technical prompts", "Finish the coding round and review summary"];

export default function Instructions() {
  return (
    <section className="glass-panel my-8 rounded-3xl p-6">
      <h2 className="text-2xl font-semibold text-white">How the session works</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {items.map((item, index) => (
          <motion.div key={item} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <span className="text-sm text-blue-300">0{index + 1}</span>
            <p className="mt-3 text-sm font-medium leading-6 text-zinc-200">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
