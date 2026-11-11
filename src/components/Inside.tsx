import { useEffect, useState } from "react";
import { H2, InView, Section, prefersReducedMotion, useInView } from "./ui";

function Counter({ to, start }: { to: number; start: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion()) {
      setN(to);
      return;
    }
    const dur = 1600;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to]);
  return <span>{n}</span>;
}

const stats: [number, string][] = [
  [365, "days planned"],
  [12, "monthly pages"],
  [36, "crops"],
  [5, "reference pages"],
];

const items: [string, string][] = [
  ["📅", "12 monthly planting pages"],
  ["🗓️", "365-day planting grid"],
  ["🥕", "36 crops"],
  ["📖", "5 reference pages"],
  ["✏️", "Printable checklist"],
];

const steps = ["Find your zone", "Open this month", "Do what today says."];

export default function Inside() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  return (
    <Section bg="linen" labelledBy="inside-title">
      <div className="mx-auto max-w-3xl text-center">
        <H2 id="inside-title">Everything Your Garden Needs. One Place.</H2>
      </div>

      <div ref={ref} className="mt-10 grid grid-cols-2 gap-3 rounded-[20px] bg-forest p-5 text-cream shadow-warm sm:gap-4 md:grid-cols-4 md:p-7">
        {stats.map(([n, label]) => (
          <div key={label} className="text-center">
            <div className="font-serif text-5xl font-extrabold text-gold sm:text-6xl" aria-label={`${n}`}>
              <Counter to={n} start={inView} />
            </div>
            <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-cream/90">{label}</div>
          </div>
        ))}
      </div>

      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {items.map(([icon, label], i) => (
          <li
            key={label}
            className={`card flex items-center gap-3 px-4 py-3 font-semibold text-forest ${i === items.length - 1 ? "col-span-2 justify-center sm:col-span-1 sm:justify-start" : ""}`}
          >
            <span aria-hidden="true" className="text-xl">{icon}</span>
            <span className="leading-snug">{label}</span>
          </li>
        ))}
      </ul>

      <InView className="relative mx-auto mt-14 max-w-4xl" threshold={0.3}>
        <svg aria-hidden="true" className="dotgrow-h absolute left-0 top-[36px] hidden h-4 w-full md:block" viewBox="0 0 1000 16" preserveAspectRatio="none">
          <path d="M170 8 H 830" stroke="#C8643B" strokeWidth="3" strokeDasharray="2 12" fill="none" strokeLinecap="round" />
        </svg>
        <svg aria-hidden="true" className="dotgrow-v absolute left-[35px] top-10 h-[calc(100%-80px)] w-4 md:hidden" viewBox="0 0 16 1000" preserveAspectRatio="none">
          <path d="M8 0 V 1000" stroke="#C8643B" strokeWidth="3" strokeDasharray="2 14" fill="none" strokeLinecap="round" />
        </svg>
        <ol className="relative grid gap-6 md:grid-cols-3">
          {steps.map((t, i) => (
            <li key={t} className="flex items-center gap-4 md:flex-col md:text-center">
              <span className="relative z-[1] flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-full border-2 border-dashed border-terracotta/50 bg-linen font-serif text-5xl font-extrabold text-terracotta md:h-[88px] md:w-[88px] md:text-6xl">
                {i + 1}
              </span>
              <strong className="font-serif text-xl text-forest md:mt-1">{t}</strong>
            </li>
          ))}
        </ol>
      </InView>

      <p className="mt-8 text-center text-lg font-semibold text-forest">One minute a day. No research. No guessing.</p>
    </Section>
  );
}
