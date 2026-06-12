import { Button } from "@/components/ui/Button";
import { HeroCarousel } from "./HeroCarousel";
import { externalLinks, heroPillars } from "@/data/homepage";

export function HeroSection() {
  return (
    <section id="proyecto" className="overflow-hidden pb-16 pt-24 md:pb-20 md:pt-32 lg:pt-40">
      <div className="mx-auto max-w-[80rem] px-[var(--padding-global)]">
        <div className="flex flex-col items-center text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-mbx-primary">
            Open Power Systems AI
          </p>
          <h1 className="max-w-4xl text-4xl font-medium tracking-tight text-theme sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.1]">
            Ingeniería abierta para el futuro de los sistemas energéticos
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-mbx-text-secondary md:text-xl">
            Construimos herramientas abiertas para simular, analizar y optimizar sistemas
            eléctricos utilizando ingeniería avanzada e inteligencia artificial.
          </p>
          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={externalLinks.contribute} variant="primary">
              Unirse al Proyecto
            </Button>
            <Button href={externalLinks.docs} variant="outline-dark">
              Documentación
            </Button>
            <Button href={externalLinks.github} variant="outline-dark" external>
              GitHub
            </Button>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <HeroCarousel />
        </div>

        <div className="mt-16 md:mt-24">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-theme">
            Pilares del proyecto
          </p>
          <PillarRow />
        </div>

        <div className="mt-10 text-center">
          <a
            href="#roadmap"
            className="link inline-flex items-center text-lg text-mbx-primary transition hover:text-[#3195ff]"
          >
            Explorar el roadmap <span className="arrow ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function PillarRow() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--mbx-bg)] to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--mbx-bg)] to-transparent md:w-24" />
      <div className="flex w-max gap-10 marquee-track">
        {[...heroPillars, ...heroPillars].map((pillar, i) => (
          <div
            key={`${pillar}-${i}`}
            className="shrink-0 text-sm font-medium text-mbx-text-muted"
          >
            {pillar}
          </div>
        ))}
      </div>
    </div>
  );
}
