import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "outline-dark" | "outline-light" | "nav";

const variants: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-mbx-primary px-6 py-2.5 text-base font-medium text-white transition hover:bg-[var(--mbx-primary-hover)]",
  "outline-dark":
    "inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-base font-medium text-theme transition border-[var(--mbx-btn-outline-border)] hover:border-[var(--mbx-btn-outline-hover-bg)] hover:bg-[var(--mbx-btn-outline-hover-bg)] hover:text-[var(--mbx-btn-outline-hover-text)]",
  "outline-light":
    "inline-flex items-center justify-center rounded-full border border-[var(--mbx-tab-inactive-border)] px-6 py-2.5 text-base font-medium text-theme transition hover:border-mbx-primary hover:text-mbx-primary",
  nav: "inline-flex items-center justify-center rounded-full bg-mbx-primary px-5 py-2 text-sm font-medium text-white transition hover:bg-[var(--mbx-primary-hover)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}) {
  const classes = `${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
