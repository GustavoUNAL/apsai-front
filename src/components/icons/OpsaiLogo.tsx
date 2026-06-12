export function OpsaiLogo({ className = "h-7" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold tracking-tight text-theme ${className}`}>
      <svg
        className="h-[1.75em] w-[1.75em] shrink-0 text-mbx-primary"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden
      >
        <circle cx="14" cy="14" r="14" fill="currentColor" fillOpacity="0.15" />
        <path
          d="M16.5 6L10 14h4.5L11.5 22l8-9h-4.5L16.5 6z"
          fill="currentColor"
        />
      </svg>
      <span className="text-lg leading-none">
        OPS<span className="text-mbx-primary">AI</span>
      </span>
    </span>
  );
}
