import Link from "next/link";
import { MapboxLogo } from "@/components/icons/MapboxLogo";

const footerLinks = {
  products: {
    title: "Products",
    groups: [
      {
        heading: "Maps",
        links: [
          { label: "Maps Overview", href: "https://www.mapbox.com/maps" },
          { label: "Mapbox GL JS", href: "https://www.mapbox.com/mapbox-gljs" },
          { label: "Mobile Maps SDK", href: "https://www.mapbox.com/mobile-maps-sdk" },
        ],
      },
      {
        heading: "Search",
        links: [
          { label: "Search Overview", href: "https://www.mapbox.com/search-service" },
          { label: "Geocoding", href: "https://www.mapbox.com/geocoding" },
        ],
      },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { label: "Automotive", href: "https://www.mapbox.com/automotive" },
      { label: "On-Demand Logistics", href: "https://www.mapbox.com/on-demand-logistics" },
      { label: "Weather", href: "https://www.mapbox.com/weather" },
      { label: "Retail", href: "https://www.mapbox.com/retail" },
    ],
  },
  developers: {
    title: "Developers",
    links: [
      { label: "Documentation", href: "https://docs.mapbox.com" },
      { label: "Quickstart", href: "https://docs.mapbox.com/help/getting-started/" },
      { label: "Support", href: "https://www.mapbox.com/support" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "Who we are", href: "https://www.mapbox.com/company" },
      { label: "Careers", href: "https://www.mapbox.com/careers", tag: "HIRING" },
      { label: "Blog", href: "https://www.mapbox.com/blog" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="border-t border-mbx-border bg-[var(--mbx-bg)] text-mbx-text-secondary">
      <div className="mx-auto max-w-[80rem] px-[var(--padding-global)] py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block text-white">
              <MapboxLogo />
            </Link>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href="https://account.mapbox.com/auth/signup" className="hover:text-white">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="https://www.mapbox.com/pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://www.mapbox.com/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <FooterColumn title={footerLinks.products.title}>
            {footerLinks.products.groups.map((group) => (
              <div key={group.heading} className="mb-6 last:mb-0">
                <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-mbx-text-muted">
                  {group.heading}
                </h4>
                <ul className="space-y-2 text-sm">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </FooterColumn>

          <FooterColumn title={footerLinks.solutions.title}>
            <ul className="space-y-2 text-sm">
              {footerLinks.solutions.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title={footerLinks.developers.title}>
            <ul className="space-y-2 text-sm">
              {footerLinks.developers.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title={footerLinks.company.title}>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="inline-flex items-center gap-2 hover:text-white">
                    {link.label}
                    {"tag" in link && link.tag && (
                      <span className="rounded bg-mbx-primary/20 px-1.5 py-0.5 text-[10px] font-medium text-mbx-primary">
                        {link.tag}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-mbx-border pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-xs text-mbx-text-muted">
            <span>All Rights Reserved © Mapbox</span>
            <a href="https://www.mapbox.com/legal/tos" className="hover:text-white">
              Terms
            </a>
            <a href="https://www.mapbox.com/legal/privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="https://www.mapbox.com/platform/security" className="hover:text-white">
              Security
            </a>
          </div>
          <div className="flex gap-4">
            <SocialLink href="https://github.com/mapbox" label="GitHub" />
            <SocialLink href="https://twitter.com/mapbox" label="X" />
            <SocialLink href="https://www.linkedin.com/company/mapbox" label="LinkedIn" />
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
      <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-white">{title}</h3>
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
      className="text-sm text-mbx-text-muted transition hover:text-white"
      aria-label={label}
    >
      {label}
    </a>
  );
}
