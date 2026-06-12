"use client";

import Link from "next/link";

export function NavBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="border-b border-mbx-border bg-[var(--mbx-bg-neutral-02)]">
      <div className="mx-auto grid max-w-[80rem] grid-cols-[1fr_auto] items-center gap-3 px-[var(--padding-global)] py-2.5 sm:grid-cols-[1fr_auto_auto]">
        <p className="min-w-0 text-xs font-medium uppercase tracking-wide text-mbx-text-secondary sm:text-sm">
          <span className="text-theme">Construido en público</span>
          <span className="mx-2 hidden text-mbx-text-muted sm:inline">·</span>
          <span className="hidden sm:inline">
            Proyecto abierto de ingeniería energética
          </span>
        </p>

        <Link
          href="#comunidad"
          className="hidden rounded-full border border-[var(--mbx-btn-outline-border)] px-4 py-1 text-xs font-medium text-theme transition hover:border-mbx-primary sm:inline-block"
        >
          Únete a la comunidad
        </Link>

        <button
          type="button"
          onClick={onDismiss}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-mbx-text-secondary transition hover:bg-[var(--mbx-bg-neutral-03)] hover:text-theme"
          aria-label="Cerrar banner"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M7 7L17 17M7 17L17 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
