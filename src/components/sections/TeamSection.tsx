import { SectionIllustration } from "@/components/visuals/illustrations/SectionIllustration";
import { teamMembers } from "@/data/homepage";

export function TeamSection() {
  return (
    <section id="equipo" className="bg-[var(--mbx-bg-90)] py-20 md:py-32">
      <div className="mx-auto max-w-[80rem] px-[var(--padding-global)]">
        <div className="mx-auto mb-12 max-w-xl text-center md:mb-16">
          <h2 className="text-3xl font-medium tracking-tight text-theme md:text-4xl">
            El Equipo
          </h2>
          <p className="mt-4 text-lg text-mbx-text-secondary">
            Personas construyendo el futuro de la ingeniería energética abierta
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="group overflow-hidden rounded-2xl border border-mbx-border bg-[var(--mbx-bg-neutral-02)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-mbx-border">
                <SectionIllustration
                  id={member.visual}
                  className="h-full transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-medium text-theme">{member.name}</h3>
                <ul className="mt-2 space-y-1">
                  {member.roles.map((role) => (
                    <li key={role} className="text-sm text-mbx-text-secondary">
                      {role}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-medium text-mbx-primary">{member.title}</p>
                <blockquote className="mt-6 border-l-2 border-mbx-primary/40 pl-4 text-sm italic leading-relaxed text-mbx-text-secondary">
                  &ldquo;{member.quote}&rdquo;
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
