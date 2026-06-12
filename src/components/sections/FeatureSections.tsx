import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { featureSections } from "@/data/homepage";

export function FeatureSections() {
  return (
    <section className="py-16 md:py-[90px]">
      <div className="mx-auto max-w-[80rem] px-[var(--padding-global)]">
        {featureSections.map((section) => (
          <div
            key={section.title}
            className={`mb-16 grid items-center gap-10 last:mb-0 md:mb-24 lg:grid-cols-2 lg:gap-16 ${
              section.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                {section.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-mbx-text-secondary">
                {section.description}
              </p>
              <div className="mt-6">
                <Button href={section.link} variant="outline-dark">
                  {section.linkLabel} <span className="arrow ml-1">→</span>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-[var(--mbx-bg-neutral-03)]">
              {section.mediaType === "video" ? (
                <div className="relative aspect-[16/11] w-full">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={section.poster}
                    className="h-full w-full object-cover"
                  >
                    <source src={section.video} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div className="relative aspect-[16/11] w-full">
                  <Image
                    src={section.image!}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
