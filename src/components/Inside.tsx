import { useEffect, useState, type ReactNode } from "react";
import { Eyebrow, H2, Section, prefersReducedMotion, useInView } from "./ui";

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

const cards: { icon: string; title: string; body: ReactNode }[] = [
  { icon: "📅", title: "12 Month-by-Month Planting Pages", body: "From deep winter to the last fall harvest. Each month tells you what to start, what to transplant, what to pick — and the jobs that keep your garden ahead of the season." },
  { icon: "🗓️", title: "The 365-Day Planting Grid", body: "Every single day of the year, decided for you. Glance at today's date and you know exactly what's possible: sow indoors, sow outdoors, transplant or harvest." },
  { icon: "⭕", title: "Key Dates That Protect Your Harvest", body: "The opening day of every planting window, circled. The dates that decide whether you harvest a basket — or a handful." },
  { icon: "🥕", title: "36 Crops — From Seed to Plate", body: "Tomatoes, peppers, lettuce, carrots, zucchini, garlic, potatoes, kale, beans, basil and more. Each with its ideal soil, sowing depth and harvest window." },
  {
    icon: "📖",
    title: "5 Quick-Answer Reference Pages",
    body: (
      <ul className="mt-1 space-y-1.5">
        <li>→ <strong>How deep to sow</strong> every seed (the #1 reason seeds fail)</li>
        <li>→ <strong>What grows well side by side</strong> — and what to keep apart</li>
        <li>→ <strong>How often to water</strong> each crop, without drowning it or drying it out</li>
        <li>→ <strong>Know your soil</strong> — plus the simple jar test that tells you what you're working with</li>
        <li>→ <strong>Pick it at its best</strong> — the pro tricks for bigger, longer harvests</li>
      </ul>
    ),
  },
  { icon: "✏️", title: "The Printable Gardener's Checklist", body: "Every essential task, season by season. Print it, pin it up, tick it off." },
  { icon: "🌎", title: "Set to Your Climate", body: <>Adjusts to USDA Zones 3–10 in one minute — so every date in the book is right for <em>your</em> backyard.</> },
];

export default function Inside() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  return (
    <Section bg="linen" labelledBy="inside-title">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>EVERYTHING YOUR GARDEN NEEDS. ONE PLACE.</Eyebrow>
        <H2 id="inside-title">Inside the Master Planting Calendar</H2>
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

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <article key={c.title} className={`card card-lift p-6 ${i === 4 ? "md:row-span-2" : ""}`}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/20 text-2xl" aria-hidden="true">{c.icon}</div>
            <h3 className="mt-4 font-serif text-xl font-bold text-forest">{c.title}</h3>
            <div className="mt-2 text-bark">{c.body}</div>
          </article>
        ))}
      </div>
    </Section>
  );
}
