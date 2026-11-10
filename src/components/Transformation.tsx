import { useEffect, useRef, useState, type ReactNode } from "react";
import { CheckIcon, Eyebrow, H2, InView, Section, prefersReducedMotion } from "./ui";

const Icon = {
  seed: (
    <svg viewBox="0 0 40 40" className="h-9 w-9"><ellipse cx="20" cy="22" rx="9" ry="6" fill="#E8C98E" stroke="#F7F2E7" strokeWidth="1.5" transform="rotate(-25 20 22)" /></svg>
  ),
  sprout: (
    <svg viewBox="0 0 40 40" className="h-9 w-9"><path d="M20 34V18" stroke="#B9CFAB" strokeWidth="3" strokeLinecap="round" /><path d="M20 20C18 12 12 10 7 11c1 6 6 9 13 9Z" fill="#7C9A6E" /><path d="M20 18c2-7 8-9 13-8-1 6-6 9-13 8Z" fill="#B9CFAB" /></svg>
  ),
  radish: (
    <svg viewBox="0 0 40 40" className="h-9 w-9"><path d="M20 14c-7 0-10 6-8 12 2 5 5 8 8 11 3-3 6-6 8-11 2-6-1-12-8-12Z" fill="#D2556A" /><path d="M20 14c-2-5-6-8-10-8 1 5 4 7 10 8Zm0 0c2-5 6-8 10-8-1 5-4 7-10 8Z" fill="#7C9A6E" /></svg>
  ),
  basket: (
    <svg viewBox="0 0 40 40" className="h-9 w-9"><path d="M10 18c0-6 4-10 10-10s10 4 10 10" fill="none" stroke="#D9A441" strokeWidth="2.5" /><circle cx="15" cy="16" r="4" fill="#C8643B" /><circle cx="23" cy="15" r="4" fill="#7C9A6E" /><circle cx="27" cy="18" r="3" fill="#D9A441" /><path d="M6 18h28l-4 16H10Z" fill="#B88A4E" /><path d="M9 23h22M10 28h20" stroke="#8A6A4F" strokeWidth="1.5" /></svg>
  ),
};

const steps: { label: string; text: ReactNode; icon: ReactNode }[] = [
  { label: "Today.", text: <>You open the calendar to this month — and for the first time, you know <em>exactly</em> what to do. No tabs. No doubt.</>, icon: Icon.seed },
  { label: "This week.", text: <>The right seeds go in on the right day, at the right depth. Not "around now." Not three weeks late.</>, icon: Icon.sprout },
  { label: "In about a month.", text: <>Your first radishes are ready to pull — the fastest crop in the book, and your first proof that this works.</>, icon: Icon.radish },
  { label: "This season.", text: <>Lettuce, herbs, peas, tomatoes, one after the other. You walk out with a bowl and come back with dinner.</>, icon: Icon.basket },
];

const wins: ReactNode[] = [
  <><strong>You eat what you grow</strong> — fresher, cleaner, and picked the same day it hits your plate.</>,
  <><strong>You spend less at the grocery store</strong> — and it adds up month after month.</>,
  <><strong>You stop wasting money</strong> on seeds that never sprout and seedlings that die young.</>,
  <><strong>You actually relax in your garden</strong> — because you already know what to do.</>,
  <><strong>You feel proud</strong> every time a neighbor stops and asks, <em>"How do you grow all that?"</em></>,
];

/** Animation 6 — a sun travels down the timeline with scroll; each step's icon pops in as it passes. */
function Timeline() {
  const wrap = useRef<HTMLDivElement | null>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion()) {
      setP(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      setP(Math.max(0, Math.min(1, (anchor - r.top) / r.height)));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrap} className="relative">
      {/* track */}
      <div aria-hidden="true" className="absolute bottom-6 left-[27px] top-6 w-[3px] rounded bg-cream/20" />
      <div aria-hidden="true" className="absolute left-[27px] top-6 w-[3px] rounded bg-gold" style={{ height: `calc((100% - 48px) * ${p})` }} />
      {/* sun */}
      <div
        aria-hidden="true"
        className="absolute left-[12px] z-[2] h-[34px] w-[34px]"
        style={{ top: `calc(24px + (100% - 48px) * ${p} - 17px)` }}
      >
        <svg viewBox="0 0 40 40" className="h-full w-full drop-shadow-[0_0_10px_rgba(217,164,65,0.7)]">
          <g stroke="#D9A441" strokeWidth="2.5" strokeLinecap="round">
            {Array.from({ length: 8 }, (_, i) => (
              <line key={i} x1="20" y1="3" x2="20" y2="8" transform={`rotate(${i * 45} 20 20)`} />
            ))}
          </g>
          <circle cx="20" cy="20" r="8.5" fill="#D9A441" />
        </svg>
      </div>

      <ol className="space-y-7">
        {steps.map((s, i) => {
          const active = p >= i / steps.length + 0.02 || p >= 0.999;
          return (
            <li key={s.label} className={`tl-step flex gap-5 ${active ? "active" : "opacity-60"}`}>
              <span className="relative z-[1] flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border-2 border-cream/25 bg-[#36553C]">
                <span className="tl-icon" aria-hidden="true">{s.icon}</span>
              </span>
              <p className="pt-1 text-lg text-cream/95">
                <strong className="font-serif text-xl text-gold">{s.label}</strong> {s.text}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function Transformation() {
  return (
    <Section bg="forest" labelledBy="transf-title">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow dark>HERE'S WHAT CHANGES — STARTING TODAY</Eyebrow>
        <H2 id="transf-title" dark>Your First Harvest Is Closer Than You Think.</H2>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <div>
          <Timeline />
          <p className="ml-[78px] mt-7 text-lg text-cream/95">
            <strong className="font-serif text-xl text-gold">And when others' beds sit empty?</strong> Yours are already sown for the next harvest.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-3xl">
        <p className="text-lg text-cream">This is what happens when you stop guessing:</p>
        <InView as="ul" className="mt-5 space-y-3.5">
          {wins.map((w, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-cream/95">
              <CheckIcon index={i} color="#B9CFAB" className="mt-1 h-6 w-6" />
              <span>{w}</span>
            </li>
          ))}
        </InView>
      </div>

      <p className="mx-auto mt-14 max-w-3xl text-center font-serif text-2xl font-bold leading-snug text-gold sm:text-[2rem]">
        The difference between a garden that disappoints and one that feeds your family isn't luck, land or a green thumb.
        <br />
        It's knowing what to do — and when.
      </p>
    </Section>
  );
}
