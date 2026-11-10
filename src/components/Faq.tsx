import { useState, type ReactNode } from "react";
import { Eyebrow, H2, Section } from "./ui";

const faqs: [string, ReactNode][] = [
  ["\"Can't I just find all this online for free?\"", <>You can find <em>pieces</em> of it — scattered across seed packets, videos and blogs that contradict each other and were rarely made for your zone. What you can't find is one plan that tells you what to do on every day of the year, for 36 crops, set to your climate. That's what you're getting.</>],
  ["\"Will it work where I live?\"", "If you garden anywhere in USDA Zones 3–10 — which covers nearly every backyard in the continental U.S. — yes. You set it to your zone in one minute, and every date adjusts."],
  ["\"I don't know my USDA zone. Is that a problem?\"", "Not at all. Type your ZIP code into the official USDA zone map and you'll have it in ten seconds."],
  ["\"I'm a total beginner. Is this too advanced for me?\"", "It was made for you. No jargon, no theory — just open the month and do what today says. If you can read a calendar, you can use this one."],
  ["\"I've been gardening for years. Will I still get something out of it?\"", "Yes. Experienced gardeners use it to stop running everything from memory, plan succession sowings and finally fill the gaps that cost them a fall harvest."],
  ["\"Is this a physical book?\"", "It's a digital planner delivered instantly to your inbox — no shipping, no waiting. Print the whole book or just the pages you need, or keep it on your phone and tablet in the garden."],
  ["\"Are the measurements in inches and Fahrenheit?\"", "Yes. Sowing depths, spacing and temperatures are all in the units you already use."],
  ["\"I only have raised beds or containers. Does it still work?\"", "Absolutely. The timing is the same whether you grow in the ground, in raised beds or in pots. The Complete Plan even includes ready-made raised bed layouts."],
  ["\"I don't have much time. Is this going to be more work?\"", "The opposite. It takes about a minute a day to check what to do — and it saves you the hours you'd spend searching, guessing and redoing failed rows."],
  ["\"What crops does it cover?\"", "36 of the most-grown vegetables and herbs in home gardens: tomatoes, peppers, lettuce, carrots, zucchini, beans, peas, potatoes, garlic, kale, basil and many more."],
  ["\"How long will I have access?\"", "Forever. One payment, lifetime access — plus every future update, at no extra cost."],
  ["\"When do I get the bonuses?\"", "With the Complete Plan, all 5 bonuses arrive in the same email as the calendar, right after your purchase."],
  ["\"What if I don't like it?\"", "Then you don't pay. Try it for 7 days, and if it's not for you, one email gets you a full refund."],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section bg="linen" labelledBy="faq-title">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>STILL ON THE FENCE?</Eyebrow>
        <H2 id="faq-title">Your Questions, Answered.</H2>
      </div>
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
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
      <p className="mx-auto mt-8 max-w-3xl text-center text-sm italic text-bark">
        This calendar is a planning guide. Results vary with local weather, soil and growing conditions.
      </p>
    </Section>
  );
}
