"use client";

import { useEffect, useState } from "react";
import { FileScan, Mail, MapPin, Sparkles } from "lucide-react";

type StoredResume = {
  name: string;
  size: number;
  type: string;
  uploadedAt: string;
};

type CandidateDraft = {
  fullName: string;
  email: string;
  role: string;
  level: string;
  skills: string;
};

export default function ProfilePreview() {
  const [resume, setResume] = useState<StoredResume | null>(null);
  const [profile, setProfile] = useState<CandidateDraft | null>(null);

  useEffect(() => {
    const loadLocalData = () => {
      const storedResume = window.localStorage.getItem("aptora.resume");
      const storedProfile = window.localStorage.getItem("aptora.candidate");
      setResume(storedResume ? JSON.parse(storedResume) as StoredResume : null);
      setProfile(storedProfile ? JSON.parse(storedProfile) as CandidateDraft : null);
    };

    loadLocalData();
    window.addEventListener("storage", loadLocalData);
    window.addEventListener("focus", loadLocalData);
    window.addEventListener("candidate-profile-updated", loadLocalData);
    return () => {
      window.removeEventListener("storage", loadLocalData);
      window.removeEventListener("focus", loadLocalData);
      window.removeEventListener("candidate-profile-updated", loadLocalData);
    };
  }, []);

  const hasProfile = Boolean(profile?.fullName || profile?.email || profile?.role || profile?.skills);
  const skills = profile?.skills.split(",").map((skill) => skill.trim()).filter(Boolean) ?? [];
  const initials = profile?.fullName
    ? profile.fullName.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase()
    : "LK";

  return (
    <aside className="glass-panel rounded-3xl p-6">
      {hasProfile ? (
        <div className="flex items-center gap-4">
          <div className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-blue-400 to-emerald-300 text-xl font-bold text-zinc-950">{initials}</div>
          <div>
            <h2 className="text-xl font-semibold text-white">{profile?.fullName || "Candidate"}</h2>
            <p className="text-sm text-zinc-400">{profile?.role || "Role not entered"}</p>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-lg font-semibold text-white">Profile preview</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-500">Enter candidate details in the form to show Lokesh Kumar&apos;s profile here.</p>
        </div>
      )}
      {hasProfile && (
        <>
          <div className="mt-6 space-y-3 text-sm text-zinc-300">
            <p className="flex items-center gap-2"><Mail className="size-4 text-zinc-500" /> {profile?.email || "Email not entered"}</p>
            <p className="flex items-center gap-2"><MapPin className="size-4 text-zinc-500" /> Candidate location not provided</p>
            <p className="flex items-center gap-2"><Sparkles className="size-4 text-blue-300" /> {profile?.level || "Experience not entered"} candidate profile</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {(skills.length ? skills : ["Skills not entered"]).map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">{skill}</span>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
            Profile completeness updates from the details entered in the form.
          </div>
        </>
      )}
      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <FileScan className="size-4 text-blue-300" /> Resume analysis
        </div>
        {resume ? (
          <div className="mt-3 space-y-2 text-sm text-zinc-300">
            <p>{resume.name}</p>
            <p className="text-xs text-zinc-500">Detected frontend keywords: React, TypeScript, Design Systems</p>
            <div className="h-2 rounded-full bg-zinc-800">
              <div className="h-2 w-[78%] rounded-full bg-blue-500" />
            </div>
            <p className="text-xs text-blue-200">Role match estimate: 78%</p>
          </div>
        ) : (
          <p className="mt-3 text-sm leading-6 text-zinc-500">Upload a resume to show local analysis signals before the interview.</p>
        )}
      </div>
    </aside>
  );
}
