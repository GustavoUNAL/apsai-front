"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { carouselSlides } from "@/data/homepage";

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
                className={`relative aspect-[16/10] overflow-hidden rounded-3xl transition-all duration-500 ${
                  index === selectedIndex
                    ? "carousel-slide-shadow scale-100 opacity-100"
                    : "scale-[0.92] opacity-50"
                }`}
              >
                {slide.type === "video" ? (
                  <div className="relative h-full w-full">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={slide.poster}
                      className="h-full w-full object-cover"
                    >
                      <source src={slide.video} type="video/mp4" />
                    </video>
                    <a
                      href={slide.vimeoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/20 transition hover:bg-black/30"
                      aria-label="Play video"
                    >
                      <PlayIcon />
                    </a>
                    <div className="carousel-slide-overlay pointer-events-none absolute inset-0" />
                  </div>
                ) : (
                  <a href={slide.link} className="group relative block h-full w-full">
                    <Image
                      src={slide.image}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 85vw, 55vw"
                    />
                    <div className="carousel-slide-overlay pointer-events-none absolute inset-0" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                      <span className="mb-4 inline-block rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wide text-green-400">
                        {slide.badge}
                      </span>
                      <h3 className="max-w-md text-xl font-medium leading-snug text-white md:text-2xl">
                        {slide.title}
                      </h3>
                      <span className="link mt-4 inline-flex items-center text-base text-white">
                        {slide.linkText} <span className="arrow ml-1">→</span>
                      </span>
                    </div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={scrollPrev}
          className="flex h-12 w-12 items-center justify-center rounded-full text-mbx-text-muted transition hover:text-white"
          aria-label="Previous slide"
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
          className="flex h-12 w-12 items-center justify-center rounded-full text-mbx-text-muted transition hover:text-white"
          aria-label="Next slide"
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

function PlayIcon() {
  return (
    <svg width="71" height="82" viewBox="0 0 71 82" fill="none" className="drop-shadow-lg">
      <path
        d="M69 37.536c2.667 1.54 2.667 5.389 0 6.928L6 80.837c-2.667 1.54-6-.385-6-3.464V4.627C0 1.548 3.333-.377 6 1.163l63 36.373z"
        fill="#fff"
      />
    </svg>
  );
}
