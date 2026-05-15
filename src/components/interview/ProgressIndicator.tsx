import { memo } from "react";
import { Progress } from "@/components/ui/progress";

function ProgressIndicator({ current, total, value }: { current: number; total: number; value: number }) {
  return (
    <div className="glass-panel rounded-2xl p-4">
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-zinc-300">Question {current} of {total}</span>
        <span className="text-blue-300">{value}%</span>
      </div>
      <Progress value={value} className="h-2 bg-zinc-800" />
    </div>
  );
}

export default memo(ProgressIndicator);
