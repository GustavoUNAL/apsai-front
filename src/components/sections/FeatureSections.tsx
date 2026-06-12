import { Button } from "@/components/ui/Button";
import { InteractiveMedia } from "@/components/visuals/InteractiveMedia";
import { featureSections } from "@/data/homepage";

export function FeatureSections() {
  return (
    <section className="py-16 md:py-[90px]">
      <div className="mx-auto max-w-[80rem] px-[var(--padding-global)]">
        {featureSections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className={`mb-16 grid items-center gap-10 last:mb-0 md:mb-24 lg:grid-cols-2 lg:gap-16 ${
              section.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-mbx-primary">
                {section.title}
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-tight text-theme md:text-3xl">
                {section.subtitle}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-mbx-text-secondary">
                {section.description}
              </p>
              <ul className="mt-6 space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-mbx-text-secondary before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-mbx-primary before:content-['']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={section.link} variant="outline-dark">
                  {section.linkLabel} <span className="arrow ml-1">→</span>
                </Button>
              </div>
            </div>

            <InteractiveMedia
              visual={section.visual}
              alt={section.alt}
              hotspots={section.hotspots}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
