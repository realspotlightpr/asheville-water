import { useEffect } from "react";

const formScriptId = "highlevel-form-embed-script";

export function HighLevelForm({ className = "" }: { className?: string }) {
  useEffect(() => {
    if (document.getElementById(formScriptId)) return;

    const script = document.createElement("script");
    script.id = formScriptId;
    script.src = "https://api.homeservicehub.app/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      src="https://api.homeservicehub.app/widget/form/q1VWW0cYTti5sXIX4QNz"
      style={{ width: "100%", height: "608px", border: "none", borderRadius: "8px" }}
      className={className}
      id="inline-q1VWW0cYTti5sXIX4QNz"
      data-layout='{"id":"INLINE"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Form 0"
      data-height="608"
      data-layout-iframe-id="inline-q1VWW0cYTti5sXIX4QNz"
      data-form-id="q1VWW0cYTti5sXIX4QNz"
      title="Request a free water report from Asheville Water Specialists"
      loading="lazy"
    />
  );
}
