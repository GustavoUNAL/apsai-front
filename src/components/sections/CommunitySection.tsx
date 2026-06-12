import { Button } from "@/components/ui/Button";
import { InteractiveMedia } from "@/components/visuals/InteractiveMedia";
import { communityContent, externalLinks } from "@/data/homepage";

export function CommunitySection() {
  return (
    <section id="comunidad" className="py-20 md:py-32">
      <div className="mx-auto max-w-[80rem] px-[var(--padding-global)]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-mbx-primary">
              {communityContent.title}
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-theme md:text-4xl">
              {communityContent.subtitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-mbx-text-secondary">
              {communityContent.description}
            </p>
            <p className="mt-6 text-sm font-medium uppercase tracking-wider text-theme">
              Buscamos:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {communityContent.seeking.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-mbx-border bg-[var(--mbx-bg-neutral-02)] px-4 py-2 text-sm text-mbx-text-secondary"
                >
                  {role}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button href={externalLinks.contribute} variant="primary">
                Contribuir al proyecto
              </Button>
            </div>
          </div>

          <InteractiveMedia
            visual={communityContent.visual}
            alt={communityContent.alt}
            hotspots={communityContent.hotspots}
            aspect="4/3"
          />
        </div>
      </div>
    </section>
  );
}
