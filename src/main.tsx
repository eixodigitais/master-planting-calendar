import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource/nunito-sans/latin-400.css";
import "@fontsource/nunito-sans/latin-600.css";
import "@fontsource/nunito-sans/latin-700.css";
import "@fontsource/nunito-sans/latin-800.css";
import "./index.css";

const rootEl = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// The page is prerendered at build time (scripts/prerender.mjs): hydrate it.
if (rootEl.hasChildNodes()) ReactDOM.hydrateRoot(rootEl, app);
else ReactDOM.createRoot(rootEl).render(app);
