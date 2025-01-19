import "./styles/index.css";

import React, { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

const container = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (container!.hasChildNodes()) {
  hydrateRoot(container!, app);
} else {
  createRoot(container!).render(app);
}

// TODO this is likely not useful right now, but may become so
serviceWorker.unregister();
