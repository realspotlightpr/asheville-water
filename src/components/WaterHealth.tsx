import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";

type BodyRegion = "whole" | "brain" | "liver" | "kidneys" | "reproductive";

type Contaminant = {
  name: string;
  level: string;
  guideline: string;
  ratio: number;
  multiple: string;
  summary: string;
  targets: BodyRegion[];
  targetLabel: string;
  color: string;
};

const contaminants: Contaminant[] = [
  {
    name: "Haloacetic Acids (HAA5)",
    level: "36.9 ppb",
    guideline: "0.1 ppb",
    ratio: 369,
    multiple: "369× EWG guideline",
    summary: "Disinfection byproducts associated with increased long-term cancer risk.",
    targets: ["whole"],
    targetLabel: "Long-term, body-wide risk",
    color: "#fb7185",
  },
  {
    name: "Total Trihalomethanes (TTHMs)",
    level: "36.8 ppb",
    guideline: "0.15 ppb",
    ratio: 245,
    multiple: "245× EWG guideline",
    summary: "EPA identifies potential liver, kidney, nervous-system and cancer risks above federal limits.",
    targets: ["brain", "liver", "kidneys"],
    targetLabel: "Brain, liver & kidneys",
    color: "#f97316",
  },
  {
    name: "Chloroform",
    level: "33.4 ppb",
    guideline: "0.4 ppb",
    ratio: 83,
    multiple: "83× EWG guideline",
    summary: "A chlorination byproduct; EWG's benchmark addresses cancer and developmental risk.",
    targets: ["reproductive"],
    targetLabel: "Development & reproduction",
    color: "#38bdf8",
  },
  {
    name: "Bromodichloromethane",
    level: "3.10 ppb",
    guideline: "0.06 ppb",
    ratio: 52,
    multiple: "52× EWG guideline",
    summary: "A trihalomethane evaluated for cancer and fetal-growth concerns.",
    targets: ["reproductive"],
    targetLabel: "Development & reproduction",
    color: "#a78bfa",
  },
  {
    name: "Hexavalent Chromium",
    level: "0.0313 ppb",
    guideline: "0.02 ppb",
    ratio: 1.6,
    multiple: "1.6× EWG guideline",
    summary: "A naturally occurring or industrial contaminant evaluated for cancer risk.",
    targets: ["whole"],
    targetLabel: "Long-term, body-wide risk",
    color: "#facc15",
  },
];

const regionLabels: Record<BodyRegion, string> = {
  whole: "Whole body",
  brain: "Brain & nervous system",
  liver: "Liver",
  kidneys: "Kidneys",
  reproductive: "Reproductive system",
};

