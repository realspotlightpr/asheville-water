import { useState } from "react";
import { faqs } from "../data/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-mist py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
            Common Questions
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="rounded-xl bg-white shadow-sm">
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base font-semibold text-navy">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-xl text-specialist transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 font-body text-sm text-ink/70">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
