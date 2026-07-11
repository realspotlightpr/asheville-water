type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
};

export function Logo({ className = "", variant = "full" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 64 40" className="h-8 w-auto shrink-0" aria-hidden="true">
        <path
          d="M4 16 C 14 4, 24 4, 34 12 C 44 20, 54 20, 60 10"
          fill="none"
          stroke="url(#wave-top)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M4 28 C 14 16, 24 16, 34 24 C 44 32, 54 32, 60 22"
          fill="none"
          stroke="url(#wave-bottom)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="wave-top" x1="0" y1="0" x2="64" y2="0">
            <stop offset="0%" stopColor="#3897D2" stopOpacity="0" />
            <stop offset="100%" stopColor="#3897D2" />
          </linearGradient>
          <linearGradient id="wave-bottom" x1="0" y1="0" x2="64" y2="0">
            <stop offset="0%" stopColor="#0F4B91" />
            <stop offset="100%" stopColor="#2B3369" />
          </linearGradient>
        </defs>
      </svg>
      {variant === "full" && (
        <div className="leading-none">
          <div className="font-heading font-extrabold tracking-wide text-navy text-base sm:text-lg">
            ASHEVILLE WATER
          </div>
          <div className="font-heading font-semibold tracking-[0.2em] text-specialist text-[0.65rem] sm:text-xs">
            SPECIALISTS
          </div>
        </div>
      )}
    </div>
  );
}
