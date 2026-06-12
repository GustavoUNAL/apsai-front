import { Button } from "@/components/ui/Button";
import { externalLinks } from "@/data/homepage";

export function CTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-[80rem] px-[var(--padding-global)]">
        <div className="rounded-2xl border border-mbx-border bg-gradient-to-b from-[var(--mbx-bg-neutral-02)] to-[var(--mbx-bg)] px-8 py-16 text-center md:px-16 md:py-20">
          <h2 className="text-3xl font-medium tracking-tight text-theme md:text-4xl">
            El futuro de la energía será abierto e inteligente
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-mbx-text-secondary">
            Únete a la construcción de una nueva generación de herramientas para
            sistemas de potencia.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base italic text-mbx-text-muted">
            &ldquo;Donde los sistemas de potencia se encuentran con la inteligencia
            artificial.&rdquo;
          </p>
          <p className="mt-4 text-sm font-medium text-mbx-primary">
            Open Power Systems AI (OPSAI)
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={externalLinks.contribute} variant="primary">
              Contribuir al proyecto
            </Button>
            <Button href={externalLinks.github} variant="outline-dark" external>
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
