import { useEffect } from "react";
import { trackAnalyticsEvent } from "../lib/analytics";

export function ConversionTracking() {
  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const href = link.href;
      const linkText = link.textContent?.replace(/\s+/g, " ").trim().slice(0, 100) || "";
      const common = {
        link_text: linkText,
        link_url: href,
        page_path: window.location.pathname,
      };

      if (href.includes("gosimplelab.com/store/AWSPE")) {
        trackAnalyticsEvent("water_test_kit_clicked", common);
        return;
      }

      if (link.pathname === "/contact/" || link.pathname === "/contact") {
        trackAnalyticsEvent("consultation_cta_clicked", common);
        return;
      }

      if (link.pathname.startsWith("/resources/topics/")) {
        trackAnalyticsEvent("resource_topic_clicked", common);
        return;
      }

      if (href.startsWith("mailto:")) {
        trackAnalyticsEvent("email_clicked", common);
      }
    };

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return null;
}
