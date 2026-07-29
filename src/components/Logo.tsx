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
          : "h-24 w-auto object-contain sm:h-28 lg:h-32"
      } ${className}`}
    />
  );
}
