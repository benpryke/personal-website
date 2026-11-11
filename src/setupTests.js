import { vi } from "vite-plus/test"
import "@testing-library/jest-dom/vitest"

// jsdom's CSS parser doesn't support nesting. It recovers, but reports every
// nested rule, so drop those reports and forward any other jsdom error
const { virtualConsole } = globalThis.jsdom
virtualConsole.removeAllListeners("jsdomError")
virtualConsole.on("jsdomError", (error) => {
  if (error.type !== "css-parsing") {
    console.error(error)
  }
})

// IntersectionObserver isn't available in test environment
beforeEach(() => {
  // A class implementation, since Vitest mocks called with `new` must construct
  window.IntersectionObserver = vi.fn(
    class {
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
    },
  )
})
