type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
};

export function Logo({ className = "", variant = "full" }: LogoProps) {
  return (
    <img
      src="/assets/asheville-water-logo.png"
      alt={variant === "full" ? "Asheville Water Specialists" : ""}
      aria-hidden={variant === "mark"}
      translate="no"
      className={`notranslate ${
        variant === "mark"
          ? "h-12 w-20 object-cover object-top"
          : "h-14 w-48 object-contain"
      } ${className}`}
    />
  );
}
