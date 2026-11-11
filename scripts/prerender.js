// Prerenders the built site to static HTML with react-snap.
//
// react-snap drives an installed Chrome rather than puppeteer's own Chromium,
// whose download can't be unpacked on current Node versions.
import { existsSync } from "node:fs"
import process from "node:process"

import { run } from "react-snap"

/** Where Chrome is installed by default on each platform */
const CHROME_PATHS = {
  win32: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  linux: "/usr/bin/google-chrome",
}

/** CI runners can't use Chrome's sandbox or a large shared memory area */
const CI_ARGS = [
  "--no-sandbox",
  "--disable-setuid-sandbox",
  "--disable-dev-shm-usage",
]

const chrome = process.env.CHROME_PATH ?? CHROME_PATHS[process.platform]
if (!(chrome && existsSync(chrome))) {
  throw new Error(
    `Chrome not found at ${chrome}. Set CHROME_PATH to a Chrome executable.`,
  )
}

await run({
  source: "dist",
  puppeteerExecutablePath: chrome,
  puppeteerArgs: process.env.CI ? CI_ARGS : [],
})
