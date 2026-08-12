import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { CONSENT_EVENT, readConsent } from "../lib/consent";

const pixelId = "1914962299182018";

type MetaPixelFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: MetaPixelFunction;
    _fbq?: MetaPixelFunction;
    __awsMetaPixelInitialized?: boolean;
  }
}

function initializeMetaPixel() {
  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    } as MetaPixelFunction;
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    script.dataset.awsMetaPixel = "true";
    document.head.appendChild(script);
  }

  if (!window.__awsMetaPixelInitialized) {
    window.fbq?.("init", pixelId);
    window.__awsMetaPixelInitialized = true;
  }
}

export function MetaPixel() {
  const location = useLocation();
  const lastTrackedUrl = useRef("");

  useEffect(() => {
    const trackPage = () => {
      if (!readConsent()?.analytics) return;
      initializeMetaPixel();
      const currentUrl = window.location.href;
      if (lastTrackedUrl.current === currentUrl) return;
      window.fbq?.("track", "PageView");
      lastTrackedUrl.current = currentUrl;
    };

    trackPage();
    window.addEventListener(CONSENT_EVENT, trackPage);
    return () => window.removeEventListener(CONSENT_EVENT, trackPage);
  }, [location.pathname, location.search]);

  return null;
}
