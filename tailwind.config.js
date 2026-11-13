/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F2E7",
        linen: "#EFE7D6",
        forest: "#2F4A34",
        sage: "#7C9A6E",
        terracotta: "#C8643B",
        clay: "#A84F2C",
        gold: "#D9A441",
        soil: "#3B2F25",
        bark: "#6B5B4B",
        tomato: "#B6452C",
        leaf: "#4F7A3A",
      },
      fontFamily: {
        serif: ['"Fraunces Variable"', 'Fraunces', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        warm: "0 4px 18px rgba(59,47,37,0.08)",
        warmlg: "0 12px 32px rgba(59,47,37,0.14)",
      },
      borderRadius: {
        xl2: "20px",
      },
    },
  },
  plugins: [],
};
