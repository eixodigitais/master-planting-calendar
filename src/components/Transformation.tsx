import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { CheckIcon, H2, InView, Section, prefersReducedMotion } from "./ui";

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
};

const steps: { label: string; text: string; icon: ReactNode }[] = [
  { label: "Today", text: "you know what to do.", icon: Icon.seed },
  { label: "This week", text: "the right seeds go in.", icon: Icon.sprout },
  { label: "In about a month", text: "your first radishes are ready.", icon: Icon.radish },
];

const wins = ["Eat what you grow", "Spend less at the store", "Stop wasting seeds", "Feel proud of your garden"];

/** Animation 6 — a sun travels along the timeline as you scroll (horizontal on desktop, vertical on mobile). */
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
      const vh = window.innerHeight;
      // starts when the timeline enters the lower part of the screen, completes when it reaches ~45% from the top
      const prog = (vh * 0.85 - r.top) / (vh * 0.4);
      setP(Math.max(0, Math.min(1, prog)));
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

  const vars = { "--p": p } as CSSProperties;
  return (
    <div ref={wrap} className="relative mx-auto max-w-4xl" style={vars}>
      {/* track — vertical (mobile) / horizontal (desktop) */}
      <div aria-hidden="true" className="absolute bottom-6 left-[27px] top-6 w-[3px] rounded bg-cream/20 md:bottom-auto md:left-[16.66%] md:right-[16.66%] md:top-[28px] md:h-[3px] md:w-auto" />
      <div aria-hidden="true" className="absolute left-[27px] top-6 h-[calc((100%-48px)*var(--p))] w-[3px] rounded bg-gold md:left-[16.66%] md:top-[28px] md:h-[3px] md:w-[calc(66.68%*var(--p))]" />
      {/* sun */}
      <div
        aria-hidden="true"
        className="absolute left-[12px] top-[calc(24px+(100%-48px)*var(--p)-17px)] z-[2] h-[34px] w-[34px] md:left-[calc(16.66%+66.68%*var(--p)-17px)] md:top-[12px]"
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

      <ol className="space-y-7 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
        {steps.map((s, i) => {
          const active = p >= (i / (steps.length - 1)) * 0.97;
          return (
            <li key={s.label} className={`tl-step flex items-center gap-5 md:flex-col md:items-center md:gap-4 md:text-center ${active ? "active" : "opacity-60"}`}>
              <span className="relative z-[1] flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border-2 border-cream/25 bg-[#36553C]">
                <span className="tl-icon" aria-hidden="true">{s.icon}</span>
              </span>
              <p className="text-lg text-cream/95">
                <strong className="font-serif text-xl text-gold">{s.label}</strong> — {s.text}
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
        <H2 id="transf-title" dark>Your First Harvest Is Closer Than You Think.</H2>
      </div>

      <div className="mt-12">
        <Timeline />
      </div>

      <InView as="ul" className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
        {wins.map((w, i) => (
          <li key={w} className="flex items-center gap-3 rounded-[14px] bg-cream/[0.06] px-4 py-3 text-lg font-semibold text-cream">
            <CheckIcon index={i} color="#B9CFAB" className="h-6 w-6" />
            <span>{w}</span>
          </li>
        ))}
      </InView>

      <p className="mx-auto mt-12 max-w-3xl text-center font-serif text-2xl font-bold leading-snug text-gold sm:text-[2rem]">
        It's not luck or a green thumb. It's knowing what to do — and when.
      </p>
    </Section>
  );
}
