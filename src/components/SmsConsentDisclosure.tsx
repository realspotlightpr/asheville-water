import { Link } from "react-router-dom";

export function SmsConsentDisclosure({ dark = false }: { dark?: boolean }) {
  const color = dark ? "text-white/75" : "text-ink/60";

  return (
    <p className={`font-body text-[11px] leading-[1.5] ${color}`}>
      By submitting, you agree to our{" "}
      <Link className="underline underline-offset-2" to="/terms-of-service">Terms of Service</Link>
      {" "}and{" "}
      <Link className="underline underline-offset-2" to="/privacy-policy">Privacy Policy</Link>
      {" "}and consent to receive SMS from Asheville Water Specialists about your inquiry, quotes,
      appointments, service updates, and follow-up. Message frequency varies. Message and data rates
      may apply. Reply HELP for help or STOP to opt out. Consent is not a condition of purchase.
    </p>
  );
}
