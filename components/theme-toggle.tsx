"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const resetKey = "perpetual-theme-default-light";
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const next = localStorage.getItem(resetKey) ? saved ?? "light" : "light";
    localStorage.setItem(resetKey, "true");
    localStorage.setItem("theme", next);
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="theme-toggle inline-flex h-10 items-center gap-2 rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] px-3 text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
    >
      {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
      <Monitor size={14} className="opacity-45" />
    </button>
  );
}
