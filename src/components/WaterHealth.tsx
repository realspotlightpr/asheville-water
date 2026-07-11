import { useState } from "react";
import { Link } from "react-router-dom";

type BodyTarget = "whole" | "liver" | "kidneys" | "reproductive";

const contaminants: {
  name: string;
  level: string;
  guideline: string;
  multiple: string;
  summary: string;
  target: BodyTarget;
  targetLabel: string;
  color: string;
}[] = [
  {
    name: "Haloacetic Acids (HAA5)",
    level: "36.9 ppb",
    guideline: "0.1 ppb",
    multiple: "369× EWG guideline",
    summary: "Disinfection byproducts associated with increased long-term cancer risk.",
    target: "whole",
    targetLabel: "Long-term, body-wide risk",
    color: "#fb7185",
  },
  {
    name: "Total Trihalomethanes (TTHMs)",
    level: "36.8 ppb",
    guideline: "0.15 ppb",
    multiple: "245× EWG guideline",
    summary: "EPA identifies potential liver, kidney, nervous-system and cancer risks above federal limits.",
    target: "liver",
    targetLabel: "Liver, kidneys & nervous system",
    color: "#f97316",
  },
  {
    name: "Chloroform",
    level: "33.4 ppb",
    guideline: "0.4 ppb",
    multiple: "83× EWG guideline",
    summary: "A chlorination byproduct; EWG's benchmark addresses cancer and developmental risk.",
    target: "reproductive",
    targetLabel: "Development & reproduction",
    color: "#38bdf8",
  },
  {
    name: "Bromodichloromethane",
    level: "3.10 ppb",
    guideline: "0.06 ppb",
    multiple: "52× EWG guideline",
    summary: "A trihalomethane evaluated for cancer and fetal-growth concerns.",
    target: "reproductive",
    targetLabel: "Development & reproduction",
    color: "#a78bfa",
  },
  {
    name: "Hexavalent Chromium",
    level: "0.0313 ppb",
    guideline: "0.02 ppb",
    multiple: "1.6× EWG guideline",
    summary: "A naturally occurring or industrial contaminant evaluated for cancer risk.",
    target: "whole",
    targetLabel: "Long-term, body-wide risk",
    color: "#facc15",
  },
];

function BodyMap({ active }: { active: BodyTarget }) {
  const on = (target: BodyTarget) => active === target || active === "whole";

  return (
    <div className="relative mx-auto w-full max-w-64">
      <svg viewBox="0 0 240 520" className="w-full" role="img" aria-label={`Body areas highlighted: ${contaminants.find((item) => item.target === active)?.targetLabel ?? "whole body"}`}>
        <g fill="rgba(56,151,210,0.06)" stroke="rgba(148,203,238,0.7)" strokeWidth="2">
          <circle cx="120" cy="47" r="35" />
          <rect x="80" y="92" width="80" height="190" rx="38" />
          <rect x="46" y="110" width="31" height="190" rx="16" />
          <rect x="163" y="110" width="31" height="190" rx="16" />
          <rect x="84" y="270" width="34" height="225" rx="17" />
          <rect x="122" y="270" width="34" height="225" rx="17" />
        </g>

        <g className="transition-all duration-300">
          <ellipse cx="120" cy="45" rx="22" ry="17" fill={on("whole") ? "#a78bfa" : "#263b59"} opacity={on("whole") ? 0.85 : 0.35} />
          <path d="M87 135c18-17 36-10 33 22-4 30-28 38-36 9-4-13-2-23 3-31z" fill={on("whole") ? "#fb7185" : "#263b59"} opacity={on("whole") ? 0.75 : 0.3} />
          <path d="M153 135c-18-17-36-10-33 22 4 30 28 38 36 9 4-13 2-23-3-31z" fill={on("whole") ? "#fb7185" : "#263b59"} opacity={on("whole") ? 0.75 : 0.3} />
          <path d="M119 166c-17-19-42-8-41 14 2 24 24 39 41 52 17-13 39-28 41-52 1-22-24-33-41-14z" fill={on("whole") ? "#f87171" : "#263b59"} opacity={on("whole") ? 0.8 : 0.3} />
          <path d="M88 219c14-17 50-17 66 2-4 25-20 38-47 32-19-4-27-17-19-34z" fill={on("liver") ? "#f97316" : "#263b59"} opacity={on("liver") ? 0.9 : 0.3} />
          <ellipse cx="91" cy="264" rx="12" ry="23" fill={on("kidneys") || on("liver") ? "#38bdf8" : "#263b59"} opacity={on("kidneys") || on("liver") ? 0.9 : 0.3} />
          <ellipse cx="149" cy="264" rx="12" ry="23" fill={on("kidneys") || on("liver") ? "#38bdf8" : "#263b59"} opacity={on("kidneys") || on("liver") ? 0.9 : 0.3} />
          <ellipse cx="120" cy="301" rx="25" ry="18" fill={on("reproductive") ? "#a78bfa" : "#263b59"} opacity={on("reproductive") ? 0.9 : 0.3} />
        </g>
      </svg>

      <div className="absolute inset-x-0 bottom-0 rounded-xl border border-white/10 bg-navy/80 px-3 py-2 text-center font-body text-xs text-white/75 backdrop-blur">
        {contaminants.find((item) => item.target === active)?.targetLabel}
      </div>
    </div>
  );
}

