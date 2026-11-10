import { Eyebrow, H2, InView, Section, XIcon } from "./ui";

const pains = [
  <>The tomatoes you started "just a little late" never caught up — and gave you a sad handful of fruit in September.</>,
  <>The carrot seeds never came up. <em>(They were buried too deep. Nobody told you.)</em></>,
  <>One surprise frost in April wiped out a month of seedlings overnight.</>,
  <>Your beds sat empty in August — and the fall harvest you could have had simply never happened.</>,
];

export default function Pain() {
  return (
    <Section bg="cream" labelledBy="pain-title">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <Eyebrow>THE TRUTH NOBODY TELLS YOU</Eyebrow>
          <H2 id="pain-title">Most Gardens Fail in the Calendar, Not in the Soil.</H2>
          <p className="mt-5 text-lg">You did everything "right." Good soil. Good seeds. Watered religiously. And still…</p>

          <InView as="ul" className="mt-6 space-y-4">
            {pains.map((p, i) => (
              <li key={i} className="flex items-start gap-3 rounded-[14px] border border-tomato/15 bg-[#FBF3EC] p-4">
                <XIcon index={i} className="mt-0.5 h-6 w-6" />
                <span>{p}</span>
              </li>
            ))}
          </InView>

          <p className="mt-6 font-serif text-xl font-bold text-forest">Sound familiar?</p>
        </div>

        <div className="lg:self-center">
          <p className="text-lg">
            <strong className="text-forest">Here's the brutal part: none of that was bad luck.</strong>
          </p>
          <p className="mt-4 text-lg">
            A seed sown three weeks late never catches up. A bed left empty in August is a harvest missed in October. Again and again, it comes down to one thing — <strong className="text-forest">timing.</strong>
          </p>
          <p className="mt-4 text-lg">
            And every season you get the timing wrong, you pay for it. In seed packets. In seedlings. In bags of soil and hours on your knees. And in the groceries you <em>still</em> have to buy, because the garden didn't deliver.
          </p>
        </div>
      </div>

      <p className="mx-auto mt-14 max-w-3xl text-center font-serif text-[1.7rem] font-bold leading-tight text-forest sm:text-4xl">
        It's not your fault. You just never had the right calendar.
      </p>
    </Section>
  );
}
