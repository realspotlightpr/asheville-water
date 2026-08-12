export type ConsentChoice = {
  version: 1;
  necessary: true;
  functional: boolean;
  analytics: boolean;
  decidedAt: string;
};

export const CONSENT_KEY = "aws_cookie_consent_v1";
export const CONSENT_EVENT = "aws:consent-change";
export const OPEN_CONSENT_EVENT = "aws:open-cookie-settings";

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const value = JSON.parse(window.localStorage.getItem(CONSENT_KEY) || "null");
    return value?.version === 1 ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(functional: boolean, analytics: boolean) {
  const choice: ConsentChoice = {
    version: 1,
    necessary: true,
    functional,
    analytics,
    decidedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(choice));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
  return choice;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}
