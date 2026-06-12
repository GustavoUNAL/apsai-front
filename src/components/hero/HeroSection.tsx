import { Button } from "@/components/ui/Button";
import { HeroCarousel } from "./HeroCarousel";

export function HeroSection() {
  return (
    <section className="overflow-hidden pb-16 pt-24 md:pb-20 md:pt-32 lg:pt-40">
      <div className="mx-auto max-w-[80rem] px-[var(--padding-global)]">
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-4xl text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.1]">
            Maps that do more
          </h1>
          <p className="mt-6 max-w-xl text-lg text-mbx-text-secondary md:text-xl">
            The location platform of choice for developers, automakers, and innovators
          </p>
          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="https://account.mapbox.com/auth/signup" variant="primary" external>
              Get started for free
            </Button>
            <Button href="https://www.mapbox.com/contact" variant="outline-dark">
              Contact us
            </Button>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <HeroCarousel />
        </div>

        <div className="mt-16 md:mt-24">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-white">
            Trusted by the industry leaders
          </p>
          <LogoRow />
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.mapbox.com/showcase/"
            className="link inline-flex items-center text-lg text-mbx-primary transition hover:text-[#3195ff]"
          >
            View customer stories <span className="arrow ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function LogoRow() {
  const logos = [
    "https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/65030fdee144f0f00244ef79_snowflake-logo-color-rgb.svg",
  ];

  const logoNames = [
    "BMW", "Meta", "Toyota", "BMW", "DoorDash", "Uber", "Snap", "Snowflake", "Strava", "Stripe",
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--mbx-bg)] to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--mbx-bg)] to-transparent md:w-24" />
      <div className="flex w-max gap-12 marquee-track opacity-60">
        {[...logoNames, ...logoNames].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex h-8 shrink-0 items-center text-sm font-semibold tracking-widest text-[#566171]"
          >
            {name}
          </div>
        ))}
      </div>
      {logos[0] && (
        <span className="sr-only">Partner logos including Snowflake and others</span>
      )}
    </div>
  );
}
