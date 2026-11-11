// Server entry for build-time prerendering: scripts/prerender.js builds this
// for Node and writes its HTML into dist/index.html, which index.tsx hydrates
import { StrictMode } from "react"
import { prerender } from "react-dom/static"

import { App } from "./App"

/** Renders the whole app to an HTML string, once all of it is ready */
export const render = async (): Promise<string> => {
  const { prelude } = await prerender(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  return new Response(prelude).text()
}
