"use client";

import { memo } from "react";
import { motion } from "framer-motion";

function Waveform({ compact = false }: { compact?: boolean }) {
  const bars = [26, 42, 18, 54, 34, 64, 28, 48, 22, 58, 38, 46];
  return (
    <div className={`flex items-center justify-center gap-1 ${compact ? "h-8" : "h-16"}`}>
      {bars.map((height, index) => (
        <motion.span
          key={index}
          animate={{ height: [height * 0.45, height, height * 0.55] }}
          transition={{ repeat: Infinity, duration: 1.1, delay: index * 0.05 }}
          className="w-1 rounded-full bg-gradient-to-t from-blue-500 to-cyan-200"
          style={{ height }}
        />
      ))}
    </div>
  );
}

export default memo(Waveform);
