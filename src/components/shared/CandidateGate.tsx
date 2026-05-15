"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isCandidateProfileComplete, readCandidateProfile } from "@/lib/candidateProfile";
import PanelSkeleton from "./PanelSkeleton";

export default function CandidateGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const complete = isCandidateProfileComplete(readCandidateProfile());
      setAllowed(complete);
      setChecked(true);

      if (!complete) {
        router.replace("/candidate");
      }
    }, 0);

    return () => window.clearTimeout(id);
  }, [router]);

  if (!checked || !allowed) {
    return <PanelSkeleton className="min-h-[360px]" />;
  }

  return children;
}
