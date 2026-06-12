"use client";

import Image from "next/image";
import { useState } from "react";
import { customerStories } from "@/data/homepage";

export function CustomerStories() {
  const [activeTab, setActiveTab] = useState(0);
  const story = customerStories[activeTab];

  return (
    <section className="bg-[var(--mbx-bg-90)] py-20 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[80rem] px-[var(--padding-global)]">
        <div className="mx-auto mb-12 max-w-xl text-center md:mb-16">
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
            Customer stories
          </h2>
          <p className="mt-4 text-lg text-mbx-text-secondary">
            The world&apos;s leading businesses, from startups to global enterprises, build
            with Mapbox
          </p>
        </div>

        <div className="mb-10 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {customerStories.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                activeTab === index
                  ? "border-white bg-white text-black"
                  : "border-[#566171] text-white hover:border-white/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              key={story.id}
              src={story.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <div className="mb-5 h-8 text-white">
              <StoryLogo logo={story.logo} />
            </div>
            <h3 className="text-2xl font-medium leading-snug text-white md:text-3xl">
              {story.title}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-mbx-text-secondary">
              {story.description}
            </p>
            <a
              href={story.link}
              className="link mt-8 inline-flex items-center text-lg text-mbx-primary transition hover:text-[#3195ff]"
            >
              {story.linkLabel} <span className="arrow ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryLogo({ logo }: { logo: string }) {
  const labels: Record<string, string> = {
    bmw: "BMW",
    weather: "The Weather Company",
    kraken: "Kraken",
    tmobile: "T-Mobile",
    doordash: "DoorDash",
  };
  return (
    <span className="text-lg font-semibold tracking-wide text-white/90">
      {labels[logo] ?? logo}
    </span>
  );
}
