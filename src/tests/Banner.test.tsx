import "@testing-library/jest-dom";

import pretty from "pretty";
import React, { act } from "react";

import { waitFor } from "@testing-library/dom";
import { render } from "@testing-library/react";

import { Banner, BannerProps, FADE_IN_THRESHOLD } from "../components/Banner";
import { setScrollY, setWindowSize } from "./utils";

const windowSize = 900;
const bannerHeight = 100;
const props: BannerProps = {
  className: "cls",
  fadeIn: true,
  style: { color: "red" },
  children: <div style={{ height: bannerHeight }}></div>,
};
const originalIntersectionObserver = window.IntersectionObserver;

describe("Banner", () => {
  let fadeInCallback: IntersectionObserverCallback | undefined;
  const triggerFadeIn = () => {
    if (fadeInCallback) {
      fadeInCallback(
        [{ isIntersecting: true } as unknown as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    }
  };

  beforeAll(() => {
    act(() => setWindowSize(windowSize, windowSize));
  });

  beforeEach(() => {
    window.IntersectionObserver = jest
      .fn()
      .mockImplementation((callback, options) => {
        fadeInCallback = callback;
        return {
          observe: () => null,
          unobserve: () => null,
          disconnect: () => null,
        };
      });
  });

  afterAll(() => {
    window.IntersectionObserver = originalIntersectionObserver;
  });

  it("renders without crashing", () => {
    render(<Banner {...props} />);
  });

  it("should match the snapshot", () => {
    const { container } = render(<Banner {...props} />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it("initially renders faded-in when visible and fadeIn is true", async () => {
    const { container } = await waitFor(() => render(<Banner {...props} />));
    const banner = container.firstChild;
    act(() => triggerFadeIn());
    expect(banner).toHaveClass("faded-in");
    expect(banner).not.toHaveClass("faded-out");
  });

  it("initially renders faded-out when invisible and fadeIn is true", async () => {
    const { container } = await waitFor(() => render(<Banner {...props} />));
    const banner = container.firstChild;
    expect(banner).not.toHaveClass("faded-in");
    expect(banner).toHaveClass("faded-out");
  });

  it("fades in when fadeIn is true and the document is scrolled to the fade threshold", async () => {
    const { container } = await waitFor(() => render(<Banner {...props} />));
    const banner = container.firstChild;

    // Scroll, but not far enough to trigger the fade-in
    act(() => setScrollY(1));
    expect(banner).not.toHaveClass("faded-in");
    expect(banner).toHaveClass("faded-out");

    // Scroll far enough to trigger the fade-in
    act(() => setScrollY(bannerHeight * FADE_IN_THRESHOLD));
    act(() => triggerFadeIn());
    expect(banner).toHaveClass("faded-in");
    expect(banner).not.toHaveClass("faded-out");
  });

  it("does not fade in when fadeIn is false and the document is scrolled to the fade threshold", async () => {
    const { container } = await waitFor(() =>
      render(<Banner {...props} fadeIn={false} />)
    );
    const banner = container.firstChild;

    // Scroll, but not far enough to trigger the fade-in
    act(() => setScrollY(1));
    expect(banner).not.toHaveClass("faded-in");
    expect(banner).not.toHaveClass("faded-out");

    // Scroll far enough to trigger the fade-in
    act(() => setScrollY(bannerHeight * FADE_IN_THRESHOLD));
    expect(banner).not.toHaveClass("faded-in");
    expect(banner).not.toHaveClass("faded-out");
  });
});
