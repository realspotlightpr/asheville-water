import { listenForConsultation } from "../lib/consultationTracking";
import { useEffect, useRef, useState } from "react";

const defaultHeight = 834;

export function FooterConsultationForm() {
  const resizeRef = useRef<ResizeObserver | null>(null);
  const [height, setHeight] = useState(defaultHeight);

  const stopTracking = useRef<(() => void) | undefined>(undefined);
  useEffect(() => () => { resizeRef.current?.disconnect(); stopTracking.current?.(); }, []);

  return (
    <iframe
      data-consultation-placement="homepage-footer"
      title="Free Consultation - Website"
      src="/consultation-embed.html"
      loading="lazy"
      style={{ display: "block", width: "100%", height, border: "none", borderRadius: "8px" }}
      onLoad={(event) => {
        resizeRef.current?.disconnect();
        const content = event.currentTarget.contentDocument?.getElementById("consultation-widget");
        stopTracking.current?.();
        if (!content) return;
        const frame = content.querySelector("iframe");
        if (frame) stopTracking.current = listenForConsultation(frame, "homepage-footer");
        const resize = () => {
          const nextHeight = Math.ceil(content.getBoundingClientRect().height);
          if (nextHeight > 0) setHeight(nextHeight);
        };
        resize();
        const observer = new ResizeObserver(resize);
        observer.observe(content);
        resizeRef.current = observer;
      }}
    />
  );
}
