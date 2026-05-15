"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/constants";

export default function RouteWarmup() {
  const router = useRouter();

  useEffect(() => {
    const warm = () => {
      ROUTES.forEach((route) => {
        if (route.href !== "/") router.prefetch(route.href);
      });
    };

    const requestIdle = window.requestIdleCallback;
    const cancelIdle = window.cancelIdleCallback;

    if (requestIdle && cancelIdle) {
      const id = requestIdle(warm, { timeout: 2000 });
      return () => cancelIdle(id);
    }

    const timeoutId = globalThis.setTimeout(warm, 800);
    return () => globalThis.clearTimeout(timeoutId);
  }, [router]);

  return null;
}
