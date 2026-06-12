"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function NavBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("navBannerDismissed") === "true") {
      setVisible(false);
    }
  }, []);

  if (!visible) return null;

  const dismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(false);
    sessionStorage.setItem("navBannerDismissed", "true");
  };

  return (
    <a
      href="https://www.mapbox.com/build"
      className="relative block overflow-hidden bg-[var(--mbx-bg-neutral-02)] text-white transition hover:opacity-95"
    >
      <div className="absolute inset-0">
        <Image
          src="https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/6a03429bb02c38a6837c6dfe_build-2026_banner-desktop-bg-2.avif"
          alt=""
          fill
          className="hidden object-cover md:block"
          priority
        />
        <Image
          src="https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/6a03430fadfb504ea02adace_build-2026_banner-mobile-bg-2.avif"
          alt=""
          fill
          className="object-cover md:hidden"
          priority
        />
        <div className="absolute inset-0 bg-[var(--mbx-bg)]/80" />
      </div>
      <div className="relative mx-auto flex max-w-[80rem] items-center justify-center gap-3 px-[var(--padding-global)] py-3 md:justify-between md:py-2">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-wide text-mbx-text-secondary">
            September 15 – 17 | Virtual
          </span>
        </div>
        <span className="hidden rounded-full border border-white/40 px-4 py-1.5 text-xs font-medium md:inline-block">
          Save the date
        </span>
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-mbx-text-secondary hover:text-white md:right-6"
          aria-label="Dismiss banner"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 7L17 17M7 17L17 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </a>
  );
}
