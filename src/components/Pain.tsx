import { H2, InView, Section, XIcon } from "./ui";

const pains = [
  <>Tomatoes sown "a little late" that never caught up</>,
  <>Seeds that never came up — buried too deep</>,
  <>A late frost that wiped out a month of seedlings</>,
  <>Empty beds in August — and no fall harvest</>,
];

export default function Pain() {
  return (
    <Section bg="cream" labelledBy="pain-title">
      <div className="mx-auto max-w-3xl">
        <H2 id="pain-title" className="text-center">Most Gardens Fail in the Calendar, Not in the Soil.</H2>

        <InView as="ul" className="mt-8 grid gap-3 sm:grid-cols-2">
          {pains.map((p, i) => (
            <li key={i} className="flex items-start gap-3 rounded-[14px] border border-tomato/15 bg-[#FBF3EC] p-4">
              <XIcon index={i} className="mt-0.5 h-6 w-6" />
              <span>{p}</span>
            </li>
          ))}
        </InView>

        <p className="mt-8 text-center text-lg">
          None of that was bad luck. It was <strong className="text-forest">timing</strong>.
        </p>
        <p className="mt-4 text-center text-lg">
          And seed packets, YouTube and blogs that contradict each other won't fix it.{" "}
          <strong className="text-forest">You don't need more information. You need one plan — built for your zone.</strong>
        </p>
      </div>

      <p className="mx-auto mt-12 max-w-3xl text-center font-serif text-[1.7rem] font-bold leading-tight text-forest sm:text-4xl">
        It's not your fault. You just never had the right calendar.
      </p>
    </Section>
  );
}
