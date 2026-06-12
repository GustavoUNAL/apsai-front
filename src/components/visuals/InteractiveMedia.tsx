"use client";

import { useCallback, useState, type MouseEvent } from "react";
import { SectionIllustration } from "./illustrations/SectionIllustration";
import type { IllustrationId } from "./illustrations/types";

export type MediaHotspot = {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
};

type InteractiveMediaProps = {
  visual: IllustrationId;
  alt: string;
  hotspots?: MediaHotspot[];
  aspect?: "16/11" | "4/3" | "16/10";
  rounded?: "2xl" | "3xl";
};

export function InteractiveMedia({
  visual,
  alt,
  hotspots = [],
  aspect = "16/11",
  rounded = "2xl",
}: InteractiveMediaProps) {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const aspectClass =
    aspect === "4/3" ? "aspect-[4/3]" : aspect === "16/10" ? "aspect-[16/10]" : "aspect-[16/11]";
  const roundedClass = rounded === "3xl" ? "rounded-3xl" : "rounded-2xl";

  const handleMouseMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 6;
    setTilt({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setActiveHotspot(null);
  }, []);

  return (
    <div
      className={`group relative overflow-hidden border border-mbx-border bg-[var(--mbx-bg-neutral-03)] ${aspectClass} ${roundedClass}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="img"
      aria-label={alt}
    >
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{ transform: `translate(${tilt.x}px, ${tilt.y}px) scale(1.02)` }}
      >
        <SectionIllustration id={visual} className="h-full" />
      </div>

      {hotspots.map((spot) => (
        <button
          key={spot.id}
          type="button"
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
          onMouseEnter={() => setActiveHotspot(spot.id)}
          onFocus={() => setActiveHotspot(spot.id)}
          onBlur={() => setActiveHotspot(null)}
          onClick={() =>
            setActiveHotspot((current) => (current === spot.id ? null : spot.id))
          }
          aria-label={spot.label}
          aria-expanded={activeHotspot === spot.id}
        >
          <span
            className={`relative flex h-4 w-4 items-center justify-center rounded-full border-2 border-mbx-primary bg-[var(--mbx-bg)] shadow-lg transition-transform ${
              activeHotspot === spot.id ? "scale-125" : "scale-100 group-hover:scale-110"
            }`}
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mbx-primary opacity-40" />
          </span>

          {activeHotspot === spot.id && (
            <span className="absolute left-1/2 top-6 z-30 w-44 -translate-x-1/2 rounded-lg border border-mbx-border bg-[var(--mbx-bg-neutral-02)] p-3 text-left shadow-xl">
              <span className="block text-xs font-medium text-theme">{spot.label}</span>
              <span className="mt-1 block text-[11px] leading-snug text-mbx-text-secondary">
                {spot.description}
              </span>
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
