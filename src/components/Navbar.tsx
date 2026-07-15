import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { business } from "../data/site";
import { navMenus } from "../data/nav";
import { LanguageToggle } from "./LanguageToggle";

const plainLinks = [
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
];

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-mist bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navMenus.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                to={menu.to}
                className="flex items-center gap-1 font-body text-sm font-medium text-ink/80 transition hover:text-specialist"
              >
                {menu.label}
                <Chevron />
              </Link>
              {openMenu === menu.label && (
                <div className="absolute left-0 top-full min-w-56 pt-2">
                  <div className="max-h-[70vh] overflow-y-auto rounded-xl border border-mist bg-white py-2 shadow-xl">
                    {menu.items.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        end
                        className={({ isActive }) =>
                          `block px-4 py-2 font-body text-sm transition hover:bg-mist ${
                            isActive ? "text-specialist" : "text-ink/80"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          {plainLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-body text-sm font-medium transition hover:text-specialist ${
                  isActive ? "text-specialist" : "text-ink/80"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className="notranslate font-body text-sm font-semibold text-navy hover:text-specialist"
            translate="no"
          >
            {business.phone}
          </a>
          <LanguageToggle />
          <Link
            to="/contact"
            className="rounded-full bg-amber px-5 py-2.5 font-body text-sm font-semibold text-ink shadow-sm transition hover:brightness-95"
          >
            Contact
          </Link>
        </div>

        <button
          className="flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-mist bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navMenus.map((menu) => (
              <div key={menu.label} className="border-b border-mist/60">
                <button
                  className="flex w-full items-center justify-between py-3 font-body text-sm font-semibold text-ink"
                  onClick={() =>
                    setMobileSubmenu((s) => (s === menu.label ? null : menu.label))
                  }
                >
                  {menu.label}
                  <span className={mobileSubmenu === menu.label ? "rotate-180" : ""}>
                    <Chevron />
                  </span>
                </button>
                {mobileSubmenu === menu.label && (
                  <div className="pb-2">
                    {menu.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 pl-4 font-body text-sm text-ink/70"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {plainLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="border-b border-mist/60 py-3 font-body text-sm font-semibold text-ink"
              >
                {link.label}
              </Link>
            ))}
            <a href={business.phoneHref} className="notranslate py-3 font-body text-sm font-semibold text-navy" translate="no">
              {business.phone}
            </a>
            <div className="flex items-center justify-between gap-4 border-b border-mist/60 py-3">
              <span className="font-body text-sm font-semibold text-ink">Language</span>
              <LanguageToggle />
            </div>
            <div className="mt-2 flex gap-3">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-full bg-amber px-5 py-2.5 text-center font-body text-sm font-semibold text-ink"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
