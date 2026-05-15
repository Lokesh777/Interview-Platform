"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, CheckCircle2, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CameraCheck() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<"idle" | "ready" | "blocked">("idle");
  const streamRef = useRef<MediaStream | null>(null);

  async function requestCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      window.localStorage.setItem("aptora.cameraPermission", "granted");
      setStatus("ready");
    } catch {
      window.localStorage.setItem("aptora.cameraPermission", "blocked");
      setStatus("blocked");
    }
  }

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <div className="glass-panel rounded-3xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-white"><Camera className="size-5 text-blue-300" /> Camera</h2>
        {status === "ready" ? (
          <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300"><CheckCircle2 className="size-3.5" /> Permission granted</span>
        ) : status === "blocked" ? (
          <span className="flex items-center gap-1 rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-300"><TriangleAlert className="size-3.5" /> Blocked</span>
        ) : (
          <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">Not checked</span>
        )}
      </div>
      <div className="relative grid aspect-video place-items-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,.28),transparent_34%),linear-gradient(135deg,#18181b,#09090b)]">
        <video ref={videoRef} autoPlay muted playsInline className="absolute inset-0 h-full w-full object-cover" />
        {status !== "ready" && (
          <div className="relative z-10 text-center">
            <div className="mx-auto grid size-20 place-items-center rounded-full border border-white/10 bg-white/10">
              <Camera className="size-8 text-zinc-300" />
            </div>
            <Button onClick={requestCamera} className="mt-4 rounded-full bg-blue-500 text-white hover:bg-blue-400">
              Allow camera
            </Button>
            <p className="mt-3 max-w-sm text-xs text-zinc-500">Your browser will ask for real camera permission. The stream stays local to this page.</p>
          </div>
        )}
      </div>
    </div>
  );
}
