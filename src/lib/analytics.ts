import { readConsent } from "./consent";

const measurementId = "G-NYVY6JVXHM";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    __awsGoogleAnalyticsInitialized?: boolean;
  }
}

export function initializeGoogleAnalytics() {
  window.dataLayer ||= [];
  window.gtag ||= (...args: unknown[]) => window.dataLayer?.push(args);

  if (!document.querySelector("script[data-aws-google-analytics]")) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.dataset.awsGoogleAnalytics = "true";
    document.head.appendChild(script);
  }

  if (!window.__awsGoogleAnalyticsInitialized) {
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      send_page_view: false,
      anonymize_ip: true,
    });
    window.__awsGoogleAnalyticsInitialized = true;
  }
}

export function trackAnalyticsEvent(
  name: string,
  parameters: Record<string, string | number | boolean> = {},
) {
  if (!readConsent()?.analytics) return;
  initializeGoogleAnalytics();
  window.gtag?.("event", name, parameters);
}
