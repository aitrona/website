"use client";

import { useEffect, useMemo, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const nextTheme = useMemo<Theme>(() => (theme === "dark" ? "light" : "dark"), [theme]);

  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
    document.documentElement.classList.toggle("dark", t === "dark");
  }, []);

  function toggle() {
    setTheme((prev) => {
      const t: Theme = prev === "dark" ? "light" : "dark";
      window.localStorage.setItem("theme", t);
      document.documentElement.classList.toggle("dark", t === "dark");
      return t;
    });
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${nextTheme} theme`}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/70 text-foreground backdrop-blur transition hover:bg-muted/60",
        className
      )}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}

