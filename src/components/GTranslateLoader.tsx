import { useEffect } from "react";
import { CONSENT_EVENT, readConsent } from "../lib/consent";

declare global { interface Window { gtranslateSettings?: Record<string, unknown>; } }

export function GTranslateLoader() {
  useEffect(() => {
    const load = () => {
      if (!readConsent()?.functional || document.querySelector("script[data-aws-gtranslate]")) return;
      window.gtranslateSettings = { default_language: "en", detect_browser_language: false, languages: ["en", "es"], wrapper_selector: ".gtranslate_wrapper" };
      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
      script.defer = true;
      script.dataset.awsGtranslate = "true";
      document.body.appendChild(script);
    };
    load();
    window.addEventListener(CONSENT_EVENT, load);
    return () => window.removeEventListener(CONSENT_EVENT, load);
  }, []);
  return null;
}
