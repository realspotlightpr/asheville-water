import { useEffect } from "react";
import { readLanguage } from "../lib/language";

export function TranslationNavigationGuard() {
  useEffect(() => {
    const useFullPageNavigationInSpanish = (event: MouseEvent) => {
      if (
        readLanguage() !== "es" ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) {
        return;
      }

      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin) return;

      const sameDocument =
        destination.pathname === window.location.pathname &&
        destination.search === window.location.search;
      if (sameDocument && destination.hash) return;

      event.preventDefault();
      event.stopPropagation();
      window.location.assign(destination.href);
    };

    document.addEventListener("click", useFullPageNavigationInSpanish, true);
    return () =>
      document.removeEventListener("click", useFullPageNavigationInSpanish, true);
  }, []);

  return null;
}
