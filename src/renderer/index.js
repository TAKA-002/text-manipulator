import "./styles/index.css";
import "./styles/styles.css";

import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/app";

const root = createRoot(document.getElementById("app"));
root.render(<App />);
