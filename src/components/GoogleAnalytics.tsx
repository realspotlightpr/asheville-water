import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { CONSENT_EVENT, readConsent } from "../lib/consent";

const measurementId = "G-NYVY6JVXHM";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    __awsGoogleAnalyticsInitialized?: boolean;
  }
}

function initializeGoogleAnalytics() {
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

export function GoogleAnalytics() {
  const location = useLocation();
  const lastTrackedUrl = useRef("");

  useEffect(() => {
    const trackPage = () => {
      if (!readConsent()?.analytics) return;
      initializeGoogleAnalytics();
      const pageLocation = window.location.href;
      if (lastTrackedUrl.current === pageLocation) return;
      window.gtag?.("event", "page_view", {
        page_location: pageLocation,
        page_path: `${location.pathname}${location.search}`,
        page_title: document.title,
      });
      lastTrackedUrl.current = pageLocation;
    };

    trackPage();
    window.addEventListener(CONSENT_EVENT, trackPage);
    return () => window.removeEventListener(CONSENT_EVENT, trackPage);
  }, [location.pathname, location.search]);

  return null;
}
