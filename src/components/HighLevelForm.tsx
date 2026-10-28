import { useEffect } from "react";

const formId = "2UXJNBw1z7leQKagbhm1";
const formHeight = 834;

type HighLevelFormProps = {
  placement: "hero" | "home" | "contact";
  className?: string;
};

export function HighLevelForm({ placement, className = "" }: HighLevelFormProps) {
  const iframeId = `inline-${formId}-${placement}`;

  useEffect(() => {
    const scriptId = "highlevel-form-embed-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
      style={{ width: "100%", height: `${formHeight}px`, border: "none", borderRadius: "8px" }}
      className={className}
      id={iframeId}
      data-layout='{"id":"INLINE"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Free Consultation - Website"
      data-height={formHeight}
      data-layout-iframe-id={iframeId}
      data-form-id={formId}
      data-cookie-consent="true"
      data-cookie-consent-provider="auto"
      title="Free Consultation - Website"
      loading={placement === "hero" ? "eager" : "lazy"}
      scrolling="no"
    />
  );
}
