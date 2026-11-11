// Prerenders the built site to static HTML.
//
// Runs after the client build: builds src/entry-server.tsx for Node, renders
// the app with it and writes the HTML into dist/index.html, which the client
// then hydrates. No browser is involved.
import { readFile, rm, writeFile } from "node:fs/promises"
import { join, resolve } from "node:path"
import process from "node:process"
import { pathToFileURL } from "node:url"

import { build } from "vite-plus"

const DIST = resolve("dist")
const SSR_OUT = resolve("dist-ssr")
const ROOT_EMPTY = '<div id="root"></div>'

await build({
  logLevel: "warn",
  build: {
    ssr: "src/entry-server.tsx",
    outDir: SSR_OUT,
    emptyOutDir: true,
  },
})

try {
  const { render } = await import(
    pathToFileURL(join(SSR_OUT, "entry-server.js")).href
  )
  const indexPath = join(DIST, "index.html")
  const template = await readFile(indexPath, "utf8")
  if (!template.includes(ROOT_EMPTY)) {
    throw new Error(`${indexPath} has no empty ${ROOT_EMPTY} to fill`)
  }
  const html = await render()
  await writeFile(
    indexPath,
    template.replace(ROOT_EMPTY, () => `<div id="root">${html}</div>`),
  )
  process.stdout.write(
    `Prerendered ${indexPath} (${html.length} characters of HTML)\n`,
  )
} finally {
  await rm(SSR_OUT, { recursive: true, force: true })
}
