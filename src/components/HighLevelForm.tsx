const formId = "35HJJbBk8aXNCP3UMZZ3";

type HighLevelFormProps = {
  placement: "hero" | "home" | "contact";
  className?: string;
};

export function HighLevelForm({ placement, className = "" }: HighLevelFormProps) {
  const iframeId = `inline-${formId}-${placement}`;
  const height = placement === "hero" ? 820 : 940;

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
    />
  );
}
