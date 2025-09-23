import "./styles/index.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

const appEl = document.getElementById("app") as HTMLDivElement | null;

if (appEl) {
  const root = createRoot(appEl);
  root.render(<App />);
}
