import { vi } from "vitest";

// Filter CSS parse errors from test output
const consoleErrorFn = console.error;
console.error = (...data) => {
  if (
    typeof data[0]?.toString === "function" &&
    data[0].toString().includes("Error: Could not parse CSS stylesheet")
  ) {
    return;
  }

  consoleErrorFn(...data);
};

// IntersectionObserver isn't available in test environment
beforeEach(() => {
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});
