import { Eyebrow, H2, Section } from "./ui";
import SeedDepth from "./SeedDepth";

const tabs = [
  { text: <>The seed packet says <em>"sow after danger of frost."</em> Great. <strong>When is that, exactly?</strong></>, rot: "-2deg", bg: "#FFF6D9" },
  { text: <>The YouTube video was filmed in Zone 9 — and you're in Zone 5.</>, rot: "1.6deg", bg: "#F3E9F0" },
  { text: <>One blog says start tomatoes in February. Another says April. The Facebook group says both.</>, rot: "-1.2deg", bg: "#E7F0E1" },
  { text: <>And that Pinterest pin you saved? You'll never find it again.</>, rot: "2.2deg", bg: "#FBE7DC" },
];

export default function Shift() {
  return (
    <Section bg="linen" labelledBy="shift-title">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>WHY "JUST LOOK IT UP" KEEPS FAILING YOU</Eyebrow>
        <H2 id="shift-title">You Don't Need More Information. You Need a Plan.</H2>
        <p className="mt-5 text-lg">Be honest — how many tabs do you have open right now about gardening?</p>
      </div>

      <ul className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
        {tabs.map((t, i) => (
          <li key={i} className="postit relative rounded-[12px] px-5 pb-5 pt-9 shadow-warm" style={{ background: t.bg, transform: `rotate(${t.rot})` }}>
            <span aria-hidden="true" className="absolute left-0 right-0 top-0 flex h-7 items-center gap-1.5 rounded-t-[12px] bg-soil/[0.07] px-3">
              <i className="h-2.5 w-2.5 rounded-full bg-tomato/60" />
              <i className="h-2.5 w-2.5 rounded-full bg-gold/70" />
              <i className="h-2.5 w-2.5 rounded-full bg-sage/80" />
            </span>
            <span className="text-[1.02rem]">{t.text}</span>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-12 max-w-3xl space-y-4 text-lg">
        <p><strong className="text-forest">The internet isn't short on gardening advice. It's drowning in it.</strong> Scattered, contradictory, and almost never made for <em>your</em> zone.</p>
        <p>So you piece it together. You guess. You plant "around now." And the season decides for you.</p>
        <p>Here's what actually changes everything: <strong className="text-forest">one plan, built for your zone, that tells you what to do on every single day of the year.</strong> No tabs. No searching. No second-guessing.</p>
        <p>Want proof that the small details matter? Here's one most gardeners never hear:</p>
      </div>

      <div className="mx-auto mt-8 grid max-w-3xl items-center gap-6 rounded-[18px] border-2 border-gold bg-cream p-6 shadow-warm sm:grid-cols-[1fr_200px] sm:p-8">
        <p className="text-lg">
          <span aria-hidden="true">💡 </span>
          <em>Bury a seed two to three times its own width — no deeper. Planting too deep is the #1 reason seeds never come up.</em>
        </p>
        <SeedDepth className="mx-auto h-44 w-52 sm:h-auto sm:w-full" />
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-lg">
        One rule. One page. One less failed row. <strong className="text-forest">Now imagine having the right answer for every crop, every month — all in one place.</strong>
      </p>
    </Section>
  );
}
