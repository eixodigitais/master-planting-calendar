import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export { IMAGES } from "./images";

/** Used at build time to prerender the page into dist/index.html (see scripts/prerender.mjs). */
export function render(): string {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
