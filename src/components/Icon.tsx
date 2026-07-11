type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, React.ReactNode> = {
  beaker: (
    <>
      <path d="M9 3h6M10 3v6l-5 9a2 2 0 001.8 3h10.4a2 2 0 001.8-3l-5-9V3" />
      <path d="M6.5 14h11" />
    </>
  ),
  badge: (
    <>
      <path d="M12 2l2.4 1.7 2.9-.2 1 2.8 2.4 1.6-.9 2.8.9 2.8-2.4 1.6-1 2.8-2.9-.2L12 22l-2.4-1.7-2.9.2-1-2.8L3.3 16l.9-2.8-.9-2.8 2.4-1.6 1-2.8 2.9.2z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  tag: (
    <>
      <path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0l-7-7A2 2 0 013 12.2V5a2 2 0 012-2h7.2a2 2 0 011.4.6l7 7a2 2 0 010 2.8z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" />
      <circle cx="12" cy="11" r="2" />
    </>
  ),
  refresh: (
    <>
      <path d="M21 12a9 9 0 01-9 9 9 9 0 01-8-4.9" />
      <path d="M3 12a9 9 0 019-9 9 9 0 018 4.9" />
      <path d="M21 3v5h-5M3 21v-5h5" />
    </>
  ),
  droplet: <path d="M12 3s6 5.686 6 10a6 6 0 11-12 0c0-4.314 6-10 6-10z" />,
  sparkle: (
    <>
      <path d="M12 3l1.6 4.6L18 9l-4.4 1.4L12 15l-1.6-4.6L6 9l4.4-1.4z" />
      <path d="M18 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
    </>
  ),
  shirt: (
    <path d="M16 3l4 3-2.5 3-1.5-1v11H8V8L6.5 9 4 6l4-3 2 2h4l2-2z" />
  ),
  wind: (
    <>
      <path d="M3 8h9a2.5 2.5 0 10-2.5-2.5" />
      <path d="M3 12h13a2.5 2.5 0 11-2.5 2.5" />
      <path d="M3 16h7a2 2 0 112 2" />
    </>
  ),
};

export function Icon({ name, className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.pin}
    </svg>
  );
}
