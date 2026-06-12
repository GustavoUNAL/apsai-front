"use client";

import { useState } from "react";
import { InteractiveMedia } from "@/components/visuals/InteractiveMedia";
import { roadmapPhases } from "@/data/homepage";

export function RoadmapSection() {
  const [activeTab, setActiveTab] = useState(0);
  const phase = roadmapPhases[activeTab];

  return (
    <section id="roadmap" className="bg-[var(--mbx-bg-90)] py-20 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[80rem] px-[var(--padding-global)]">
        <div className="mx-auto mb-12 max-w-xl text-center md:mb-16">
          <h2 className="text-3xl font-medium tracking-tight text-theme md:text-4xl">Roadmap</h2>
          <p className="mt-4 text-lg text-mbx-text-secondary">
            ¿Qué estamos construyendo? Un camino progresivo desde los fundamentos
            matemáticos hasta una plataforma colaborativa con inteligencia artificial.
          </p>
        </div>

        <div className="mb-10 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {roadmapPhases.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                activeTab === index
                  ? "border-[var(--mbx-tab-active-bg)] bg-[var(--mbx-tab-active-bg)] text-[var(--mbx-tab-active-text)]"
                  : "border-[var(--mbx-tab-inactive-border)] text-theme hover:border-mbx-primary/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <InteractiveMedia
            key={phase.id}
            visual={phase.visual}
            alt={phase.alt}
            hotspots={phase.hotspots}
            aspect="4/3"
            rounded="3xl"
          />

          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-mbx-primary">
              {phase.label}
            </p>
            <h3 className="text-2xl font-medium leading-snug text-theme md:text-3xl">
              {phase.title}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-mbx-text-secondary">
              {phase.description}
            </p>
            <ul className="mt-8 space-y-3">
              {phase.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 text-base text-mbx-text-secondary"
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${
                      item.done
                        ? "bg-green-500/20 text-green-500"
                        : "bg-[var(--mbx-bg-neutral-04)] text-mbx-text-muted"
                    }`}
                    aria-hidden
                  >
                    {item.done ? "✓" : "○"}
                  </span>
                  <span className={item.done ? "text-theme" : ""}>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
