import { useState, type ReactNode } from "react";
import { Section } from "./ui";

const faqs: [string, ReactNode][] = [
  ["\"Can't I find this online for free?\"", "Only in scattered, contradictory pieces. Not one plan for every day, set to your zone."],
  ["\"I'm a beginner. Is it too advanced?\"", "It was made for you. Open the month, do what today says."],
  ["\"Is it a physical book?\"", "A digital planner delivered instantly. Print it or use it on your phone."],
  ["\"Inches and Fahrenheit?\"", "Yes, all in U.S. units."],
  ["\"Raised beds or containers?\"", "Same timing. It works for all of them."],
  ["\"What if I don't like it?\"", "7-day full refund. One email."],
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section bg="cream">
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map(([q, a], i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="rounded-[16px] bg-[#FBF8F1] shadow-warm">
              <h3>
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-serif text-lg font-bold text-forest sm:text-xl"
                >
                  <span>{q}</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className={`faq-icon h-7 w-7 shrink-0 ${isOpen ? "open" : ""}`}>
                    <circle cx="12" cy="12" r="11" fill={isOpen ? "#C8643B" : "#7C9A6E"} opacity=".18" />
                    <path d="M7 12h10" stroke="#2F4A34" strokeWidth="2.4" strokeLinecap="round" />
                    <path className="v" d="M12 7v10" stroke="#2F4A34" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                </button>
              </h3>
              <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={`faq-panel ${isOpen ? "open" : ""}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-[1.02rem] text-bark">{a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
