"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OpsaiLogo } from "@/components/icons/OpsaiLogo";
import { Button } from "@/components/ui/Button";
import { ThemeSwitch } from "@/components/theme/ThemeSwitch";
import { externalLinks, navLinks } from "@/data/homepage";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`border-b transition-colors duration-300 ${
        scrolled || mobileOpen
          ? "border-mbx-border bg-[var(--mbx-bg)]"
          : "border-transparent bg-[var(--mbx-header-bg)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[80rem] items-center justify-between gap-4 px-[var(--padding-global)] xl:h-[4.5rem]">
        <Link href="/" className="shrink-0" aria-label="OPSAI inicio">
          <OpsaiLogo />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-1 xl:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-sm text-mbx-text-secondary transition hover:text-theme"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 xl:flex">
          <ThemeSwitch />
          <a
            href={externalLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-mbx-text-secondary transition hover:text-theme"
          >
            GitHub
          </a>
          <Button href={externalLinks.contribute} variant="nav">
            Contribuir
          </Button>
        </div>

        <div className="flex items-center xl:hidden">
          <button
            type="button"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
            aria-expanded={mobileOpen}
          >
            <span
              className={`h-0.5 w-5 bg-[var(--mbx-text-primary)] transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-[var(--mbx-text-primary)] transition ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-[var(--mbx-text-primary)] transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-[var(--mbx-bg)] xl:hidden"
          style={{ top: "var(--site-header-height)" }}
        >
          <div className="flex flex-col gap-1 px-[var(--padding-global)] py-6">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="border-b border-mbx-border py-4 text-lg text-theme"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-6 flex items-center justify-between border-b border-mbx-border py-4">
              <span className="text-sm text-mbx-text-secondary">Tema</span>
              <ThemeSwitch />
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Button href={externalLinks.contribute} variant="primary">
                Contribuir al proyecto
              </Button>
              <Button href={externalLinks.github} variant="outline-dark" external>
                GitHub
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
