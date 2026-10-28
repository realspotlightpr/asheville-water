import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollMotion() {
  const { pathname } = useLocation();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-water-parallax]"),
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-revealed"));
      parallaxElements.forEach((element) =>
        element.style.setProperty("--water-parallax-y", "0px"),
      );
      return;
    }

    document.documentElement.classList.add("motion-enhanced");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.08 },
    );

    targets.forEach((target) => observer.observe(target));

    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;
      const viewportHeight = window.innerHeight;

      parallaxElements.forEach((element) => {
        const section = element.closest("section");
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)),
        );
        const offset = (progress - 0.5) * 24;
        element.style.setProperty("--water-parallax-y", `${offset.toFixed(1)}px`);
      });
    };

    const queueParallaxUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", queueParallaxUpdate, { passive: true });
    window.addEventListener("resize", queueParallaxUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", queueParallaxUpdate);
      window.removeEventListener("resize", queueParallaxUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [pathname]);

  return null;
}

export function SectionReveal({ children }: { children: React.ReactNode }) {
  return <div className="section-reveal" data-reveal>{children}</div>;
}
