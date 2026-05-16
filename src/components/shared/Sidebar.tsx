"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, CheckCircle2 } from "lucide-react";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function MobileSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white lg:hidden"
      >
        <Menu className="size-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[999] lg:hidden">
          <div
            className="fixed inset-0 bg-black/85"
            onClick={() => setOpen(false)}
          />

          <div className="fixed right-0 top-0 z-[1000] h-screen w-[280px] border-r border-white/10 bg-[#09090B] p-5 shadow-[0_0_50px_rgba(0,0,0,0.7)]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                Interview Flow
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="grid size-9 place-items-center rounded-lg border border-white/10 text-zinc-300"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="space-y-2">
              {ROUTES.slice(1).map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border border-transparent px-4 py-3 text-sm text-zinc-400 transition hover:border-white/10 hover:bg-white/[0.03] hover:text-white",
                    pathname === route.href &&
                      "border-blue-500/20 bg-blue-500/10 text-blue-100"
                  )}
                >
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}