import { useEffect, useState } from "react";
import { scrollToPlans } from "./ui";

/** Mobile-only CTA bar: shows after the hero, hides while the plans section is on screen. */
export default function StickyBar() {
  const [pastHero, setPastHero] = useState(false);
  const [plansVisible, setPlansVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const plans = document.getElementById("plans");
    const ios: IntersectionObserver[] = [];
    if (hero) {
      const io = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting && e.boundingClientRect.top < 0), { threshold: 0 });
      io.observe(hero);
      ios.push(io);
    }
    if (plans) {
      const io = new IntersectionObserver(([e]) => setPlansVisible(e.isIntersecting), { threshold: 0 });
      io.observe(plans);
      ios.push(io);
    }
    return () => ios.forEach((io) => io.disconnect());
  }, []);

  const show = pastHero && !plansVisible;
  return (
    <div
      className={`sticky-bar fixed inset-x-0 bottom-0 z-40 border-t border-cream/10 bg-forest px-4 py-3 text-cream shadow-[0_-6px_20px_rgba(59,47,37,0.2)] md:hidden ${show ? "show" : ""}`}
      aria-hidden={!show}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-[14px] font-semibold leading-tight">Know exactly what to plant — every day of the year</p>
        <a href="#plans" onClick={scrollToPlans} tabIndex={show ? 0 : -1} className="btn-small shrink-0 px-5 py-2.5 text-[15px]">
          Get it →
        </a>
      </div>
    </div>
  );
}
