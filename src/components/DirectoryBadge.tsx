import badges from "../data/directoryBadges.json";

export function DirectoryBadge({ badge }: { badge: (typeof badges)[number] }) {
  return (
    <a href={badge.listing} rel="nofollow" aria-label={badge.alt}
      className="inline-flex min-h-12 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-specialist">
      <img src={badge.image} alt={badge.alt} width={badge.width} height={badge.height}
        loading="lazy" decoding="async" referrerPolicy="no-referrer" className="block h-auto max-w-full" />
    </a>
  );
}
