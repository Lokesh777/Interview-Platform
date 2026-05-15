"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const stored = window.localStorage.getItem("aptora.theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(stored ? stored === "dark" : prefersDark);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem("aptora.theme", dark ? "dark" : "light");
  }, [dark]);

  return { dark, toggleTheme: () => setDark((value) => !value) };
}
