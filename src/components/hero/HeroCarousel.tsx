"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { carouselSlides } from "@/data/homepage";
import { SectionIllustration } from "@/components/visuals/illustrations/SectionIllustration";

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false },
    [Autoplay({ delay: 5500, stopOnInteraction: true })],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="min-w-0 flex-[0_0_85%] pl-4 sm:flex-[0_0_70%] md:flex-[0_0_60%] lg:flex-[0_0_55%]"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden rounded-3xl border border-mbx-border transition-all duration-500 ${
                  index === selectedIndex
                    ? "carousel-slide-shadow scale-100 opacity-100"
                    : "scale-[0.92] opacity-50"
                }`}
              >
                <Link href={slide.link} className="group relative block h-full w-full">
                  <SectionIllustration id={slide.visual} className="h-full transition duration-700 group-hover:scale-[1.02]" />
                  <div className="carousel-slide-overlay pointer-events-none absolute inset-0" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <span className="mb-4 inline-block rounded-full bg-mbx-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wide text-mbx-primary">
                      {slide.badge}
                    </span>
                    <h3 className="max-w-lg text-xl font-medium leading-snug text-white md:text-2xl">
                      {slide.title}
                    </h3>
                    {"items" in slide && slide.items && (
                      <ul className="mt-4 hidden space-y-1 sm:block">
                        {slide.items.slice(0, 3).map((item) => (
                          <li
                            key={item}
                            className="text-sm text-white/80 before:mr-2 before:content-['•']"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    <span className="link mt-4 inline-flex items-center text-base text-white">
                      {slide.linkText} <span className="arrow ml-1">→</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={scrollPrev}
          className="flex h-12 w-12 items-center justify-center rounded-full text-mbx-text-muted transition hover:text-theme"
          aria-label="Diapositiva anterior"
        >
          <svg width="12" height="19" viewBox="0 0 12 19" fill="none">
            <path
              d="M10.485 17.971L2 9.485 10.485 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="flex h-12 w-12 items-center justify-center rounded-full text-mbx-text-muted transition hover:text-theme"
          aria-label="Siguiente diapositiva"
        >
          <svg width="12" height="19" viewBox="0 0 12 19" fill="none">
            <path
              d="M1.485 1l8.485 8.485-8.485 8.485"
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
