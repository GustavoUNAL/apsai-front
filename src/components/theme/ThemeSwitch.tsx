"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border border-mbx-border bg-[var(--mbx-bg-neutral-03)] p-1 transition-colors hover:border-mbx-primary/50"
    >
      <span
        className={`pointer-events-none absolute left-1.5 text-[10px] transition-opacity ${
          isLight ? "opacity-40" : "opacity-100"
        }`}
        aria-hidden
      >
        <MoonIcon />
      </span>
      <span
        className={`pointer-events-none absolute right-1.5 text-[10px] transition-opacity ${
          isLight ? "opacity-100" : "opacity-40"
        }`}
        aria-hidden
      >
        <SunIcon />
      </span>
      <span
        className={`relative z-10 h-6 w-6 rounded-full bg-mbx-primary shadow-sm transition-transform duration-300 ${
          isLight ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function MoonIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-theme">
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a6.5 6.5 0 1 0 11.5 11.5z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-theme">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
  );
}
