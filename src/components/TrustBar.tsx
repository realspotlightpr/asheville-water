import { trustBadges } from "../data/site";

export function TrustBar() {
  return (
    <section className="border-b border-mist bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
        {trustBadges.map((badge) => (
          <div key={badge.label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky/15 text-specialist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <div>
              <p className="font-heading text-sm font-semibold text-navy">
                {badge.label}
              </p>
              <p className="font-body text-xs text-ink/60">{badge.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