function BodyMap({ active }: { active: Contaminant }) {
  const systemic = active.targets.includes("whole");
  const isActive = (region: BodyRegion) => active.targets.includes(region);
  const organStyle = (region: BodyRegion): CSSProperties => ({
    color: isActive(region) ? active.color : "#38516a",
    opacity: isActive(region) ? 1 : systemic ? 0.42 : 0.2,
    filter: isActive(region) ? `drop-shadow(0 0 9px ${active.color})` : "none",
  });

  return (
    <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-[21rem]">
      <div
        className="pointer-events-none absolute inset-[12%] rounded-full opacity-30 blur-3xl transition-colors duration-700 motion-reduce:transition-none"
        style={{ backgroundColor: active.color }}
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 300 560"
        className="relative w-full overflow-visible"
        role="img"
        aria-label={`${active.name}: highlighted body areas are ${active.targetLabel}`}
      >
        <defs>
          <linearGradient id="body-shell" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2b6688" stopOpacity="0.24" />
            <stop offset="1" stopColor="#132f48" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="systemic-fill">
            <stop offset="0" stopColor={active.color} stopOpacity="0.3" />
            <stop offset="0.72" stopColor={active.color} stopOpacity="0.09" />
            <stop offset="1" stopColor={active.color} stopOpacity="0" />
          </radialGradient>
          <filter id="active-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="water-body-shell">
          <circle cx="150" cy="56" r="38" fill="url(#body-shell)" stroke="#75b6da" strokeOpacity="0.75" strokeWidth="2" />
          <path d="M119 95c-22 6-35 20-39 45l-9 110c-2 24 10 37 27 37h13l-5 219c0 19 10 30 25 30 13 0 21-8 22-23l-2-167h-2l-2 167c1 15 9 23 22 23 15 0 25-11 25-30l-5-219h13c17 0 29-13 27-37l-9-110c-4-25-17-39-39-45-18-5-44-5-62 0Z" fill="url(#body-shell)" stroke="#75b6da" strokeOpacity="0.75" strokeWidth="2" />
          <path d="M81 131c-16 4-27 17-29 35l-8 118c-1 19 7 31 20 32 13 1 21-9 22-27l6-122" fill="none" stroke="#75b6da" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" />
          <path d="M219 131c16 4 27 17 29 35l8 118c1 19-7 31-20 32-13 1-21-9-22-27l-6-122" fill="none" stroke="#75b6da" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" />
        </g>

        {systemic && (
          <g className="water-systemic-pulse" aria-hidden="true">
            <ellipse cx="150" cy="270" rx="103" ry="235" fill="url(#systemic-fill)" filter="url(#active-glow)" />
            <ellipse cx="150" cy="270" rx="92" ry="218" fill="none" stroke={active.color} strokeOpacity="0.7" strokeWidth="2" strokeDasharray="5 9" />
          </g>
        )}

        <g className="water-organ transition-all duration-500 motion-reduce:transition-none" style={organStyle("brain")}>
          <path d="M128 50c-4-12 6-23 18-21 8-8 23-2 22 9 10 5 8 20-1 23-4 11-18 13-25 5-11 4-20-6-14-16Z" fill="currentColor" />
          <path d="M145 34c-2 7 2 13 7 16m12-10c-8 1-12 7-12 15" fill="none" stroke="#d9f2ff" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        <g className="water-organ transition-all duration-500 motion-reduce:transition-none" aria-hidden="true">
          <path d="M116 143c-20 8-28 28-20 58 7 26 26 29 39 9 7-11 9-30 7-54-8-13-17-17-26-13Z" fill="#38516a" opacity="0.22" />
          <path d="M184 143c20 8 28 28 20 58-7 26-26 29-39 9-7-11-9-30-7-54 8-13 17-17 26-13Z" fill="#38516a" opacity="0.22" />
          <path d="M150 145v80" stroke="#75b6da" strokeOpacity="0.28" strokeWidth="2" />
        </g>

        <g className="water-organ transition-all duration-500 motion-reduce:transition-none" style={organStyle("liver")}>
          <path d="M118 220c14-13 60-12 79 6-3 24-25 37-57 31-24-4-34-21-22-37Z" fill="currentColor" />
          <path d="M131 233c18 4 37 3 53-3" fill="none" stroke="#fff" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g className="water-organ transition-all duration-500 motion-reduce:transition-none" style={organStyle("kidneys")}>
          <path d="M115 259c-13-2-22 9-20 27 2 17 12 28 23 23 10-5 10-21 6-35-2-9-4-14-9-15Z" fill="currentColor" />
          <path d="M185 259c13-2 22 9 20 27-2 17-12 28-23 23-10-5-10-21-6-35 2-9 4-14 9-15Z" fill="currentColor" />
          <path d="M120 287c10 4 17 12 20 26m40-26c-10 4-17 12-20 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g className="water-organ transition-all duration-500 motion-reduce:transition-none" style={organStyle("reproductive")}>
          <path d="M127 321c0-13 10-23 23-23s23 10 23 23c0 18-12 32-23 42-11-10-23-24-23-42Z" fill="currentColor" />
          <path d="M135 318c9 8 21 8 30 0" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g className="water-body-scan" aria-hidden="true">
          <line x1="63" x2="237" y1="126" y2="126" stroke={active.color} strokeOpacity="0.45" strokeWidth="1.5" />
          <circle cx="63" cy="126" r="3" fill={active.color} />
          <circle cx="237" cy="126" r="3" fill={active.color} />
        </g>
      </svg>

      <div className="relative -mt-7 flex flex-wrap justify-center gap-2" aria-live="polite">
        {active.targets.map((region) => (
          <span
            key={region}
            className="rounded-full border px-3 py-1.5 font-body text-[10px] font-bold uppercase tracking-[0.12em] backdrop-blur"
            style={{ color: active.color, borderColor: `${active.color}66`, backgroundColor: `${active.color}14` }}
          >
            {regionLabels[region]}
          </span>
        ))}
      </div>
    </div>
  );
}

