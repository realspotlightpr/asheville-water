const siteOrigin = "https://asheville-water-specialists-432.netlify.app";

export function GoogleLanguageSwitch() {
  const path = typeof window === "undefined" ? "/" : `${window.location.pathname}${window.location.search}`;
  const originalUrl = `${siteOrigin}${path}`;
  const spanishUrl = `https://translate.google.com/translate?sl=en&tl=es&u=${encodeURIComponent(originalUrl)}`;

  return (
    <div className="flex items-center gap-2 font-body text-[11px] text-white/70">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-sky" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
      </svg>
      <span className="hidden sm:inline">Powered by Google Translate</span>
      <span className="hidden text-white/25 sm:inline" aria-hidden="true">|</span>
      <a href={originalUrl} hrefLang="en" className="rounded px-2 py-1 font-semibold text-white transition hover:bg-white/10" aria-label="View site in English">
        English
      </a>
      <a href={spanishUrl} hrefLang="es" className="rounded bg-white/10 px-2 py-1 font-semibold text-white transition hover:bg-white/20" aria-label="Translate this page to Spanish with Google Translate">
        Español
      </a>
    </div>
  );
}
