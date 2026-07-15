export type Language = "en" | "es";

export function readLanguage(): Language {
  if (typeof document === "undefined") return "en";

  const translationCookies = document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .filter((cookie) => cookie.toLowerCase().startsWith("googtrans="));

  for (const cookie of translationCookies) {
    try {
      const value = decodeURIComponent(cookie.slice(cookie.indexOf("=") + 1));
      if (/^\/[a-z]+\/es$/i.test(value)) return "es";
    } catch {
      // Ignore only the malformed translation-cookie value and keep checking.
    }
  }

  return "en";
}

function cookieDomains(hostname: string) {
  const isIpAddress = /^\d+(?:\.\d+){3}$/.test(hostname) || hostname.includes(":");

  if (!hostname || hostname === "localhost" || isIpAddress) {
    return [];
  }

  const domains = new Set([hostname, `.${hostname}`]);
  const parts = hostname.split(".").filter(Boolean);

  if (parts.length > 2 && !hostname.endsWith(".netlify.app")) {
    const parentDomain = parts.slice(-2).join(".");
    domains.add(parentDomain);
    domains.add(`.${parentDomain}`);
  }

  return [...domains];
}

export function changeLanguage(language: Language) {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const hostname = window.location.hostname;
  const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  const deleted = `${expired};max-age=0;SameSite=Lax`;
  const persistent = "max-age=31536000;SameSite=Lax";
  const domains = cookieDomains(hostname);

  document.cookie = `aws_language=${language};path=/;${persistent}`;

  if (language === "en") {
    document.cookie = `googtrans=;path=/;${deleted}`;
    domains.forEach((domain) => {
      document.cookie = `googtrans=;path=/;domain=${domain};${deleted}`;
    });
  } else {
    const value = "/en/es";

    document.cookie = `googtrans=${value};path=/;${persistent}`;
    domains.forEach((domain) => {
      document.cookie = `googtrans=${value};path=/;domain=${domain};${persistent}`;
    });
  }

  window.location.reload();
}
