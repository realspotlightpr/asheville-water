import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { business, serviceCities, resourceArticles, social } from "../data/site";

const productLinks = [
  { label: "Whole-Home Systems", to: "/products" },
  { label: "Water Softeners", to: "/products/single-tank-softener" },
  { label: "Reverse Osmosis", to: "/products/7-stage-ro" },
  { label: "Pre-Filters", to: "/products/pre-sediment-filter" },
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
      <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
        {title}
      </h4>
      <ul className="mt-3 space-y-2 font-body text-sm text-white/60">
        {links.map((link) => (
          <li key={link.to + link.label}>
            <Link to={link.to} className="hover:text-white">
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
    <footer className="bg-ink py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="inline-flex rounded-xl bg-white p-3">
              <Logo />
            </div>
            <p className="mt-4 font-body text-sm text-white/60">
              Locally owned water treatment specialists serving Asheville
              &amp; Western North Carolina. Thoughtful recommendations and
              licensed installation.
            </p>
            <p className="mt-4 font-body text-sm text-white/60">
              <a href={business.phoneHref} className="hover:text-white">
                {business.phone}
              </a>
              <br />
              <a href={`mailto:${business.email}`} className="hover:text-white">
                {business.email}
              </a>
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={social.instagram}
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href={social.linkedin}
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 9v11M4 5v.5M9 20v-6a3 3 0 016 0v6M9 9v11" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          <Column title="Products" links={productLinks} />

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Resources
            </h4>
            <ul className="mt-3 space-y-2 font-body text-sm text-white/60">
              {resourceArticles.map((a) => (
                <li key={a.slug}>
                  <Link to={`/resources/${a.slug}`} className="hover:text-white">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Service Areas
            </h4>
            <ul className="mt-3 space-y-2 font-body text-sm text-white/60">
              {serviceCities.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link to={`/service-areas/${c.slug}`} className="hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Column title="Company" links={companyLinks} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-body text-xs text-white/40 hover:text-white/70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
