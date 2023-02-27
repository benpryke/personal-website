import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.scss";

const container = document.getElementById("root");

if (container!.hasChildNodes()) {
  hydrateRoot(container!, <App />);
} else {
  createRoot(container!).render(<App />);
}

// TODO this is likely not useful right now, but may become so
serviceWorker.unregister();
