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
    <div className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-5" role="region" aria-label="Cookie preferences">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-ink p-5 text-white shadow-2xl sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-heading text-lg font-bold">Your privacy choices</p>
            <p className="mt-2 font-body text-sm leading-6 text-white/70">
              We use necessary storage to remember your preferences. With permission, functional services load our translator and consultation form, while analytics enables Meta Pixel page-view measurement.
            </p>
            <p className="mt-2 font-body text-xs text-white/55">
              Read our <Link className="underline underline-offset-2" to="/cookie-policy">Cookie Policy</Link> and <Link className="underline underline-offset-2" to="/privacy-policy">Privacy Policy</Link>.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <button className="rounded-full border border-white/30 px-4 py-2.5 font-body text-sm font-semibold hover:bg-white/10" onClick={() => commit(false, false)}>Necessary only</button>
            <button className="rounded-full border border-white/30 px-4 py-2.5 font-body text-sm font-semibold hover:bg-white/10" onClick={() => setDetails((value) => !value)}>Customize</button>
            <button className="rounded-full bg-amber px-4 py-2.5 font-body text-sm font-bold text-ink hover:brightness-95" onClick={() => commit(true, true)}>Accept all</button>
          </div>
        </div>
        {details && (
          <div className="mt-5 grid gap-3 border-t border-white/15 pt-5 sm:grid-cols-3">
            <ConsentToggle title="Necessary" description="Stores your consent and language choice." checked disabled onChange={() => undefined} />
            <ConsentToggle title="Functional" description="Loads HighLevel forms and Spanish translation." checked={functional} onChange={setFunctional} />
            <ConsentToggle title="Analytics" description="Loads Meta Pixel to measure page views and advertising performance." checked={analytics} onChange={setAnalytics} />
            <div className="sm:col-span-3 sm:text-right">
              <button className="rounded-full bg-white px-5 py-2.5 font-body text-sm font-bold text-ink" onClick={() => commit(functional, analytics)}>Save choices</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ConsentToggle({ title, description, checked, disabled = false, onChange }: { title: string; description: string; checked: boolean; disabled?: boolean; onChange: (value: boolean) => void }) {
  return (
    <label className="flex items-start justify-between gap-3 rounded-xl bg-white/5 p-4">
      <span><strong className="block font-heading text-sm">{title}</strong><span className="mt-1 block font-body text-xs leading-5 text-white/60">{description}</span></span>
      <input className="mt-1 h-5 w-5 accent-amber" type="checkbox" checked={checked} disabled={disabled} onChange={(event) => onChange(event.target.checked)} />
    </label>
  );
}
