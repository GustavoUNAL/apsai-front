import Link from "next/link";
import { OpsaiLogo } from "@/components/icons/OpsaiLogo";
import { externalLinks, navLinks } from "@/data/homepage";

const footerLinks = {
  proyecto: {
    title: "Proyecto",
    links: [
      { label: "Inicio", href: "#proyecto" },
      { label: "Visión", href: "#vision" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  comunidad: {
    title: "Comunidad",
    links: [
      { label: "Contribuir", href: "#comunidad" },
      { label: "Equipo", href: "#equipo" },
      { label: "Investigación", href: "#investigacion" },
    ],
  },
  recursos: {
    title: "Recursos",
    links: [
      { label: "Documentación", href: externalLinks.docs },
      { label: "GitHub", href: externalLinks.github, external: true },
    ],
  },
};

export function Footer() {
  return (
    <footer className="border-t border-mbx-border bg-[var(--mbx-bg)] text-mbx-text-secondary">
      <div className="mx-auto max-w-[80rem] px-[var(--padding-global)] py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <OpsaiLogo />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Open Power Systems AI — ingeniería abierta para simular, analizar y
              optimizar sistemas eléctricos con inteligencia artificial.
            </p>
          </div>

          <FooterColumn title={footerLinks.proyecto.title}>
            <ul className="space-y-2 text-sm">
              {footerLinks.proyecto.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-theme">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title={footerLinks.comunidad.title}>
            <ul className="space-y-2 text-sm">
              {footerLinks.comunidad.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-theme">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title={footerLinks.recursos.title}>
            <ul className="space-y-2 text-sm">
              {footerLinks.recursos.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-theme"
                    {...("external" in link && link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-mbx-border pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-xs text-mbx-text-muted">
            <span>© {new Date().getFullYear()} Open Power Systems AI</span>
            {navLinks.slice(0, 3).map((link) => (
              <a key={link.label} href={link.href} className="hover:text-theme">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <SocialLink href={externalLinks.github} label="GitHub" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-theme">{title}</h3>
      {children}
    </div>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-mbx-text-muted transition hover:text-theme"
      aria-label={label}
    >
      {label}
    </a>
  );
}
