"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrainCircuit, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_NAME, ROUTES } from "@/lib/constants";
import { isCandidateProfileComplete, readCandidateProfile } from "@/lib/candidateProfile";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [candidateComplete, setCandidateComplete] = useState(false);

  useEffect(() => {
    const syncCandidateState = () => {
      setCandidateComplete(isCandidateProfileComplete(readCandidateProfile()));
    };

    syncCandidateState();
    window.addEventListener("candidate-profile-updated", syncCandidateState);
    window.addEventListener("storage", syncCandidateState);
    return () => {
      window.removeEventListener("candidate-profile-updated", syncCandidateState);
      window.removeEventListener("storage", syncCandidateState);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl border border-blue-400/30 bg-blue-500/15 text-blue-200 shadow-lg shadow-blue-500/10">
            <BrainCircuit className="size-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-wide text-white">{APP_NAME}</span>
            <span className="hidden text-xs text-zinc-500 sm:block">AI Interview OS</span>
          </span>
        </Link>
        {candidateComplete ? (
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
            {ROUTES.slice(1).map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:text-white",
                  pathname === route.href && "bg-white/10 text-white"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        ) : (
          <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-400 md:block">
            Complete candidate details to unlock the interview flow
          </div>
        )}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href={candidateComplete ? "/setup" : "/candidate"} className="hidden items-center gap-1 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 sm:flex">
            {candidateComplete ? "Continue" : "Start"} <ChevronRight className="size-4" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
