import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { business } from "../data/site";
import { navMenus } from "../data/nav";
import { LanguageToggle } from "./LanguageToggle";

const plainLinks = [
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
];

const testKitUrl = "https://gosimplelab.com/store/AWSPE";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 28);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  return (
    <header className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-300 ${scrolled ? "border-sky/15 shadow-[0_10px_35px_rgba(20,35,59,0.09)]" : "border-mist"}`}>
      <div className={`mx-auto flex w-full max-w-[1500px] items-center justify-between gap-4 px-4 transition-[padding] duration-300 sm:px-6 xl:px-8 ${scrolled ? "py-0" : "py-1"}`}>
        <Link className="shrink-0" to="/" onClick={() => setMobileOpen(false)}>
          <Logo
            className={`transition-[height] duration-300 min-[1180px]:h-20 ${
              scrolled ? "h-16 sm:h-16 min-[1180px]:h-16" : ""
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3 min-[1180px]:flex 2xl:gap-5">
          {navMenus.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.label)}
              onMouseLeave={() => setOpenMenu(null)}
              onFocus={() => setOpenMenu(menu.label)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(null);
              }}
            >
              <NavLink
                to={menu.to}
                className={({ isActive }) =>
                  `flex min-h-11 items-center gap-1 whitespace-nowrap font-body text-[13px] font-medium transition hover:text-specialist 2xl:text-sm ${isActive ? "text-specialist" : "text-ink/80"}`
                }
              >
                {menu.label}
                <Chevron />
              </NavLink>
              {openMenu === menu.label && (
                <div className="nav-dropdown-in absolute left-0 top-full min-w-56 pt-2">
                  <div className="max-h-[70vh] overflow-y-auto rounded-2xl border border-sky/10 bg-white/95 py-2 shadow-[0_20px_55px_rgba(20,35,59,0.16)] backdrop-blur-xl">
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
                `whitespace-nowrap font-body text-[13px] font-medium transition hover:text-specialist 2xl:text-sm ${
                  isActive ? "text-specialist" : "text-ink/80"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={testKitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap font-body text-[13px] font-semibold text-specialist transition hover:text-navy 2xl:text-sm"
          >
            Water Testing
          </a>
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 min-[1180px]:flex 2xl:gap-3">
          <a
            href={business.phoneHref}
            className="notranslate whitespace-nowrap font-body text-[13px] font-semibold text-navy hover:text-specialist 2xl:text-sm"
            translate="no"
          >
            {business.phone}
          </a>
          <LanguageToggle />
          <Link
            to="/contact#contact"
            className="premium-button whitespace-nowrap rounded-full bg-amber px-4 py-2.5 font-body text-[13px] font-semibold text-ink shadow-sm 2xl:px-5 2xl:text-sm"
          >
            Get a Free Consultation
          </Link>
        </div>

        <div className="flex items-center gap-2 min-[1180px]:hidden">
          <Link
            to="/contact#contact"
            onClick={() => setMobileOpen(false)}
            className="premium-button whitespace-nowrap rounded-full bg-amber px-3.5 py-2 font-body text-xs font-bold text-ink shadow-sm sm:px-5 sm:text-sm"
          >
            Free Consultation
          </Link>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy transition hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-specialist"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
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
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="nav-mobile-in max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-mist bg-white/98 px-4 py-4 shadow-2xl min-[1180px]:hidden">
          <nav className="flex flex-col gap-1">
            {navMenus.map((menu) => (
              <div key={menu.label} className="border-b border-mist/60">
                <button
                  type="button"
                  className="flex min-h-12 w-full items-center justify-between py-3 font-body text-sm font-semibold text-ink"
                  aria-expanded={mobileSubmenu === menu.label}
                  aria-controls={`mobile-menu-${menu.label.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() =>
                    setMobileSubmenu((s) => (s === menu.label ? null : menu.label))
                  }
                >
                  {menu.label}
                  <span className={`transition-transform duration-200 ${mobileSubmenu === menu.label ? "rotate-180" : ""}`}>
                    <Chevron />
                  </span>
                </button>
                {mobileSubmenu === menu.label && (
                  <div id={`mobile-menu-${menu.label.toLowerCase().replace(/\s+/g, "-")}`} className="pb-2">
                    {menu.items.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block min-h-11 py-2.5 pl-4 font-body text-sm ${isActive ? "font-semibold text-specialist" : "text-ink/70"}`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {plainLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `min-h-12 border-b border-mist/60 py-3 font-body text-sm font-semibold ${isActive ? "text-specialist" : "text-ink"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={testKitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-mist/60 py-3 font-body text-sm font-semibold text-specialist"
            >
              Water Testing
            </a>
            <a href={business.phoneHref} className="notranslate py-3 font-body text-sm font-semibold text-navy" translate="no">
              {business.phone}
            </a>
            <div className="flex items-center justify-between gap-4 border-b border-mist/60 py-3">
              <span className="font-body text-sm font-semibold text-ink">Language</span>
              <LanguageToggle />
            </div>
            <div className="mt-2 flex gap-3">
              <Link
                to="/contact#contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-full bg-amber px-5 py-2.5 text-center font-body text-sm font-semibold text-ink"
              >
                Get a Free Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
