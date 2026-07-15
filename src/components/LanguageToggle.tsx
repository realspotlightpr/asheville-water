import { useEffect, useState } from "react";
import { changeLanguage, readLanguage, type Language } from "../lib/language";

export function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const syncLanguage = () => {
      const selectedLanguage = readLanguage();
      setLanguage(selectedLanguage);
    };

    syncLanguage();
    const syncInterval = window.setInterval(syncLanguage, 1000);
    window.addEventListener("pageshow", syncLanguage);
    window.addEventListener("focus", syncLanguage);
    document.addEventListener("visibilitychange", syncLanguage);

    return () => {
      window.clearInterval(syncInterval);
      window.removeEventListener("pageshow", syncLanguage);
      window.removeEventListener("focus", syncLanguage);
      document.removeEventListener("visibilitychange", syncLanguage);
    };
  }, []);

  const selectLanguage = (nextLanguage: Language) => {
    if (nextLanguage === "es" && language === "es") return;
    changeLanguage(nextLanguage);
  };

  return (
    <div
      className="notranslate inline-flex items-center rounded-full border border-navy/15 bg-white p-0.5 shadow-sm"
      role="group"
      aria-label="Website language"
      translate="no"
    >
      {(["en", "es"] as const).map((option) => {
        const active = language === option;

        return (
          <button
            key={option}
            type="button"
            lang={option}
            aria-label={`Switch website to ${option === "en" ? "English" : "Spanish"}`}
            aria-pressed={active}
            onClick={() => selectLanguage(option)}
            className={`min-w-9 rounded-full px-2.5 py-1.5 font-body text-[11px] font-bold tracking-wide transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-specialist ${
              active
                ? "bg-specialist text-white shadow-sm"
                : "text-navy hover:bg-mist"
            }`}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