export function WaterHealth() {
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = contaminants[activeIndex];

  const selectWithKeyboard = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = contaminants.length - 1;
    let nextIndex = index;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = lastIndex;
    else return;

    event.preventDefault();
    setActiveIndex(nextIndex);
    buttonRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="relative overflow-hidden bg-[#071a2a] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(83,166,211,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(83,166,211,.18)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_22%,black_78%,transparent)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-36 top-40 h-96 w-96 rounded-full bg-specialist/20 blur-[110px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-28 bottom-24 h-80 w-80 rounded-full bg-sky/15 blur-[100px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-sky">Asheville Water Data</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            What’s Actually in <span className="bg-gradient-to-r from-sky to-cyan-300 bg-clip-text text-transparent">Asheville’s Water?</span>
          </h2>
          <p className="mt-5 font-body text-sm leading-7 text-white/65 sm:text-base">
            Asheville’s 2025 city report met federal standards. Select a contaminant to compare EWG’s separate health benchmark and see the body systems referenced by public-health sources.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:gap-12 xl:gap-16">
          <div className="order-2 space-y-3 lg:order-1" role="radiogroup" aria-label="Select a water contaminant">
            <p className="mb-5 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              <span className="hidden lg:inline">Hover, focus, or select a row</span>
              <span className="lg:hidden">Tap a contaminant to update the body map</span>
            </p>

            {contaminants.map((item, index) => {
              const selected = index === activeIndex;
              const relativeWidth = Math.max(10, (item.ratio / contaminants[0].ratio) * 100);

              return (
                <button
                  key={item.name}
                  ref={(node) => { buttonRefs.current[index] = node; }}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  tabIndex={selected ? 0 : -1}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => selectWithKeyboard(event, index)}
                  className={`group relative w-full overflow-hidden rounded-2xl border p-4 text-left outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 focus-visible:ring-offset-[#071a2a] motion-reduce:transition-none sm:p-5 ${selected ? "-translate-y-0.5 border-white/30 bg-white/[0.09] shadow-[0_18px_55px_rgba(0,0,0,0.22)] motion-reduce:translate-y-0" : "border-white/10 bg-[#0c2234]/75 hover:border-white/25 hover:bg-white/[0.055]"}`}
                >
                  <span
                    className={`absolute inset-y-0 left-0 w-1 transition-opacity duration-300 ${selected ? "opacity-100" : "opacity-0"}`}
                    style={{ backgroundColor: item.color, boxShadow: `0 0 24px ${item.color}` }}
                    aria-hidden="true"
                  />

                  <span className="flex flex-wrap items-center justify-between gap-3">
                    <span className="flex items-center gap-3 font-heading text-sm font-semibold text-white sm:text-[15px]">
                      <span
                        className={`h-2 w-2 rounded-full transition-transform duration-300 ${selected ? "scale-125" : "scale-75 opacity-50"}`}
                        style={{ backgroundColor: item.color, boxShadow: selected ? `0 0 12px ${item.color}` : "none" }}
                        aria-hidden="true"
                      />
                      {item.name}
                    </span>
                    <span className="rounded-full px-2.5 py-1 font-body text-[10px] font-bold" style={{ color: item.color, backgroundColor: `${item.color}16` }}>
                      {item.multiple}
                    </span>
                  </span>

                  <span className="mt-4 block h-1 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                    <span
                      className="block h-full rounded-full transition-[width,filter] duration-700 motion-reduce:transition-none"
                      style={{ width: `${relativeWidth}%`, backgroundColor: item.color, filter: selected ? `drop-shadow(0 0 5px ${item.color})` : "none" }}
                    />
                  </span>

                  <span className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-body text-[11px] text-white/50 sm:text-xs">
                    <span>Utility average: <strong className="text-white/85">{item.level}</strong></span>
                    <span>EWG guideline: <strong className="text-white/85">{item.guideline}</strong></span>
                  </span>

                  <span className={`block overflow-hidden font-body text-xs leading-6 text-white/60 transition-all duration-300 motion-reduce:transition-none ${selected ? "mt-2 max-h-24 opacity-100" : "mt-0 max-h-0 opacity-0 lg:group-hover:mt-2 lg:group-hover:max-h-24 lg:group-hover:opacity-100"}`}>
                    {item.summary}
                  </span>
                </button>
              );
            })}
          </div>

          <aside className="order-1 lg:sticky lg:top-28 lg:order-2" aria-label="Interactive body map">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.075] to-white/[0.025] px-4 pb-7 pt-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:px-7">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">Highlighted systems</p>
                  <p className="mt-1 font-heading text-sm font-semibold text-white">{active.targetLabel}</p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: active.color, boxShadow: `0 0 14px ${active.color}` }} />
                </span>
              </div>
              <div className="pt-3">
                <BodyMap active={active} />
              </div>
              <p className="mt-5 text-center font-body text-[10px] leading-5 text-white/35">
                Educational visualization of the health endpoints referenced in the cited guidance—not a diagnosis.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/12 bg-white/[0.045] p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-semibold">Your tap can differ from the utility average.</p>
            <p className="mt-1 font-body text-xs leading-6 text-white/55">Home plumbing, location and sampling date all matter. A personalized report gives you context without the scare tactics.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a href="https://www.ewg.org/tapwater/system.php?pws=NC0111010" target="_blank" rel="noreferrer" className="rounded-full border border-white/25 px-4 py-2.5 font-body text-xs font-semibold text-white transition hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky">View EWG Data</a>
            <Link to="/contact" className="rounded-full bg-sky px-4 py-2.5 font-body text-xs font-semibold text-navy transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky">Get a Free Consultation</Link>
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-4xl text-center font-body text-[10px] leading-5 text-white/35">
          EWG data shown covers 2015–2024 and uses non-regulatory health guidelines. Health descriptions summarize EWG and EPA sources and are not a diagnosis or statement that Asheville water causes illness.
        </p>
      </div>
    </section>
  );
}
