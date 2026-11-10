import type { ReactNode } from "react";
import {
  CHECKOUT_BASIC, CHECKOUT_COMPLETE, PRICE_BASIC, PRICE_BASIC_ANCHOR,
  PRICE_COMPLETE, PRICE_COMPLETE_ANCHOR, PRICE_DIFFERENCE,
} from "../config";
import { CheckIcon, Eyebrow, H2, InView, Section } from "./ui";

const basic: ReactNode[] = [
  "Master Planting Calendar — 365 days of planting, set to your zone",
  "12 month-by-month planting pages",
  "36 crops with soil, depth and harvest windows",
  "5 quick-answer reference pages",
  "Printable gardener's checklist",
  "Lifetime access + all future updates",
];

const complete: ReactNode[] = [
  <strong>Everything in the Basic Plan</strong>,
  <>🎁 Bonus 1: Your Zone, Pre-Set <s className="text-bark">$17</s></>,
  <>🎁 Bonus 2: Seed Starting Made Simple <s className="text-bark">$14</s></>,
  <>🎁 Bonus 3: Raised Bed Blueprints <s className="text-bark">$17</s></>,
  <>🎁 Bonus 4: Garden Rescue Guide <s className="text-bark">$12</s></>,
  <>🎁 Bonus 5: From Garden to Table <s className="text-bark">$14</s></>,
  "Lifetime access + all future updates",
];

function List({ items }: { items: ReactNode[] }) {
  return (
    <InView as="ul" className="space-y-2.5" threshold={0.3}>
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <CheckIcon index={i} className="mt-0.5 h-5 w-5" />
          <span>{it}</span>
        </li>
      ))}
    </InView>
  );
}

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
        <Eyebrow>CHOOSE YOUR PLAN</Eyebrow>
        <H2 id="plans-title">Stop Losing Seasons. Start Harvesting Every Month.</H2>
        <p className="mt-5 text-lg">
          One packet of seeds that never sprouts. One tray of seedlings lost to a late frost. One fall harvest that never happened. <strong className="text-forest">You've already paid more for guessing than this calendar costs.</strong>
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* COMPLETE — first on mobile */}
        <article className="relative order-1 rounded-[22px] border-[3px] border-terracotta bg-[#FBF8F1] p-5 shadow-warmlg sm:p-7 lg:order-2">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-4 py-1.5 text-[13px] font-extrabold tracking-wider text-soil shadow-warm">
            ⭐ MOST POPULAR
          </span>
          <h3 className="mt-4 font-serif text-2xl font-extrabold text-forest sm:text-[1.7rem]">⭐ COMPLETE PLAN — MOST POPULAR</h3>
          <p className="mt-1 italic text-bark">Everything you need, from first seed to full pantry.</p>
          <div className="mt-5"><List items={complete} /></div>
          <div className="mt-6 text-center">
            <p className="text-bark">Total value: <s>{PRICE_COMPLETE_ANCHOR}</s></p>
            <p className="font-serif text-4xl font-extrabold text-forest">Today: {PRICE_COMPLETE}</p>
          </div>
          <a href={CHECKOUT_COMPLETE} className="btn-cta pulse mt-5 w-full">YES, I WANT THE COMPLETE PLAN →</a>
        </article>

        {/* BASIC */}
        <article className="order-3 rounded-[20px] bg-[#FBF8F1] p-5 shadow-warm sm:p-7 lg:order-1">
          <h3 className="font-serif text-2xl font-extrabold text-forest">🌱 BASIC PLAN</h3>
          <p className="mt-1 italic text-bark">The calendar, and nothing else.</p>
          <div className="mt-5"><List items={basic} /></div>
          <div className="mt-6 text-center">
            <p className="text-bark"><s>{PRICE_BASIC_ANCHOR}</s></p>
            <p className="font-serif text-3xl font-extrabold text-forest">Today: {PRICE_BASIC}</p>
          </div>
          <a href={CHECKOUT_BASIC} className="btn-outline mt-5 w-full">GET THE BASIC PLAN →</a>
        </article>

        <p className="order-2 rounded-[16px] border-2 border-dashed border-terracotta/60 bg-cream px-5 py-4 text-center text-lg lg:order-3 lg:col-span-2">
          <span aria-hidden="true">👉 </span>
          <strong>For just {PRICE_DIFFERENCE} more, you get all 5 bonuses — worth $74.</strong>
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-3xl rounded-[18px] bg-cream p-6 text-lg shadow-warm">
        <span aria-hidden="true">⏳ </span>
        <strong className="text-forest">Why now?</strong> Next year's garden is decided this winter. The most popular seed varieties sell out by February — and the gardeners who plan early are the ones who harvest first.
      </div>

      <p className="mt-6 text-center text-sm text-bark">
        Delivered instantly to your inbox · Print it or use it on your phone · 7-day money-back guarantee
      </p>
      <Locks />
    </Section>
  );
}
