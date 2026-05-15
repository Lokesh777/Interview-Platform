"use client";

import { motion } from "framer-motion";
import { BarChart3, Code2, MonitorCheck, UserRoundCheck } from "lucide-react";

const features = [
  { icon: UserRoundCheck, title: "Candidate Intake", text: "Structured profile capture with skill context and resume state." },
  { icon: MonitorCheck, title: "Setup Simulation", text: "Camera, microphone, network, and readiness checks before the session." },
  { icon: Code2, title: "Coding Round", text: "Realistic editor, prompt, examples, language selector, and terminal output." },
  { icon: BarChart3, title: "Recruiter Summary", text: "Scorecards, strengths, risks, and final decision placeholders." },
];

export default function Features() {
  return (
    <section className="py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm text-blue-300">Platform capabilities</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Every stage of a modern interview loop.</h2>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div key={feature.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="glass-panel rounded-2xl p-5 premium-ring">
            <feature.icon className="mb-5 size-6 text-blue-300" />
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
