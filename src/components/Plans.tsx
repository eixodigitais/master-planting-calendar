import {
  CHECKOUT_BASIC, CHECKOUT_COMPLETE, PRICE_BASIC, PRICE_BASIC_ANCHOR,
  PRICE_COMPLETE, PRICE_COMPLETE_ANCHOR, PRICE_DIFFERENCE,
} from "../config";
import { H2, Section } from "./ui";
import Shield from "./Shield";
import { trackCheckout, withUtm } from "../utm";

const num = (p: string) => parseFloat(p.replace(/[^0-9.]/g, "")) || 0;
const fmt = (n: number) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`;
const savings = num(PRICE_COMPLETE_ANCHOR) - num(PRICE_COMPLETE);
const savingsPct = Math.round((savings / num(PRICE_COMPLETE_ANCHOR)) * 100);

// Value stack shown in the Complete Plan card (product anchoring).
const stack: [string, string][] = [
  ["📅 Master Planting Calendar", PRICE_BASIC_ANCHOR],
  ["🎁 Your Zone, Pre-Set", "$17"],
  ["🎁 Seed Starting Made Simple", "$14"],
  ["🎁 Raised Bed Blueprints", "$17"],
  ["🎁 Garden Rescue Guide", "$12"],
  ["🎁 From Garden to Table", "$14"],
];

function Locks() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-bark">
      <span className="flex h-11 w-14 items-center justify-center rounded-[10px] border border-forest/20 bg-cream">
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2.5" fill="#2F4A34" /><path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="#2F4A34" strokeWidth="2.2" /><circle cx="12" cy="15.5" r="1.6" fill="#F7F2E7" /></svg>
        <span className="sr-only">Secure checkout</span>
      </span>
      <span className="flex h-11 w-14 items-center justify-center rounded-[10px] border border-forest/20 bg-cream">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2.5" fill="none" stroke="#2F4A34" strokeWidth="2" /><path d="M2 9.5h20" stroke="#2F4A34" strokeWidth="2.5" /><path d="M5.5 15h5" stroke="#2F4A34" strokeWidth="2" strokeLinecap="round" /></svg>
        <span className="sr-only">All major cards</span>
      </span>
      <span className="flex h-11 w-14 items-center justify-center rounded-[10px] border border-forest/20 bg-cream">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5Z" fill="#2F4A34" /><path d="m8.5 12 2.4 2.4 4.6-4.8" fill="none" stroke="#F7F2E7" strokeWidth="2" strokeLinecap="round" /></svg>
        <span className="sr-only">SSL encrypted</span>
      </span>
    </div>
  );
}

export default function Plans() {
  return (
    <Section id="plans" bg="linen" labelledBy="plans-title" className="scroll-mt-14">
      <div className="mx-auto max-w-3xl text-center">
        <H2 id="plans-title">You've already paid more for guessing than this calendar costs.</H2>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl items-center gap-8 md:grid-cols-[0.85fr_1.15fr]">
        <article className="relative order-2 rounded-[22px] border-[3px] border-terracotta bg-[#FBF8F1] p-6 pt-8 text-center shadow-warmlg sm:p-8">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-4 py-1.5 text-[13px] font-extrabold tracking-wider text-soil shadow-warm">
            ⭐ MOST POPULAR
          </span>
          <h3 className="font-serif text-2xl font-extrabold text-forest sm:text-[1.7rem]">⭐ COMPLETE — MOST POPULAR</h3>
          <p className="mt-2 text-bark">Calendar + 5 bonuses · Lifetime access + updates</p>

          <ul className="mt-5 divide-y divide-dashed divide-soil/15 rounded-[14px] border border-soil/10 bg-cream px-4 text-left">
            {stack.map(([name, value]) => (
              <li key={name} className="flex items-baseline justify-between gap-3 py-2.5">
                <span className="text-[0.97rem] text-soil">{name}</span>
                <s className="shrink-0 font-semibold text-bark">{value}</s>
              </li>
            ))}
            <li className="flex items-baseline justify-between gap-3 py-3">
              <strong className="text-forest">Total value</strong>
              <s className="shrink-0 text-lg font-extrabold text-tomato">{PRICE_COMPLETE_ANCHOR}</s>
            </li>
          </ul>

          <p className="mt-5 text-bark">Get everything today for just</p>
          <p className="font-serif text-6xl font-extrabold leading-none text-forest">{PRICE_COMPLETE}</p>
          <p className="mt-3 inline-block rounded-full bg-leaf/10 px-4 py-1.5 text-[15px] font-extrabold text-leaf">
            You save {fmt(savings)} — {savingsPct}% off
          </p>
          <a href={withUtm(CHECKOUT_COMPLETE)} onClick={(e) => trackCheckout(e, "Complete Plan", PRICE_COMPLETE)} className="btn-cta pulse mt-6 w-full">YES, I WANT THE COMPLETE PLAN →</a>
        </article>

        <article className="order-1 rounded-[20px] bg-[#FBF8F1] p-6 text-center shadow-warm sm:p-8">
          <h3 className="font-serif text-2xl font-extrabold text-forest">🌱 BASIC</h3>
          <p className="mt-2 text-bark">The calendar · Lifetime access + updates</p>
          <p className="mt-5 flex items-baseline justify-center gap-3">
            <s className="text-xl text-bark">{PRICE_BASIC_ANCHOR}</s>
            <strong className="font-serif text-4xl font-extrabold text-forest">{PRICE_BASIC}</strong>
          </p>
          <a href={withUtm(CHECKOUT_BASIC)} onClick={(e) => trackCheckout(e, "Basic Plan", PRICE_BASIC)} className="btn-outline mt-6 w-full">GET BASIC →</a>
        </article>
      </div>

      <div className="mx-auto mt-8 max-w-3xl space-y-3 text-center text-lg">
        <p>
          <span aria-hidden="true">👉 </span>
          <strong>Just {PRICE_DIFFERENCE} more for $74 in bonuses.</strong>
        </p>
        <p>
          <span aria-hidden="true">⏳ </span>
          Next year's garden is decided this winter — the best seeds sell out by February.
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-2xl items-center gap-4 rounded-[18px] bg-cream p-4 shadow-warm sm:gap-5 sm:p-5">
        <div className="h-[92px] w-[80px] shrink-0">
          <Shield />
        </div>
        <p className="text-lg">
          <span aria-hidden="true">🛡️ </span>
          <strong className="text-forest">7-day guarantee:</strong> love it or get every cent back.
        </p>
      </div>

      <Locks />
    </Section>
  );
}
