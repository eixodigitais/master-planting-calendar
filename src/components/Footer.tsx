export default function Footer() {
  return (
    <footer className="bg-soil px-4 pb-24 pt-10 text-center text-cream/70 md:pb-10">
      <p className="text-sm">
        © Master Planting Calendar · <a href="#privacy" className="underline-offset-2 hover:underline">Privacy Policy</a> ·{" "}
        <a href="#terms" className="underline-offset-2 hover:underline">Terms of Use</a> ·{" "}
        <a href="#contact" className="underline-offset-2 hover:underline">Contact</a>
      </p>
      <p className="mx-auto mt-3 max-w-2xl text-xs italic">
        This site is not affiliated with Facebook, Pinterest or the USDA. Results vary with local conditions.
      </p>
    </footer>
  );
}