export function WaterHealth() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = contaminants[activeIndex];

  return (
    <section className="overflow-hidden bg-[#081a2a] py-24 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sky">Asheville Water Data</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">
            What’s Actually in <span className="bg-gradient-to-r from-sky to-cyan-300 bg-clip-text text-transparent">Asheville’s Water?</span>
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-white/65">
            Asheville’s 2025 city report met federal standards. EWG applies separate, more stringent health benchmarks to historical utility data. Hover or focus a contaminant to explore the health endpoint used in those guidelines.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
          <div className="space-y-3">
            {contaminants.map((item, index) => {
              const selected = index === activeIndex;
              return (
                <button
                  key={item.name}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={selected}
                  className={`w-full rounded-xl border p-4 text-left transition duration-300 ${selected ? "border-sky/60 bg-white/[0.08] shadow-[0_0_30px_rgba(56,151,210,0.12)]" : "border-white/10 bg-white/[0.025] hover:border-white/25"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-heading text-sm font-semibold text-white">{item.name}</span>
                    <span className="rounded-full px-2.5 py-1 font-body text-[10px] font-bold" style={{ color: item.color, backgroundColor: `${item.color}18` }}>
                      {item.multiple}
                    </span>
                  </div>
                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: selected ? "100%" : "38%", backgroundColor: item.color }} />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-body text-[11px] text-white/55">
                    <span>Utility average: <strong className="text-white/80">{item.level}</strong></span>
                    <span>EWG guideline: <strong className="text-white/80">{item.guideline}</strong></span>
                  </div>
                  <p className={`mt-2 font-body text-xs leading-relaxed text-white/55 transition ${selected ? "opacity-100" : "lg:opacity-60"}`}>{item.summary}</p>
                </button>
              );
            })}
          </div>

          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-center font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">Hover a row to highlight</p>
            <BodyMap active={active.target} />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/15 bg-white/[0.04] p-5 sm:flex-row">
          <div>
            <p className="font-heading text-sm font-semibold">Your tap can differ from the utility average.</p>
            <p className="mt-1 font-body text-xs text-white/55">Home plumbing, location and sampling date all matter. A personalized report gives you context without the scare tactics.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a href="https://www.ewg.org/tapwater/system.php?pws=NC0111010" target="_blank" rel="noreferrer" className="rounded-full border border-white/25 px-4 py-2 font-body text-xs font-semibold text-white transition hover:bg-white hover:text-navy">View EWG Data</a>
            <Link to="/contact" className="rounded-full bg-sky px-4 py-2 font-body text-xs font-semibold text-navy transition hover:brightness-110">Get My Water Report</Link>
          </div>
        </div>

        <p className="mt-4 text-center font-body text-[10px] leading-relaxed text-white/35">
          EWG data shown covers 2015–2024 and uses non-regulatory health guidelines. Health descriptions summarize EWG and EPA sources and are not a diagnosis or statement that Asheville water causes illness.
        </p>
      </div>
    </section>
  );
}
