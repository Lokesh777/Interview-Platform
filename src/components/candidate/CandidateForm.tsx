"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ResumeUpload from "./ResumeUpload";

type CandidateDraft = {
  fullName: string;
  email: string;
  role: string;
  level: string;
  skills: string;
};

const fields: Array<{ key: keyof CandidateDraft; label: string; placeholder: string }> = [
  { key: "fullName", label: "Full name", placeholder: "Lokesh Kumar" },
  { key: "email", label: "Email", placeholder: "lokeshdevgan777@gmail.com" },
  { key: "role", label: "Role applied for", placeholder: "Frontend Engineer" },
  { key: "level", label: "Experience level", placeholder: "Mid-level" },
];

export default function CandidateForm() {
  const router = useRouter();
  const [draft, setDraft] = useState<CandidateDraft>({
    fullName: "",
    email: "",
    role: "",
    level: "",
    skills: "",
  });

  function updateDraft(key: keyof CandidateDraft, value: string) {
    const nextDraft = { ...draft, [key]: value };
    setDraft(nextDraft);
    window.localStorage.setItem("aptora.candidate", JSON.stringify(nextDraft));
    window.dispatchEvent(new Event("candidate-profile-updated"));
  }

  const isValid = Boolean(draft.fullName && draft.email && draft.role);

  function continueToSetup() {
    if (!isValid) return;

    window.localStorage.setItem("aptora.candidate", JSON.stringify(draft));
    window.dispatchEvent(new Event("candidate-profile-updated"));
    router.push("/setup");
  }

  return (
    <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="glass-panel rounded-3xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-blue-300">Candidate details</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Build interview context</h1>
        </div>
        <span className={`hidden items-center gap-2 rounded-full px-3 py-1 text-sm sm:flex ${isValid ? "bg-emerald-500/10 text-emerald-300" : "bg-zinc-800 text-zinc-400"}`}><CheckCircle2 className="size-4" /> {isValid ? "Valid" : "Waiting"}</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.label} className="space-y-2">
            <span className="text-sm text-zinc-400">{field.label}</span>
            <Input
              value={draft[field.key]}
              onChange={(event) => updateDraft(field.key, event.target.value)}
              placeholder={field.placeholder}
              className="h-12 rounded-2xl border-white/10 bg-zinc-950/70 text-white placeholder:text-zinc-600"
            />
          </label>
        ))}
      </div>
      <label className="mt-4 block space-y-2">
        <span className="text-sm text-zinc-400">Skills</span>
        <Textarea
          value={draft.skills}
          onChange={(event) => updateDraft("skills", event.target.value)}
          placeholder="React, TypeScript, Next.js, Tailwind CSS"
          className="min-h-28 rounded-2xl border-white/10 bg-zinc-950/70 text-white placeholder:text-zinc-600"
        />
      </label>
      <div className="mt-4">
        <ResumeUpload />
      </div>
      <div className="mt-6 flex justify-end">
        <Button
          disabled={!isValid}
          onClick={continueToSetup}
          className="h-11 rounded-full bg-blue-500 px-5 text-white hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400"
        >
          Continue to setup <ArrowRight className="size-4" />
        </Button>
      </div>
    </motion.section>
  );
}
