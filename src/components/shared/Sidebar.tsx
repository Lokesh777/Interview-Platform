"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="glass-panel hidden h-fit rounded-2xl p-3 lg:block">
      <p className="px-3 pb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Flow</p>
      <div className="space-y-1">
        {ROUTES.slice(1).map((route) => (
          <Link key={route.href} href={route.href} className={cn("flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white", pathname === route.href && "bg-blue-500/15 text-blue-100")}>
            <CheckCircle2 className="size-4 text-emerald-400" />
            {route.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
