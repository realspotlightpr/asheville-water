import { useEffect } from "react";

const scriptId = "leadconnector-chat-widget";

export function LeadConnectorChat() {
  useEffect(() => {
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.dataset.resourcesUrl = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
    script.dataset.widgetId = "6abc3fb5cdeb03a6d502da42";
    script.dataset.source = "WEB_USER";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
