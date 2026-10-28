import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { business, serviceCities, resourceArticles, social } from "../data/site";
import { openCookieSettings } from "../lib/consent";

const serviceLinks = [
  { label: "Whole-Home Filtration", to: "/services#whole-home-filtration" },
  { label: "Reverse Osmosis", to: "/services#reverse-osmosis" },
  { label: "Well Water Treatment", to: "/services#well-water-treatment" },
  { label: "Water Softeners", to: "/services#water-softeners" },
  { label: "Carbon Filtration", to: "/services#carbon-filtration" },
  { label: "City Water Treatment", to: "/services#city-water-treatment" },
];

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "FAQ", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Accessibility", to: "/accessibility" },
  { label: "Warranty", to: "/warranty" },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) {
  return (
    <div>
      <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-navy">
        {title}
      </h4>
      <ul className="mt-3 space-y-2 font-body text-sm text-ink/60">
        {links.map((link) => (
          <li key={link.to + link.label}>
            <Link to={link.to} className="transition-colors hover:text-specialist">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-sky/15 bg-[linear-gradient(180deg,#eaf4fb_0%,#f8fbfe_100%)] py-14">
      <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-sky/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-specialist/[0.07] blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo className="h-20 sm:h-20 xl:h-20" />
            <p className="mt-4 font-body text-sm leading-6 text-ink/65">
              Locally owned water treatment specialists serving Asheville
              &amp; Western North Carolina. Thoughtful recommendations and
              licensed installation.
            </p>
            <p className="mt-4 font-body text-sm text-ink/65">
              <a href={business.phoneHref} className="notranslate transition-colors hover:text-specialist" translate="no">
                {business.phone}
              </a>
              <br />
              <a href={`mailto:${business.email}`} className="notranslate transition-colors hover:text-specialist" translate="no">
                {business.email}
              </a>
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={social.instagram}
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-sky/20 bg-white/70 text-specialist shadow-sm transition hover:-translate-y-0.5 hover:border-sky/40 hover:bg-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href={social.youtube}
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-sky/20 bg-white/70 text-specialist shadow-sm transition hover:-translate-y-0.5 hover:border-sky/40 hover:bg-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12c0 2.4-.2 4-.5 4.8-.2.6-.7 1.1-1.3 1.3-1.1.4-5.3.4-7.2.4s-6.1 0-7.2-.4c-.6-.2-1.1-.7-1.3-1.3C3.2 16 3 14.4 3 12s.2-4 .5-4.8c.2-.6.7-1.1 1.3-1.3C5.9 5.5 10.1 5.5 12 5.5s6.1 0 7.2.4c.6.2 1.1.7 1.3 1.3.3.8.5 2.4.5 4.8Z" />
                  <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          <Column title="Services" links={serviceLinks} />

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-navy">
              Resources
            </h4>
            <ul className="mt-3 space-y-2 font-body text-sm text-ink/60">
              {resourceArticles.map((a) => (
                <li key={a.slug}>
                  <Link to={`/resources/${a.slug}`} className="transition-colors hover:text-specialist">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-navy">
              Service Areas
            </h4>
            <ul className="mt-3 space-y-2 font-body text-sm text-ink/60">
              {serviceCities.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link to={`/service-areas/${c.slug}`} className="transition-colors hover:text-specialist">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Column title="Company" links={companyLinks} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-navy/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-ink/45">
            © {new Date().getFullYear()} <span className="notranslate" translate="no">{business.name}</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-body text-xs text-ink/45 transition-colors hover:text-specialist"
              >
                {link.label}
              </Link>
            ))}
            <button type="button" onClick={openCookieSettings} className="font-body text-xs text-ink/45 transition-colors hover:text-specialist">Cookie Settings</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
