import { useEffect, useState } from "react";
import { CONSENT_EVENT, openCookieSettings, readConsent } from "../lib/consent";

const formId = "35HJJbBk8aXNCP3UMZZ3";

type HighLevelFormProps = {
  placement: "hero" | "home" | "contact";
  className?: string;
};

export function HighLevelForm({ placement, className = "" }: HighLevelFormProps) {
  const [allowed, setAllowed] = useState(() => readConsent()?.functional ?? false);
  const iframeId = `inline-${formId}-${placement}`;
  const height = placement === "hero" ? 1060 : placement === "contact" ? 1280 : 1200;

  useEffect(() => {
    const sync = () => setAllowed(readConsent()?.functional ?? false);
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  useEffect(() => {
    if (!allowed) return;
    const scriptId = "highlevel-form-embed-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [allowed]);

  if (!allowed) {
    return (
      <div className={`flex min-h-72 flex-col items-center justify-center rounded-lg bg-mist px-6 text-center ${className}`}>
        <p className="font-heading text-lg font-bold text-navy">Enable the secure consultation form</p>
        <p className="mt-2 max-w-md font-body text-sm leading-6 text-ink/65">The form is provided by HighLevel and may use functional cookies or similar storage. You can enable it without enabling analytics.</p>
        <button className="mt-5 rounded-full bg-specialist px-5 py-2.5 font-body text-sm font-bold text-white" onClick={openCookieSettings}>Review cookie settings</button>
      </div>
    );
  }

  return (
    <iframe
      src={`https://api.homeservicehub.app/widget/form/${formId}`}
      style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: "8px" }}
      className={className}
      id={iframeId}
      data-layout='{"id":"INLINE"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Form 0"
      data-height={height}
      data-layout-iframe-id={iframeId}
      data-form-id={formId}
      title="Request a free consultation from Asheville Water Specialists"
      loading="eager"
      scrolling="no"
    />
  );
}
