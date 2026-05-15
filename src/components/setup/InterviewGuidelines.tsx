import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const guidelines = ["Keep your face visible and stay in a quiet room.", "Answer with specific examples, metrics, and tradeoffs.", "Use the coding round to explain assumptions before implementation.", "Camera and microphone checks use real browser permissions. No recording is uploaded."];

export default function InterviewGuidelines() {
  return (
    <div className="glass-panel rounded-3xl p-6">
      <h2 className="text-xl font-semibold text-white">Interview guidelines</h2>
      <div className="mt-5 space-y-3">
        {guidelines.map((item) => (
          <p key={item} className="flex gap-3 text-sm leading-6 text-zinc-300"><CheckCircle2 className="mt-1 size-4 shrink-0 text-emerald-400" /> {item}</p>
        ))}
      </div>
      <Button asChild className="mt-6 h-11 w-full rounded-full bg-blue-500 text-white hover:bg-blue-400">
        <Link href="/interview">Start interview <ArrowRight className="size-4" /></Link>
      </Button>
    </div>
  );
}
