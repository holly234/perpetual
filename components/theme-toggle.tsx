"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const resetKey = "perpetual-theme-default-light";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const saved = localStorage.getItem("theme") as Theme | null;
  return localStorage.getItem(resetKey) ? saved ?? "light" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    localStorage.setItem(resetKey, "true");
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

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
