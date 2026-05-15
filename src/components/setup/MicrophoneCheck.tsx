"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, CheckCircle2, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import Waveform from "@/components/interview/Waveform";

export default function MicrophoneCheck() {
  const [status, setStatus] = useState<"idle" | "ready" | "blocked">("idle");
  const streamRef = useRef<MediaStream | null>(null);

  async function requestMicrophone() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true });
      streamRef.current = stream;
      setStatus("ready");
    } catch {
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
        <h2 className="flex items-center gap-2 text-lg font-semibold text-white"><Mic className="size-5 text-blue-300" /> Microphone</h2>
        {status === "ready" ? (
          <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300"><CheckCircle2 className="size-3.5" /> Permission granted</span>
        ) : status === "blocked" ? (
          <span className="flex items-center gap-1 rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-300"><TriangleAlert className="size-3.5" /> Blocked</span>
        ) : (
          <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">Not checked</span>
        )}
      </div>
      <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6">
        {status === "ready" ? (
          <>
            <Waveform />
            <p className="mt-3 text-center text-sm text-zinc-400">Microphone permission is active. Voice level is ready.</p>
          </>
        ) : (
          <div className="text-center">
            <Mic className="mx-auto size-9 text-zinc-400" />
            <Button onClick={requestMicrophone} className="mt-4 rounded-full bg-blue-500 text-white hover:bg-blue-400">
              Allow microphone
            </Button>
            <p className="mt-3 text-xs text-zinc-500">Required for a realistic interview setup check.</p>
          </div>
        )}
      </div>
    </div>
  );
}
