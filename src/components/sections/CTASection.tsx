import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-[80rem] px-[var(--padding-global)]">
        <div className="rounded-2xl border border-mbx-border bg-gradient-to-b from-[var(--mbx-bg-neutral-02)] to-[var(--mbx-bg)] px-8 py-16 text-center md:px-16 md:py-20">
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-mbx-text-secondary">
            Create an account or talk to one of our experts.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="https://account.mapbox.com/auth/signup" variant="primary" external>
              Sign up for free
            </Button>
            <Button href="https://www.mapbox.com/contact" variant="outline-dark">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
