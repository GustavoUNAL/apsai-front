"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MapboxLogo } from "@/components/icons/MapboxLogo";
import { Button } from "@/components/ui/Button";
import { navProducts, navSolutions } from "@/data/homepage";

const mainNav = [
  { label: "Products", type: "products" as const },
  { label: "Solutions", type: "solutions" as const },
  { label: "Developers", type: "link" as const, href: "https://www.mapbox.com/developers" },
  { label: "Company", type: "link" as const, href: "https://www.mapbox.com/company" },
  { label: "Resources", type: "link" as const, href: "https://www.mapbox.com/blog" },
  { label: "Pricing", type: "link" as const, href: "https://www.mapbox.com/pricing" },
  { label: "Contact us", type: "link" as const, href: "https://www.mapbox.com/contact" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeProductTab, setActiveProductTab] = useState(0);
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

  const activeProduct = navProducts[activeProductTab];

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`border-b border-transparent transition-colors duration-300 ${
          scrolled || mobileOpen || openDropdown
            ? "border-mbx-border bg-[var(--mbx-bg)]"
            : "bg-[var(--mbx-bg)]/90 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[80rem] items-center justify-between gap-6 px-[var(--padding-global)] xl:h-[4.5rem]">
          <Link href="/" className="shrink-0 text-white" aria-label="Mapbox home">
            <MapboxLogo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden flex-1 items-center gap-1 xl:flex">
            {mainNav.map((item) =>
              item.type === "products" || item.type === "solutions" ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.type)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 px-3 py-2 text-sm text-mbx-text-secondary transition hover:text-white ${
                      openDropdown === item.type ? "text-mbx-primary" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown />
                  </button>

                  {openDropdown === item.type && item.type === "products" && (
                    <div className="absolute left-0 top-full w-[min(90vw,56rem)] pt-2">
                      <div className="grid grid-cols-[12rem_1fr] overflow-hidden rounded-lg border border-mbx-border bg-[var(--mbx-bg-neutral-02)] shadow-2xl">
                        <div className="border-r border-mbx-border p-2">
                          {navProducts.map((tab, i) => (
                            <button
                              key={tab.id}
                              type="button"
                              onMouseEnter={() => setActiveProductTab(i)}
                              className={`block w-full rounded-md px-4 py-3 text-left text-sm transition ${
                                activeProductTab === i
                                  ? "bg-[var(--mbx-bg-neutral-03)] text-white"
                                  : "text-mbx-text-secondary hover:text-white"
                              }`}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>
                        <div className="grid gap-1 p-4 sm:grid-cols-2">
                          {activeProduct.links.map((link) => (
                            <a
                              key={link.title}
                              href={link.href}
                              className="group rounded-md p-3 transition hover:bg-[var(--mbx-bg-neutral-03)]"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-white group-hover:text-mbx-primary">
                                  {link.title}
                                </span>
                                {"tag" in link && link.tag && (
                                  <span className="rounded bg-green-500/20 px-1.5 py-0.5 text-[10px] font-medium uppercase text-green-400">
                                    {link.tag}
                                  </span>
                                )}
                              </div>
                              <p className="mt-1 text-xs text-mbx-text-secondary">{link.desc}</p>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {openDropdown === item.type && item.type === "solutions" && (
                    <div className="absolute left-0 top-full w-[min(90vw,48rem)] pt-2">
                      <div className="grid grid-cols-2 gap-1 rounded-lg border border-mbx-border bg-[var(--mbx-bg-neutral-02)] p-4 shadow-2xl lg:grid-cols-3">
                        {navSolutions.map((link) => (
                          <a
                            key={link.title}
                            href={link.href}
                            className="group rounded-md p-3 transition hover:bg-[var(--mbx-bg-neutral-03)]"
                          >
                            <span className="text-sm font-medium text-white group-hover:text-mbx-primary">
                              {link.title}
                            </span>
                            <p className="mt-1 text-xs text-mbx-text-secondary">{link.desc}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm text-mbx-text-secondary transition hover:text-white"
                >
                  {item.label}
                </a>
              ),
            )}
          </div>

          <div className="hidden items-center gap-4 xl:flex">
            <a
              href="https://account.mapbox.com/auth/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-mbx-text-secondary transition hover:text-white"
            >
              Log in
            </a>
            <Button href="https://account.mapbox.com/auth/signup" variant="nav" external>
              Sign up
            </Button>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`h-0.5 w-5 bg-white transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="fixed inset-0 top-16 z-40 overflow-y-auto bg-[var(--mbx-bg)] xl:hidden">
            <div className="flex flex-col gap-1 px-[var(--padding-global)] py-6">
              {mainNav.map((item) => (
                <a
                  key={item.label}
                  href={"href" in item ? item.href : "#"}
                  className="border-b border-mbx-border py-4 text-lg text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Button href="https://account.mapbox.com/auth/signup" variant="primary" external>
                  Sign up
                </Button>
                <Button href="https://account.mapbox.com/auth/signin" variant="outline-dark" external>
                  Log in
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function ChevronDown() {
  return (
    <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden>
      <path
        d="M3.87796 4.56356C3.67858 4.79379 3.32142 4.79379 3.12204 4.56356L0.319371 1.32733C0.0389327 1.00351 0.268959 0.5 0.697336 0.5L6.30267 0.500001C6.73104 0.500001 6.96107 1.00351 6.68063 1.32733L3.87796 4.56356Z"
        fill="currentColor"
      />
    </svg>
  );
}
