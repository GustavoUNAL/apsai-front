import { InteractiveMedia } from "@/components/visuals/InteractiveMedia";
import { researchContent } from "@/data/homepage";

export function ResearchSection() {
  return (
    <section id="investigacion" className="py-20 md:py-32">
      <div className="mx-auto max-w-[80rem] px-[var(--padding-global)]">
        <div className="rounded-2xl border border-mbx-border bg-gradient-to-b from-[var(--mbx-bg-neutral-02)] to-[var(--mbx-bg)] px-8 py-12 md:px-16 md:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-mbx-primary">
                {researchContent.title}
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-tight text-theme md:text-3xl">
                {researchContent.subtitle}
              </h2>
              <p className="mt-4 text-lg text-mbx-text-secondary">
                {researchContent.description}
              </p>
              <ul className="mt-8 space-y-3 lg:hidden">
                {researchContent.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-mbx-border bg-[var(--mbx-bg)] px-4 py-3 text-mbx-text-secondary"
                  >
                    <span className="text-mbx-primary" aria-hidden>
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <InteractiveMedia
                visual={researchContent.visual}
                alt={researchContent.alt}
                hotspots={researchContent.hotspots}
                aspect="16/10"
              />
              <ul className="hidden space-y-3 lg:block">
                {researchContent.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-mbx-border bg-[var(--mbx-bg)] px-4 py-3 text-mbx-text-secondary"
                  >
                    <span className="text-mbx-primary" aria-hidden>
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
