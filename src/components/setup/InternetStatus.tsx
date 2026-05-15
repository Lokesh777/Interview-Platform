import { Wifi } from "lucide-react";

export default function InternetStatus() {
  return (
    <div className="glass-panel rounded-3xl p-5">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-white"><Wifi className="size-5 text-emerald-300" /> Connection</h2>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {["38 ms", "98 Mbps", "Stable"].map((item, index) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-lg font-semibold text-white">{item}</p>
            <p className="text-xs text-zinc-500">{["Latency", "Download", "Status"][index]}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">Live connection badge: Excellent</div>
    </div>
  );
}
