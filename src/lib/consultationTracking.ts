import { trackAnalyticsEvent } from "./analytics";

// HighLevel's successful submission handler posts a frame marker after saving the response.
// Ignore its separate contact payload. No contact data enters analytics.
export function listenForConsultation(frame: HTMLIFrameElement, placement: string) {
  const host = frame.ownerDocument.defaultView;
  let recorded = false;
  const onMessage = (event: MessageEvent) => {
    if (recorded || event.origin !== "https://api.leadconnectorhq.com" || event.source !== frame.contentWindow) return;
    const data = event.data;
    if (!Array.isArray(data) || data[0] !== "set-sticky-contacts" ||
        typeof data[1] !== "string" || data[1] !== "embedded_iframe_" + data[2]) return;
    recorded = true;
    trackAnalyticsEvent("generate_lead", { form_name: "free_consultation", placement, page_path: window.location.pathname });
  };
  host?.addEventListener("message", onMessage);
  return () => host?.removeEventListener("message", onMessage);
}
