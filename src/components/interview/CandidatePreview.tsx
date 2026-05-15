"use client";

import { useEffect, useRef, useState } from "react";
import { memo } from "react";
import { Camera, Eye, Video } from "lucide-react";

function CandidatePreview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [status, setStatus] = useState<"checking" | "ready" | "needs-setup">("checking");
  const [candidateName, setCandidateName] = useState("Lokesh Kumar");

  async function startCameraFromSetupPermission() {
    const setupPermission = window.localStorage.getItem("aptora.cameraPermission");
    if (setupPermission !== "granted") {
      setStatus("needs-setup");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setStatus("ready");
    } catch {
      setStatus("needs-setup");
    }
  }

  useEffect(() => {
    const id = window.setTimeout(() => {
      const stored = window.localStorage.getItem("aptora.candidate");
      if (stored) {
        const profile = JSON.parse(stored) as { fullName?: string };
        if (profile.fullName) setCandidateName(profile.fullName);
      }
      void startCameraFromSetupPermission();
    }, 0);

    return () => {
      window.clearTimeout(id);
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <div className="glass-panel rounded-3xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Candidate preview</h2>
        <span className="flex items-center gap-1 rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-300"><span className="size-2 animate-pulse rounded-full bg-red-500" /> REC</span>
      </div>
      <div className="relative grid min-h-[330px] place-items-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,.18),transparent_32%),linear-gradient(135deg,#18181b,#09090b)]">
        <video ref={videoRef} autoPlay muted playsInline className="absolute inset-0 h-full w-full object-cover" />
        {status !== "ready" && (
          <div className="relative z-10 text-center">
            <div className="mx-auto grid size-24 place-items-center rounded-full border border-white/10 bg-white/10 text-2xl font-semibold"><Camera className="size-9 text-zinc-300" /></div>
            <p className="mt-4 text-sm text-zinc-300">{candidateName}</p>
            <p className="mt-2 max-w-xs text-xs leading-5 text-zinc-500">
              {status === "checking" ? "Connecting to the camera approved during setup..." : "Camera was not approved in setup. Return to setup to grant permission."}
            </p>
          </div>
        )}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm text-zinc-300"><Eye className="mb-2 size-4 text-emerald-300" /> Focus 94%</div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm text-zinc-300"><Video className="mb-2 size-4 text-blue-300" /> Framing good</div>
      </div>
    </div>
  );
}

export default memo(CandidatePreview);
