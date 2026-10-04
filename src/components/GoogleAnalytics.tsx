import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { CONSENT_EVENT, readConsent } from "../lib/consent";
import { initializeGoogleAnalytics } from "../lib/analytics";

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
