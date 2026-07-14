const formId = "q1VWW0cYTti5sXIX4QNz";

type HighLevelFormProps = {
  placement: "home" | "contact";
  className?: string;
};

export function HighLevelForm({ placement, className = "" }: HighLevelFormProps) {
  const iframeId = `inline-${formId}-${placement}`;

  return (
    <iframe
      src={`https://api.homeservicehub.app/widget/form/${formId}`}
      style={{ width: "100%", height: "608px", border: "none", borderRadius: "8px" }}
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
      data-height="608"
      data-layout-iframe-id={iframeId}
      data-form-id={formId}
      title="Request a free water report from Asheville Water Specialists"
      loading="eager"
    />
  );
}
