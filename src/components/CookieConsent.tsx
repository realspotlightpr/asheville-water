import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CONSENT_EVENT,
  OPEN_CONSENT_EVENT,
  readConsent,
  saveConsent,
  type ConsentChoice,
} from "../lib/consent";

export function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null>(() => readConsent());
  const [open, setOpen] = useState(() => !readConsent());
  const [details, setDetails] = useState(false);
  const [functional, setFunctional] = useState(choice?.functional ?? false);
  const [analytics, setAnalytics] = useState(choice?.analytics ?? false);

  useEffect(() => {
    const showSettings = () => {
      const current = readConsent();
      setFunctional(current?.functional ?? false);
      setAnalytics(current?.analytics ?? false);
      setDetails(true);
      setOpen(true);
    };
    const sync = (event: Event) => setChoice((event as CustomEvent<ConsentChoice>).detail);
    window.addEventListener(OPEN_CONSENT_EVENT, showSettings);
    window.addEventListener(CONSENT_EVENT, sync);
    return () => {
      window.removeEventListener(OPEN_CONSENT_EVENT, showSettings);
      window.removeEventListener(CONSENT_EVENT, sync);
    };
  }, []);

  const commit = (nextFunctional: boolean, nextAnalytics: boolean) => {
    const shouldReload = Boolean(
      (choice?.functional && !nextFunctional) ||
      (choice?.analytics && !nextAnalytics),
    );
    setChoice(saveConsent(nextFunctional, nextAnalytics));
    setOpen(false);
    if (shouldReload) window.location.reload();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[2147483647] sm:inset-x-4 sm:bottom-4" role="region" aria-label="Cookie preferences">
      <div className="mx-auto max-h-[70svh] max-w-4xl overflow-y-auto rounded-2xl border border-white/15 bg-ink/95 px-4 py-3 text-white shadow-[0_18px_55px_rgba(6,28,35,0.38)] backdrop-blur-xl sm:px-5 sm:py-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-5">
          <div className="min-w-0 max-w-2xl">
            <p className="font-heading text-base font-bold">Your privacy choices</p>
            <p className="mt-1 font-body text-xs leading-5 text-white/70 sm:text-sm">
              Necessary storage remembers your preferences. With permission, we also enable Spanish translation and anonymous website analytics.
              <span className="ml-1 whitespace-nowrap text-white/55">
                <Link className="underline underline-offset-2" to="/cookie-policy">Cookie Policy</Link>
                <span aria-hidden="true"> · </span>
                <Link className="underline underline-offset-2" to="/privacy-policy">Privacy Policy</Link>
              </span>
            </p>
          </div>
          <div className="grid shrink-0 grid-cols-3 gap-2">
            <button className="min-h-11 rounded-full border border-white/30 px-3 py-2 font-body text-xs font-semibold transition-colors hover:bg-white/10 sm:px-4 sm:text-sm" onClick={() => commit(false, false)}><span className="sm:hidden">Necessary</span><span className="hidden sm:inline">Necessary only</span></button>
            <button className="min-h-11 rounded-full border border-white/30 px-3 py-2 font-body text-xs font-semibold transition-colors hover:bg-white/10 sm:px-4 sm:text-sm" aria-expanded={details} onClick={() => setDetails((value) => !value)}>Customize</button>
            <button className="min-h-11 rounded-full bg-amber px-3 py-2 font-body text-xs font-bold text-ink transition-[filter] hover:brightness-95 sm:px-4 sm:text-sm" onClick={() => commit(true, true)}><span className="sm:hidden">Accept</span><span className="hidden sm:inline">Accept cookies</span></button>
          </div>
        </div>
        {details && (
          <div className="mt-3 grid gap-2 border-t border-white/15 pt-3 sm:grid-cols-3">
            <ConsentToggle title="Necessary" description="Stores your consent and language choice." checked disabled onChange={() => undefined} />
            <ConsentToggle title="Functional" description="Loads optional Spanish translation." checked={functional} onChange={setFunctional} />
            <ConsentToggle title="Analytics" description="Loads Google Analytics and Meta Pixel to measure visits, page views, traffic sources, and advertising performance." checked={analytics} onChange={setAnalytics} />
            <div className="sm:col-span-3 sm:text-right">
              <button className="min-h-11 w-full rounded-full bg-white px-5 py-2.5 font-body text-sm font-bold text-ink sm:w-auto" onClick={() => commit(functional, analytics)}>Save choices</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ConsentToggle({ title, description, checked, disabled = false, onChange }: { title: string; description: string; checked: boolean; disabled?: boolean; onChange: (value: boolean) => void }) {
  return (
    <label className="flex items-start justify-between gap-3 rounded-xl bg-white/5 p-3">
      <span><strong className="block font-heading text-sm">{title}</strong><span className="mt-1 block font-body text-xs leading-5 text-white/60">{description}</span></span>
      <input className="mt-1 h-5 w-5 accent-amber" type="checkbox" checked={checked} disabled={disabled} onChange={(event) => onChange(event.target.checked)} />
    </label>
  );
}
